const {smart} = require('webpack-merge')
// 合并数组和对象 
//const merge = require("webpack-merge");
// merge(
//     {a : [1],b:5,c:20},
//     {a : [2],b:10, d: 421}
// )
//合并后的结果
//{a : [1,2] ,b :10 , c : 20, d : 421}
const base = require('./webpack.base.js')
module.exports = smart(base,{
    mode:'development',
    devtool:'inline-source-map'
})