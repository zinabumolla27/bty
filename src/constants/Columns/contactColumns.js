/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import { deleteContact } from "../../features/contact/contactSlice";

const SearchInput = ({ setSelectedKeys, confirm, clearFilters }) => {
  return (
    <div style={{ padding: 8 }}>
      <Input
        placeholder="Search"
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() => confirm()}
        style={{ marginBottom: 8, display: "block" }}
      />
      <Button
        type="primary"
        onClick={() => confirm()} // Confirm search
        icon={<SearchOutlined />}
        size="small"
        style={{ width: 90, marginRight: 8 }}
      >
        Search
      </Button>
      <Button
        onClick={() => {
          clearFilters(); // Clear filters
          setSelectedKeys([]); // Reset selected keys
        }}
        size="small"
        style={{ width: 90 }}
      >
        Reset
      </Button>
    </div>
  );
};

export const ContactTableColumns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    sorter: (a, b) => a.firstName.localeCompare(b.firstName), // Enable sorting
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
      record.firstName.toLowerCase().includes(value.toLowerCase()), // Filter logic
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    sorter: (a, b) => a.lastName.localeCompare(b.lastName), // Enable sorting
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
      record.lastName.toLowerCase().includes(value.toLowerCase()), // Filter logic
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    sorter: (a, b) => a.email.localeCompare(b.email), // Enable sorting
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
      record.email.toLowerCase().includes(value.toLowerCase()), // Filter logic
  },
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
    sorter: (a, b) => a.subject.localeCompare(b.subject), // Enable sorting
  },
  {
    title: "Message",
    dataIndex: "message",
    key: "message",
    sorter: (a, b) => a.message.localeCompare(b.message), // Enable sorting
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => new Date(text).toLocaleDateString(),
    sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt), // Sorting by date
  },
  {
    title: "Actions",
    key: "actions",
    render: (text, record) => {
      const dispatch = useDispatch();

      const handleDelete = () => {
        const confirmDelete = window.confirm(
          "Are you sure you want to delete this contact?"
        );
        if (confirmDelete) {
          dispatch(deleteContact(record.id)); // Dispatch delete action
        }
      };

      return (
        <>
          <Button
            onClick={handleDelete}
            style={{ marginLeft: 8 }}
            type="primary"
            danger
          >
            Delete
          </Button>
        </>
      );
    },
  },
];
