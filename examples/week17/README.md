# 注意事項

提示：在寫完作業之後看效果最佳，沒寫作業前請不要看

## Callback queues

這一週附上的 event loop 影片應該就講的滿清楚的了，但大部分同學都會忽略掉一個小細節。

以下面的程式碼為例：

``` js
setTimeout(() => {
  console.log('hello')
}, 0)
```

執行流程是什麼？

是先把這整段放到 call stack 裡面去執行，所以才會執行 setTimeout 這個 function。然後 setTimeout 是 web API，呼叫瀏覽器幫忙設定一個 0 ms 後到期的定時器，到期之後就會把第一個參數：`() => {console.log('hello')}` 放進去 callback queues。

這邊最多人誤解的點就是會把 `setTimeout(...)` 整段丟進去 callback queues，不是這樣的，只會把第一個參數丟進去而已。你必須先執行 setTimeout 才能設定計時器，才能把第一個參數丟進去 callback queues。

設定完成以後從 call stack pop 出來，main 也 pop，stack 清空，把 `() => {console.log('hello')}`  丟進去 call stack，執行之後發現這個 function 裡面還要呼叫 `console.log('hello')`，所以把 console.log 丟進去 call stack，印出 hello，pop，然後原本的 function 也沒東西要執行了所以也 pop，stack 清空，結束。


## Function expression 的初始化

這邊可以參考我跟同學們的討論：https://github.com/Lidemy/mentor-program-3rd-ClayGao/pull/24
