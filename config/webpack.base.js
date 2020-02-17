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