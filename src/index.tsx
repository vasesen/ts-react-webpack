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
import 'antd/dist/antd.css'
import Loginviews from './loginviews/index'
ReactDOM.render(
    <Loginviews />
    ,document.getElementById('root'))