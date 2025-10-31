import React, { useState } from "react";
import { Form, Input, Button, message, Avatar } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./Login.css";
import mlogo from "../Assets/mlogo.png";
import { authUserAPI } from "../features/auth/auth";
import { useNavigate } from "react-router-dom";
function Login() {
  const [loading, setLoading] = useState(false);
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
        navigate(`/`);
      } else {
        error(response.message);
        setLoading(false);
      }
    } catch (err) {
      error("UnAuthenticated");
    } finally {
      setLoading(false);
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

      <div className="login-card">
        <div className="login-header">
          <div className="line" />
          <Avatar size={64} src={mlogo} />
          <div className="line" />
        </div>

        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ remember: true }}
          className="login-form"
        >
          <Form.Item
            label={<span className="login-label">Email</span>}
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Email"
              size="large"
              className="login-input"
            />
          </Form.Item>

          <Form.Item
            label={<span className="login-label">Password</span>}
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
              block
            >
              {loading ? "Authenticating..." : "Login"}
            </Button>
          </Form.Item>

          <Form.Item>
            <Button
              type="link"
              className="forgot-password"
              onClick={() => navigate("/forgot-password")}
              block
            >
              Forgot Password?
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
