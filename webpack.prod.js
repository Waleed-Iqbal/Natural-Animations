const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // clean the dist folder to avoid having multiple bundles being generated
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // to have separate css files instead on injecting it via JS bundle
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: "./index-[contentHash].js",
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new TerserPlugin(), // for JS
      new OptimizeCssAssetsPlugin() // for CSS
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // extract css into files and minify it
          'css-loader', // converts css to js
          'sass-loader' // converts scss to css
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contentHash].css'
    }),
    new CleanWebpackPlugin(),
  ],
});