import React from 'react'
import { Menu} from 'antd'
import {HashRouter as Router,Route, NavLink, Link ,Switch } from 'react-router-dom'
const { SubMenu } = Menu
const SiderMenu:React.FunctionComponent = () => {
    const list:Array<any>= [
        { name:'首页',key:'dashboard',children:[]},
        { 
            name:'权限测试页',
            key:'permission',
            path:'permission',
            children:[
                {name:'页面权限',key:'page',path:'permission/page'},
                {name:'指令权限',key:'directive',path:'permission/directive'},
                {name:'角色权限',key:'role',path:'permission/role'}
            ]
        },
        {
            name:'React全家桶',
            key:'reacts',
            path:'reacts',
            children:[
                {name:'react',key:'react',path:'reacts/react'},
                {name:'路由',key:'route',path:'reacts/route'},
                {name:'redux',key:'redux',path:'reacts/redux'},
                {name:'hooks',key:'hooks',path:'reacts/hooks'}
            ]
        }
    ]

    return (
        <Router>
            <Menu mode="inline">
                {list.map((item,key)=>{
                    if(item.children.length!=0){
                        return (<SubMenu key={key} title={<span>{item.name}</span>}>
                            {item.children.map((child: any,key: any)=>{
                                return(
                                    
                                    <Menu.Item key={key}>
                                        <Switch>
                                            <NavLink to={child.path}>{child.name}</NavLink>
                                        </Switch>
                                        
                                    </Menu.Item>
                                    )
                            })}
                        </SubMenu> ) 
                    }else{

                    }
                })}
            </Menu>
            
        </Router>
        
    )
}
export default SiderMenu