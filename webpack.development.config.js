const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    afterlife_index: './assets/pages/afterlife_index/afterlife_index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'src/static')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};