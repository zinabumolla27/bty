import React, { useEffect } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Typography,
  Card,
  notification,
} from "antd";
import { connect, useDispatch } from "react-redux";
import { addUser, resetUserCreatedValue } from "../features/user/userSlice";

const { Title } = Typography;

const UserRoles = {
  ADMIN: "admin",
  MODERATOR: "moderator",
};

const roleOptions = Object.values(UserRoles).map((role) => ({
  label: role.charAt(0).toUpperCase() + role.slice(1),
  value: role,
}));

const CreateUsers = ({ loading, userCreated }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.info({
      message: "Thank You",
      description:
        "Thank you for reaching out! 🙌 We've received your message and will get back to you as soon as possible. In the meantime, feel free to explore more on our website.",
      placement,
    });
  };

  useEffect(() => {
    if (userCreated) {
      openNotification("topLeft");
      dispatch(resetUserCreatedValue());
    }
  }, [userCreated, dispatch]);

  const onFinish = (values) => {
    form.resetFields();
    dispatch(addUser(values));
  };

  return (
    <div style={{ maxWidth: 700, margin: "60px auto", padding: 24 }}>
      {contextHolder}
      <Card bordered hoverable style={{ padding: 24 }}>
        <Title level={3} style={{ textAlign: "center", marginBottom: 32 }}>
          Create New User
        </Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            role: UserRoles.ADMIN,
          }}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "First Name is required" }]}
          >
            <Input size="large" placeholder="Enter first name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Last Name is required" }]}
          >
            <Input size="large" placeholder="Enter last name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Invalid email address" },
            ]}
          >
            <Input size="large" placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password size="large" placeholder="Enter password" />
          </Form.Item>

          <Form.Item label="Username" name="username">
            <Input size="large" placeholder="Optional username" />
          </Form.Item>

          <Form.Item label="Bio" name="bio">
            <Input.TextArea
              rows={4}
              size="large"
              placeholder="Short bio (optional)"
            />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Role is required" }]}
          >
            <Select
              options={roleOptions}
              size="large"
              placeholder="Select role"
            />
          </Form.Item>

          <Form.Item
            label="User Type"
            name="userType"
            rules={[{ required: true, message: "User Type is required" }]}
          >
            <Input size="large" placeholder="Enter user type" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={loading}
              block
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  const { loading, userCreated } = user;
  return { loading, userCreated };
};

export default connect(mapStateToProps, {})(CreateUsers);
