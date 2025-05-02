export const userTableColumns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Middle Name",
    dataIndex: "middleName",
    key: "middleName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
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
  },
  {
    title: "Actions",
    key: "actions",
    render: (text, record) => (
      <>
        <button onClick={""} style={{ marginLeft: 8 }}>
          Delete
        </button>
      </>
    ),
  },
];
