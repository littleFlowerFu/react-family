const path = require('path')
const webpack = require('webpack')
var HtmlWebpachPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  /*输出到dist文件夹，输出文件名字为bundle.js*/

  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  /*src文件夹下面的以.js结尾的文件，要使用babel解析
  *cacheDirectory是用来缓存编译结果，下次编译加速
  */
  module: {
    rules: [
      {
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, 'src')
      },{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|jpg|gif)/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192  // 小于等于8k的图片会被转成base64编码，直接插入html中，减少http请求
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpachPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
      router: path.join(__dirname, 'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname, 'src/redux/reducers')
    }
  }
}