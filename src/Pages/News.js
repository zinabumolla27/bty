// src/pages/News.js
import React, { useState } from "react";
import { Card, Typography, Button, Modal, Tag, Divider } from "antd";
import {
  ExportOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import sesamewolega from "../Assets/sesamewolega.jpg";
import bbaacc from "../Assets/bbaacc.jpg";
import chat1 from "../Assets/chat1.jpg";
import "./News.css";

const { Title, Paragraph, Text } = Typography;

const newsItems = [
  {
    id: 1,
    title: "Organic Sesame Export ",
    description:
      "First shipment of premium organic sesame seeds delivered to European markets with exceptional quality feedback.",
    image: sesamewolega,
    date: "2025-06-15",
    category: "Export",
    icon: <ExportOutlined />,
  },
  {
    id: 2,
    title: "Ethiopian Seed Export Facility",
    description:
      "Our new seeds facility now handles large-scale cereal seed exports, enhancing supply chain efficiency and seed quality across a World.",
    image: bbaacc, // Replace with actual image URL or path
    date: "2025-05-22",
    category: "Export",
    icon: <EnvironmentOutlined />,
  },

  {
    id: 3,
    title: "Khat Export ",
    description:
      "We now export high-quality khat, carefully sourced and swiftly shipped to preserve freshness, meeting the demands of regional and international markets.",
    image: chat1,
    date: "2025-04-10",
    category: "Export",
    icon: <TeamOutlined />,
  },
];

const NewsCard = ({ item, onClick }) => (
  <Card
    hoverable
    className="news-card"
    onClick={onClick}
    cover={
      <div className="news-image-container">
        <img
          alt={item.title}
          src={item.image}
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
        {new Date(item.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
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
  const navigate = useNavigate();

  const openModal = (item) => {
    setSelectedNews(item);
    setModalVisible(true);
  };

  return (
    <section className="news-section">
      <div className="news-container">
        <div className="news-header">
          <Text className="section-subtitle">Company Updates</Text>
          <Title level={2} className="section-title">
            Latest News
          </Title>
          <Paragraph className="section-description">
            Our recent milestones and developments in global trade
          </Paragraph>
        </div>

        <div className="news-grid">
          {newsItems.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              onClick={() => openModal(item)}
            />
          ))}
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

              <ul className="modal-list">
                {selectedNews.fullContent.map((point, index) => (
                  <li key={index} className="modal-list-item">
                    <Paragraph>{point}</Paragraph>
                  </li>
                ))}
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
