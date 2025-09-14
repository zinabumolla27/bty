// ForgotPasswordForm.jsx
import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { requestPasswordResetAPI } from "../features/user/userAPI";

const { Text } = Typography;

const ForgotPasswordForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state) => state.forgotPassword
  );

  const handleForgotPassword = (values) => {
    dispatch(requestPasswordResetAPI(values.email));
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <Text
        type="secondary"
        style={{ display: "block", textAlign: "center", marginBottom: 20 }}
      >
        Enter your registered email to reset your password
      </Text>

      {success && (
        <Text
          type="success"
          style={{ display: "block", textAlign: "center", marginBottom: 10 }}
        >
          {success}
        </Text>
      )}
      {error && (
        <Text
          type="danger"
          style={{ display: "block", textAlign: "center", marginBottom: 10 }}
        >
          {error}
        </Text>
      )}

      <Form form={form} layout="vertical" onFinish={handleForgotPassword}>
        <Form.Item
          label="Email Address"
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
            loading={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
