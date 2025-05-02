import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./Login.css";
import { authUserAPI } from "../features/auth/auth";

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false); // 👈 Loading state

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await authUserAPI(values);
      message.success("✅ Message sent successfully!");
      form.resetFields();
    } catch (error) {
      console.error("API error:", error);
      message.error("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false); // 👈 Stop loading
    }
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          className="login-form"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
              size="large"
              className="login-input"
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
              className="login-input"
            />
          </Form.Item>

          <Form.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="login-button"
              loading={loading}
            >
              {loading ? "Sending..." : " Login"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
