# 注意事項

提示：在寫完作業之後看效果最佳，沒寫作業前請不要看

## 資訊安全的意識

這一週的重點就只有這個，沒了。

但光是這一個重點就可以把一大堆人打趴了。

資訊安全意識代表的是你在寫 code 的時候會去注意自己的 code 有沒有一些會被攻擊的地方，而這之中最最最常見的就是在處理與使用者相關輸入的時候，都要特別小心。

只要你能有這個意識，就能防止大多數的攻擊；但如果沒有的話...呵呵。

本週最常見的三個錯誤：

1. 沒有把所有用到 SQL 的地方都改成 prepared statement
2. 忘了防止使用者暱稱的 XSS
3. 沒有做好權限管理，可以刪除與編輯任意文章或是仿冒身份發文

以下直接來看幾個 case：

``` php
<?php 
    require_once('./conn.php'); 
    $id = $_GET['id'];
    $sql = "DELETE FROM  comment where id = ".$id;
    if ($conn->query($sql)) {
        header("Location: ./index.php");
    } else {
        die("failed.");
    }
?>
```

問題是什麼？

第一個問題是沒有判斷權限，這邊只接收一個 GET 的參數然後就把留言給刪了。今天儘管我沒有登入，我還是可以刪除留言。

改一下之後變成這樣：

``` php
<?php 
    require_once('./conn.php'); 
    require_once('./check_login.php');
    if (!$username) {
        die('not login');
    }
    $id = $_GET['id'];
    $sql = "DELETE FROM  comment where id = ".$id;
    if ($conn->query($sql)) {
        header("Location: ./index.php");
    } else {
        die("failed.");
    }
?>
```

好，這樣沒有登入的話就沒辦法刪除留言了。

夠了嗎？當然不夠，雖然有檢查登入但沒有檢查作者，意思就是我可以刪除任何人的留言，因為你後端沒做檢查。所以後端要記得檢查「這個留言是不是他的」，不然攻擊者就可以刪除任何人的留言了。

這邊最簡單的方法就是直接改 SQL query：

``` php
<?php 
    require_once('./conn.php'); 
    require_once('./check_login.php');
    if (!$username) {
        die('not login');
    }
    $id = $_GET['id'];
    $sql = "DELETE FROM  comment where id = ".$id." AND username='" + $username + "'";
    if ($conn->query($sql)) {
        header("Location: ./index.php");
    } else {
        die("failed.");
    }
?>
```

要同時符合文章 id 跟作者，就能確保只有作者本人可以刪到文章。

這樣夠了嗎？還不夠，你忘記 SQL Injection 了嗎？我 username 如果傳一個 `' or '1'='1` 之類的，SQL query 就變成 `DELETE FROM comment where id = xx AND username='' or '1'='1'`，就一樣可以刪除任何文章了。

所以要把上面的 query 換成 prepared statement，這樣才沒問題。

接著來看第二個 case，cookie 裡面存的是這一週作業要大家實作的 certificate：

``` php
<?php 
    include_once('./conn.php');
    if(isset($_COOKIE["user"]) && !empty($_COOKIE["user"])){
        $token = $_COOKIE["user"];
        $sql= 
        "SELECT u.nickname ,c.id, c.username 
        FROM certificate as c
        JOIN users as u
        ON c.username = u.username 
        where c.id = '$token'";
        $result = $conn->query($sql);
        if(!$result || $result->num_rows <=0){
            $user = null;
        }else {
            $row = $result->fetch_assoc();
            $user = $row['nickname'];
        }
    }else{
        $user = null;
    }

    function isLogin() {
        if (isset($_COOKIE["user"]) && !empty($_COOKIE["user"])) {
            return true;
        } else{
            return false;
        }
    }
?>
```

第一個問題是什麼？

跟上面一樣，SQL Injection，我如果改 Cookie 的值，就可以去操縱裡面那一個 query，就可以用任何人的身份登入了。

第二個問題跟資安無關，是邏輯問題。上面是用 cookie 存不存在來判斷是否登入，但這是錯的。如果我 cookie 隨便放個 123，我也叫登入嗎？當然不是，登入代表的是我要有一個合法的帳號才叫登入。

所以正確的檢驗方法是拿 cookie 裡面的值去 certificates 裡面查詢，有查到資料才代表我真的有登入。不然通行證機制都白做了。

在這邊提醒大家兩件事：

1. 永遠記得權限驗證，做任何操作時都要想一下有沒有人可以繞過權限驗證（或你根本忘記做權限驗證）
2. 永遠使用 prepared statement。你可能會說：「可是有些地方沒有參數，或有些地方參數是我自己能控制的」，對，這些地方可能不會有 SQL Injection 的風險，但第一如果你之後改那段 code 呢？第二，你怎麼知道那邊不會有？

上面舉的那些範例也可能是自認為沒有 SQL Injection 的風險，但這才是最致命的地方。不要為了偷懶用回比較方便的 query，只要有用到 SQL 的地方，全部都用 prepared statement 才是正解。

補充：

XSS 的部分除了留言內容，使用者暱稱也要防啊！不確定的話你就每個輸出的地方都 escape 就好，千萬不要自作聰明！

另外，這邊有 SQL Injection 的真實範例：https://www.youtube.com/watch?v=ABi1jUbDzPg&feature=youtu.be

## 什麼是 Session？

記得這一週的第二個作業嗎？通行證機制。這個就是 session。

你產生的通行證 ID 就是 session id，你在 users_certificate 這個 table 放的資料就是 session data。

那 $_SESSION 又是什麼？跟 session 有什麼關係？

在回答這個之前，先問你一個問題：

> cookie 跟 $_COOKIE 有什麼關係？

Cookie 是瀏覽器存資料的地方，它是一個 browser 跟 server 交換資料的機制。而 $_COOKIE 是 PHP 要用來操作 cookie 時的語法。

session 也是一樣的。

Session 就是通行證機制，可以在 server 端存放資料，在 client 端只透過 session id 來驗證身份；而 $_SESSION 是 PHP 用來操作 session 時的語法。

session 只是個機制，就像是投票那樣。但它本身不會規定投票要怎麼投。你可以每個人發紙條寫要投誰；你可以線上電子投票；你可以在想投的箱子放一個球，這些都叫做投票。

session 也是一樣的，這個機制也能有很多不同的實作方式，你可以像我們一樣自己用 users_certificate 這個 table 來實作，也可以用 PHP 內建的 $_SESSION 來實作，這些都叫做 session，只是實作方法不同。

更多細節可以參考 Session 與 Cookie 三部曲：

1. [白話 Session 與 Cookie：從經營雜貨店開始](https://github.com/aszx87410/blog/issues/45)
2. [淺談 Session 與 Cookie：一起來讀 RFC](https://github.com/aszx87410/blog/issues/45)
3. [深入 Session 與 Cookie：Express、PHP 與 Rails 的實作](https://github.com/aszx87410/blog/issues/46)




