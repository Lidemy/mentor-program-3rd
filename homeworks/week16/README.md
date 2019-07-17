# 作業

## hw1：CSS 預處理器

自從學會 CSS 預處理器之後，寫 CSS 的複雜度一下子降低了很多，一方面是巢狀 CSS 可以很簡單的實作出來，另一方面是多了變數這個好用的東西。

現在請你把以前寫的 CSS 用你自己挑的 CSS preprocessor（LESS, SASS, Stylus）來改寫（要選哪一個作業都行，隨便選一個就好，只是想讓大家熟悉一下預處理器的用法） 。

## hw2：實作出 Stack 與 Queue

請你實作出`Stack`跟`Queue`兩個 Function（或是 Class），讓以下程式碼可以順利執行：
（禁止使用內建函式`push`與`pop`）

``` js
var stack = new Stack()
stack.push(10)
stack.push(5)
console.log(stack.pop()) // 5
console.log(stack.pop()) // 10

var queue = new Queue()
queue.push(1)
queue.push(2)
console.log(queue.pop()) // 1
console.log(queue.pop()) // 2
```

## hw3：HTTP Cache

請閱讀這篇文章：[循序漸進理解 HTTP Cache 機制](https://blog.techbridge.cc/2017/06/17/cache-introduction/)來理解 HTTP Cache 機制。

## hw4：簡答題

1. CSS 預處理器是什麼？我們可以不用它嗎？
2. 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。
3. Stack 跟 Queue 的差別是什麼？
4. 請去查詢資料並解釋 CSS Selector 的權重是如何計算的（不要複製貼上，請自己思考過一遍再自己寫出來，沒有很完整也行）

請將答案寫在 [hw4.md](hw4.md)。

## 挑戰題

去查詢什麼是 PostCSS 並使用它，順便解釋為什麼我們需要 PostCSS。

## 超級挑戰題

去學習兩種新的資料結構：Deque 與 Priority queue，並且用 JavaScript 來實作。
