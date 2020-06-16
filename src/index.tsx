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
import Login from './login/Login'
import Register from './register/register'
import LayoutPage from './layout/admin'
import { HashRouter as Router, Route, Redirect ,Switch} from 'react-router-dom';
ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/home" component={LayoutPage}></Route>
            <Redirect from='/' to='/login' />
        </Switch>
    </Router>
    ,document.getElementById('root'))