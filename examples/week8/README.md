# 注意事項


## URL encode

大概九成九的同學都有犯這個錯，但我沒有特別點出來，我想說一次點出來比較有效率。

這個錯是什麼呢？就是你在新增留言時這樣寫：

``` js
`content=${content}`
```

你把留言內容直接放進去，然後就 POST 出去了。

問題在哪邊？問題在於如果我想要發表的內容是 `1&a=2` 怎麼辦？就會變成 `content=1&a=2`，最後出來的 content 就只有 1 而已，因為後半段被判定成另外一個參數。

解法是「編碼」，這邊 JS 有現成的函式可以用：[encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)。編碼的意思就是把一些特殊字元給編碼成另外一種表示方法：

``` js
encodeURIComponent('1&a=2') // 1%26a%3D2
```

它會把那些干擾到的部分用其他方式取代掉，在 Server 時則會自動轉成正確地表示方法，所以內容還是會是正確的，這邊不用擔心。

這就是新增留言時必須特別注意的地方。

## Request 的重新使用

有很多人在留言板那題新增完留言之後都會重新讀取一次，有些人可能以為節省資源，就會沿用同一個 request：

``` js
request.open('/posts?content=123')
request.send()

request.open('/posts')
request.send()
```

這樣是不對的，而且會造成一些問題。最常見的就是第一個 request 會被取消掉，因為還沒發出去就要發第二個了。

正確的解法是每一個 request 就 new 一個新的 XMLHttpRequest，你直接包成 function 就好了：

``` js
function addPost(content) {
  const xhr = new XMLHttpRequest()
  xhr.open()
  xhr.send()
  xhr.onload = function() {
   //...
  }
}
```


這樣就不會有問題了。

## Race condition

（這一段要講的觀念超級無敵重要，不懂的話請在 slack 提問）

有些人可能聽過這名詞，但不知道是什麼，剛好這一次作業就能夠讓你體會到。誠如我上面所說的，很多人在留言板那題都會在新增留言之後立刻抓取新的留言：

``` js
newRequest.open('/posts?content=123')
newRequest.send()

getRequest.open('/posts')
getRequest.send()
```

那結果會是什麼？

> 我先新增留言，再抓取留言，這樣應該沒什麼問題吧？

不，問題可大了。

你 Request 先發歸先發，但「先發不代表會先到達」，這點超級重要。所以兩個 Request 如果第二個先到了，那你拿到的就還是舊的留言。

再來，儘管第一個先到，但你其實是「立刻」就發了第二個 Request，兩個相差的時間可能只有 1ms 而已，這根本不是什麼差距。而 Server 處理第一個新增留言的時間很有可能大於這個差距，因此你新增了留言沒錯，但你第二個 Request 拿到的東西依然是舊的。

簡單來說好了，「從你電腦發 Request 到 Server 的時間」跟「Server 的處理時間」以及「從 Server 發 Response 傳到你電腦的時間」這三者都是「無法估計」的，所以什麼事都有可能發生，有可能快有可能慢。

接下來我們直接假設幾種狀況就好。

### 狀況一

1. 先發第一個 request，並且第一個 request 先抵達
2. 第二個 request 抵達 server 的時候，第一個 request 已經處理完成並且傳回 response
3. 第二個 response 抵達

這是你原本心裡所想的情況，新增完留言之後你才抓取留言列表，而你拿到的就已經是最新的列表，有你剛剛留的留言。

### 狀況二

1. 先發第一個 request，並且第一個 request 先抵達
2. 第二個 request 抵達 server 的時候，第一個 request 還在處理
3. 回傳第二個 response，拿到當下的留言
4. 留言新增完成

在這種情形下，因為第二個 response 處理的時候，你其實是還沒有新增留言的，因此拿到的結果會是舊的，不會有你剛剛新增的留言。

除了以上兩種，還可以再假設超級多種，而且每一種情況都有可能發生。

或是再舉一個例子，我這樣寫：

``` js
for(let i=1; i<=5; i++) {
  let xhr = new XMLHttpRequest()
  xhr.open('/posts/' + i)
  xhr.send()
  xhr.onload = function() {
    console.log('response: ' + i)
  }
}
```

其實就是拿第一篇到第五篇文章的內容，那請問我最後 log 出來的結果會是什麼？

12345 嗎？

不是，結果是我不知道。有可能是 12345，也有可能是 54321，甚至是 13542，每一種排列組合都有可能。原因就是我上面講過的：「從你電腦發 Request 到 Server 的時間」跟「Server 的處理時間」以及「從 Server 發 Response 傳到你電腦的時間」這三者都是「無法估計」的。

所以如果我拿出下面那段程式碼：

``` js
newRequest.open('/posts?content=123')
newRequest.send()

getRequest.open('/posts')
getRequest.send()
```

問你說結果會是什麼，答案是：「不知道」。

這種情況就叫做 race condition，最後的產出完全憑當下他們競爭的結果，你在事前無法預料結果是什麼。你有可能先新增留言，也有可能先拿到結果，每一種都有可能，所以結果變得無法預期。

所以這種情況當然要避免。

那怎麼避免？最好的方法當然就是：「確保第一個 request 處理完成時，我才發送第二個 request」。

那我怎樣才知道第一個處理完了？當然就是從我拿到第一個的 response 的時候，我自然就知道第一個處理完了，不然我不可能拿得到 response 嘛。

所以呢，如果你要先新增文章，然後拿到最新的文章列表，你要這樣寫：

``` js
newRequest.open('/posts?content=123')
newRequest.send()
newRequest.onload = function() {
 getPosts() // 這邊才去拿文章列表
}

function getPosts() {
  getRequest.open('/posts')
  getRequest.send()
}

```

這樣是唯一能保證順序的方法。

之前還有看過同學偷吃步：

``` js
newRequest.open('/posts?content=123')
newRequest.send()

setTimeout(() => {
  getRequest.open('/posts')
  getRequest.send()
}, 1500) // 等個 1.5 秒

```

但這樣依然無法保證結果是正確的，因為我們可以假設第一個 request 處理完成時已經超過 1.5 秒了（而且這完全有可能發生），這樣你拿到的文章列表依然還是錯的。

牽扯的網路的東西都是非同步的，而非同步就代表著順序是無法被預知的。你只能靠著自己寫 code 來掌握正確的順序。

## 有關參考資料

有些我附的資料其實我本來就沒有預期你全部看懂，例如說這一週放的「RESTful API Design by TritonHo」，我只是想大家有個粗淺的理解而已，至少看過一些名詞有個印象，你不必完全理解也沒關係，只要大略看過去就好。

## 第一題獎項機率

first 5%  
second 20%  
third 30%  
none 40%  
error 5%  
