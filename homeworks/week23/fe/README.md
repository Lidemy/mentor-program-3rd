# 作業

## hw1：SPA 部落格加強版

延續上週的作業，我們這次要結合 Redux，把留言板變成一個完整的 SPA（Single Page Applicaton），並且把有 API call 的地方都改成用 redux-promise 來實作，除了這些以外呢，也希望你能新增一些功能：

1. 刪除文章
2. 編輯文章
3. 加入登入功能，要登入之後才能發文、刪除跟修改文章
3. 可以用 Markdown 格式來撰寫文章（加分題）

登入的帳號密碼都固定為 user01

API 格式：

endpoint：http://45.55.26.18:3310  
使用說明：https://github.com/typicode/json-server

```
POST /login {username, password} 登入
GET  /me 如果有登入會回傳現在的使用者資料
GET  /logout 登出
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
4. Redux 如何解決非同步（例如說 call API 拿資料）的問題
