import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Button,
  Upload,
  message,
  Form,
  Popconfirm,
  Table,
  Typography,
} from "antd";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  LogoutOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  deletedUploadedNews,
  fetchUploadedFiles,
  updateUploadList,
  uploadFile,
} from "../../features/upload/UploadSlice";
import TextArea from "antd/es/input/TextArea";
import { uploadFilesAPI } from "../../features/upload/fileUpload";

const UploadNews = (props) => {
  const { loading, files, deleting, uploading } = props;
  const { Text } = Typography;
  const [setNewsList] = useState([]);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [collapsableDescription, setCollabpsableDescription] = useState({});

  useEffect(() => {
    dispatch(fetchUploadedFiles());
  }, []);

  useEffect(() => {
    const initialState = files.reduce((acc, row) => {
      acc[row.id] = false;
      return acc;
    }, {});

    setCollabpsableDescription(initialState);
  }, [files]);

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleSubmit = async (values) => {
    if (fileList.length === 0) {
      message.error("Please upload a file before submitting.");
      return;
    }

    const formData = new FormData();
    const uploadedBy =
      JSON.parse(localStorage.getItem("user")).firstName +
      " " +
      JSON.parse(localStorage.getItem("user")).lastName;
    formData.append("description", values.description);
    formData.append("file", fileList[0].originFileObj);
    formData.append("uploadedBy", uploadedBy);
    try {
      const result = await uploadFilesAPI(formData);
      if (result.code === 201) {
        dispatch(updateUploadList(result.data));
        success("File uploaded successfully!");
        form.resetFields();
        setFileList([]);
      } else {
        error("Upload failed");
      }
    } catch (error) {
      message.error("Unexpected error occurred.");
    }
  };

  const error = (message) => {
    messageApi.open({
      type: "error",
      content: message,
    });
  };

  const success = (message) => {
    messageApi.open({
      type: "success",
      content: message,
    });
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const updateCollapsibleCols = (id, prevValue) => {
    setCollabpsableDescription((prev) => {
      return {
        ...prev,
        [id]: !prevValue, // use [id] to dynamically set the key
      };
    });
  };

  const UploadedNewsColumn = [
    {
      title: "Uploaded By",
      dataIndex: "uploadedBy",
      key: "uploaded_by",
      sorter: (a, b) => a.uploadedBy.localeCompare(b.uploadedBy), // Enable sorting
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => a.description.localeCompare(b.description), // Enable sorting
      render: (_, row) => {
        return (
          <Text>
            {collapsableDescription[row.id] ? _ : _.substring(0, 100) + "  "}
            {_.length > 100 && !collapsableDescription[row.id] ? (
              <CaretDownOutlined
                style={{ fontSize: "20px" }}
                onClick={() =>
                  updateCollapsibleCols(row.id, collapsableDescription[row.id])
                }
              ></CaretDownOutlined>
            ) : _.length > 100 && collapsableDescription[row.id] ? (
              <CaretUpOutlined
                style={{ fontSize: "20px" }}
                onClick={() =>
                  updateCollapsibleCols(row.id, collapsableDescription[row.id])
                }
              ></CaretUpOutlined>
            ) : (
              <></>
            )}
          </Text>
        );
      },
    },
    {
      title: "Uploaded At",
      dataIndex: "createdAt",
      key: "uploaded_at",
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
            <Button
              style={{ marginLeft: 8 }}
              type="primary"
              danger
              loading={deleting}
            >
              Delete
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  const confirm = (id) => {
    dispatch(deletedUploadedNews(id)); // Dispatch delete action
  };

  return (
    <div
      className="file-upload-container"
      style={{ maxWidth: "800px", margin: "100px auto" }}
    >
      {contextHolder}
      <Button
        style={{ float: "right", type: "primary" }}
        onClick={handleLogout}
      >
        {" "}
        Logout{" "}
      </Button>
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        validateMessages={{
          required: "This field is required",
        }}
      >
        <Row gutter={[24, 16]}>
          {/* File Upload Section */}
          <Col span={24}>
            <Form.Item
              label="Media Upload"
              required
              tooltip="Supports images (JPG, PNG) and videos (MP4)"
            >
              <Upload
                fileList={fileList}
                beforeUpload={() => false}
                onChange={handleFileChange}
                accept="image/*,video/*"
                maxCount={1}
                listType="picture"
                showUploadList={false} // Hide the file list preview
              >
                <Button
                  icon={<UploadOutlined />}
                  loading={loading} // Make sure this reflects the loading state
                  block
                  size="large"
                >
                  {loading ? "Uploading..." : "Click to Upload Image or Video"}
                </Button>
              </Upload>
              <div
                style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}
              >
                Max file size: 10MB. Supported formats: JPG, PNG, MP4
              </div>
            </Form.Item>
          </Col>

          {/* Description Input */}
          <Col md={12} sm={8} lg={24}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "Please provide a description",
                },
                {
                  max: 500,
                  message: "Description cannot exceed 500 characters",
                },
              ]}
            >
              <TextArea
                placeholder="Enter a detailed description for your media"
                rows={5}
                showCount
                maxLength={500}
                style={{ resize: "vertical" }}
              />
            </Form.Item>
          </Col>

          {/* Submit Button */}
          <Col span={24} style={{ textAlign: "center", marginTop: "16px" }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={uploading} // Make sure the submit button reflects loading state as well
              style={{
                width: "200px",
                height: "40px",
                borderRadius: "4px",
                fontWeight: "500",
              }}
            >
              {uploading ? "Uploading..." : "Submit News"}
            </Button>
          </Col>
        </Row>
      </Form>

      <Table
        style={{ marginTop: "40px" }}
        columns={UploadedNewsColumn} // Assuming userTableColumns is defined for your table structure
        dataSource={files} // Displaying contact list in table
        loading={loading} // Display loading indicator when fetching data
        rowKey="id" // Assuming your contacts have unique 'id' field
        pagination={{ pageSize: 10 }} // Adding pagination with a page size of 10
        bordered
      />
    </div>
  );
};

const mapStateToProps = ({ uploadFile }) => {
  const { loading, files, uploading, deleting } = uploadFile;
  return {
    loading,
    files,
    uploading,
    deleting,
  };
};
export default connect(mapStateToProps, {})(UploadNews);
