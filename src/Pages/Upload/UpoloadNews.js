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
  UploadOutlined,
} from "@ant-design/icons";
import { connect, useDispatch } from "react-redux";
import {
  deletedUploadedNews,
  fetchUploadedFiles,
  updateUploadList,
} from "../../features/upload/UploadSlice";
import TextArea from "antd/es/input/TextArea";
import { uploadFilesAPI } from "../../features/upload/fileUpload";

const UploadNews = (props) => {
  const { loading, files, deleting, uploading } = props;
  const { Text } = Typography;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [collapsableDescription, setCollabpsableDescription] = useState({});

  useEffect(() => {
    dispatch(fetchUploadedFiles());
  }, [dispatch]);

  useEffect(() => {
    const initialState = files.reduce((acc, row) => {
      acc[row.id] = false;
      return acc;
    }, {});
    setCollabpsableDescription(initialState);
  }, [files]);

  const handleFileChange = ({ fileList }) => setFileList(fileList);

  const handleSubmit = async (values) => {
    if (fileList.length === 0) {
      message.error("Please upload a file before submitting.");
      return;
    }

    const formData = new FormData();
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const uploadedBy = `${user.firstName || ""} ${user.lastName || ""}`;
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
    } catch (err) {
      message.error("Unexpected error occurred.");
    }
  };

  const error = (msg) => {
    messageApi.open({ type: "error", content: msg });
  };

  const success = (msg) => {
    messageApi.open({ type: "success", content: msg });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const updateCollapsibleCols = (id, prevValue) => {
    setCollabpsableDescription((prev) => ({
      ...prev,
      [id]: !prevValue,
    }));
  };

  const UploadedNewsColumn = [
    {
      title: "Uploaded By",
      dataIndex: "uploadedBy",
      key: "uploaded_by",
      sorter: (a, b) => a.uploadedBy.localeCompare(b.uploadedBy),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => a.description.localeCompare(b.description),
      render: (_, row) => {
        const isExpanded = collapsableDescription[row.id];
        return (
          <Text>
            {isExpanded ? _ : `${_.substring(0, 100)}  `}
            {_.length > 100 &&
              (isExpanded ? (
                <CaretUpOutlined
                  style={{ fontSize: "20px" }}
                  onClick={() => updateCollapsibleCols(row.id, isExpanded)}
                />
              ) : (
                <CaretDownOutlined
                  style={{ fontSize: "20px" }}
                  onClick={() => updateCollapsibleCols(row.id, isExpanded)}
                />
              ))}
          </Text>
        );
      },
    },
    {
      title: "Uploaded At",
      dataIndex: "createdAt",
      key: "uploaded_at",
      render: (text) => new Date(text).toLocaleDateString(),
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Popconfirm
          title="Delete?"
          description="Are you sure to delete this?"
          placement="bottomLeft"
          onConfirm={() => confirm(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button
            type="primary"
            danger
            loading={deleting}
            style={{ marginLeft: 8 }}
          >
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  const confirm = (id) => {
    dispatch(deletedUploadedNews(id));
  };

  return (
    <div
      className="file-upload-container"
      style={{ width: "100%", marginTop: "100px", padding: "0 24px" }}
    >
      {contextHolder}
      <Button style={{ float: "right" }} type="primary" onClick={handleLogout}>
        Logout
      </Button>

      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        validateMessages={{ required: "This field is required" }}
      >
        <Row gutter={[24, 16]}>
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
                showUploadList={false}
              >
                <Button
                  icon={<UploadOutlined />}
                  loading={loading}
                  block
                  size="large"
                >
                  {loading ? "Uploading..." : "Click to Upload Image or Video"}
                </Button>
              </Upload>
              <div
                style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}
              >
                Max file size: 500MB. Supported formats: JPG, PNG, MP4
              </div>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                { required: true, message: "Please provide a description" },
                {
                  max: 500,
                  message: "Description cannot exceed 500 characters",
                },
              ]}
            >
              <TextArea
                placeholder="Enter a detailed description for your file"
                rows={5}
                showCount
                maxLength={500}
                style={{ resize: "vertical" }}
              />
            </Form.Item>
          </Col>

          <Col span={24} style={{ textAlign: "center", marginTop: "16px" }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={uploading}
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
        style={{ marginTop: "40px", width: "100%" }}
        columns={UploadedNewsColumn}
        dataSource={files}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        bordered
      />
    </div>
  );
};

const mapStateToProps = ({ uploadFile }) => {
  const { loading, files, uploading, deleting } = uploadFile;
  return { loading, files, uploading, deleting };
};

export default connect(mapStateToProps)(UploadNews);
