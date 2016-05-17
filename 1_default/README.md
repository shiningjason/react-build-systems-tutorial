# 第一章. 當前端還沒有 Build System 時

在以前，當我們沒有建置工具時，所有的 JS/CSS 檔都必須從 CDN 抓取，並將 URL 設定在 [index.html](https://github.com/shiningjason1989/react-quick-tutorial/blob/master/level-24_immutablejs/index.html) 上：

```html
<script src="a.js"></script>
<script src="b.js"></script>
<script src="c.js"></script>
```

因為要手動管理這些檔案和依賴關係，我們很難將程式寫的模組化。

但是當 CommonJS Modules 或是 ES6 Modules 這樣的規格出來以後，撰寫模組化的程式就方便多了（你可以從這份 [commit](https://github.com/shiningjason1989/react-build-systems-tutorial/commit/2ac2dccf0b1988b45f1b1c605977b882b43db21b) 中看到 ES6 Modules 的前後差別）。

```js
/* a.js */
import b from './b.js';     // 優點 1. 幫我們管理模組的依賴關係
export default { text: b }; // 優點 2. 每個模組的變數也不會與 global 變數

/* b.js */
export default const b = 'hello, world';

/* index.html */
<script src="bundle.js"></script> // 優點 3.
                                  // 可以使用工具將所有相依的模組打包，
                                  // 瀏覽器只需要請求一支檔案，減少負擔，
                                  // 而且你不再需要在 index.html 手動管理哪些檔案要引入，哪些不用
```

只不過，這樣的語法現今瀏覽器是不支援的，我們需要工具協助我們處理以下問題（這些問題皆是為了開發便利而付出的代價）：

1. 轉譯 ES6/ES7/JSX 語法
2. 關連所有相依模組，並將它們打包成一支程式（a.js, b.js, c.js => bundle.js）
3. 執行 uglify，壓縮打包程式（bundle.js => bundle.min.js）
4. 提供 Hot Reload 功能，讓開發者有所見即所得的開發體驗
5. 將設定檔區分為 development 和 production

> :bowtie:：因此接下來，我將會筆記每套 Build System 是如何處理這些前端開發問題的，歡迎大家與我討論囉 :beers:


## :rocket:

｜ :raising_hand: [我想問問題](https://github.com/shiningjason1989/react-build-systems-tutorial/issues/new) ｜ [主頁](../../) ｜ [下一章. 使用 webpack 建置 Build System](../2_webpack) ｜
