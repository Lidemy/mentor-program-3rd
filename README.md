# 程式導師實驗計畫第三期

## 這是什麼

[程式導師實驗計畫第三期](https://medium.com/hulis-blog/mentor-program-3rd-47a2e85e33b3)是一個為期六個月的計畫，要求學生付出一定的時間（每週至少付出四十小時），希望能在結業時培養出合格的（意思就是找得到工作）的工程師，並且在就職後依舊能持續成長，成為好的工程師。

## 課程目標

### 核心能力
1. 具有找資料的能力，能夠知道如何找到相關資訊
2. 具有分析問題的能力，能夠快速定位問題
3. 知道如何解決問題，包括但不限於拆解問題、簡化問題、轉化問題
4. 解決問題後能夠重新歸納並整理

### 工具能力

1. 後端：知道後端原理，知道什麼是資料庫、Server，可以寫出簡單的網站並且自己部署
2. 前端：知道前端原理，HTML、CSS、JavaScript，知道 Ajax 以及如何與後端串接
3. 資安：基本資安概念，SQL Injection、XSS、CSRF

## 課程規則

### 1. 每日進度報告

為了更方便追蹤大家的進度，必須在禮拜一到五每一天簡短報告自己今天學了什麼和碰到什麼問題（已解決或未解決），除了作為淘汰制的參考以外，其實也是幫自己簡單複習一下所學過的東西。

進度報告你可以選擇早上 po 或是晚上 po，早上的話就是講昨天的事，晚上的話就是講今天的。

### 2. 每日心得（鼓勵但非強迫）

之前我有寫過一篇文章叫做[《每一篇心得都有價值——為什麼初學者才更應該要寫心得筆記》](https://medium.com/hulis-blog/why-blogging-ab77fd8c6ffa)，裡面跟大家稍微講了一下寫心得的好處，在這課程中我也希望能把這個習慣帶給大家。

每天寫心得真的不是件容易的事，連我自己都做不太到，因此這一項是「鼓勵非強迫」，你沒有做到也沒關係，但我希望至少能夠每個禮拜寫個兩三篇，重點其實是在連續，這樣才有完整的紀錄可以看。

心得內容其實要寫什麼都行，沒有強迫，你簡單寫三個字：「我好累」或是「收穫多」也都可以，當日記在寫就好，我之前就先示範了[每日筆記](https://github.com/aszx87410/daily-notes/issues)，記錄一些教學上的思考。

若是你不知道心得該如何下手，這邊推薦一個不錯的模板叫做 ORID 筆記，每天根據這四項來寫：

#### Objective 客觀

關於今天的課程，你記得什麼？  
完成了什麼？  

#### Reflective 感受

你要如何形容今天的情緒  
今天的高峰是什麼?  
今天的低點是什麼?  

#### Interpretive 解釋反思

我們今天學到了什麼？  
今天一個重要的領悟是什麼？  

#### Decisional 決定行動

我們會如何用一句話形容今天的工作？  
有哪些工作需要明天繼續努力?  

有了基本架構之後會容易很多，你只要根據提供的問題模板去思考就行了。

細節可參考：[初探 ORID 焦點討論法](https://blog.niclin.tw/2016/08/09/%E5%88%9D%E6%8E%A2-orid-%E7%84%A6%E9%BB%9E%E8%A8%8E%E8%AB%96%E6%B3%95/)、[如何使用ORID总结学习，加快进步？](https://www.jianshu.com/p/56e5bf8ae9ee)

### 3. 交作業前先檢查

身為工程師，在交付產品以前自己有義務先做一些基本的測試，至少不要出現一打開就掛掉或者是 UI 差超級多這種狀況。交作業也是一樣的，如果你的作業連範例附的簡單 測試都跑不過，或者是基本功能都沒完成，那我也不知道我要改什麼。

所以，在交作業前請先自己檢查一下，如果品質太差的我會直接退件。

### 4. 簡答題規範

注意，簡答題不像你以前學生時期做報告那樣可以直接複製貼上，這是最沒有用的答題方法。我希望的是你找資料閱讀，吸收並理解以後再用自己的文字寫出來，這樣的理解程度會高很多，而不是複製貼上就了事。若是只會複製貼上，我保證一個月後我再問你同樣的問題，你也答不出來。

如果真的寫不出來，可以試著看著相關資料自己照著重打，這樣也會加深記憶。

有任何查到的相關資料都可以一併附上，第一是給別人一個 credit，可以讓作者知道他的文章對你有幫助，第二也是給自己留一個筆記，之後忘記可以再回來這邊找。

### 5. 程式碼規範

第三期首次導入 [eslint](https://eslint.org)，幫整個專案都裝了 eslint，每一次 commit 都會自動檢查 JavaScript 的程式碼，有違反規則的話需要修正以後才能 commit。從第一週開始就強迫大家養成良好的程式碼撰寫習慣。

### 其他

1. 第十三週以前禁止使用 jQuery（除非你原生的 DOM API 真的很熟了）

## 課程進行方式

本期進行方式與前兩期差異頗大，這期「原則上完全沒有直播」，課程以線上影片為主，全部課程內容皆為預錄好的線上影片（無字幕）。

每一週都會有指定教材以及導讀影片，若有需要的話可以自行尋找其他資源學習。

還有一點請特別注意，沒教的內容也可能出現在作業裡，不要被當期的內容給迷惑了，以為一定要用當週教的東西來解題。

## 課程大綱

從 2019/04/15 至 2019/10/15	，為期六個月的課程，一共約二十六週。每週的開始為禮拜一，結束為禮拜日。

### 第一週（04/15 ~ 04/21）：暖身週

大致介紹整個計畫以及帶學生看過一次課程大綱，接著說明整體架構，介紹各種不同工程師職位所負責的工作內容並著重在網頁工程師的介紹，並說明課程進行方式。

除此之外，也會帶大家看一下學習的方法並推薦相關課程，為之後的課程做好準備。

Mindset 建立：

1. 不要害怕問問題，每個問題都值得被提出來，你的問題可能也是其他人的問題
2. 問問題前應該要自己查詢資料（有些很難查的直接問也可以）
3. 你有老師讓你盡量問，反正問就對了，有錯的話我會提醒你
4. 重點是「目的」，而不是「手段」，持續問為什麼為什麼為什麼為什麼
5. 學程式需要換一個思維模式

建置基礎環境，例如說 Command Line Tool 與 Git，以及學會如何交作業。

指定教材：

1. [CMD101] Command Line 超新手入門：全部
2. [GIT101] Git 超新手入門：全部
3. [CS101] 初心者的計概與 coding 火球術：1-1 ~ 2-4、4-1、4-2、11
4. 程式導師實驗計畫第二期：Lesson 1-1（可以快轉忽略與第二期本身相關的部分）

[HW1 作業連結](/homeworks/week1)

#### 自我檢測

- [ ] 你說得出程式如何執行
- [ ] 你理解寫程式的本質只是一行行的指令
- [ ] 你了解前端與後端的區別
- [ ] 你能說出從發出一個 request 到接收 response 中間發生的事
- [ ] 你了解不同載具的差異在哪（Desktop、Mobile、Web）
- [ ] 你了解基本的 command line 指令
- [ ] 你知道 Git 在做什麼，以及為何我們需要 Git
- [ ] 你知道 add、commit、push、pull 等基本 Git 指令
- [ ] 你知道怎麼使用 branch 並送出 Pull Request
- [ ] 你熟悉 Git Workflow（其實就是交作業的流程）

### 第二週（04/22 ~ 04/28）：程式基礎（上）

前四週其實是這個計畫最重要的一個月，希望能在這四週讓學生把基礎打得相對紮實，這樣比較好應付之後的課程。

這一週的學習目標是程式基礎，包括但不限於：變數、陣列、迴圈、判斷式以及函式（以 ES5 為例）。

必須要強迫自己轉換成寫程式的思考模式，否則這一週對你來說會是惡夢。對於從來沒有接觸過類似思考模式的人可能會需要點時間，但只要慢慢練習，就會越來越進入狀況。

還有一點請大家注意，程式是按照你寫的跑，不是按照你想的跑。當程式執行結果超出預期時，`console.log`是你的好朋友，可以把東西印出來看看是不是跟你想的一樣。

最後，在這週也會講到 eslint，我已經幫大家設置好了 eslint，這是一個能夠幫你自動做語法檢查的工具，在每次 commit 之前都會自動檢查程式碼的規範，不符合規範的話不會讓你 commit。

指定教材：

1. [JS101] 用 JavaScript 一步步打造程式基礎：開頭到綜合練習 Lv1

進階閱讀：

1. [CS101] 初心者的計概與 coding 火球術：7-1~7-4

[HW2 作業連結](/homeworks/week2)

#### 自我檢測：

- [ ] 你能靈活運用變數、迴圈、判斷式等等基本概念來解題
- [ ] 你能一行行的說出現在程式在做什麼
- [ ] 你知道「回傳」跟「輸出」的差異
- [ ] 你可以把用文字寫好的演算法轉成程式碼

### 第三週（04/29 ~ 05/05）：程式基礎（下）

在程式基礎的部分一週是絕對不夠的，因此本週會繼續加強程式基礎。在這一週裡面我們會延伸上一週的內容，並且多講一些有關於 ES6 的語法。

像是介紹常用內建函式如 replace、indexOf、split、map、filter、join、parseInt 以及 Math 等等。

也會教大家寫簡單的 unit test，並且自己寫 test case 檢驗自己的函式。

本週的作業有自動批改系統，請傳到 [Lidemy OJ](https://lidemy-oj.netlify.com) 上，並且確認每一題都有答對之後再交作業，否則我會直接退件（hw5 除外，因為這題比較難，沒有通過依然可以先交作業）。

[HW3 作業連結](/homeworks/week3)

指定教材：

1. [JS101] 用 JavaScript 一步步打造程式基礎：全部
2. [JS102] 升級你的 JavaScript 技能：ES6 + npm + Jest：全部

上一期相關部分：

1. 程式導師實驗計畫第二期：Week2 加強 JavaScript
2. 程式導師實驗計畫第二期：Week2 - ES6

寫完作業以後才能看：

1. 程式導師實驗計畫第二期：Week3 - 第二週作業檢討

#### 自我檢測

- [ ] 你理解常用內建函式如何使用
- [ ] 你熟悉程式語法並知道如何解決基礎問題
- [ ] 你知道為什麼我們需要 unit test
- [ ] 你知道什麼是 unit test
- [ ] 你知道如何寫 unit test
- [ ] 你知道如何測試一個 function

### 第四週（05/06 ~ 05/12）：網路基礎

無論是前端還是後端，身為一個網頁工程師，你必須很清楚整個網路運作的輪廓。細節你可以日後再研究，但一定要能掌握大方向以及重要概念，否則你未來的路絕對會走得很崎嶇。

在這週裡面我們會學到兩台電腦在網路上該怎麼溝通，從上層往下，再從底層往上，一步步建立起你對網路的世界觀。

當然，只有理解是不夠的，我們也會用 Node.js 讓你實作簡單的網路爬蟲以及串接基本的 API，帶你熟練與網路相關的知識。

[HW4 作業連結](/homeworks/week4)

指定教材：

1. [NET101] 網路基礎概論（搭配 JS 實作練習）：全部
2. [CS101] 初心者的計概與 coding 火球術：4-1 ~ 4-4

#### 自我檢測

- [ ] 你知道網路背後大概的運作模式
- [ ] 你知道什麼是 Request 跟 Response
- [ ] 你知道什麼是 DNS 以及運作原理
- [ ] 你知道 HTTP 與 HTTPS 的差異
- [ ] 你知道 localhost 跟 127.0.0.1 是什麼
- [ ] 你知道 GET 與 POST 的差別
- [ ] 你知道常用的 HTTP Header
- [ ] 你知道什麼是 API
- [ ] 你會使用 node.js 寫出串接 API 的程式
- [ ] 你知道 HTTP method 有哪些
- [ ] 你知道基本的 HTTP statud code，像是 200、301、400、404、500

### 第五週（05/13 ~ 05/19）：複習週

經過前面四週的各種摧殘，終於迎來了第一次的複習週！

複習週顧名思義，就讓大家複習前面這四週的進度用的，這四週我們一共學了四項主要的技能：

1. Command line 的使用
2. Git 的基本操作
3. JavaScript 基本語法及程式思維
4. 網路基本概念

如果你之前因為趕時間亂寫而亂寫作業，現在是回去重新省視一遍的好時機；或者是之前有查到什麼有趣的延伸資料但沒時間看的，這一週你就有時間看了。

在複習週是沒有任何進度的，但是會有兩個小挑戰，讓你們檢驗自己前面學到的技能。

#### HTTP Game

為了檢驗你對於 API 串接是否理解，我特地做了一個很有趣的小遊戲：[Lidemy HTTP Challenge](https://lidemy-http-challenge.herokuapp.com/start)。

建議使用之前教過的 node.js 搭配 [request](https://github.com/request/request) 這個 library 來解題，才能比較有效確認自己是否前面都有學進去。

我有藏了一些很無聊的梗在裡面，解題的時候可以順便找找。

#### NPSC 題目練習

NPSC 中文全名為[網際網路程式設計全國大賽](https://contest.cc.ntu.edu.tw/npsc2018/)，是台大每年都會辦給國中生跟高中生參加的比賽。

裡面很多題目都很有趣，適合拿來給程式初學者練習，我特地找了一些比較簡單的題目，大家可以用來檢驗自己的程式基礎是否紮實：[Lidemy OJ](https://lidemy-oj.netlify.com/contests)。

[HW5 作業連結](/homeworks/week5)

### 第六週（05/20 ~ 05/26）：前端基礎（一）

本週將會正式進入到前端課程的領域，開始用 HTML 與 CSS 打造出基本的網頁，並且利用 media query 實現簡單的 RWD（Responsive Web Design）。

HTML 的部分就簡單帶過幾個常見的 tag，帶到 head 的一些屬性跟設定，也會講到跟 SEO 有關的一些 tag（title, description, json ld...）。

主要會著重在 CSS 的部分，並且讓大家多多練習。

也可以先看一下這兩篇文章（很多地方你會看不懂，但沒關係）先培養一下對前端的感覺，等幾週過後當我們學得越來越多，再看一次會有完全不同的感受：[零基礎的小明要如何成為前端工程師？](https://medium.com/hulis-blog/frontend-engineer-guide-297821512f4e)、[跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](https://medium.com/@hulitw/introduction-mvc-spa-and-ssr-545c941669e9)

指定教材：

1. [FE101] 前端基礎：HTML 與 CSS：全部
2. 程式導師實驗計畫第二期：Week3-2 - CSS
3. [Chrome 網頁除錯功能大解密](https://www.udemy.com/chrome-devtools/)

寫完作業才能看：

1. 程式導師實驗計畫第二期：Week4-1 - 上週作業檢討

[HW6 作業連結](/homeworks/week6)

#### 自我檢測

- [ ] 你知道 HTML 是在做什麼的
- [ ] 你知道如何使用有語意的（semantic）標籤
- [ ] 你知道基本 SEO 的概念
- [ ] 你知道 CSS 是什麼
- [ ] 你知道 inline、block 跟 inline-block 的區別
- [ ] 你知道什麼是 box model
- [ ] 你知道 position 的所有屬性及其差別
- [ ] 你知道 :hover, :before, :after
- [ ] 你知道 :nth-child 的各種用法
- [ ] 你熟悉 CSS selector，可以輕鬆選到想選到的元素

### 第七週（05/27 ~ 06/02）：前端基礎（二）

這一週將會進入到 JavaScript，讓網頁變得有互動性，並結合 `<form>` 做表單驗證，以及讓大家寫出簡單的網頁應用程式。

這會是我們第一次把 JavaScript 應用在網頁上，來學習怎麼使用 JavaScript 操控 DOM 物件，讓網頁動起來。

指定教材：

1. [FE102] 前端必備：JavaScript：到 ajax 之前
2. 程式導師實驗計畫第二期：Week4-2 - JavaScript

指定閱讀：

1. [DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)

[HW7 作業連結](/homeworks/week7)

#### 自我檢測

- [ ] 你知道 JavaScript 跑在網頁上跟跑在 Node.js 上差在哪裡
- [ ] 你知道 DOM 是什麼
- [ ] 你知道如何用 JavaScript 操控 DOM 物件
- [ ] 你知道如何幫一個按鈕加上 event listener
- [ ] 你知道捕獲與冒泡是什麼
- [ ] 你知道什麼是事件代理（delegation）
- [ ] 你知道怎麼用 JavaScript 更改元素的 style
- [ ] 你知道 preventDefault 與 stopPropagation 的差異 

### 第八週（06/03 ~ 06/09）：前端基礎（三）

之前在第四週時有提過 API，也有讓大家試著用 node.js 寫些小程式來串接。

而前端當然也能串接 API，理解前後端如何串接是很重要的一部分，因此這週會花滿多心力再來講 API 串接，讓大家複習一下 API 的概念，並且教大家什麼是 Ajax。

指定教材：

1. [FE102] 前端必備：JavaScript：ajax 以後

寫完作業才能看：

1. [從假資料到真資料：Ajax 與 API 串接](https://www.youtube.com/watch?v=PNGRPYFcAms)


相關學習資源：

1. [輕鬆理解 Ajax 與跨來源請求](https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/)
2. [RESTful API Design by TritonHo](https://github.com/TritonHo/slides/blob/master/Taipei%202016-04%20talk/RESTful%20API%20Design-tw-2.1.pdf)


[HW8 作業連結](/homeworks/week8)

### 自我檢測

- [ ] 你知道什麼是 API
- [ ] 你知道什麼是 Ajax
- [ ] 你知道從網頁前端呼叫 API 與在自己電腦上寫程式呼叫的差異
- [ ] 你知道什麼是同源政策（Same-origin policy）
- [ ] 你知道如何存取跨網域的資源（CORS）
- [ ] 你知道什麼是 JSON
- [ ] 你知道什麼是 JSONP 及其原理
- [ ] 你知道 Fetch 的基本使用方法

### 第九週（06/10 ~ 06/16）：後端基礎（一）

前端基礎打得差不多以後，就要進入後端的課程，這次課程會以 PHP 為主要的語言，Node.js 為輔助。

這週的課程會講解 PHP 基本觀念、語法，並且教大家安裝設定 MySQL，寫出簡單的 CRUD 應用。

指定教材（學習順序請參考 Lidemy.com 上的說明）：

1. 程式導師實驗計畫：Lesson 5-1 之後端基礎  
2. 程式導師實驗計畫：Lesson 5-2 之資料庫  
3. [CS101] 初心者的計概與 coding 火球術：5-3
4. [BE101] 用 PHP 與 MySQL 學習後端基礎：全部
5. 程式導師實驗計畫第二期：Week5-2：物件導向程式設計
6. Week5 物件導向（續）：繼承與 static

上一期相關內容：

1. 程式導師實驗計畫第二期：Week5 - 後端基礎

物件導向相關閱讀：

1. http://expect7.pixnet.net/blog/post/38682120
2. https://noob.tw/java-oop/
3. https://blog.miniasp.com/post/2009/08/27/OOP-Basis-What-is-class-and-object.aspx
4. http://blog.turn.tw/?p=3093
5. https://www.ptt.cc/bbs/OOAD/M.1256403807.A.8AE.html

如果作業寫不出來，可參考：

1. 程式導師實驗計畫第二期：Week10-1 PHP 簡易會員系統 + 留言板
2. 程式導師實驗計畫：Lesson 6-1 之 live coding
3. 程式導師實驗計畫：Lesson 5-3 之作業檢討 

相關學習資源：

1. [第一正規化(First Normal Form, 1NF)](https://matthung0807.blogspot.com/2017/11/first-normal-form-1nf.html)

[HW9 作業連結](/homeworks/week9)

#### 自我檢測

- [ ] 你知道 PHP 是什麼
- [ ] 你知道前端與後端的差別
- [ ] 你知道什麼是資料庫
- [ ] 你了解基本的 SQL 語法，包括 Select、Insert Into、Delete 與 Update
- [ ] 你能夠寫出基本到 CRUD 應用

### 第十週（06/17 ~ 06/23）：複習週

這是第二次的複習週，在前四週我們一共學了：

1. HTML 與 CSS
2. DOM 以及 JavaScript 如何與網頁互動
3. 前端利用 Ajax 與後端串接
4. PHP 與 MySQL

這一週可以讓你有時間好好複習之前的內容，若是覺得都 ok 了，也可以試試看之前的進階挑戰題、挑戰題以及超級挑戰。

這次跟第五週一樣，怕大家太無聊，於是準備了兩個有趣的小遊戲給大家玩。

### 綜合能力測驗

這邊有一份參考某間公司面試考題的[綜合能力測驗](http://mentor-program.co/huli/game/index.php)，還滿有趣的，主要是測前幾週的整合能力。

如果你點進去看到一片白畫面，那或許不代表網頁壞了。

### 闖關遊戲

一共十關，看你能闖到第幾關：[r3:0 異世界網站挑戰](https://r30challenge.herokuapp.com/)（特別感謝 @minw 製作遊戲）。

[HW10 作業連結](/homeworks/week10)

### 第十一週（06/24 ~ 06/30）：後端基礎（二）

接下來幾週都會以之前的留言板作為主軸，一步步加強它，使它成為一個比較完整的產品。

在這過程中你會學到許多新的後端概念，也會幫留言板加上更多更多的新功能！

指定教材：

1. [BE101] 用 PHP 與 MySQL 學習後端基礎：全部
2. [CS101] 初心者的計概與 coding 火球術：4-3、5-4

[HW11 作業連結](/homeworks/week11)

#### 自我檢測

- [ ] 你知道什麼是雜湊（Hash function）
- [ ] 你知道什麼是加密（Encryption）
- [ ] 你知道雜湊與加密的差別
- [ ] 你知道什麼是 Session
- [ ] 你知道什麼是 Cookie
- [ ] 你知道 Cookie、Local Storage 與 Session Storage 的差別
- [ ] 你知道 Session 與 Cookie 的差別

### 第十二週（07/01 ~ 07/07）：後端基礎（三）

這一週我們要強調一個很重要的觀念：資訊安全。

無論你是前端還是後端，都必須時時刻刻在心裡惦記著資訊安全的概念，總結為一句話就是：「不要相信任何來自 client 端的資料」，只要能做到這點，其實就可以阻止掉很多的惡意攻擊。

指定教材：

1. [BE101] 用 PHP 與 MySQL 學習後端基礎：全部
2. 程式導師實驗計畫：Lesson 6-2 之 Web Security 
3. 程式導師實驗計畫：Lesson 6-3 之 HW6 作業檢討 
4. 程式導師實驗計畫第二期：Week6-1：後端基礎（中）
5. 程式導師實驗計畫第二期：Week6-2：資訊安全
6. [CS101] 初心者的計概與 coding 火球術：5-5

若是作業寫不出來：

1. 程式導師實驗計畫第二期：Week10-2 會員系統安全加強 + 兩層留言板 
2. 程式導師實驗計畫第二期：Week11-1 資訊安全加強 

延伸閱讀：

1. [讓我們來談談 CSRF](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)

[HW12 作業連結](/homeworks/week12)

#### 自我檢測

- [ ] 你知道什麼是 SQL Injection 以及如何防範
- [ ] 你知道什麼是 XSS 以及如何防範
- [ ] 你知道什麼是 CSRF 以及如何防範
- [ ] 你知道為什麼儘管前端做了驗證，後端還是要再做一次驗證

### 第十三週（07/08 ~ 07/14）：前端基礎（四）

首先帶大家串接之前自己寫出來的 API，把前端介面用 Ajax 改寫，使網頁互動性變得更高。讓大家熟悉 jQuery，把現有應用用 jQuery 改寫一次。

版面的部分則利用 Bootstrap 搭配 Bootswatch 讓介面變得美觀。利用網格系統實作 RWD。

除了這些呢，也會幫大家補充 Promise 的一些用法。

指定教材：

1. 程式導師實驗計畫第二期：Week7-1 前端基礎（下）
2. 程式導師實驗計畫第二期：Week7-2 Fetch & Promise
3. 程式導師實驗計畫：Lesson 7-1 之 jQuery 與 Bootstrap
4. 程式導師實驗計畫：Lesson 7-2 之 jQuery Bootstrap 實戰應用

作業寫不出來可參考：

1. 程式導師實驗計畫第二期：Week11-2 改寫 Ajax 

[HW13 作業連結](/homeworks/week13)

#### 自我檢測

- [ ] 你知道 jQuery 是做什麼的
- [ ] 你知道 jQuery 與 vanilla js 的差別
- [ ] 你知道用 Ajax 去 call API 與伺服器直接輸出資料的差別
- [ ] 你知道如何與自己寫的 API 串接
- [ ] 你知道什麼是 Bootstrap
- [ ] 你知道 Bootstrap 原理及如何應用
- [ ] 你知道什麼是網格系統以及如何應用在 RWD
- [ ] 你知道什麼是 Promise
- [ ] 你知道 Promise 的三種狀態

### 第十四週（07/15 ~ 07/21）：後端基礎（四）

有了自己的前後端程式之後，就可以開始來部署了。這週的重點會放在帶大家直接去買主機（AWS、Digital Ocean、Linode），並且了解如何連上主機。

也會讓大家購買自己的網域，理解如何將網域以及主機串連起來，讓大家可以連線到你的網站。

在這個章節也會讓大家理解後端基本架構（NAT、Load balancer、DB replication 等等）

最後也會補齊跟資料庫的一些知識，像是 ACID、Transaction、View 以及 Stored procedure。

這週也要特別感謝 [gandi](https://www.gandi.net/) 連續三期全額贊助了網域的費用 <(_ _)>。


指定教材：

1. 程式導師實驗計畫：Lesson 8-2 之資料庫  
2. 程式導師實驗計畫第二期：Week8-1 後端基礎（下）
3. 程式導師實驗計畫：Lesson 8-1 之後端基礎與網路相關知識  
4. 程式導師實驗計畫：Lesson 8-3 之 hw8 作業檢討  
5. 程式導師實驗計畫第二期：Week9-1 基礎到中階 

推薦閱讀：

1. [部署 AWS EC2 遠端主機 + Ubuntu LAMP 環境 + phpmyadmin](https://github.com/Lidemy/mentor-program-2nd-yuchun33/issues/15)
2. [一小時完成 VPS (Virtual Private Server) 部署](https://github.com/Lidemy/mentor-program-2nd-futianshen/issues/21)
3. [如何遠端連接虛擬主機上的 mySQL 資料庫 ？](https://github.com/Lidemy/mentor-program-2nd-futianshen/issues/33)

相關學習資源：

1. [MySQL 超新手入門（11）Views](http://www.codedata.com.tw/database/mysql-tutorial-11-views/)
2. [MySQL Views](http://www.mysqltutorial.org/mysql-views-tutorial.aspx)
3. [MySQL 超新手入門（13）Stored Routines 入門](http://www.codedata.com.tw/database/mysql-tutorial-13-stored-routines/)
4. [只要說「我要下午茶！」——什麼是資料庫預存程序？](http://www.newtype.com.tw/aw/Article_ShareDetail.aspx?UniqueID=3)
5. [MySQL Stored Procedure](http://www.mysqltutorial.org/mysql-stored-procedure-tutorial.aspx)
6. [MySQL 超新手入門（16）Triggers](http://www.codedata.com.tw/database/mysql-tutorial-16-triggers/)
7. [MySQL Triggers](http://www.mysqltutorial.org/mysql-triggers.aspx)
8. [跟 Trigger 與 View 相關的簡報 by TritonHo](https://github.com/TritonHo/slides/blob/master/internal-talk/internal_talk1.pdf)
9. [跟 ACID 有關的簡報 by TritonHo](https://github.com/TritonHo/slides/blob/master/Taipei%202018-06%20talk/lesson0.pdf)
10. [MySQL CREATE INDEX](http://www.mysqltutorial.org/mysql-index/mysql-create-index/)
11. Stored procedure 相關討論：[討論一](https://www.facebook.com/groups/616369245163622/permalink/1315254285275111/)、[討論二](https://www.facebook.com/groups/616369245163622/permalink/1316314398502433/)、[討論三](https://www.facebook.com/groups/616369245163622/permalink/1315406481926558/)、[討論四](https://www.facebook.com/yftzeng.tw/posts/10209307179835921)

[HW14 作業連結](/homeworks/week14)

#### 自我檢測

- [ ] 你知道虛擬空間、虛擬主機以及實體主機的差別
- [ ] 你知道什麼是網域（Domain）
- [ ] 你知道如何設定網域（A、CNAME）
- [ ] 你知道如何用 SSH 遠端連線到自己的主機
- [ ] 你知道如何部署應用程式
- [ ] 你知道什麼是 No SQL
- [ ] 你知道什麼是 Transaction 與 lock
- [ ] 你知道資料庫的 ACID 是什麼
- [ ] 你知道什麼是資料庫的 View 以及使用時機
- [ ] 你知道什麼是 Stored procedure 以及如何使用
- [ ] 你知道資料庫的 Trigger 以及使用時機

### 第十五週（07/22 ~ 07/28）：複習週

終於到了第三次的複習週，這次要複習的東西比以往都多了點：

1. Session 與 Cookie 的差異
2. 資訊安全（Hashing, SQL Injection, XSS）
3. jQuery
4. Bootstrap
5. Promise
6. 部署

這次提供兩個跟資訊安全相關的練習網站，都跟我們以前複習週的模式差不多，可以一直闖關：

1. http://xss-quiz.int21h.jp/ （這個可能會被 Chrome 擋下來...可以用 Firefox 或是其他網站玩）
2. http://www.hackertest.net/

祝大家玩得開心！

這一週的作業除了心得以外，也提供了一個跟以往不太一樣的測驗：[網站前後端開發基礎測試](https://forms.gle/qvrQc9pWWNGaoGpn8)，一共十題簡答題，Google 表單在送出之後可以看見參考解答，能夠自己對答案。

[HW15 作業連結](/homeworks/week15)

### 第十六週（07/29 ~ 08/04）：前端中階（上）

這週的東西比較分散一些，我們會著重在三個部分：

1.CSS 預處理器

在被 CSS 折磨這麼久之後，終於有機會用程式化的方法來撰寫 CSS，這週將介紹幾個不同的 CSS preprocessor（LESS, SASS, Stylus），讓學生自行選擇看順眼的並且練習，把之前的 CSS 都改寫。

2.基本資料結構

這週會介紹到基本的資料結構 stack 與 queue 與 JavaScript 的物件導向。

3.什麼是快取（Cache）？

快取對工程師來說是一定要理解的概念，前端有前端的快取，後端也有後端的。這週主要會著重在前端快取的介紹上。

指定教材：

1. 程式導師實驗計畫：Lesson 9-1 之 CSS 預處理器
2. 程式導師實驗計畫：Lesson 9-2 之資料結構、Cache 與 Event Loop
3. 程式導師實驗計畫：Lesson 9-3 之作業檢討
4. 程式導師實驗計畫第二期：Week9-1 基礎到中階
5. 程式導師實驗計畫第二期：Week9-2 JavaScript 執行原理

[HW16 作業連結](/homeworks/week16)

#### 自我檢測

- [ ] 你知道什麼是 Cache
- [ ] 你知道 HTTP Cache 的原理以及相關 Header
- [ ] 你了解 CSS 預處理器的目的以及原理
- [ ] 你知道什麼是 Stack
- [ ] 你知道什麼是 Queue
- [ ] 你可以用 JavaScript 實作出 Stack 跟 Queue
- [ ] 你知道 CSS Selector 權重的計算方式

### 第十七週（08/05 ~ 08/11）：前端中階（中）

本週主要會放在 JavaScript 的一些重要基礎以及瀏覽器運作時的機制。

第一個重點是瀏覽器在運行 JavaScript 時的 Event Loop 機制。

第二個重點就是 JavaScript 的一些重要基礎，包含：scope、hoisting、closure、prototype、this 等等。

指定教材：

1. 程式導師實驗計畫第二期：Week9-2 JavaScript 執行原理
2. [JS201] 進階 JavaScript：那些你一直搞不懂的地方
3. [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

[HW17 作業連結](/homeworks/week17)

#### 自我檢測

- [ ] 你知道 Event Loop 的運作方式
- [ ] 你知道什麼是作用域（Scope）
- [ ] 你知道 Hoisting（提升）是什麼
- [ ] 你知道 Hoisting 的原理為何
- [ ] 你知道 Closure（閉包）是什麼
- [ ] 你能夠舉出一個運用 Closure 的例子
- [ ] 你知道 Prototype 在 JavaScript 裡是什麼
- [ ] 你知道大部分情況下 this 的值是什麼

### 第十八週（08/12 ~ 08/18）：前端中階（下）

這週將學習把工作自動化，利用 gulp 管理工作流程，避免繁瑣的手動操作。

也會講到 Webpack 誕生的理由以及模組化的 JavaScript 開發，讓學生理解為何需要使用 Webpack。

除此之外也會講到一些與 CSS 相關的優化小技巧，例如說針對圖片做優化的 CSS Sprites 或是 Data URI，或是 JavaScript 與 CSS 的 uglify、minify 等等。

最後也會用跟以往不太一樣的模式，做出一個簡單的 todo list。

指定教材：

1. 程式導師實驗計畫：Lesson 10-1 之 gulp 與 webpack
（注意，影片裡面教的是舊版的 Gulp 與 Webpack，學概念就好，實作請參考其他教學或是官方文件）

寫完作業可參考：

1. 程式導師實驗計畫：Lesson 10-2 之 HW10 作業檢討

[HW18 作業連結](/homeworks/week18)

#### 自我檢測

- [ ] 你知道 gulp 的目的以及原理
- [ ] 你知道 webpack 的目的以及原理
- [ ] 你熟悉如何使用 webpack 進行模組化開發
- [ ] 你熟悉如何使用 gulp 建構自動化工作流程
- [ ] 你能夠快速打造出基礎環境
- [ ] 你知道 CSS 優化的一些小技巧
- [ ] 你知道 CSS Sprites 與 Data URI 的優缺點
- [ ] 你知道什麼是 uglify 與 minify

### 第十九週（08/19 ~ 08/25）：網路基礎複習

學到這週為止，前後端的概念你應該滿清楚了，我們也學了不少東西，下一週是複習週，再下一週就要正式進入前後端框架的領域了。

在進入到那邊以前，我們還要來複習一些東西並且加強基礎。

我們首先要加強的第一個東西是複習前面教的網路基礎，你必須對前後端溝通的每一個流程都很確定，在之後的單元中才不會迷失自我。

接著要來講的是 SPA，還記得之前貼給你們看過的那兩篇文章嗎？[零基礎的小明要如何成為前端工程師？](https://medium.com/hulis-blog/frontend-engineer-guide-297821512f4e)、[跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](https://medium.com/@hulitw/introduction-mvc-spa-and-ssr-545c941669e9)，這週的重點會放在這兩篇文章上面，讓大家清楚知道背後的概念為何。

指定教材：無

[HW19 作業連結](/homeworks/week19)

#### 自我檢測

- [ ] 你知道什麼是 SPA
- [ ] 你知道後端 MVC 與前端 MVC 的差異
- [ ] 你知道前端路由與後端路由的差異

### 第二十週（08/26 ~ 09/01）：複習週

這是最後一次的複習週了，在前幾週我們一共學了：

1. CSS 預處理器
2. 基本資料結構
3. HTTP Cache
4. JavaScript 觀念：scope、hoisting、closure、prototype、this
5. Event Loop
6. Gulp 與 Webpack
7. 網頁圖片優化

至此，這個課程的基礎跟中階都學完了，從下週開始就要進入到前後端框架的領域。

為了怕大家複習週太無聊，這次也準備了一個有趣的小測驗，這邊是一個速度很慢的網站，原因有很多種，原始碼在這裡：（待補）。

現在呢，你要來負責優化這個網站，在不動內容的情形下來調整，使網站的載入速度變快。這只是一個靜態網站而已，你可以 fork 到自己的 GitHub 去然後用 GitHub Page 來部署，並且使用 [WebPageTest](https://www.webpagetest.org/) 這個網站來測試你的網站速度為何。（測試地點請統一選擇 Singapore - EC2），Browser 為 Chrome。

若是你沒有任何靈感，可參考 [web.dev](https://web.dev/) 或是 [Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884)

[HW20 作業連結](/homeworks/week20)

### 第二十一週（09/02 ~ 09/08）：前後端框架（一）

**備註：二十一週後的內容還在規劃中**

### 後端框架（一）

這一週正式進入後端框架的領域，會帶大家上最基礎的 Express，熟悉後端框架的各個元素。

[HW21 作業連結](/homeworks/week21/be)

#### 自我檢測

- [ ] 我了解一般後端框架的各個元素
- [ ] 我了解 Route 以及 MVC

### 前端框架（一）

終於要進入到前端框架 React 了（雖然嚴格來說 React 並不是一個框架，但搭配其他各種 React 生態系成員，其實就算是一個框架了）。

這週會學習到 React 的基本應用以及原理，了解為什麼我們需要使用 React。

延伸閱讀：[React 性能優化大挑戰：一次理解 Immutable data 跟 shouldComponentUpdate](https://blog.techbridge.cc/2018/01/05/react-render-optimization/)

指定教材：

1. [FE301] React 基礎：全部
2. 程式導師實驗計畫第二期：Week12-1 React
3. 程式導師實驗計畫第二期：Week12-2 React 續
4. [官方教學](https://reactjs.org/tutorial/tutorial.html)
5. [React.js 小書](http://huziketang.mangojuice.top/books/react/)

不確定有沒有幫助（因為內容跟第二期重疊的部分很多）：

1. 程式導師實驗計畫：Lesson 12-1 之 React
2. 程式導師實驗計畫：Lesson 12-2 之 React 下

[HW21 作業連結](/homeworks/week21/fe)

#### 自我檢測

- [ ] 我知道 React 的目的以及原理
- [ ] 我知道我們為什麼需要 React
- [ ] 我知道使用 React 跟之前使用 jQuery 的區別
- [ ] 我理解 state 跟 props 的不同

### 第二十二週（09/09 ~ 09/15）：前後端框架（二）

### 後端框架（二）

這一週會使用 Sequelize 這個套件來做 ORM 以及串接資料庫。

[HW22 作業連結](/homeworks/week22/be)

#### 自我檢測

- [ ] 了解一般後端框架的各個元素
- [ ] 了解 Route 以及 MVC
- [ ] 了解什麼是 ORM

### 前端框架（二）

在上一週結束之後，大家應該對 React 有了一些基本的感覺，這一週我們要繼續培養對 React 的感覺，讓大家對 React 越來越熟練。

除此之外也會教大家用 React Router 這一套 library，來實做前端的路由。

指定教材：

1. [FE301] React 基礎：全部
2. 程式導師實驗計畫第二期：Week13-1 還是 React
3. 程式導師實驗計畫第二期：Week13-2 依舊 React

[HW22 作業連結](/homeworks/week22/fe)

延伸閱讀：[前後端分離與 SPA](https://blog.techbridge.cc/2017/09/16/frontend-backend-mvc/)、[跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](https://medium.com/@hulitw/introduction-mvc-spa-and-ssr-545c941669e9)

#### 自我檢測

- [ ] 我熟悉 React 的基本使用
- [ ] 我知道如何使用 React Router 
- [ ] 我了解 React Router 的目的
- [ ] 我知道什麼是 Single Page Application
- [ ] 我理解現在的前端與以往的差別

### 第二十三週（09/16 ~ 09/22）：前後端框架（三）

### 後端框架（三）

這週會使用 nginx + pm2 來部署我們之前寫好的 web application。

[HW23 作業連結](/homeworks/week23/be)

#### 自我檢測

- [ ] 知道如何使用 nginx
- [ ] 知道如何使用 pm2
- [ ] 知道如何部署 node.js 應用程式

### 前端框架（三）

在之前的 React 課程中，我們已經慢慢熟悉 React 的思考模式，可是還有一些問題還沒解決，雖然你現在感受不太到，但是在 App 慢慢變大之後就會碰到了。

接續之前的課程，這一週會讓你的 Web App 變得更加完整，會導入一個新的東西：Redux，說明我們為什麼需要它。

指定教材：

1. 程式導師實驗計畫第二期：Week14-1 Redux
2. 程式導師實驗計畫：Lesson 13-1 之 React + Redux

[HW23 作業連結](/homeworks/week23/fe)

#### 自我檢測

- [ ] 我理解 Redux 的目的以及原理
- [ ] 我知道我們為什麼需要 Redux

### 第二十四週（09/23 ~ 09/29）：前後端框架（四）

### 後端框架（四）

之前我們學過了原生的 PHP，也學了 Express 這套輕巧的 Node.js 框架，而這一週呢，要來教 PHP 的一個輕量的框架 [CodeIgniter](https://codeigniter.org.tw/)。

在教完之後，會讓大家把之前的留言板從純 PHP 用 CodeIgnier 這套框架改寫，就可以比較一下兩者之間有哪裡不一樣。

[HW24 作業連結](/homeworks/week24/be)

#### 自我檢測

- [ ] 學過兩套不同語言的框架之後，我能發現其中的異同
- [ ] 我理解為什麼會需要框架
- [ ] 我能透體驗到純 PHP 跟有框架的差別在哪裡

### 前端框架（四）

最後一週裡面我們將用 redux 來解決非同步操作的問題，讓大家知道如何利用它與 redux-promise 來解決非同步的一些問題。

指定教材：

1. 第二期 Redux part 1
2. 第二期 Redux part 2
3. 第二期 React + Redux 補充：super
4. 第二期 React + Redux 補充：this
5. 程式導師實驗計畫：Lesson 13-2 之 React + Redux 下

[HW24 作業連結](/homeworks/week24/fe)

#### 自我檢測

- [ ] 我知道 Redux 如何搭配 middleware 解決非同步操作的問題

### 第二十五週（09/30 ~ 10/06）：Final Project

### 第二十六週（10/07 ~ 10/13）：Final Project


# Final Project

正式的課程就到這邊告一段落了，你學了前端後端與程式相關的基礎知識，接下來需要做一些作品累積經驗，因此接下來幾週都會讓同學做出屬於自己的 Final Project，建議可以與其他人合作，但也可以選擇一個人單打獨鬥。

根據第一期的經驗，其實找人合作會是比較好的選擇（第二期因進度問題沒有 Final Project）。

如果大家一點靈感都沒有的話，可以參考以下幾個提案（但有自己的想法當然是最好的）：

## 留言板

既然我們這次的課程做了這麼多個留言板，不如把留言板給做到極致吧！

你可以做一個「讓大家都能申請留言板」的系統，就像是無名小站那樣，每個人都可以申請帳號，有帳號之後可以開設自己的留言板，然後可以自己選擇要不要開放訪客來留言，不開放的話就預設是只有會員可以留言。

點下去會員的帳號之後還可以看到會員個人資料，或者是直接跳到會員自己的留言板去（如果有的話）。

除此之外，如果你想走前端的話，可以試著把前端改成 SPA 試試看！

## 論壇系統

建立一個論壇系統，能有不同的板塊（討論區），例如說：

1. 閒聊
2. 購物
3. 程式相關主題

在不同板塊底下都可以發表文章，除了發表文章以外，下面也能夠有回覆。

或者是你也可以把板塊當成是 Tag 而已，在同一個頁面就可以看到所有的文章，如果你想找範例的話，可以參考：http://react-china.org/

## 購物網站

做個簡單的購物網站，可以參考任何一家市面上的電商，例如說這個我隨便找的電商：https://www.yuyufarm.com/

重點是除了前端以外，你必須要有後台能夠讓管理者登入，並且管理商品（例如說調整價錢、上傳圖片、調整順序等等），可以先完成一個最簡單的版本，之後再慢慢加強。

## 社交網站

可以直接參考 Twitter：https://twitter.com/?lang=zh-tw

你可以 follow 人，然後就能夠看到他的動態，也可以自己 po 動態，會出現在自己的 follower 的牆上。

總之呢，關於 Final Project，沒有靈感的話可以先從自己常用的東西開始下手，先打造出一個最簡單的版本再慢慢加強。也可以盡量去找一些第三方的 API 來串，增加自己串 API 的經驗，例如說：

1. Firebase
2. Google Map API
3. Google Login, Facebook Login
4. 金流

## 繳交 Final Project

請準備好以下幾個東西並且於第二十七週 po 到 Slack 裡面：

1. 作品網址（沒主機或是 deploy 碰到問題的可以來找我）
2. 5 分鐘以內介紹作品的短片，上傳到 YouTube（可以不用露臉，你不想出聲的話後製加文字也可以）
3. GitHub 網址（請確保你有把一些敏感的資訊例如說資料庫密碼之類的拿掉）
4. 做 final project 的心得（看你想寫在哪裡都可以）

## 自我練習

Codewar 是一個程式解題平台，靠這些題目，可以訓練自己對語法的熟悉度以及維持手感，更進階的題目則是能夠訓練思考邏輯以及解題方法。

我依照難度整理出了一些題目，平常做作業卡關或是沒事做的時候，都可以解一下這些題目。

[Codewar 題目列表](/codewar.md)

## Tech Stack

這邊列舉這堂課程用到的所有工具。

1. 課程直播：YouTube
2. 群組聊天：Slack
3. 交作業：GitHub + GitHub Classroom + Travis CI 自動批改
4. 練習題目：Codewar
5. 簽到系統：GitHub Webhook + Slack GitHub App + AWS Lambda + Google Sheet API

