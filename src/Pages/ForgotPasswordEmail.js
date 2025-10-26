// ForgotPasswordForm.jsx
import React, { useCallback, useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Typography,
  Card,
  message,
  notification,
} from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { requestPasswordReset } from "../features/user/userSlice";

const { Title, Text } = Typography;

const ForgotPasswordEmail = ({ isEmailSent, resetLoading, resetError }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = useCallback(
    (messageText, placement = "topRight") => {
      api.info({
        message: "Notification",
        description: messageText, // use dynamic message
        placement,
      });
    },
    [api]
  );

  const handleForgotPassword = (values) => {
    dispatch(requestPasswordReset({ email: values.email }));
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f0f2f5 0%, #ffffff 100%)",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: 420,
          borderRadius: "16px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <Title level={3} style={{ marginBottom: 8 }}>
            Forgot Password
          </Title>
          <Text type="secondary">
            {isEmailSent
              ? "Password reset instructions have been sent."
              : "Enter your registered email to receive a reset link."}
          </Text>
        </div>

        {resetError && (
          <Text type="danger" style={{ display: "block", marginBottom: 15 }}>
            {resetError}
          </Text>
        )}

        {/* ✅ Show success message in a styled box */}
        {isEmailSent && (
          <Text
            style={{
              display: "block",
              marginBottom: 15,
              color: "#389e0d",
              background: "#f6ffed",
              border: "1px solid #b7eb8f",
              borderRadius: 8,
              padding: "12px 16px",
              textAlign: "center",
              fontWeight: 500,
              animation: "fadeIn 0.5s ease-in-out",
            }}
          >
            We’ve sent a password reset link to your registered email address.
            <br />
            Please check your inbox and follow the instructions to reset your
            password.
          </Text>
        )}

        {/* Hide form after success */}
        {!isEmailSent && (
          <Form
            form={form}
            layout="vertical"
            onFinish={handleForgotPassword}
            disabled={loading}
          >
            <Form.Item
              label={<span style={{ color: "black" }}>Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Enter your email" size="large" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                loading={resetLoading}
                style={{
                  borderRadius: 8,
                  fontWeight: 500,
                }}
              >
                {resetLoading ? "Sending..." : "Send Reset Link"}
              </Button>
            </Form.Item>
          </Form>
        )}
      </Card>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  isEmailSent: user.isEmailSent,
  resetLoading: user.resetLoading,
  resetError: user.resetError,
});
export default connect(mapStateToProps, {})(ForgotPasswordEmail);
