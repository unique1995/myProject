const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  // 配置出入口文件
  entry: {
    app: path.resolve(__dirname, "./src/main.js")
  },
  // 执行webpack命令会自动生成dist目录
  output: {
    // 插件按照这个路径文件夹位置生成index.html文件
    path: path.resolve(__dirname, "./dist"),
    //配置完插件使用这个路径,
    filename: "js/bundle.js"
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html" //直接引用模板
    }),
    //每次覆盖dist目录
    new CleanWebpackPlugin()
  ],
  // 设置别名
  resolve: {
    //设置可以省略的后缀
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/, //.vue
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      },
      {
        //将css文件匹配到先解析css 再将css插入到style中，写法从右往左写
        test: /\.(png|jpg|gif|woff|svg|eot|woff2|ttf)$/,
        // 8*1024 多少字节限制8K以上直接输出文件，以下的base64
        use: {
          loader: "url-loader",
          options: {
            limit: 8192 // 小于 8kb的图片转换为base64编码,减少http请求
          }
        }
      }
    ]
  },
  // 配置代理
  devServer: {
    // 配置主机
    host: "0.0.0.0",
    port: "8899",
    proxy: {
      "/apis": {
        //url里面要拼接进去
        target: "https://cnodejs.org", // 需要代理接口域名
        // secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/apis": "" //需要rewrite的,
        }
      }
    }
  }
};
