# 2. 使用 webpack 建置 Build System

處理我們的問題時，webpack 的解決方案有：

1. 轉譯 ES6/ES7/JSX 語法              => 使用 Babel
2. 自動關連所有模組，並將它們包成一支程式 => 使用 webpack
3. 將程式執行 uglify 做壓縮            => 使用 webpack uglifyjs plugin
4. 開發時，提供 Hot Reload 功能        => 使用 webpack-dev-server 和 React Hot Loader
5. 設定檔必須區分開發環境和正式環境      => 撰寫不一樣的 webpack config，package.json 提供不一樣的指令


## :spaghetti: 步驟

### 1. 使用 npm 初始專案

```
$ npm init
```

### 2. 安裝建置工具

###### a. 安裝 webpack

```
$ npm install -D webpack webpack-dev-server
```

我們使用 webpack-dev-server 代替原本靜態檔案使用的 live-server 或 http-serevr。

###### b. 安裝 babel

[Babel](http://babeljs.io/) 是用來將 ES6/ES7/JSX 等進階語法轉譯成 ES5 的工具，所以我們下載以下六個套件：

```
$ npm install -D babel-cli babel-core babel-laoder babel-preset-es2015 babel-preset-stage-0 babel-preset-react
```

1. babel-cli 可以讓直接下 command 執行 ES6/ES7/JSX 檔案，如：`$ babel-node source.babel.js`
2. babel-core 是 Babel 的核心程式庫，所有 babel- 相關程式庫（babel-cli, babel-loader）都依賴它
3. babel-loader 是 webpack 的 loader 套件，當 webpack 在建置原始碼時，必須倚靠它讓 babel 轉譯原始碼
4. babel-preset-es2015, babel-preset-stage-0, babel-preset-react 這三個套件分別是轉譯不同語法會需要用到的工具

###### c. 安裝第三方程式庫

因為專案依賴的第三方程式庫不再是從 cdnjs 中抓取，全部統一由 npm 管理：

```
$ npm install -S react react-dom redux react-redux immutable
```

另外，webpack-dev-server 雖然有 hot reload 的功能，但是在開發 React 時，我們很常需要保留元件的狀態，不希望因為 reload 而讓元件狀態流失（例如：當我們開發第五頁時，因為 reload 無法保留狀態而讓頁面跳回第一頁，這真的是非常的困擾！）；所以我們需要 React Hot Loader 這樣的套件幫助我們。

```
$ npm install -S react-hot-loader@3.0.0-beta.1
```

### 3. 建置專案設定檔

我們需要將專案環境區分為 development 和 production，因此必須考量這兩種環境設定 webpack：

###### a. 開發環境

參考這份 [commit](https://github.com/shiningjason1989/react-build-systems-tutorial/commit/0d77246521291c0c3adb702df18daf875564fc2b)：

1. 新增 .babelrc，這份檔案是 Babel 的設定檔
2. 新增 webpack.config.dev.js，這份是 webpack 設定檔（註：我習慣用 .dev/.prod 區分檔案環境）
3. 新增 server.dev.js，這是開發用的本地端伺服器
4. 在 package.json 加入 start 指令，因此之後可以用 `$ npm start` 開啟本地端伺服器
5. 在 main.js 加入 hot reload 的程式，並且判斷只有 development 會執行

###### b. 正式環境

參考這份 [commit](https://github.com/shiningjason1989/react-build-systems-tutorial/commit/72e5f4edb79c7c8a9c843979821a0351dae6cee4)：

1. 新增 webpack.config.prod.babel.js，因為設定檔是由 ES6 撰寫，因此需要加 .babel，讓 webpack 指令可以自己轉譯
2. 在 package.json 加入 build 指令，因此之後可以用 `$ npm run build` 打包正式檔案


## :wine_glass: 參考連結

###### Webpack

1. [Webpack — The Confusing Parts](https://medium.com/p/58712f8fcad9)
2. [Beginner’s guide to Webpack](https://medium.com/p/b1f1a3638460)
3. [Webpack’s HMR & React-Hot-Loader — The Missing Manual](https://medium.com/p/232336dc0d96)

###### React Hot Loader 3

1. [TodoMVC](https://github.com/gaearon/redux-devtools/tree/master/examples/todomvc)
2. [React Hot Boilerplate](https://github.com/gaearon/react-hot-boilerplate/tree/next)


## :rocket:

｜ [主頁](../) ｜ [上一章](../1_default) ｜ 完 :mortar_board: ｜
