import React , {Component} from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { FormProps } from 'antd/lib/form';
import './login.css'
type Props = FormProps 

const initialState = {
    loading:false
}
type State = Readonly<typeof initialState>

class NormalLoginForm extends React.Component<Props|any,State> {
    constructor(props: any) {
        super(props);
        this.state = {
          loading: false, // 是否正在登录中
        };
      }
  handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        this.setState({loading:true})
      }else {
        this.setState({loading:false})
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入您的用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入您的密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item style={{textAlign:"center"}}>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox style={{float:"left"}}>记住密码</Checkbox>)}
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>
            登录
          </Button>
           {/* <a href="" >现在注册</a> */}
        </Form.Item>
      </Form>
    );
  }
}


const LoginPage = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default LoginPage
