# 作業

## hw1：Gulp

gulp 就是用來把原本的工作流程自動化的，現在請你寫一個 gulp 的設定檔，依序完成以下事情：

1. 把 scss 編譯成 css
2. 把 js 用 babel 轉成 ES5 語法
3. 把 css 以及 js 壓縮

## hw2：Webpack

Webpack 的目的其實就是讓前端也能夠像 Node.js 那樣，支援 `module.exports` 以及 `require`。

為了讓你體驗 Webpack，在這個作業中你只要做以下簡單的幾件事情就好：

1. 寫一個檔案叫做 `utils.js`，裡面有一個叫做 `add` 的 function
2. 寫一個檔案叫做 `index.js`
3. 在 `index.js` 裡面引入 `add` 這個 function 並且輸出`add(10, 3)`
4. 用 Webpack 把以上檔案打包產生出 `bundle.js`

## hw3：Todo List

之前在第十三週時已經讓大家寫過一個 todo list，這次我們要來點不一樣的。

其實有一種寫法非常直覺，而且寫起來非常方便，那就是「只要資料更新，我就全部重新 render」。

什麼意思呢？之前我們寫第七週的作業時，新增的話就是新增一筆資料，然後在 DOM 上面 append，刪除的話就是直接把 DOM 上面的那筆元素刪掉。

可是其實還有另外一種做法，用程式碼示意的話會長這樣：

``` js
var list = []
function addTodo(todo) {
  list.push(todo)
  render()
}

function removeTodo(id) {
  list = list.filter(item => item.id !== id)
  render()
}

function render(){
  $('.todo-list').empty()
  $('.todo-list').append(list.map(item => `<li>${todo.content}</li>`)) // 示意
}
```

每次只要資料有更新，你就更新資料就好，然後把畫面全部重新渲染。如此一來的好處就是你完全不用管 DOM，你只要更新程式裡面的資料即可。

現在請你把之前實作的 Todo list 改成這種形式，更新資料並且 re-render。

## hw4：簡答題

1. gulp 跟 webpack 有什麼不一樣？我們可以不用它們嗎？
2. hw3 把 todo list 這樣改寫，可能會有什麼問題？
3. CSS Sprites 與 Data URI 的優缺點是什麼？

請將答案寫在 [hw4.md](hw4.md)。

## 挑戰題

把我們用 Gulp 做的事情：

1. 把 scss 編譯成 css
2. 把 js 用 babel 轉成 ES5 語法
3. 把 css 以及 js 壓縮

全都改成用 Webpack 來做。

## 超級挑戰題

實作出一個超級陽春的打包工具叫做 `easy-bundle`，只要指定 entry point 的檔案就可以進行打包。

假設我現在一個檔案叫做 `utils.js`，裡面有一個叫做 `add` 的 function，然後有另一個檔案叫做 `index.js`，並且在 `index.js` 裡面引入 `add` 這個 function 然後輸出`add(10, 3)`

範例：

```
node easy-bundle.js index.js // 開始打包，指定入口點為 index.js
// 產生出一個 bundle.js
```

簡單來說，就是實作出一個超級陽春版的 Webpack。
