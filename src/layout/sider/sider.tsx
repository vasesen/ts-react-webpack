import React, {Component, useState, useEffect, useRef} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu} from 'antd';
import menuList from '../../hooks/menuList'

const SubMenu = Menu.SubMenu

const SiderNav = (props:any) => {
    const {list} = menuList()
    const path = props.location.pathname
    const[openkey,setOpenKey] = useState(path)
    const getMenuNodes = ( arr: any[]) =>{
        return arr.map( (item)=>{
            if(!item.children){
                return(
                    <Menu.Item key={item.key}>
                        <Link to={item.key}><span>{item.title}</span></Link>
                    </Menu.Item>
                )
            }else {
                const cItem = item.children.find((cItem: { key: any; }) => path.indexOf(cItem.key)===0) 
                
                return (
                    <SubMenu key={item.key} title={<span>{item.title}</span>}>
                        {getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
        })
    }

    // const getMenuNodes = (arr: any[]) => {
    //     return arr.reduce((pre,item)=>{
    //         if(!item.children){
    //             pre.push((
    //                 <Menu.Item key={item.key}>
    //                     <Link to={item.key}><span>{item.title}</span></Link>
    //                 </Menu.Item>
    //             ))
    //         }else{
    //             const cItem = item.children.find((cItem: { key: any; }) => path.indexOf(cItem.key)===0)
    //             // 如果存在, 说明当前item的子列表需要打开
    //             if (cItem) {
    //               openKey = item.key
    //             } 
    //             console.log(111,openKey)
    //             pre.push((
    //                 <SubMenu
    //                     key={item.key}
    //                     title={<span>{item.title}</span>}
    //                 >
    //                 {getMenuNodes(item.children)}
    //               </SubMenu> 
    //             ))
    //         }
    //         return pre
    //     },[])
    // }
    return (
        <div>
            <div style={{display:'flex',alignItems:'center',height:'64px',
                textAlign:'center',fontSize:'24px'
        }}><i>react hooks</i></div>
            <Menu mode="inline"theme="dark"
                selectedKeys={[path]}
                defaultOpenKeys={[openkey]}
                >
                {getMenuNodes(list)}
            </Menu>
        </div>
    )
}



export default withRouter(SiderNav)