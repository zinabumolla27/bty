import React, { useState } from "react";
import { Row, Col, Button, Upload, message, Form } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { uploadFile } from "../../features/upload/UploadSlice";
import TextArea from "antd/es/input/TextArea";

const UploadNews = () => {
  const [setNewsList] = useState([]);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);

  const { loading } = useSelector((state) => state.uploadFile); // Including error to handle failures

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleSubmit = async (values) => {
    if (fileList.length === 0) {
      message.error("Please upload a file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("description", values.description);
    formData.append("file", fileList[0].originFileObj);

    try {
      const resultAction = await dispatch(uploadFile(formData));
      if (uploadFile.fulfilled.match(resultAction)) {
        message.success("File uploaded successfully!");
        setNewsList((prev) => [...prev, resultAction.payload]);
        form.resetFields();
        setFileList([]);
      } else {
        message.error("Upload failed: " + resultAction.payload);
      }
    } catch (error) {
      message.error("Unexpected error occurred.");
    }
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   window.location.reload();
  // };

  return (
    <div
      className="file-upload-container"
      style={{ maxWidth: "800px", margin: "100px auto" }}
    >
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
              loading={loading} // Make sure the submit button reflects loading state as well
              style={{
                width: "200px",
                height: "40px",
                borderRadius: "4px",
                fontWeight: "500",
              }}
            >
              {loading ? "Uploading..." : "Submit News"}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default UploadNews;
