import React, { useState } from "react";
import { Card, Button, Row, Col, Typography, Modal } from "antd";
import backspices from "../Assets/backspices.jpeg";
import berbere from "../Assets/Berbere.webp";
import korerima from "../Assets/korerima.webp";
import mitmita from "../Assets/mitmita.jpg";

import turmeric from "../Assets/turmeric.jpg";

const { Title } = Typography;

const Spices2 = [
  {
    title: "Berbere",
    description:
      "A signature spice blend made of chili, garlic, ginger, and other spices.",
    detail:
      "Berbere is an essential part of Ethiopian cuisine. It’s a spicy blend of dried red chilies, garlic, ginger, coriander, and other spices. It’s commonly used in stews and meats, especially in dishes like Doro Wat.",
    image: berbere,
  },
  {
    title: "Korerima (Ethiopian Cardamom)",
    description:
      "Known for its intense, warm aroma and used in both sweet and savory dishes.",
    detail:
      "Korerima is often used in Ethiopian coffee ceremonies and in stews, providing a rich, aromatic flavor. It is a common ingredient in Berbere spice mixes.",
    image: korerima,
  },
  {
    title: "Mitmita",
    description:
      "A fiery spice blend with bird's eye chili peppers, cloves, and other spices.",
    detail:
      "Mitmita is an essential Ethiopian seasoning, known for its heat and intense flavor. It’s typically used to spice up dishes like Kitfo and other stews.",
    image: mitmita,
  },

  {
    title: "Turmeric",
    description:
      "A warm, slightly bitter spice used in Ethiopian stews and rice dishes.",
    detail:
      "Turmeric is essential in many Ethiopian dishes, adding both color and flavor. It’s particularly used in Kik Alicha and various types of stews.",
    image: turmeric,
  },
];

const Spices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeed, setSelectedSeed] = useState(null);

  const showModal = (seed) => {
    setSelectedSeed(seed);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedSeed(null);
  };

  return (
    <div style={{ textAlign: "center", margin: 0, padding: 0 }}>
      <img
        src={backspices}
        alt="Spices Banner"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "280px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div style={{ padding: "24px" }}>
        <Title
          level={3}
          style={{
            fontWeight: "bold",
            color: "#1E3A8A",
            margin: "20px 0 30px",
            fontSize: "28px",
          }}
        >
          Spices
        </Title>

        <Row gutter={[32, 32]} justify="center">
          {Spices2.map((seed, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                cover={
                  <img
                    alt={seed.title}
                    src={seed.image}
                    style={{
                      height: "180px",
                      objectFit: "cover",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      width: "100%",
                    }}
                  />
                }
                style={{
                  borderRadius: "10px",
                  padding: "16px",
                  margin: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "transform 0.2s",
                }}
                bodyStyle={{ flex: 1 }}
              >
                <Card.Meta
                  title={
                    <Title
                      level={5}
                      style={{
                        fontSize: "16px",
                        marginBottom: "8px",
                        fontWeight: "600",
                        color: "#333",
                      }}
                    >
                      {seed.title}
                    </Title>
                  }
                  description={
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        marginBottom: "16px",
                        lineHeight: "1.5",
                      }}
                    >
                      {seed.description}
                    </p>
                  }
                />
                <Button
                  type="primary"
                  size="medium"
                  onClick={() => showModal(seed)}
                  style={{
                    backgroundColor: "#4CAF50",
                    borderColor: "#4CAF50",
                    color: "#fff",
                    width: "100%",
                    fontWeight: "500",
                    marginTop: "auto",
                  }}
                >
                  Details
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Modal
        title={<span style={{ color: "#1890ff" }}>{selectedSeed?.title}</span>}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={700}
      >
        {selectedSeed && (
          <div style={{ textAlign: "center" }}>
            <img
              src={selectedSeed.image}
              alt={selectedSeed.title}
              style={{
                width: "30%",
                maxHeight: "300px",
                objectFit: "contain",
                margin: "0 auto 20px",
                borderRadius: "8px",
              }}
            />
            <div
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#333",
                textAlign: "left",
                margin: "0 auto",
                maxWidth: "80%",
              }}
            >
              {selectedSeed.detail.split("\n").map((paragraph, index) => (
                <p
                  key={index}
                  style={{ display: "flex", alignItems: "flex-start" }}
                >
                  <span style={{ marginRight: "8px" }}>•</span>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Spices;
