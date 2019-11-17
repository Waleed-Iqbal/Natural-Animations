var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      }, {
        test: /\.(svg|png|jpg|jpeg|tiff|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash],[ext]',
            outputPath: 'images'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}