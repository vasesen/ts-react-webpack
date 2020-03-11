// import React,{ DetailedReactHTMLElement} from 'react';
// import ReactDOM from 'react-dom'

// interface Props {
//     className: string
// }
// let props: Props = {className:'header-title'}

// let element: DetailedReactHTMLElement<Props,HTMLHeadingElement> = (
//     React.createElement<Props,HTMLHeadingElement>('h2',props,'hello typescript and react')
// )
    
// ReactDOM.render(element,document.getElementById('root'))

import React,{ DetailedReactHTMLElement} from 'react';
import ReactDOM from 'react-dom'
//import 'antd/dist/antd.css'
import 'antd/dist/antd.dark.css';
import Loginviews from './loginviews/index'
import LayoutPage from './layout/index'
ReactDOM.render(
    // <Loginviews />
    <LayoutPage />
    ,document.getElementById('root'))