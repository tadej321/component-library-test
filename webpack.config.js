const path = require('path')
const webpack = require("webpack");


module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: 'this',
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: ["babel-plugin-styled-components"]
          }
        }
      }
    ]
  },
  resolve: {},
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    })
  ],
  externals: {
    react: "react"
  },
}