# 作業

## hw1：SPA 部落格

在這個作業中，我們要把上一週的部落格範例變得更完整一點，請你加入以下功能：

1. 美化部落格主頁
2. 美化部落格文章頁面
3. 使用 React Router
4. 串接 API
5. 加入發文的功能（無須登入）

API 格式：

endpoint：http://45.55.26.18:3310  
使用說明：https://github.com/typicode/json-server

```
POST    /posts {title, author, body} 新增 posts
GET     /posts 取得所有 post
GET     /posts/:id 取得某個 post
DELETE  /posts/:id 刪除 post
PUT     /posts/:id {title, author, body} 更新 post
```


## hw2：簡答題

1. React Router 背後的原理你猜是怎麼實作的？
2. SDK 與 API 的差別是什麼？
3. 在用 Ajax 的時候，預設是不會把 Cookie 帶上的，要怎麼樣才能把 Cookie 一起帶上？
