import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Card, Breadcrumb } from "antd"; // Importing the new components
import { fetchContacts } from "../features/contact/contactSlice"; // Importing the fetchContacts thunk
import { ContactTableColumns } from "../constants/Columns/contactColumns";

const ViewContact = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.contact); // Accessing contact slice from Redux store

  useEffect(() => {
    dispatch(fetchContacts()); // Dispatching the fetchContacts action to load data
  }, [dispatch]);

  // Handling error display if any
  if (error) {
    return <div>Error: {error}</div>;
  }

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
      />
    </Card>
  );
};

export default ViewContact;
