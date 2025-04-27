import React from "react";
import { Card, Row, Col, Typography, Avatar } from "antd";
import { StarFilled } from "@ant-design/icons";

const { Title, Text } = Typography;

const testimonials = [
  {
    name: "Emma Johnson",
    text: "BTY Trading PLC consistently delivers top-quality sesame seeds. Their service is fast, reliable, and professional.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Olivia Smith",
    text: "Their customer support and export quality are outstanding. Highly recommend BTY for consistent supply.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Liam Brown",
    text: "Working with BTY Trading PLC has been a game-changer. We trust them for all our oilseed import needs.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Noah Davis",
    text: "The purity of BTY's sesame seeds and the smooth import process impressed us. A trusted trading partner!",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

const Testimonials = () => {
  return (
    <div
      style={{
        background: "#f9f9f9",
        padding: "60px 0",
        margin: 0,
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <Text style={{ color: "blue", fontWeight: 700 }}>Testimonials</Text>
        <Title level={2} style={{ color: "#3b7b57", marginBottom: 40 }}>
          What Our Clients Say About BTY Trading PLC
        </Title>

        <Row gutter={[16, 16]} justify="center">
          {testimonials.map((item, index) => (
            <Col
              xs={24}
              sm={12}
              md={12}
              lg={6}
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                style={{
                  width: "100%",
                  maxWidth: 280,
                  minHeight: 300,
                  backgroundColor: "#ffffff", // 🤍 White card background
                  borderRadius: 10,
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  border: "none",
                }}
              >
                <Avatar
                  size={64}
                  src={item.image}
                  style={{ marginBottom: 10 }}
                />
                <div>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#555",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    {item.text}
                  </Text>
                </div>
                <div style={{ marginTop: 10 }}>
                  {[...Array(5)].map((_, i) => (
                    <StarFilled
                      key={i}
                      style={{
                        color: "#f4a825",
                        fontSize: 16,
                        margin: "0 1px",
                      }}
                    />
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Testimonials;
