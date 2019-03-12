# 作業

## hw1：短網址系統設計

請你畫出一張短網址服務的後端系統架構圖，越詳細越好，可以考慮到如何增進效能、scaling 以及備份資料。

沒靈感的話可參考：[短网址(short URL)系统的原理及其实现](https://hufangyun.com/2017/short-url/)、[Design TinyURL](https://leetcode.com/problems/design-tinyurl/description/)

圖片可參考下圖（這是一張 Mobile 與 Web 前端如何跟後端溝通的圖，這示意圖只是大概講一下應該要怎麼畫，但你實際畫出來一定跟這個長得不一樣）：
![](http://ithelp.ithome.com.tw/upload/images/20161211/20091346nyV3Lex42r.jpg)

## hw2：部署

請把你之前寫的 PHP 程式部署到自己的機器上面，並且對應到自己購買的網域。 

可參考其他同學的心得（特別感謝 @yuchun33 跟 @futianshen ）：
1. [部署 AWS EC2 遠端主機 + Ubuntu LAMP 環境 + phpmyadmin ](https://github.com/Lidemy/mentor-program-2nd-yuchun33/issues/15)
2. [一小時完成 VPS (Virtual Private Server) 部署 ](https://github.com/Lidemy/mentor-program-2nd-futianshen/issues/21)

## hw3：簡答題

1. 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
2. 什麼是資料庫的 lock？為什麼我們需要 lock？
3. NoSQL 跟 SQL 的差別在哪裡？
4. 資料庫的 ACID 是什麼？

請將答案寫在 [hw3.md](hw3.md)。

## 挑戰題

在主機上使用 nginx 來當伺服器而不是 Apache。

## 超級挑戰題

使用 Docker 把 PHP 留言板以及資料庫都包進去，並且使用 Docker 來部署。
