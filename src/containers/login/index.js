import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import logo from "../../assets/images/logo.png";

import  './index.less';
const { Item } = Form;

function Login(props) {
  const login = (e) => {
    e.preventDefault();
    const { validateFields } = props.form;
    validateFields((err, values) => {
      if (!err) {

      }
    });
  };
  const validator = () => {

  };

  const { getFieldDecorator } = props.form;
  return <div className="login">
    <header className="login-header">
      <img src={logo} alt="logo"/>
      <h1>React项目: 后台管理系统</h1>
    </header>
    <section className="login-section">
      <h2>用户登录</h2>
      <Form onSubmit={login}>
        <Item>
          {
            getFieldDecorator(
              'username', // input的标识，今后获取input的值，就从username
              {
                rules: [ // 表单校验规则
                  { validator }
                ]
              }
            )(
              <Input prefix={<Icon type="user" />} placeholder="用户名"/>
            )
          }
        </Item>
        <Item>
          {
            getFieldDecorator(
              'password',
              {
                rules: [
                  { validator }
                ]
              }
            )(
              <Input type="password" prefix={<Icon type="lock" />} placeholder="密码"/>
            )
          }
        </Item>
        <Item>
          <Button type="primary" htmlType="submit" className="login-btn">登录</Button>
        </Item>
      </Form>
    </section>
  </div>;
}

export default Form.create()(Login)