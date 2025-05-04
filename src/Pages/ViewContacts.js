import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Card, Breadcrumb, Space } from "antd"; // Importing the new components
import { Input, Button, Popconfirm } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { deleteContact } from "../features/contact/contactSlice";
import { fetchContacts } from "../features/contact/contactSlice";

const ViewContact = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.contact); // Accessing contact slice from Redux store
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  useEffect(() => {
    dispatch(fetchContacts()); // Dispatching the fetchContacts action to load data
  }, [dispatch]);

  // Handling error display if any
  if (error) {
    return <div>Error: {error}</div>;
  }

  const confirm = (id) => {
    dispatch(deleteContact(id)); // Dispatch delete action
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            {"Search"}
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 100,
            }}
          >
            {"Reset"}
          </Button>
          <Button
            type="link"
            size="small"
            style={{
              width: 110,
            }}
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            {"Filter"}
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      typeof record[dataIndex] === "string"
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : false,
    filterDropdownProps: {
      onOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
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
      sorter: (a, b) => a.firstName.localeCompare(b.firstName), // Enable sorting
      ...getColumnSearchProps("firstName"),
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
      ...getColumnSearchProps("lastName"),
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
      ...getColumnSearchProps("email"),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      onFilter: (value, record) =>
        record.email.toLowerCase().includes(value.toLowerCase()), // Filter logic
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
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
        return (
          <Popconfirm
            title="Delete ? "
            placement="bottomLeft"
            description="Are you sure to delete this?"
            onConfirm={() => confirm(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button style={{ marginLeft: 8 }} type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  return (
    <Card
      title="View Contacts" // Card title
      bordered={false} // Optional border for the card
      style={{ margin: 20 }}
    >
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Contacts</Breadcrumb.Item>
        <Breadcrumb.Item>View Contacts</Breadcrumb.Item>
      </Breadcrumb>

      <Table
        columns={ContactTableColumns} // Assuming userTableColumns is defined for your table structure
        dataSource={list} // Displaying contact list in table
        loading={loading} // Display loading indicator when fetching data
        rowKey="id" // Assuming your contacts have unique 'id' field
        pagination={{ pageSize: 10 }} // Adding pagination with a page size of 10
        bordered
      />
    </Card>
  );
};

export default ViewContact;
