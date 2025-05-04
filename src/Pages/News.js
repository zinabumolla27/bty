import React, { useState, useEffect } from "react";
import { Card, Typography, Button, Modal, Tag, Divider } from "antd";
import { CalendarOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./News.css";
import { fetchUploadedFiles } from "../features/upload/UploadSlice";

const { Title, Paragraph, Text } = Typography;

const NewsCard = ({ item, onClick }) => (
  <Card
    hoverable
    className="news-card"
    onClick={onClick}
    cover={
      <div className="news-image-container">
        <img
          alt={item.title}
          src={item.filePath}
          className="news-image"
          loading="lazy"
        />
        <Tag icon={item.icon} className="news-tag">
          {item.category}
        </Tag>
      </div>
    }
  >
    <div className="news-content">
      <Text className="news-date">
        <CalendarOutlined />{" "}
        {new Date(item?.createdAt).toISOString().split("T")[0]}
      </Text>
      <Title level={4} className="news-title">
        {item.title}
      </Title>
      <Paragraph className="news-description">{item.description}</Paragraph>
      <div className="news-cta">
        <Text strong>
          Read more <ArrowRightOutlined />
        </Text>
      </div>
    </div>
  </Card>
);

const News = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch uploaded files from Redux store
  const { files, loading, error } = useSelector((state) => state.uploadFile);
  console.log("files", files.data);

  useEffect(() => {
    // Dispatch the action to fetch files on component mount
    dispatch(fetchUploadedFiles());
  }, [dispatch]);

  const openModal = (item) => {
    setSelectedNews(item);
    setModalVisible(true);
  };

  return (
    <section className="news-section">
      <div className="news-container">
        <div className="news-header">
          <Title
            level={2}
            className="section-title"
            style={{ color: "#3b82f6" }}
          >
            Latest News
          </Title>
        </div>

        <div className="news-grid">
          {files?.data?.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              onClick={() => openModal(item)}
            />
          ))}
        </div>

        {/* Optional: Render uploaded files */}
        <div className="uploaded-files">
          <Title level={3}>Uploaded Files</Title>
          {loading && <Text>Loading files...</Text>}
          {error && <Text type="danger">Error loading files</Text>}
          <ul>
            {files && files.length > 0 ? (
              files.map((file, index) => (
                <li key={index}>
                  <a href={file.url} target="_blank" rel="noopener noreferrer">
                    {file.name}
                  </a>
                </li>
              ))
            ) : (
              <Text>No files uploaded yet.</Text>
            )}
          </ul>
        </div>

        <Button type="text" className="view-all-button">
          View All News <ArrowRightOutlined />
        </Button>
      </div>

      <Modal
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        className="news-modal"
        width={800}
      >
        {selectedNews && (
          <div className="modal-content">
            <div className="modal-image-container">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="modal-image"
              />
            </div>

            <div className="modal-body">
              <Tag icon={selectedNews.icon} className="modal-tag">
                {selectedNews.category}
              </Tag>

              <Text className="modal-date">
                <CalendarOutlined />{" "}
                {new Date(selectedNews.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>

              <Title level={3} className="modal-title">
                {selectedNews.title}
              </Title>

              <Divider className="modal-divider" />

              {/* Safely check if fullContent exists */}
              <ul className="modal-list">
                {selectedNews.fullContent &&
                selectedNews.fullContent.length > 0 ? (
                  selectedNews.fullContent.map((point, index) => (
                    <li key={index} className="modal-list-item">
                      <Paragraph>{point}</Paragraph>
                    </li>
                  ))
                ) : (
                  <li>No additional content available.</li>
                )}
              </ul>

              <Button
                type="primary"
                className="modal-button"
                onClick={() => navigate(selectedNews.cta?.link || "/news")}
              >
                {selectedNews.cta?.text || "Learn More"}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default News;
