import { useSelector, useDispatch } from "react-redux";
import { resetPassword } from "../features/user/userSlice";
import { Button, Form, Input, message, Card, Typography, Divider } from "antd";

const { Title, Text } = Typography;

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();

  // ✅ Access user state safely
  const { loading, resetSuccess, resetError } = useSelector(
    (state) =>
      state.user || { loading: false, resetSuccess: null, resetError: null }
  );

  const onFinish = async (values) => {
    try {
      const resultAction = await dispatch(
        resetPassword({
          email: values.email,
          code: values.code,
          password: values.password,
          confirmPassword: values.confirmPassword,
        })
      );

      if (resetPassword.fulfilled.match(resultAction)) {
        message.success(
          resultAction.payload.message || "Password reset successfully!"
        );
      } else {
        message.error(
          resultAction.payload?.message || "Failed to reset password"
        );
      }
    } catch (error) {
      console.error(error);
      message.error("Something went wrong!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0f2f5, #ffffff)",
        padding: "50px",
      }}
    >
      <Card
        style={{
          maxWidth: 420,
          width: "100%",
          borderRadius: "16px",
          padding: "24px 32px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <Title level={3} style={{ marginBottom: 8, color: "#1677ff" }}>
            Reset Password
          </Title>
          <Text type="secondary" style={{ color: "black" }}>
            Enter your email and new password to reset your account.
          </Text>
        </div>

        <Divider />

        <Form layout="vertical" onFinish={onFinish} size="large">
          <Form.Item
            label={<span style={{ color: "black" }}>Email</span>}
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Invalid email format!" },
            ]}
          >
            <Input placeholder="example@email.com" />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "black" }}>Verification Code</span>}
            name="code"
            rules={[{ required: true, message: "Please enter the code!" }]}
          >
            <Input placeholder="Enter 6-digit code" maxLength={6} />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "black" }}>New Password</span>}
            name="password"
            rules={[
              { required: true, message: "Please enter a new password!" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password placeholder="Enter new password" />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "black" }}>confirmPassword</span>}
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm new password" />
          </Form.Item>

          <Form.Item style={{ marginTop: 20 }}>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              style={{ height: 45, fontWeight: 500 }}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ForgotPasswordForm;
