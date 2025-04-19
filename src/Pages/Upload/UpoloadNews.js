import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Typography,
  Button,
  Upload,
  Input,
  message,
  Form,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const UploadNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [form] = Form.useForm();

  // Handle Upload Success
  const handleUpload = (file, type, description) => {
    const url = URL.createObjectURL(file);
    const newsItem = {
      id: newsList.length + 1,
      type: type,
      url: url,
      description: description,
      date: new Date().toLocaleDateString(),
    };
    setNewsList([...newsList, newsItem]);
    message.success("Upload successful");
  };

  // Upload component settings
  const uploadProps = {
    beforeUpload: (file) => {
      const isImage = file.type.startsWith("image/");
      const isVideo = file.type.startsWith("video/");

      if (!isImage && !isVideo) {
        message.error("You can only upload image or video files!");
        return false;
      }
      return true;
    },
    customRequest: async ({ file, onSuccess, onError }) => {
      setUploading(true);
      setTimeout(() => {
        const description = form.getFieldValue("description");
        handleUpload(
          file,
          file.type.startsWith("image/") ? "image" : "video",
          description
        );
        setUploading(false);
        onSuccess();
      }, 2000); // Simulating file upload delay
    },
    showUploadList: false, // Hide default upload list
  };

  // Handle form submit for the paragraph
  const handleSubmit = (values) => {
    if (!values.description) {
      message.error("Please provide a description!");
      return;
    }

    setNewsList([
      ...newsList,
      {
        id: newsList.length + 1,
        type: "paragraph",
        description: values.description,
        date: new Date().toLocaleDateString(),
      },
    ]);
    form.resetFields();
    message.success("Paragraph submitted!");
  };

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div style={{ padding: "20px", backgroundColor: "#f7f7f7" }}>
      <Button onClick={handleLogout} type="primary" style={{ float: "right" }}>
        Logout
      </Button>
      <Title level={3} style={{ textAlign: "center" }}>
        Post News
      </Title>

      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Row gutter={[16, 16]} justify="center" align="middle">
          {/* Upload Image or Video */}
          <Col xs={24}>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />} loading={uploading} block>
                Upload Image or Video
              </Button>
            </Upload>
          </Col>

          {/* Description Input */}
          <Col xs={24} style={{ marginTop: "10px" }}>
            <Input.TextArea
              name="description"
              placeholder="Enter a description for the image/video or write a paragraph"
              rows={4}
            />
          </Col>

          {/* Submit Button */}
          <Col xs={24} style={{ marginTop: "10px" }}>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{ width: "30%" }}
            >
              Submit News
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Displaying News */}
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "20px" }}>
        {newsList.map((news) => (
          <Col xs={24} sm={12} md={8} lg={6} key={news.id}>
            <Card
              hoverable
              cover={
                news.type === "image" ? (
                  <img alt="news" src={news.url} style={{ width: "100%" }} />
                ) : news.type === "video" ? (
                  <video width="100%" controls>
                    <source src={news.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : null
              }
            >
              {news.type === "paragraph" && <Text>{news.description}</Text>}
              <Card.Meta title={`Posted on: ${news.date}`} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UploadNews;
