# 注意事項

提示：在寫完作業之後看效果最佳，沒寫作業前請不要看

## 關於 gulp 停止更新的消息

假消息，沒這種事。

作者只在推特上這樣說：

> With the gulp 4.0.0 official release - it's time for me to find my next journey. Maybe a product, maybe some @reasonml consulting!? Excited to see the opportunities available

並沒有明確指出自己不更新 gulp 了，gulp 官方也完全沒有任何相關消息。不要被錯誤的解讀給誤導了。


## Webpack 與 gulp 的差異

gulp 裡面有很多 task，而每一個 task 其實都可以連結到某個特定的功能，而且都要倚靠其他函式庫才能執行。

什麼意思？

例如說把 scss 轉成 css，gulp「本身」做得到嗎？做不到，要使用 gulp-sass 之類的 plugin 才能做得到。

所以 Webpack 與 gulp 的差異這個問題其實就有點像是在問「gulp 與 sass」的差異一樣，問得有點莫名其妙。

但為什麼還是會有這種問題出現呢？因為 Webpack 太過強大了，導致很多我們原本使用 gulp 的原因都可以被 Webpack 取代。gulp 是個必須完全倚靠 plugin 才能執行工作的 library，而 Webpack 除了最主要的打包功能以外，也支援了一大堆 plugin。

假設我們原本用 gulp 是為了把 ES6 轉成 ES5，把 scss 轉成 css，然後用 Webpack 把東西打包在一起。所以我們 gulp 裡面就必須使用幾個不同的 plugin。

但是前面提過了，Webpack 本身就有支援 plugin，所以它的一些 plugin 可以在打包的時候「順便」把程式碼裡面的 ES6 變成 ES5，把 scss 轉成 css。如果你原本在 gulp 就是用這些東西，那當然可以被 webpack 取代掉。

那什麼情形底下才不會被取代掉？

例如說你每次打包以前都必須 call API 拿到一個設定檔，建立 config.js，打包結束以後要再次 call API，告訴 server 你打包完成了。

你純用 Webpack 基本上達不到這個功能，因為 Webpack 支援的功能都跟「打包」有關，例如說用 babel 轉譯程式碼，是因為程式碼是 Webpack 可以載入的資源之一，sass 同理，圖片優化也同理，那些都是「資源」。但是 call API 不是什麼資源，所以 Webpack 本身做不到。

但 gulp 身為一個管理 task 的工具，你自己寫一個 task 就行了，上面講的場景用 gulp 就能輕鬆做到。

最後再強調一次，gulp 是管理 task 的工具，webpack 是拿來打包程式碼的工具，或許一般情形下兩個工具可以做到的事差不多，但他們本質上是完全不一樣的。





