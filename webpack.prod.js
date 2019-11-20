const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // clean the dist folder to avoid having multiple bundles being generated
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // to have separate css files instead on injecting it via JS bundle

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: "./index-[contentHash].js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // extract css into files
          'css-loader', // converts css to js
          'sass-loader' // converts scss to css
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    }),
    new CleanWebpackPlugin(),
  ],
});