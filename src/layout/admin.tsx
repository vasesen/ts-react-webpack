import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import SiderNav from './sider/sider'
import { Layout } from 'antd'
import Home from '../components/home/home'
import Role from '../components/role/role'
import User from '../components/user/user'
const {Footer,Sider,Content,Header} = Layout
const Admin = () =>{

    return (
        <Layout style={{minHeight: '100%'}}>
          <Sider>
              <SiderNav/>
          </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{margin: 20,height:'100%'}}>
            <Switch>
              <Redirect from='/' exact to='role'/>
                <Route path='/role' component= {Role}></Route>
                <Route path='/home' component= {Home}></Route>
                
                {/* <Route path='/user' component= {User}></Route> */}
            </Switch>
          </Content>
          <Footer style={{textAlign: 'center', color: '#cccccc'}}>利物浦领先25分成功错失英超冠军</Footer>
        </Layout>
      </Layout>
    )
}

export default  Admin