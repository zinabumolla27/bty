import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Card,
  Breadcrumb,
  Space,
  Input,
  Button,
  Popconfirm,
  Modal,
  Form,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { fetchUsers, deleteUser, updateUser } from "../features/user/userSlice";

// ✅ Custom Highlighter (replaces `react-highlight-words`)
const Highlighter = ({ text = "", searchWords = [] }) => {
  if (!searchWords.length || !text) return text;

  const regex = new RegExp(`(${searchWords.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        searchWords.some(
          (word) => word.toLowerCase() === part.toLowerCase()
        ) ? (
          <mark key={index} style={{ backgroundColor: "#ffc069", padding: 0 }}>
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
};

const ViewUsers = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.user);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // 🔎 Table search handlers
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            size="small"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          >
            Search
          </Button>
          <Button
            size="small"
            onClick={() => clearFilters && handleReset(clearFilters)}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : false,
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          searchWords={[searchText]}
          text={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  // 🗑 Delete handler
  const confirmDelete = (id) => {
    dispatch(deleteUser(id));
  };

  // ✏️ Edit handler
  const editUser = (user) => {
    setEditingUser(user);
    form.setFieldsValue(user); // prefill modal form
    setIsModalOpen(true);
  };

  const handleUpdate = (values) => {
    if (!editingUser?.id) return;

    const { password, confirmPassword, ...rest } = values;

    const payload = {
      ...editingUser,
      ...rest,
      ...(password ? { password } : {}), // only include password if provided
    };

    dispatch(updateUser({ id: editingUser.id, data: payload }));
    setIsModalOpen(false);
  };

  const userTableColumns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      ...getColumnSearchProps("firstName"),
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      ...getColumnSearchProps("lastName"),
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      sorter: (a, b) => a.username?.localeCompare(b.username),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      sorter: (a, b) => a.role?.localeCompare(b.role),
    },
    {
      title: "User Type",
      dataIndex: "userType",
      key: "userType",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => new Date(text).toLocaleDateString(),
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => confirmDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
          </Popconfirm>

          <EditOutlined
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => editUser(record)}
          />
        </Space>
      ),
    },
  ];

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {/* Edit User Modal */}
      <Modal
        title="Edit User"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={() => form.submit()}>
            Update
          </Button>,
        ]}
        // ✅ Fixed and responsive modal styling
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: 0,
          padding: 0,
          width: "90vw", // responsive width
          maxWidth: "500px",
          zIndex: 2000,
        }}
        bodyStyle={{
          maxHeight: "70vh",
          overflowY: "auto",
          padding: "16px",
        }}
        maskStyle={{
          backgroundColor: "rgba(0,0,0,0.45)",
        }}
        destroyOnClose
        centered
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdate}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
          }}
        >
          <Form.Item
            label={
              <span style={{ color: "black", fontWeight: 500 }}>
                First Name
              </span>
            }
            name="firstName"
            rules={[{ required: true, message: "Please enter the first name" }]}
            style={{ marginBottom: 12 }}
          >
            <Input placeholder="Enter user first name" />
          </Form.Item>

          <Form.Item
            label={
              <span style={{ color: "black", fontWeight: 500 }}>Last Name</span>
            }
            name="lastName"
            rules={[{ required: true, message: "Please enter the last name" }]}
            style={{ marginBottom: 12 }}
          >
            <Input placeholder="Enter user last name" />
          </Form.Item>

          <Form.Item
            label={
              <span style={{ color: "black", fontWeight: 500 }}>
                New Password
              </span>
            }
            name="password"
            rules={[
              { required: true, message: "Please enter the new password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
            hasFeedback
            style={{ marginBottom: 12 }}
          >
            <Input.Password placeholder="Enter new password" />
          </Form.Item>

          <Form.Item
            label={
              <span style={{ color: "black", fontWeight: 500 }}>
                Confirm New Password
              </span>
            }
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  const password = getFieldValue("password");
                  if (!value) {
                    return Promise.reject(
                      new Error("Please confirm your password")
                    );
                  }
                  if (password && password !== value) {
                    return Promise.reject(new Error("Passwords do not match!"));
                  }
                  return Promise.resolve();
                },
              }),
            ]}
            style={{ marginBottom: 0 }}
          >
            <Input.Password placeholder="Confirm new password" />
          </Form.Item>
        </Form>
      </Modal>

      {/* 📋 Users Table */}
      <Card
        title="View Users"
        style={{ margin: 20, overflowX: "auto" }} // responsive
        bodyStyle={{ padding: 10 }}
        bordered={false}
      >
        <Breadcrumb style={{ marginBottom: 16, fontSize: "14px" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Users</Breadcrumb.Item>
          <Breadcrumb.Item>View</Breadcrumb.Item>
        </Breadcrumb>

        <Table
          columns={userTableColumns}
          dataSource={list}
          loading={loading}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            responsive: true,
          }}
          bordered
          scroll={{ x: "max-content" }} // allow horizontal scroll
          style={{ overflowX: "auto" }}
        />
      </Card>
    </>
  );
};

export default ViewUsers;
