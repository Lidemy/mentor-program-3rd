# 注意事項

提示：在寫完作業之後看效果最佳，沒寫作業前請不要看

## 雜湊跟加密的區別

雜湊不可逆，加密可逆，叫做解密。

雜湊為什麼不可逆？你這樣想就很簡單了：因為無限的輸出對應到有限的輸入，就代表一定會有很多個 input 對應到同一個 output（就叫做碰撞），那你從同一個 output 怎麼可能知道 input 是哪一個？這是個很簡單的邏輯問題。

這樣大家就知道為什麼存密碼要用雜湊了，就不會有人知道你密碼原來是什麼。

但雜湊是不是絕對安全？當然不是，有一種最古老但也最有用的方法，叫做暴力破解。

今天你行李箱的數字鎖忘記密碼了，怎麼辦？有些人會 999 種組合都試過，雖然費時但有效。

破解雜湊也是類似的，假如我把 0000~9999 這一萬種組合都事先跑過一遍雜湊並把結果存入資料庫，我就有著這中間的對應關係。當我看見某個雜湊過後的值，就可以來這邊查表，如果有的話我就知道 input 是什麼了。

所以雜湊唯一能破解的就是這樣暴力破解而已，事先存好結果然後查表。若是六位數字的密碼，大小寫加數字就是 62 種組合，62^6 就是五百億種組合了。要是先把五百億種組合跑出來才能查到結果。

而且，為了增加密碼的長度，有一種方法很可愛，叫做「加鹽」（salting），會幫每一個 user 產生一個不同的鹽巴，例如說十六位的英數混合好了：`ab48fogir38e9fjl`，然後我的密碼是 abc123，那存在資料庫裡的密碼就是 `hash(ab48fogir38e9fjlabc123)`，這樣就需要先算好 22 位數的組合才有可能回推出原文是什麼。

難嗎？難。

## 來自 client 端的資料都不可信

大家千萬不要忘記一件事情了，千萬不要忘記什麼是我們可以自己改的，什麼不行。你要站在攻擊者的角度去想什麼東西可以被偽造。

GET 跟 POST 的參數值可不可以被偽造？當然可以！我想傳什麼就傳什麼，本來就沒有限制。

Cookie 的內容可不可以被偽造？當然可以，這也是我想帶什麼就帶什麼。

資料庫的值可不可以被偽造？可以，但如果被偽造的話就代表你資料庫已經被駭客拿下了，所以不用擔心這個問題。

所以為什麼第九週會員系統那樣不 ok？因為我們把會員 id 帶在 cookie，今天只要攻擊者自己改變 cookie 內容（可不可以？當然可以），就可以換一個身份登入，所以是有安全漏洞的。

這也是為什麼這一週要換成通行證機制，比起會員 id，我們隨機產生的通行證 id 是沒辦法被猜到的。那攻擊者可不可以竄改通行證 id？當然可以，他可以自己改變 cookie 的值，可是他要改成什麼？

通行證 id 是隨機產生的，他怎麼可能隨便猜就猜得到一組正確的？

所以在這情景下你不用去考慮什麼「如果他用別人的通行證，不就也可以利用別人的身份登入嗎？」，對啊，當然，但這個機制本來就只認證不認人，用別人的通行證本來就應該用別人的身份登入。

今天的重點是攻擊者沒辦法「拿到別人的通行證」或者是猜到，所以這個機制還是可靠的。

有些人作業把通行證的產生規則弄固定了，就是多此一舉。例如說通行證就是 `md5(username)`，一但這個規則被猜到了，我不就也可以產生出別人的通行證嗎？那這機制就沒用了。

所以我才強調要隨機產生，隨機就代表猜不到（精確一點的說法是很難猜啦，例如說機率是兩億分之一，就可以想成猜不到）

然後，這個通行證機制就叫做 Session。

Session 就是把資料存在 server，然後靠著一組 session id 傳到 cookie 存起來，以後都透過這個 session id 認人。所以 session 就是通行證機制，session 就是通行證本身，就是你的專屬會員卡。

