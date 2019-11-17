const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // clean the dist folder to avoid having multiple bundles being generated

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: "./index-[contentHash].js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});