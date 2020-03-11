import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import React from 'react';
import SiderMenu from './siderMenu'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

console.log(SiderMenu)


const LayoutPage: React.FunctionComponent =()=>{
     return(
        <Layout>
        <Header className="header">
          <div className="logo" />
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
        </Header>
        <Layout style={{height:'100%'}}>
          <Sider width={200} style={{height:'100%'}} className="site-layout-background">
            <SiderMenu />

          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              内容区域 
            </Content>
          </Layout>
        </Layout>
      </Layout>
     )
}


 export default LayoutPage