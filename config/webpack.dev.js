const {smart} = require('webpack-merge')
const base = require('./webpack.base.js')
module.exports = smart(base,{
    mode:'development',
    devtool:'inline-source-map'
})