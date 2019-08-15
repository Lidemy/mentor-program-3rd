# 作業

## hw1：SPA 部落格加強版

延續上週的作業，我們這次要把 Redux 給加進來。就如同我們教過的一樣，Redux 通常適合用在儲存「global 的狀態」，因此在這個作業中你必須增把 Navbar 的部分改成用 Redux 來處理，所以你應該會在 store 裡面儲存現在所在的分頁，而且還需要建立一個 action 來改變分頁的狀態。

除了這些以外呢，也希望你能新增一些功能：

1. 發表文章
2. 刪除文章
3. 編輯文章

API 格式：

endpoint：https://qootest.com   
使用說明：https://github.com/typicode/json-server

```
POST /posts {title, author, body} 新增 posts
GET  /posts 取得所有 post
GET  /posts/:id 取得某個 post
DELETE /posts/:id 刪除 post
PUT /posts/:id {title, author, body} 更新 post
```


## hw2：簡答題

1. 為什麼我們需要 Redux？
2. Redux 是什麼？
3. Single Page Application 是什麼？有哪些頁面一定要用這個架構去設計嗎？
