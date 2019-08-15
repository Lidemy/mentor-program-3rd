# 作業

## hw1：SPA 部落格最後加強版

這我們要把有 API call 的地方都改成用 redux-promise 來實作，除了這些以外呢，也希望你能新增一些功能：

1. 可以用 Markdown 格式來撰寫及顯示文章

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

1. Redux 如何解決非同步（例如說 call API 拿資料）的問題
