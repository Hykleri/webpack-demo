// webpack配置文件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 需要暴露一个对象，注意，这里我用的暴露的方式还是 commonjs 方式
module.exports = {
  // 模式
  mode: 'production',   // development | production

  // 入口
  entry: './src/index.js',

  // 出口
  output: {
    // 出口位置（绝对路劲）
    path: path.resolve(__dirname, './dist'), //项目根目录下的dist文件
    filename: 'bundle.js', //打包之后文件的名字
  },

  // 插件
  plugins: [
    // 自动生成一个 html 文件在 出口的位置，并且会自动在这个生成的文件中引入 打包生成的js文件。
    new HtmlWebpackPlugin({
      title: '小可爱',
      filename: 'abc.html',
      template: './index.html' // 将index.html作为生成的abc.html的模板
    }),

    // copy
    new CopyWebpackPlugin([
      {
        from: './lib/jquery.min.js',
        to: 'lib'
      }
    ])
  ],

  // 解析
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },
   
  // webpack-dev-server 的配置
  devServer: {
    // 配置已那个文件夹作为web服务的根路径
    contentBase: path.resolve(__dirname, './dist')
  }
}