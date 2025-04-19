import React, { useState } from "react";
import { Card, Button, Row, Col, Typography, Modal } from "antd";
import pppp from "../Assets/pppp.jpg";
import faba from "../Assets/faba.jpg";
import haricot from "../Assets/haricot.jpg";
import field from "../Assets/field.webp";
import soya1 from "../Assets/soya1.jpg";
import chick from "../Assets/chick.jpg";
import lents from "../Assets/lents.jpg";

const { Title, Text } = Typography;

const PulsesData = [
  {
    title: "Chickpeas (Desi & Kabuli)",
    description:
      "Rich in protein and dietary fiber, ideal for hummus and stews.",
    detail:
      "Ethiopia grows both Desi and Kabuli chickpeas. Desi has a rough coat and is mostly used in Indian cuisine, while Kabuli has a smoother texture and is preferred in Mediterranean diets. The country exports to South Asia, the Middle East, and Europe.",
    image: chick,
    source: "Ethiopian Pulses Exporters Association, 2023",
  },
  {
    title: "Lentils",
    description:
      "Available in red, green, and brown varieties, used in soups and dishes.",
    detail:
      "Ethiopian lentils are a key ingredient in many traditional dishes and are widely exported. Their fast cooking time and high protein content make them a global favorite.",
    image: lents,
    source: "Ministry of Agriculture, Ethiopia, 2023",
  },
  {
    title: "Faba Beans (Broad Beans)",
    description: "Popular in the Middle East, used in dishes like ful medames.",
    detail:
      "Faba beans from Ethiopia are known for their size and quality. The country supplies to Egypt and Sudan, with increasing demand from Europe. They are often consumed boiled or mashed.",
    image: faba,
    source: "International Pulse Trade Council, 2023",
  },
  {
    title: "Haricot Beans (Navy/White Beans)",
    description:
      "Common in canned products, Ethiopia exports white and red varieties.",
    detail:
      "Haricot beans are one of Ethiopia's most exported pulses. They're used in baked beans, stews, and salads. Their long shelf life and neutral taste make them versatile in global cuisine.",
    image: haricot,
    source: "Ethiopian Commodity Exchange, 2023",
  },
  {
    title: "Field Peas",
    description: "Exported to India and the Gulf; used in dals and soups.",
    detail:
      "Field peas are drought-resistant and grow well in the Ethiopian highlands. Their consistent size and high yield make them attractive for international buyers.",
    image: field,
    source: "Agricultural Transformation Agency, 2023",
  },
  {
    title: "Soybeans",
    description: "Used for oil production, soy-based food, and animal feed.",
    detail:
      "Soybeans are becoming an increasingly valuable crop in Ethiopia. With global demand rising for plant-based proteins, Ethiopian soybeans are exported to Asian and African countries.",
    image: soya1,
    source: "Ethiopian Investment Commission, 2023",
  },
];

const Pulses = () => {
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
    <div
      style={{ textAlign: "center", padding: 0, backgroundColor: "#F9FAFB" }}
    >
      <img
        src={pppp}
        alt="Pulses Banner"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "280px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
        <Title
          level={2}
          style={{
            fontWeight: "bold",
            color: "#1E3A8A",
            margin: "20px 0 30px",
            fontSize: "28px",
          }}
        >
          Pulses
        </Title>

        <Row gutter={[24, 24]} justify="center">
          {PulsesData.map((seed, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                hoverable
                cover={
                  <img
                    alt={seed.title}
                    src={seed.image}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      width: "100%",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                    }}
                  />
                }
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                }}
                bodyStyle={{ padding: "20px" }}
              >
                <Card.Meta
                  title={
                    <Title
                      level={4}
                      style={{
                        marginBottom: "12px",
                        fontWeight: 600,
                        fontSize: "18px",
                        color: "#1E3A8A",
                      }}
                    >
                      {seed.title}
                    </Title>
                  }
                  description={
                    <Text
                      style={{
                        display: "block",
                        marginBottom: "20px",
                        fontSize: "15px",
                        color: "#555",
                        lineHeight: "1.6",
                      }}
                    >
                      {seed.description}
                    </Text>
                  }
                />
                <Button
                  type="primary"
                  size="large"
                  onClick={() => showModal(seed)}
                  style={{
                    backgroundColor: "#4CAF50",
                    borderColor: "#4CAF50",
                    width: "100%",
                    fontWeight: 500,
                    height: "40px",
                  }}
                >
                  View Details
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Modal
        title={
          <Title
            level={3}
            style={{ margin: 0, color: "#1E3A8A", textAlign: "center" }}
          >
            {selectedSeed?.title}
          </Title>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        width="50%"
        styles={{
          body: { padding: "30px" },
        }}
        style={{ maxWidth: "800px" }}
      >
        {selectedSeed && (
          <div style={{ textAlign: "center" }}>
            <img
              src={selectedSeed.image}
              alt={selectedSeed.title}
              style={{
                width: "20%",
                maxHeight: "300px",
                objectFit: "contain",
                borderRadius: "8px",
                marginBottom: "25px",
              }}
            />
            <Text
              style={{
                display: "block",
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "20px",
                color: "#333",
                textAlign: "left",
              }}
            >
              {selectedSeed.description}
            </Text>
            <ul
              style={{
                paddingLeft: "20px",
                margin: "0 0 25px 0",
                textAlign: "left",
              }}
            >
              {selectedSeed.detail
                .split(".")
                .filter((sentence) => sentence.trim().length > 0)
                .map((detail, idx) => (
                  <li
                    key={idx}
                    style={{
                      marginBottom: "10px",
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#444",
                    }}
                  >
                    {detail.trim()}.
                  </li>
                ))}
            </ul>
            <Text
              type="secondary"
              style={{
                display: "block",
                fontSize: "14px",
                fontStyle: "italic",
                textAlign: "left",
                marginTop: "20px",
              }}
            >
              Source: {selectedSeed.source}
            </Text>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Pulses;
