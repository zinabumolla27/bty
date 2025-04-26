import React, { useState } from "react";
import { Card, Button, Row, Col, Typography, Modal } from "antd";
import colg from "../Assets/colg.webp";
import MitmitaPepper from "../Assets/MitmitaPepper.jpeg";
import chili from "../Assets/chili.jpg";
import berberspice from "../Assets/berberspice.webp";
const { Title, Text } = Typography;

const PeppersData = [
  {
    title: "Bird's Eye Chili (Mitmita Pepper)",
    description: "Small and fiery, perfect for spicy blends like Mitmita.",
    detail:
      "Bird's Eye Chili is widely grown in Ethiopia and is a key ingredient in Mitmita—a hot blend used in traditional dishes like Kitfo. It's exported in dried or powdered form.",
    image: MitmitaPepper,
  },
  {
    title: "Ethiopian Chili Peppers (Barbare)",
    description:
      "Red chilies, sun-dried and ground for cooking and spice blends.",
    detail:
      "Known locally as 'Barbare', these red chili peppers are moderately spicy and used in sauces and the famous Berbere blend. Ethiopia exports them dried or ground.",
    image: chili,
  },
  {
    title: "Berbere Spice Blend",
    description: "A deep red, hot and aromatic spice blend unique to Ethiopia.",
    detail:
      "Berbere is a staple in Ethiopian cuisine, made from ground chili, garlic, ginger, korerima, and more. It's used in Doro Wat and many other dishes and is a popular export product.",
    image: berberspice,
  },
];

const Peppers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const showModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "0 ",
        padding: "0 ",
        paddingBottom: "50px",
        paddingTop: "50px",
      }}
    >
      <img
        src={colg}
        alt="Peppers Banner"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "280px",
          objectFit: "cover",
          display: "block",
          marginBottom: "32px",
          borderRadius: "8px",
        }}
      />

      <Title
        level={2}
        style={{
          fontWeight: "bold",
          color: "#1E3A8A",
          margin: "0 0 40px",
          fontSize: "clamp(24px, 3vw, 32px)",
          textAlign: "center",
        }}
      >
        Ethiopian Peppers & Spices
      </Title>

      <Row gutter={[32, 32]} justify="center">
        {PeppersData.map((item, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={8}
            style={{
              display: "flex",
              minWidth: "300px",
            }}
          >
            <Card
              hoverable
              cover={
                <img
                  alt={item.title}
                  src={item.image}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    width: "100%",
                  }}
                />
              }
              style={{
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "100%",
                margin: "0 8px",
              }}
              styles={{
                body: {
                  padding: "20px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                },
              }}
            >
              <div style={{ marginBottom: "16px" }}>
                <Title
                  level={4}
                  style={{
                    fontSize: "18px",
                    marginBottom: "12px",
                    color: "#1E3A8A",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </Title>
                <Text
                  style={{
                    fontSize: "15px",
                    color: "#64748B",
                    fontWeight: 500,
                  }}
                >
                  {item.description}
                </Text>
              </div>
              <Button
                type="primary"
                onClick={() => showModal(item)}
                style={{
                  backgroundColor: "#1E40AF",
                  borderColor: "#1E40AF",
                  color: "#fff",
                  width: "100%",
                  fontWeight: 500,
                  height: "40px",
                  marginTop: "auto",
                }}
              >
                View Details
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        open={isModalOpen}
        footer={null}
        width={600}
        centered
        styles={{
          body: {
            padding: "24px",
            borderRadius: "8px",
            backgroundColor: "#F9FAFB",
          },
        }}
      >
        {selectedItem && (
          <div style={{ textAlign: "center" }}>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "24px",
              }}
            />
            <Title
              level={3}
              style={{
                color: "#1E3A8A",
                fontWeight: 700,
                marginBottom: "16px",
                fontSize: "24px",
              }}
            >
              {selectedItem.title}
            </Title>
            <Text
              style={{
                display: "block",
                color: "#475569",
                fontSize: "16px",
                lineHeight: 1.7,
                textAlign: "justify",
              }}
            >
              {selectedItem.detail}
            </Text>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Peppers;
