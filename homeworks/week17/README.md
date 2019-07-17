# 作業

## hw1：Event Loop

在 JavaScript 裡面，一個很重要的概念就是 Event Loop，是 JavaScript 底層在執行程式碼時的運作方式。請你說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```

請將答案寫在 [hw1.md](hw1.md)。

## hw2：Event Loop + Scope

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```

請將答案寫在 [hw2.md](hw2.md)。

## hw3：Hoisting

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
var a = 1
function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn2()
  console.log(a)
  function fn2(){
    console.log(a)
    a = 20
    b = 100
  }
}
fn()
console.log(a)
a = 10
console.log(a)
console.log(b)
```

請將答案寫在 [hw3.md](hw3.md)。

## hw4：What is this?

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```

請將答案寫在 [hw4.md](hw4.md)。

## hw5：簡答題

1. 這週學了一大堆以前搞不懂的東西，你有變得更懂了嗎？請寫下你的心得。

請將答案寫在 [hw5.md](hw5.md)。

## 挑戰題

看完 [Dmitry Soshnikov 這個部落格](http://dmitrysoshnikov.com/)的兩個系列：ECMA-262-3 in detail 與 ECMA-262-5 in detail。

## 進階挑戰題

大略讀過 [ES3](https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf) 文件（共 188 頁），至少知道裡面大概有哪些東西以及專有名詞。
