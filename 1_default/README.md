# 第一章. 當前端還沒有 Build System 時

在以前，當我們沒有建置工具時，所有的 JS/CSS 檔都必須分別從 CDN 抓取，並將 URL 設定在 [index.html](https://github.com/shiningjason1989/react-quick-tutorial/blob/master/level-24_immutablejs/index.html) 上，我們很難將 JS 區分模組。

但是當 CommonJS Modules 或是 ES6 Modules 這樣的規格出來以後，我們就可以撰寫這樣的程式（你可以從這份 [commit](https://github.com/shiningjason1989/react-build-systems-tutorial/commit/2ac2dccf0b1988b45f1b1c605977b882b43db21b) 中看到以前跟現在的差別）；只不過這樣的語法現今瀏覽器是不支援的，因此我需要一些工具幫我們處理以下問題：

1. 轉譯 ES6/ES7/JSX 語法
2. 自動關連所有模組，並將它們包成一支程式（a.js, b.js, c.js => bundle.js），這讓瀏覽器請求可以不用那麼多次
3. 程式執行 uglify 做壓縮（bundle.js => bundle.min.js）
4. 開發時，提供 Hot Reload 功能，讓你有所見即所得的開發體驗
5. 設定檔必須區分開發環境和正式環境

> :bowtie:：因此接下來就是每個 Build System 處理這些問題的介紹囉！


## :rocket:

｜ [主頁](../) ｜ [下一章. 使用 webpack 建置 Build System](../2_webpack) ｜
