import React, { useState } from "react";
import { Form, Input, Button, message, Avatar } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./Login.css";
import mlogo from "../Assets/mlogo.png";
import { authUserAPI } from "../features/auth/auth";
import { useNavigate } from "react-router-dom";
function Login() {
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
      <div className="login-content">
        <p
          style={{
            display: "block",
            width: "100%",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "16px",
            color: "blue",
          }}
        >
          Login Credentials !
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
            color: "white",
          }}
        >
          <div style={{ width: 90, height: 2, backgroundColor: "blue" }} />

          <Avatar size={64} src={mlogo} />

          <div style={{ width: 90, height: 2, backgroundColor: "blue" }} />
        </div>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          className="login-form"
        >
          <Form.Item
            label={<span style={{ color: "white" }}>Email</span>}
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Email"
              size="large"
              className="login-input"
            />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "white" }}>Password</span>}
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

          {/* Forgot Password link */}
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
