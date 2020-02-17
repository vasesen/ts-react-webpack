# 本项目使用 typescript + react 全家桶从零搭建 ,罗列了整个过程 供大家参考学习使用

## 一 初始化项目
1. 新建一个工程目录
2. 在新建的工程目录里 初始化项目 npm init -y
3. 在项目里添加typescript   tsc --init  然后在tsconfig.json里开启 "jsx": "react"
4. 安装webpack配置所需的依赖  npm i typescript webpack webpack-cli webpack-dev-server ts-loader cross-env webpack-merge css-loader cross-env     clean-webpack-plugin html-webpack-plugin  style-loader css-loader -D 

## 二 配置webpack
1. 在根目录里 新建一个config 目录 
    ├── config 
    │   ├── webpack.base.js                  
    │   ├── webpack.dev.js                
    │   ├── webpack.prod.js
    - webpack.base.js代码
    ```
        const {CleanWebpackPlugin} = require('clean-webpack-plugin') //清理产出目录的插件
        const HtmlWebpackPlugin = require('html-webpack-plugin') //产出html 插件
        const path = require('path')
        module.exports = {
            entry:'./src/index.tsx',
            output:{
                path:path.resolve(__dirname,'../dist'),// 打包文件产出的目录
                filename:'main.js'
            },
            resolve:{
                extensions:['.ts','.tsx','.js'] //文件扩展名 支持js ts 以及它们对应的jsx
            },
            devServer:{
                contentBase: '../dist' //开发服务器文
            },
            module:{
                rules:[
                    {
                        test:/\.tsx?$/,
                        use:'ts-loader',
                    },
                    {
                        test:/\.css?$/,
                        use:['style-loader','css-loader']
                    }
                ]
            },
            plugins:[
                new CleanWebpackPlugin({
                    cleanOnceBeforeBuildPatterns: ['./dist'] //编译之前先清空文件夹dist
                }),
                new HtmlWebpackPlugin({
                    template:'./src/index.html'
                })
            ]
        }
    ```