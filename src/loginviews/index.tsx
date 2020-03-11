import React from 'react'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import LoginPage from './Login'
import RegisterPage from './register'
import './login.css'
const LoginViews: React.FunctionComponent = ()=>{
    return(
        <Router>
            <Switch>
                <Route path='/login' component= {LoginPage} />
                <Route path='/register' component= {RegisterPage} />
                <Redirect from='/' to='/login' />
            </Switch>
        </Router>
    )
}

export default LoginViews