# 注意事項

## JSON.parse

我有看到很多人在程式碼裡面一拿到資料就直接對 response 做 `JSON.parse`，但若是 response 不是一個合法的 JSON 字串，會回傳錯誤：

``` js
let str = '[123'
let json = JSON.parse(str)
// VM174:1 Uncaught SyntaxError: Unexpected end of JSON input
``` 

所以最完善的做法其實是外面加個 try catch：

``` js
try {
  let json = JSON.parse(str)
} catch(e) {
  console.log(e) // 錯誤處理
}
```

然後大家千萬不要搞混「JSON 格式的字串」跟 JavaScript Object 這兩個東西了。當你利用 xhr 拿到 response 的時候，它一定是一個字串，請大家記住這一點。

在我們串接 API 的時候，它除了是字串以外，還是一個「JSON 格式的字串」，這是什麼意思呢？

``` js
const obj = {
  a: 1
}
```

obj 是一個 JS 的物件對吧？當我們想要把一個 JS 的物件變成「JSON 格式的字串」時，可以利用 `JSON.stringify` 這個方法：

``` js
const obj = {
  a: 1
}
console.log(JSON.stringify(obj))
/*
  {"a":1}
*/
```

所以 `{"a":1}` 就是一個 JSON 格式的「字串」，那要怎麼把這個字串變回 JS 物件？沒錯，就是 `JSON.parse`：

``` js
const jsonString = '{"a":1}'
console.log(JSON.parse(jsonString))
/*
  {a: 1} // JS 物件，不是字串
*/
```

你在 log 出來的時候就可以在 devtool 上面看出這是一個「字串」還是一個「物件」，這點絕對要分清楚。所以為什麼我們每次把結果接回來以後都要用 `JSON.parse`？因為 xhr 回傳的 response 內容是純文字，是字串，所以要用 `JSON.parse` 把字串變成 JS 物件，我們才能操作。

## 迴圈的次數

這週的作業第一題是要大家列出前十筆資料，有很多人拿到資料以後這樣子寫：

``` js
for (let i = 0; i < 10; i += 1) {
  console.log(`${data[i].id} ${data[i].name}`);
}
```

但這是不對的。因為 API 有可能回傳比十筆更少的資料（例如說資料就只有五筆，那 API 怎麼會回傳十筆？），所以在這個時候，請相信你的 API，直接把後端回傳的資料印出來就好：

``` js
for (let i = 0; i < data.length; i += 1) {
  console.log(`${data[i].id} ${data[i].name}`);
}
```

這樣就能保證印出的東西是正確的了，儘管資料沒有十筆也不會有問題。

這時候你可能會問說：「那如果 API 不小心回傳 13 筆怎麼辦？」

那就代表 API 有問題，是後端 API 那邊需要修正，而不是前端這邊需要修正。以這一週串的 API 來說，當我們傳 `_limit=10` 的時候，API 就應該回傳至多十筆資料。

## status code

我看到有很多人都會把 status code 直接寫死：

``` js
if (response.statusCode === 200) {
  //...
}
```

但這也是有問題的。

如果你還記得的話，2 開頭的 status code 都是代表成功的意思。所以哪天 API 的 status code 如果從 200 變成 201，你的程式就掛了，就會誤判為不成功，但其實是成功的。

所以你在查資料的時候，應該會看到很多人這樣子寫：

``` js
if (response.statusCode >= 200 && response.statusCode < 300) {
  //...
}
```

應該判斷 status code 在 2XX 這個範圍裡面，而不是寫死只判斷 200，這樣才是比較好的方法。

## 變數跟函式命名

在 JS 裡面命名變數或是函式時，一般來說都會用駝峰式命名法，詳情可以自己去查一下
或是可以在 eslint 把這個規則打開：https://eslint.org/docs/rules/camelcase 。

這一篇寫得不錯，大家可以參考一下：https://juejin.im/entry/599d433cf265da24797b5c66

然後命名盡量取得有意義一點，什麼 `a`、`b` 這種取名就不必了（除非你剛好在做一個 add 的函數，那這樣是可以的）。想要練習這塊可以多看別人的 code，看看別人怎麼命名。

## process.argv 補充

看到有些同學卡在 process.argv 的使用，幫大家稍微再講解一下。argv 的全名應該是 `argument variables`，簡單來講就是參數。

那是什麼的參數呢？

除了 function 可以傳參數以外，你在打指令的時候也可以下參數  
舉例來說：`git commit -am "test"`  
`git` 是你要呼叫的程式本身，後面的 `commit -am "test"`都是參數  
在 Node.js 裡面，就提供給我們 `process.argv` 來拿使用者下的參數

實際內容是什麼呢？我們來觀察一下  
我開一個檔案叫做 a.js，內容只有一行：`console.log(process.argv)`  
然後我下指令：`node a.js read 999`，log 出來的內容是：  

```
[
  '/Users/huli/.nvm/versions/node/v12.2.0/bin/node',
  '/Users/huli/Documents/lidemy/demo/a.js',
  'read',
  '999'
]
```

仔細看就會發現其實就是你指令的每一個用空白隔開的部分  
差別只在於這邊幫你把絕對路徑給加上去了

總之呢，process.argv 其實就是拿到你在打指令時候的每一個部分而已  
因為第四週作業你一定是下 `node a.js xxxx`，所以你才會看到大家都從 `process.argv[2]` 開始拿

`process.argv[0]` 會是 node 的位置，`process.argv[1]` 會是 a.js 的位置，所以才會從 2 開始拿  

它就是個陣列而已，別想的太複雜了。

