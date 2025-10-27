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
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { deleteContact, fetchContacts } from "../features/contact/contactSlice";

// ✅ Custom Highlighter component
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

const ViewContact = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.contact);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) return <div>Error: {error}</div>;

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const confirmDelete = (id) => {
    dispatch(deleteContact(id));
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
        <Space wrap>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: "100%", maxWidth: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: "100%", maxWidth: 100 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            style={{ width: "100%", maxWidth: 110 }}
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      typeof record[dataIndex] === "string"
        ? record[dataIndex].toLowerCase().includes(value.toLowerCase())
        : false,
    filterDropdownProps: {
      onOpenChange: (visible) => {
        if (visible) setTimeout(() => searchInput.current?.select(), 100);
      },
    },
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

  const ContactTableColumns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      ...getColumnSearchProps("firstName"),
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
      ...getColumnSearchProps("lastName"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      ...getColumnSearchProps("email"),
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
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
      render: (text, record) => (
        <Popconfirm
          title="Delete?"
          placement="bottomLeft"
          description="Are you sure to delete this?"
          onConfirm={() => confirmDelete(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button
            style={{ marginLeft: 8, width: "100%", maxWidth: 100 }}
            type="primary"
            danger
          >
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <Card
      title="View Contacts"
      bordered={false}
      style={{ margin: 20, overflowX: "auto" }}
      bodyStyle={{ padding: 10 }}
    >
      <Breadcrumb style={{ marginBottom: 16, fontSize: "14px" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Contacts</Breadcrumb.Item>
        <Breadcrumb.Item>View Contacts</Breadcrumb.Item>
      </Breadcrumb>

      <Table
        columns={ContactTableColumns}
        dataSource={list}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 10, showSizeChanger: true, responsive: true }}
        bordered
        scroll={{ x: "max-content" }}
        style={{ overflowX: "auto" }}
      />
    </Card>
  );
};

export default ViewContact;
