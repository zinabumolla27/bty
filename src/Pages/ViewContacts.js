import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";

import { userTableColumns } from "../constants/Columns/UserColumns";
import { fetchUsers } from "../features/user/userSlice"; // ✅ Import the thunk

const ViewContact = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.user);
  console.log("list", list);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Table
      columns={userTableColumns}
      dataSource={list}
      loading={loading}
      rowKey="id"
    />
  );
};

export default ViewContact;
