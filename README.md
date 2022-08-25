# js-22

- [Webpack](https://webpack.js.org/)

  - точка входа
  - точка вывода
  - загрузчики
  - плагин
    по порядку
    1 npm init -y
    2 npm install webpack webpack-cli --save-dev (webpack-cli === набор команд для терминала)
    3 как віглядит проект
    webpack-demo
    |- package.json
    |- package-lock.json
    |- index.html
    |- /src
    |- index.js

    4 делаем конфиг в корне webpack.config.js (mode можно менять на production или development)
    const path = require("path");

    module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
    path: path.resolve(\_\_dirname, "bundle"),
    filename: "webpack-bundle.js",
    },
    };

    5 делаем npm скрипты
    "build": "webpack" в package.json

    5 Ставим DevServer https://webpack.js.org/api/webpack-dev-server/#root

    - устанавливаем ==> npm install --save-dev webpack webpack-dev-server
    - делаем скрипт запуска сервера "devserver": "webpack-dev-server"
    - настраиваем конфиг в webpack.config.js

    module.exports = {
    //...
    devServer: {
    static: {
    directory: path.join(\_\_dirname, 'public'),
    },
    compress: true,
    port: 9000,
    },
    };
    ------------------------------------------------------Лоадеры
    6 добавляем лоадер ==> настраиваем конфиг в webpack.config.js https://webpack.js.org/concepts/loaders/
    module.exports = {
    module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },

    7 ставим лоадер css + стайл лоадер https://webpack.js.org/loaders/css-loader + https://webpack.js.org/loaders/style-loader/

    - npm install --save-dev css-loader
    - npm install --save-dev style-loader

    - webpack.config.js в rules: [] вставляем {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
      },
      -----------------------------ставим бабел https://babeljs.io/setup#installation
      8 npm install --save-dev babel-loader @babel/core

             9 webpack.config.js в rules: [] вставляем
             {
             test: /\.css$/i,
             use: ["style-loader", "css-loader"],
             },
             {
             test: /\.m?js$/,
             exclude: /node_modules/,
             use: ["babel-loader"],
             },

             10 ставим npm install @babel/preset-env --save-dev
             11 создаем babel.config.json с настройкой
             {
             "presets": ["@babel/preset-env"]
             }
             ---------------------- ставим sass loader https://webpack.js.org/loaders/sass-loader/

             12 npm install sass-loader sass -d
             13 webpack.config.js в rules: [] вставляем

             {
             test: /\.s[ac]ss$/i,
             use: [
             // Creates `style` nodes from JS strings
             "style-loader",
             // Translates CSS into CommonJS
             "css-loader",
             // Compiles Sass to CSS
             "sass-loader",
             ],
             },

      -------------------------------ставим плагин HtmlWebpackPlugin
      14 npm install --save-dev html-webpack-plugin
      15 webpack.config.js вверх вставляем
      const HtmlWebpackPlugin = require('html-webpack-plugin');

      - module.exports создаем plugins: [] добавляем туда плагин

      module.exports = {
      output...
      devServer...
      module...
      plugins: [new HtmlWebpackPlugin()],
      };
