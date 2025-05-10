import React, { useState, useEffect, useRef } from "react";
import { Card, Typography, Modal, Tag, Divider } from "antd";
import { CalendarOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./News.css";
import { fetchUploadedFiles } from "../features/upload/UploadSlice";

const { Title, Paragraph, Text } = Typography;

const News = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch uploaded files from Redux store
  const { files, loading, error } = useSelector((state) => state.uploadFile);

  useEffect(() => {
    dispatch(fetchUploadedFiles());
  }, [dispatch]);

  const openModal = (item) => {
    setSelectedNews(item);
    setModalVisible(true);
  };

  const handleModalDismiss = () => {
    setModalVisible(false);
    if (ref.current) {
      ref.current.pause();
    }
  };

  const NewsCard = (item) => {
    return (
      <Card
        hoverable
        className="news-card"
        cover={
          <div className="news-image-container">
            {item.fileType === "video" ? (
              <video
                ref={ref}
                width="100%"
                height="240px"
                controls
                muted
                poster="thumbnail.jpg"
              >
                <source src={item.filePath} type="video/mp4" />
              </video>
            ) : (
              <img
                alt={item.title}
                src={item.filePath}
                className="news-image"
                loading="lazy"
              />
            )}
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
          <Paragraph className="news-description">
            {item.description.length > 100
              ? item.description.substring(0, 100) + "...."
              : item.description}
          </Paragraph>
          <div className="news-cta" onClick={() => openModal(item)}>
            <Text strong>
              Read more <ArrowRightOutlined />
            </Text>
          </div>
        </div>
      </Card>
    );
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
          {files.map((item) => (
            <React.Fragment key={item.id || item.filePath}>
              {NewsCard(item)}
            </React.Fragment>
          ))}
        </div>
      </div>

      <Modal
        open={modalVisible}
        onCancel={handleModalDismiss}
        footer={null}
        className="news-modal"
        width={window.innerWidth * 0.8}
      >
        {selectedNews && (
          <div className="modal-content">
            <div className="modal-image-container">
              {selectedNews.fileType === "video" ? (
                <video
                  width="100%"
                  height="240px"
                  controls
                  muted
                  poster="thumbnail.jpg"
                >
                  <source src={selectedNews.filePath} type="video/mp4" />
                </video>
              ) : (
                <img
                  alt={selectedNews.title}
                  src={selectedNews.filePath}
                  className="news-image"
                  loading="lazy"
                />
              )}
            </div>

            <div className="modal-body">
              <Tag icon={selectedNews.icon} className="modal-tag">
                {selectedNews.category}
              </Tag>

              <Text className="modal-date">
                <CalendarOutlined />{" "}
                {new Date(selectedNews.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>

              <Title level={3} className="modal-title">
                {selectedNews.title}
              </Title>

              <Divider className="modal-divider" />
              <Text>{selectedNews.description}</Text>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default News;
