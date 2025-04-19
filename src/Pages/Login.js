import React from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./Login.css";

const { Title } = Typography;

const Login = () => {
  const onFinish = (values) => {
    message.success(`Welcome back, ${values.username}!`);
    console.log("Login Success:", values);
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <Title level={2} className="login-title">
          Welcome Back
        </Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Log In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
