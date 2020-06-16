import React, {Component, useState, useContext} from 'react'
import { Form,Select,Input  } from "antd";
const Item = Form.Item
const Option = Select.Option
import {userContext} from '../user/user'


const UserForm:React.FunctionComponent = () => {
    const  {userInfo} = useContext(userContext)
    //const [fileds,setFields] = useState(userInfo)
    console.log(123,userInfo)
    //const [fields, setFields] = useState(props.user);   
    return (
        <Form name="basic" initialValues={userInfo}>
             <Item label="用户名" name="username" >
                {/* {getFieldValue()} */}
                <Input placeholder='请输入用户名' value='11234'/>
            </Item>
            <Item label="邮箱" name="email">
                <Input placeholder='请输入邮箱'/>
            </Item>
            <Item label="手机号" name="phone">
                <Input placeholder='请输入手机号'/>
            </Item>
            <Item label="所属角色" name="rolename">
                <Input placeholder='请输入角色名称'/>
            </Item>
            <pre className="language-bash">{JSON.stringify(userInfo, null, 2)}</pre>
        </Form>
    
    )
}
   
export default UserForm
