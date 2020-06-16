import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import { NavLink, Redirect,useHistory} from 'react-router-dom';
import './login.css'
import {reqLogin} from '../api'
const LoginPage  = () => {

  const history = useHistory();
  //这边定义history 不能写在onfinish函数里，原因还没研究
  const onFinish = (values: any) => {
    reqLogin(values.username,values.password).then(res =>{
      if(res){
        history.push("/home");
      }
    })

    //history.push("/home");
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={()=>{console.log()}} className="login-form-button">
          登录
        </Button>
        <NavLink to="./register" >现在注册</NavLink>
      </Form.Item>
    </Form>
  );
};


export default LoginPage 
