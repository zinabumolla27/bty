import React, { useEffect, useCallback } from "react";
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

  const openNotification = useCallback(
    (placement) => {
      api.info({
        message: "Thank You",
        description: "New user has been created successfully.",
        placement,
      });
    },
    [api]
  );

  useEffect(() => {
    if (userCreated) {
      openNotification("topLeft");
      dispatch(resetUserCreatedValue());
    }
  }, [userCreated, dispatch, openNotification]);

  const onFinish = (values) => {
    dispatch(addUser(values));
    form.resetFields();
  };

  return (
    <div style={{ backgroundColor: "#f0f2f5" }}>
      <div
        style={{
          maxWidth: 600,
          margin: "60px auto",
          padding: 24,
          backgroundColor: "#f0f2f5",
        }}
      >
        {contextHolder}
        <Card style={{ backgroundColor: "#f0f2f5" }}>
          <Title level={3} style={{ textAlign: "center", marginBottom: 32 }}>
            Create New User
          </Title>
          <Form
            style={{ backgroundColor: "#f0f2f5" }}
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              role: UserRoles.ADMIN,
            }}
          >
            <Form.Item
              label={<span style={{ color: "black" }}>First Name</span>}
              name="firstName"
              rules={[{ required: true, message: "First Name is required" }]}
            >
              <Input size="large" placeholder="Enter first name" />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: "black" }}>Last Name</span>}
              name="lastName"
              rules={[{ required: true, message: "Last Name is required" }]}
            >
              <Input size="large" placeholder="Enter last name" />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: "black" }}>Email</span>}
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Invalid email address" },
              ]}
            >
              <Input size="large" placeholder="Enter email" />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: "black" }}>Password</span>}
              name="password"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password size="large" placeholder="Enter password" />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: "black" }}>User Name</span>}
              name="username"
            >
              <Input size="large" placeholder="Username" />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: "black" }}>Role</span>}
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
              label={<span style={{ color: "black" }}>User Type</span>}
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
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  loading: user.loading,
  userCreated: user.userCreated,
});

export default connect(mapStateToProps)(CreateUsers);
