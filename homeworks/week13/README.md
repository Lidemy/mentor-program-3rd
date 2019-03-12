# 作業

## hw1：實作基本網格系統

其實網格系統說穿了，就只是在不同寬度的時候依照比例調整 column 的寬度而已。這一個作業，你要實作出基本的網格系統，詳細規格可參考下面：

1. 每一個 row 有 12 格
2. 有一個叫做 container 的 class 會把裡面的內容置中，寬度則是 960px
3. 一共有 12 種 col 的 class，col-1, col-2...col-12

只要螢幕寬度小於 720px，每一格都會佔滿整個 row。

## hw2：超基礎 Todo list

![](todo.png)

請你完成一個很簡單的 Todo List，需要有以下功能：

1. 身為使用者，我可以新增 todo item
2. 身為使用者，我可以刪除 todo item
3. 身為使用者，我可以標記某個 todo item 已完成

## hw3：加強留言板

之前在課程中講過 Bootstrap 這一個好用的 library，能夠讓你把版面變得好看一點，現在就請你利用 Bootstrap 改造之前的留言板 UI。

另外，請把發送留言跟刪除留言的地方改成 ajax，新增留言跟刪除的時候都不用換頁，藉此增進使用者體驗。

最後，我們在之前有實作過「通行證」的機制，其實在 PHP 裡面有內建的可以用，而這個機制就叫做 session。可以參考 [PHP 5 Sessions](https://www.w3schools.com/php/php_sessions.asp) 或是 [PHP Session 使用介紹，啟用與清除 session](http://www.webtech.tw/info.php?tid=33)，把之前留言板的作業改成用 PHP 內建的 session 機制，而不是用我們自己實作的。

## hw4：簡答題

1. Bootstrap 是什麼？
2. 請簡介網格系統以及與 RWD 的關係
3. 請找出任何一個與 Bootstrap 類似的 library
4. jQuery 是什麼？
5. jQuery 與 vanilla JS 的關係是什麼？

請將答案寫在 [hw4.md](hw4.md)。

## 挑戰題

把留言板用自己寫的網格系統，改成支援 RWD。

## 超級挑戰題

把所有跟留言板有關的操作都變成 Ajax，並且與自己寫的後端 API 串接。
