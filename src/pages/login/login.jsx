import React,{} from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';


import './login.css'
//登录的路由页面
const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="login">
        <div className="login-head">
            中后台管理系统登录页面
        </div>
        <div className="login-content">
                <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              //事件对象
              onFinish={onFinish}
            >
              <Form.Item
                name="账号"
                rules={[
                  {
                    required: true,
                    message: '请输入账号',
                    whitespace:true,
                  },
                  {min:4,message:'账号至少4位数'},
                  {max:12,message:"用户名最多12位"},
                  {pattern:/^[a-zA-Z0-9_]+$/,message:"用户名必须是英文、数字或下划线组成"},
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
              </Form.Item>
              <Form.Item
                name="密码"
                rules={[
                  {
                    required: true,
                    message: '请输入密码',
                  },
                  {max:8,message:"用户名最多12位"},
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>记住我</Checkbox>
                </Form.Item>
            
                <a className="login-form-forgot" href="">
                  忘记密码？
                </a>
              </Form.Item>
            
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
                <a href="">没有账号？</a>
              </Form.Item>
            </Form>
        </div>
        

    </div>

  );
};

export {Login}