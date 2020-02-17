# 本项目使用 typescript + react 全家桶从零搭建 ,罗列了整个过程 供大家参考学习使用

## 一 初始化项目
1. 新建一个工程目录
2. 在新建的工程目录里 初始化项目 npm init -y
3. 在项目里添加typescript   tsc --init  然后在tsconfig.json里开启 "jsx": "react"
4. 安装webpack配置所需的依赖  npm i typescript webpack webpack-cli webpack-dev-server ts-loader cross-env webpack-merge css-loader cross-env     clean-webpack-plugin html-webpack-plugin  style-loader css-loader -D 

## 二 配置webpack
1. 在根目录里 新建一个config 目录，并在里面新建3个配置文件,详细代码见文件里有
    ```
    ├── config 
    │   ├── webpack.base.js                  
    │   ├── webpack.dev.js                
    │   └── webpack.prod.js
    ```
2. 安装react依赖 npm i react react-dom @types/react @types/react-dom -S
    在scr文件里新建index.html 和index.tsx 文件 
    ```
    ├── src                  
    │   ├── index.html             
    │   └── index.tsx 
    ```

    在index.tsx 写上以下代码

    ```
    import React,{ DetailedReactHTMLElement} from 'react';
    import ReactDOM from 'react-dom'

    interface Props {
        className: string
    }
    let props: Props = {className:'header-title'}

    let element: DetailedReactHTMLElement<Props,HTMLHeadingElement> = (
        React.createElement<Props,HTMLHeadingElement>('h2',props,'hello typescript and react')
    )
        
    ReactDOM.render(element,document.getElementById('root'))
    
    ```

3.  在根目录的package.json 文件里的 "script" 里 新增 2个build 和dev指令
    ```
    "scripts": {
        "dev": "cross-env NODE_ENV=development webpack-dev-server --config ./config/webpack.dev.js",
        "build": "cross-env NODE_ENV=development webpack --config ./config/webpack.prod.js"
    },

    ```
    此时npm run dev  打开localhost：8080  页面上有hello typescript and react 这段文字 ，初步配置环境能跑起来了。
