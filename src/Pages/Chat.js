import React from "react";
import { Typography, Image, Row, Col, Divider } from "antd";
import chat1 from "../Assets/chat1.jpg";
import chat2 from "../Assets/chat2.jpg";
import {
  EnvironmentOutlined,
  InfoCircleOutlined,
  ExportOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const khatData = [
  {
    id: 1,
    name: "Fresh Khat",
    description:
      "Freshly harvested khat leaves, preserved for maximum potency and flavor. Ideal for immediate consumption and export. Sourced and exported by BTY Trading PLC.",
    image: chat1,
    exporter: "BTY Trading PLC",
  },
  {
    id: 2,
    name: "Dry Khat",
    description:
      "Sun-dried khat with extended shelf life, suitable for long-distance export. Retains a significant amount of active compounds. Distributed by BTY Trading PLC.",
    image: chat2,
    exporter: "BTY Trading PLC",
  },
];

const fallbackImage = (
  <div
    style={{
      height: 220,
      backgroundColor: "#f0f0f0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#999",
    }}
  >
    <InfoCircleOutlined style={{ fontSize: 24, marginRight: 8 }} />
    <Text type="secondary">Image not available</Text>
  </div>
);

const Chat = () => {
  return (
    <div style={{ padding: "24px 16px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Title
          level={2}
          style={{ color: "#1a5b0e", fontWeight: 600, paddingTop: "50px" }}
        >
          <EnvironmentOutlined style={{ marginRight: 12 }} />
          Premium Ethiopian Khat
        </Title>

        <Paragraph
          style={{
            fontSize: 16,
            color: "#555",
            maxWidth: 800,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Explore our premium khat offerings, both dry and fresh, carefully
          sourced from Ethiopia’s finest growing regions and exported by{" "}
          <Text strong style={{ color: "#1a5b0e" }}>
            BTY Trading PLC
          </Text>
          .
        </Paragraph>
      </div>

      <Row gutter={[32, 48]} justify="center">
        {khatData.map((item) => (
          <Col key={item.id} xs={24} sm={24} md={20} lg={18} xl={16}>
            <Row
              gutter={[24, 24]}
              style={{
                alignItems: "center",
                backgroundColor: "#f9fff7",
                borderRadius: 12,
                padding: 24,
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Col xs={24} md={10}>
                <Image
                  alt={item.name}
                  src={item.image}
                  fallback={fallbackImage}
                  style={{
                    height: 220,
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  preview={false}
                />
              </Col>
              <Col xs={24} md={14}>
                <Title level={4} style={{ color: "#1a5b0e" }}>
                  {item.name}
                </Title>
                <Paragraph style={{ color: "#444", lineHeight: 1.6 }}>
                  {item.description}
                </Paragraph>
                <Divider
                  style={{ margin: "16px 0", backgroundColor: "#e8e8e8" }}
                />
                <Text strong style={{ color: "#333" }}>
                  <ExportOutlined style={{ marginRight: 8 }} />
                  Exporter:
                </Text>{" "}
                <Text>{item.exporter}</Text>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Chat;
