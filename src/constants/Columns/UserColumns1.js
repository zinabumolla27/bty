/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Input, Button, Modal, Tag } from "antd";
import {
  SearchOutlined,
  DeleteOutlined,
  CalendarOutlined,
  MailOutlined,
  UserOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteContactAPI } from "../../features/contact/contactAPI";

const SearchInput = ({ setSelectedKeys, confirm, clearFilters }) => {
  return (
    <div style={{ padding: 8, background: "#fafafa", borderRadius: 4 }}>
      <Input
        placeholder="Search..."
        prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() => confirm()}
        style={{
          marginBottom: 8,
          display: "block",
          borderRadius: 4,
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          type="primary"
          onClick={() => confirm()}
          icon={<SearchOutlined />}
          size="small"
          style={{
            width: "48%",
            backgroundColor: "#1890ff",
            borderColor: "#1890ff",
          }}
        >
          Search
        </Button>
        <Button
          onClick={() => {
            clearFilters();
            setSelectedKeys([]);
          }}
          size="small"
          style={{ width: "48%" }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

const ContactTableColumns = [
  {
    title: (
      <span>
        <UserOutlined style={{ marginRight: 8, color: "#597ef7" }} />
        First Name
      </span>
    ),
    dataIndex: "firstName",
    key: "firstName",
    sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <SearchInput
        setSelectedKeys={setSelectedKeys}
        confirm={confirm}
        clearFilters={clearFilters}
      />
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record.firstName.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: (
      <span>
        <UserOutlined style={{ marginRight: 8, color: "#597ef7" }} />
        Last Name
      </span>
    ),
    dataIndex: "lastName",
    key: "lastName",
    sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <SearchInput
        setSelectedKeys={setSelectedKeys}
        confirm={confirm}
        clearFilters={clearFilters}
      />
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record.lastName.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: (
      <span>
        <MailOutlined style={{ marginRight: 8, color: "#13c2c2" }} />
        Email
      </span>
    ),
    dataIndex: "email",
    key: "email",
    sorter: (a, b) => a.email.localeCompare(b.email),
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <SearchInput
        setSelectedKeys={setSelectedKeys}
        confirm={confirm}
        clearFilters={clearFilters}
      />
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record.email.toLowerCase().includes(value.toLowerCase()),
    render: (email) => (
      <a href={`mailto:${email}`} style={{ color: "#13c2c2" }}>
        {email}
      </a>
    ),
  },
  {
    title: (
      <span>
        <MessageOutlined style={{ marginRight: 8, color: "#722ed1" }} />
        Subject
      </span>
    ),
    dataIndex: "subject",
    key: "subject",
    sorter: (a, b) => a.subject.localeCompare(b.subject),
    render: (subject) => (
      <Tag color="purple" style={{ borderColor: "#d3adf7" }}>
        {subject}
      </Tag>
    ),
  },
  {
    title: (
      <span>
        <MessageOutlined style={{ marginRight: 8, color: "#722ed1" }} />
        Message
      </span>
    ),
    dataIndex: "message",
    key: "message",
    sorter: (a, b) => a.message.localeCompare(b.message),
    render: (message) => (
      <span
        style={{ color: "#595959", fontStyle: message ? "normal" : "italic" }}
      >
        {message || "No message"}
      </span>
    ),
  },
  {
    title: (
      <span>
        <CalendarOutlined style={{ marginRight: 8, color: "#f5222d" }} />
        Created At
      </span>
    ),
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => (
      <span style={{ color: "#595959" }}>
        {new Date(text).toLocaleDateString()}
      </span>
    ),
    sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  },
  {
    title: "Actions",
    key: "actions",
    render: (text, record) => {
      const dispatch = useDispatch();
      const [isModalVisible, setIsModalVisible] = useState(false);
      const [contactToDelete, setContactToDelete] = useState(null);

      const showDeleteModal = (id) => {
        setContactToDelete(id);
        setIsModalVisible(true);
      };

      const handleDelete = async () => {
        if (contactToDelete) {
          await dispatch(deleteContactAPI(contactToDelete));
          setIsModalVisible(false);
        }
      };

      const handleCancel = () => {
        setIsModalVisible(false);
      };

      return (
        <>
          <Button
            type="primary"
            danger
            onClick={() => showDeleteModal(record.id)}
            icon={<DeleteOutlined />}
            style={{
              backgroundColor: "#ff4d4f",
              borderColor: "#ff4d4f",
            }}
          >
            Delete
          </Button>

          <Modal
            title={
              <span>
                <DeleteOutlined style={{ color: "#ff4d4f", marginRight: 8 }} />
                Confirm Deletion
              </span>
            }
            visible={isModalVisible}
            onOk={handleDelete}
            onCancel={handleCancel}
            okText="Delete"
            cancelText="Cancel"
            okButtonProps={{
              danger: true,
              icon: <DeleteOutlined />,
              style: { backgroundColor: "#ff4d4f", borderColor: "#ff4d4f" },
            }}
          >
            <p>Are you sure you want to delete this contact?</p>
          </Modal>
        </>
      );
    },
  },
];

export default ContactTableColumns;
