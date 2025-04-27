import React from "react";
import { Card, Typography, Image, Row, Col, Divider } from "antd";
import chat1 from "../Assets/chat1.jpg";
import chat2 from "../Assets/chat2.jpg";
import chat3 from "../Assets/chat3.jpeg";
import {
  EnvironmentOutlined,
  InfoCircleOutlined,
  ExportOutlined,
  LinkOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const Chat = () => {
  const khatData = [
    {
      id: 1,
      name: "Harari Khat",
      description:
        "Premium quality khat from the Harar region, known for its potent effects and fresh leaves. Grown at high altitudes with traditional farming methods. Exported by BTY Trading PLC.",
      image: chat1,
      region: "Harar",
      exporter: "BTY Trading PLC",
      source: {
        name: "Learn more about Khat",
        url: "https://en.wikipedia.org/wiki/Khat",
      },
    },
    {
      id: 2,
      name: "Wondo Genet Khat",
      description:
        "Organic khat from Wondo Genet area, prized for its balanced effects and sweet taste. Grown with minimal chemical inputs. Exported by BTY Trading PLC.",
      image: chat2,
      region: "Sidama",
      exporter: "BTY Trading PLC",
      source: {
        name: "Learn more about Khat",
        url: "https://en.wikipedia.org/wiki/Khat",
      },
    },
    {
      id: 3,
      name: "Awaday Khat",
      description:
        "The famous Awaday khat, considered among the finest in Ethiopia. Known for its rapid onset and long-lasting effects. Exported by BTY Trading PLC.",
      image: chat3,
      region: "Eastern Ethiopia",
      exporter: "BTY Trading PLC",
      source: {
        name: "Learn more about Khat",
        url: "https://en.wikipedia.org/wiki/Khat",
      },
    },
  ];

  const fallbackImage = (
    <div
      style={{
        height: 220,
        backgroundColor: "#f5f5f5",
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

  return (
    <div style={{ padding: "24px 16px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Title
          level={2}
          style={{
            color: "#1a5b0e",
            marginBottom: 12,
            fontWeight: 600,
            paddingTop: "50px",
          }}
        >
          <EnvironmentOutlined style={{ marginRight: 12, color: "#1a5b0e" }} />
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
          Finest quality chat/khat cultivated in Ethiopia's prime regions,
          professionally processed and exported worldwide by{" "}
          <Text strong style={{ color: "#1a5b0e" }}>
            BTY Trading PLC
          </Text>
        </Paragraph>
      </div>

      <Row
        gutter={[
          { xs: 16, sm: 16, md: 24, lg: 24, xl: 24 },
          { xs: 16, sm: 16, md: 24, lg: 24, xl: 24 },
        ]}
        justify="center"
      >
        {khatData.map((item) => (
          <Col
            key={item.id}
            xs={24}
            sm={24}
            md={12}
            lg={8}
            xl={8}
            style={{
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <div style={{ flex: 1, padding: "12px" }}>
              <Card
                hoverable
                cover={
                  <Image
                    alt={item.name}
                    src={item.image}
                    fallback={fallbackImage}
                    style={{
                      height: 220,
                      objectFit: "cover",
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    }}
                    preview={false}
                  />
                }
                styles={{
                  wrapper: {
                    borderRadius: 8,
                    border: "1px solid #e8e8e8",
                    height: "100%",
                    transition: "all 0.3s ease",
                    width: "100%",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  },
                  body: {
                    padding: 20,
                  },
                }}
              >
                <Title level={4} style={{ color: "#1a5b0e", marginBottom: 12 }}>
                  {item.name}
                </Title>

                <Paragraph
                  style={{ color: "#555", marginBottom: 16, lineHeight: 1.6 }}
                >
                  {item.description}
                </Paragraph>

                <Divider
                  style={{ margin: "16px 0", backgroundColor: "#f0f0f0" }}
                />

                <Row gutter={16} style={{ marginBottom: 12 }}>
                  <Col span={10}>
                    <Text strong style={{ color: "#333" }}>
                      <EnvironmentOutlined style={{ marginRight: 8 }} />
                      Region:
                    </Text>
                  </Col>
                  <Col span={14}>
                    <Text>{item.region}</Text>
                  </Col>
                </Row>

                <Row gutter={16} style={{ marginBottom: 16 }}>
                  <Col span={10}>
                    <Text strong style={{ color: "#333" }}>
                      <ExportOutlined style={{ marginRight: 8 }} />
                      Exporter:
                    </Text>
                  </Col>
                  <Col span={14}>
                    <Text>{item.exporter}</Text>
                  </Col>
                </Row>

                <div style={{ marginTop: 16 }}>
                  <Text
                    type="secondary"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <LinkOutlined
                      style={{ color: "#1a5b0e", marginRight: 8 }}
                    />
                    <a
                      href={item.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1a5b0e", textDecoration: "underline" }}
                    >
                      {item.source.name}
                    </a>
                  </Text>
                </div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Chat;
