import { useSelector, useDispatch } from "react-redux";
import { resetPassword } from "../features/user/userSlice";
import { Button, Form, Input, message } from "antd";

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();

  // ✅ Correctly access the user slice
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
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2 style={{ textAlign: "center" }}>Reset Password</h2>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Invalid email format!" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Verification Code"
          name="code"
          rules={[{ required: true, message: "Please enter the code!" }]}
        >
          <Input placeholder="Enter the 6-digit code" maxLength={6} />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="password"
          rules={[
            { required: true, message: "Please enter a new password!" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input.Password placeholder="Enter new password" />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
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

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
