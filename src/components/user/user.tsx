import React, {Component, useState, createContext} from 'react'
import {
  Card,
  Button,
  Table,
  Modal,
  message,
  Popconfirm
} from 'antd'
import { Form,Select,Input  } from "antd";
const Item = Form.Item
//import UserForm from "./userform";
import userList from '../../hooks/userHooks'
import UserForm from './userform';
const initUser:any= {
  username:'',
  email:'',
  phone:'',
  role_id:'',
  rolename:'',
  key:''
}
 export const userContext = createContext(initUser)
 
console.log(2,userContext)

 const User = () => {
    const [isShow,setShow] = useState(false)
    const [userInfo,setUserInfo] = useState(userContext)
    console.log(33,userInfo)
    const {list,deleteItem} = userList()

    const  title = <Button type="primary" onClick={()=>{setShow(true),setUserInfo(initUser)}}>创建用户</Button> 
    const  columns:Array<object> = [
      {title: '用户名', dataIndex: 'username'},
      {title: '邮箱',dataIndex: 'email'},
      {title: '电话',dataIndex: 'phone'},
      {title: '注册时间',dataIndex: 'create_time'},
      {title: '所属角色',dataIndex: 'rolename',},
      {title: '操作',render: (user:any) =>
          <span>
            <a onClick={()=>{setShow(true),  setUserInfo(user),console.log('修改',user)}}>修改</a>
            <Popconfirm title="确定要删除？?" onConfirm={() => {deleteItem(user.key)}}>
              <a style={{color:'red'}}>删除</a>
            </Popconfirm>
          </span>
      },
    ]

    return(
      <userContext.Provider value={{userInfo}}>
          <Card title={title}  style={{height:'100%'}}>
            <Table  bordered
                pagination={{defaultPageSize:5,onChange:()=>alert()}}
                dataSource={list}
                columns={columns}
                rowKey='role_id'> 
            </Table>

              <Modal 
              onCancel={()=>{setShow(false),setUserInfo(initUser)}}
              visible={isShow}>
                <UserForm  />
            </Modal>
        </Card>
      </userContext.Provider>
        
    )
 }


 export default User