## 用最適合的東西

如果有 a 可以用，就沒必要寫一個元素加上 onclick listener，然後再使用 window.location 去導向。a 這個元素本來就是要讓你導向的，何必多此一舉？

還有一個同學寫了一個滿有趣的機制，例如說編輯留言好了，到編輯留言頁面時他先把留言 id 存在 cookie 裡面，編輯完按下 submit 的時候導到 handle_edit.php，後端直接從 cookie 把留言 id 拿出來。

這樣帶資料當然也可以，但不是好的做法。

那什麼是好的做法？就是直接用 GET 或是 POST，把留言 id 放在表單裡面一起帶過去就好，沒必要直接存在 cookie。

## Early return

大家之前在寫 code 的時候，應該有看過一個 eslint 的錯誤：

``` js
function test(a) {
  if (a === '123') {
    return true
  } else {
    return false
  }
}
```

會給你一個 [Disallow return before else (no-else-return)](https://eslint.org/docs/rules/no-else-return) 的錯誤。

為什麼呢？因為上面的程式碼你仔細想一下，會發現 else 完全沒必要。

如果條件成立，就 return 了，函式就結束了。如果條件不成立，就要執行 `return false` 那行。那不就寫成下面這樣就好？

``` js
function test(a) {
  if (a === '123') {
    return true
  }
  return false
}
```

執行出來的結果跟順序是完全一樣的，所以才會跟你說 else 完全沒必要。

而今天要講的 early return 原理類似，請大家看一下以下程式碼：

``` php
$sql = "SELECT * FROM ChihYang41_users WHERE account = ?";
$stmt = $conn->stmt_init();
if ($stmt->prepare($sql)) {
  $stmt->bind_param("s", $account);
  $stmt->execute();
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  if ($result->num_rows > 0) {
    if (password_verify($password, $row['password'])) {
      getSessionId($conn, $account);
      setcookie("session_id", setSessionId($conn, $account), time()+3600*24);
      echo "<script>
          alert('登入成功！');
          location.href = './index.php';
        </script>";
    } else {
      header("Location: ./login.php?error=pwderror");
      exit();
    }
  } else {
    header("Location: ./login.php?error=othererror");
    exit();
  }
  
  $stmt->close();
  $conn->close();
} 
```

你會看到因為狀況很多種，所以需要有很多 if 跟 else。但你可以注意到一個特性，就是 else 裡面的東西通常執行完畢就 exit 了，不會再執行其他程式碼。

這時候就可以利用這個特性，把條件「反過來寫」，先寫說如果不符合狀況就怎樣，可以少掉很多巢狀，可以參考底下程式碼：

``` php
$sql = "SELECT * FROM ChihYang41_users WHERE account = ?";
$stmt = $conn->stmt_init();

if (!$stmt->prepare($sql)) {
  exit();
}

$stmt->bind_param("s", $account);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

if ($result->num_rows == 0) {
  header("Location: ./login.php?error=othererror");
  exit();
}

if (!password_verify($password, $row['password'])) {
  header("Location: ./login.php?error=pwderror");
  exit();
}

getSessionId($conn, $account);
setcookie("session_id", setSessionId($conn, $account), time()+3600*24);
echo "<script>
    alert('登入成功！');
    location.href = './index.php';
  </script>";
  
$stmt->close();
$conn->close();
```

是不是超級神奇！

原本三層 if 的程式碼，在換個順序判斷之後就改成只有一層，程式碼看起來乾淨很多。這個就叫做 early return，能早點 return（在這情形下是 exit，但也是離開）就早點，就可以避免掉無謂的 else 判斷。

（上面 code 來自同學的真實案例，可參考：https://github.com/Lidemy/mentor-program-3rd-ChihYang41/pull/28/files/c09007e1b0c8f2f54662cbbb7e1bb90eebcd6e2b ）



