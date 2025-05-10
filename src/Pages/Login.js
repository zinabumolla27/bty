import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./Login.css";
import { authUserAPI } from "../features/auth/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false); // 👈 Loading state
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      let response = await authUserAPI(values);
      if (response.token) {
        localStorage.setItem("token", response.token);
        console.log("first", localStorage.getItem("token"));
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate(`/home`);
      } else {
        error(response.message);
        setLoading(false); // 👈 Stop loading
      }
    } catch (err) {
      error("UnAuthenticated");
    } finally {
      setLoading(false); // 👈 Stop loading
    }
  };

  const error = (message) => {
    messageApi.open({
      type: "error",
      content: message,
    });
  };

  return (
    <div className="login-page">
      {contextHolder}
      <div className="login-content">
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          className="login-form"
        >
          <Form.Item
            name="email"
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
              {loading ? "Authenticating..." : " Login"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
