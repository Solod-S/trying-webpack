const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "bundle"),
    filename: "webpack-bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    // compress: true,
    open: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          // "style-loader",
          // // Translates CSS into CommonJS
          MiniCssExtractPlugin.loader,
          // Translates CSS into ComonCss file
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    // кидает в билд html
    new MiniCssExtractPlugin({ filename: "styles.css" }),
    // кидает в билд css
    new CleanWebpackPlugin(),
    // чистит папку билда
  ],
};

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const path = require("path");

// module.exports = {
//   entry: "./src/index.js",
//   mode: "development",
//   output: {
//     path: path.resolve(__dirname, "bundle"),
//     filename: "webpack-bundle.js",
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, "src"),
//     },
//     // compress: true,
//     open: true,
//     port: 9000,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           // Creates `style` nodes from JS strings
//           "style-loader",
//           // Translates CSS into CommonJS
//           MiniCssExtractPlugin.loader,
//           // Translates CSS into ComonCss file
//           "css-loader",
//           // Compiles Sass to CSS
//           "sass-loader",
//         ],
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: ["babel-loader"],
//       },
//     ],
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       attributes: {
//         id: "target",
//         "data-target": "example",
//       },
//     }),
//     new HtmlWebpackPlugin({ template: "src/index.html" }),
//   ],
// };
