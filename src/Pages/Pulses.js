import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Typography, Modal } from "antd";
import pppp from "../Assets/pppp.jpg";
import faba from "../Assets/faba.jpg";
import haricot from "../Assets/haricot.jpg";
import field from "../Assets/field.webp";
import beean from "../Assets/beean.jpg";
import chick from "../Assets/chick.jpg";
import lents from "../Assets/lents.jpg";
import greenMung from "../Assets/greenMung.jpg";
import kidneyBeans from "../Assets/kidneyBeans.png";
import pintoBeans from "../Assets/pintoBeans.jpg";

const { Title, Text } = Typography;

const PulsesData = [
  {
    title: "Green Mung Beans",
    description: "Used in soups, salads, and snacks.",
    detail:
      "Green Mung Beans are widely grown in Ethiopia and are a popular pulse for their high protein and fiber content. They are commonly used in various traditional dishes and snacks.",
    image: greenMung,
  },
  {
    title: "Kidney Beans",
    description:
      "High in protein and commonly used in stews, soups, and salads.",
    detail:
      "Kidney beans are rich in protein and essential nutrients. They are a staple in many cuisines and are valued for their meaty texture and ability to absorb flavors in various dishes.",
    image: kidneyBeans,
  },
  {
    title: "Pinto Beans",
    description: "Recognized for their speckled appearance and hearty flavor.",
    detail:
      "Pinto beans are widely used in soups, stews, and salads. Their creamy texture and rich taste make them a versatile ingredient in many traditional and modern recipes.",
    image: pintoBeans,
  },
  {
    title: "Beans",
    description: "Used in a variety of dishes, including soups and stews.",
    detail:
      "Ethiopia is known for producing a variety of beans, including green mung beans, kidney beans, pinto beans, and Kabuli chickpeas. These beans are in high demand worldwide for their versatility in cooking and nutritional value.",
    image: beean,
  },
  {
    title: "Chickpeas (Desi & Kabuli)",
    description:
      "Rich in protein and dietary fiber, ideal for hummus and stews.",
    detail:
      "Ethiopia grows both Desi and Kabuli chickpeas. Desi has a rough coat and is mostly used in Indian cuisine, while Kabuli has a smoother texture and is preferred in Mediterranean diets. The country exports to South Asia, the Middle East, and Europe.",
    image: chick,
  },
  {
    title: "Lentils",
    description:
      "Available in red, green, and brown varieties, used in soups and dishes.",
    detail:
      "Ethiopian lentils are a key ingredient in many traditional dishes and are widely exported. Their fast cooking time and high protein content make them a global favorite.",
    image: lents,
  },
  {
    title: "Fava Beans (Broad Beans)",
    description:
      "Versatile legume used in traditional dishes like ful medames.",
    detail:
      "Fava beans are known for their large size and high quality. They are commonly consumed boiled, mashed, or used in stews and salads. Their rich flavor and nutritional value make them a popular ingredient in various cuisines.",
    image: faba,
  },

  {
    title: "Haricot Beans (Navy/White Beans)",
    description: "Commonly used in canned products, stews, and salads.",
    detail:
      "Haricot beans are popular for their long shelf life and mild flavor. They are widely used in baked beans, soups, and various savory dishes. Their soft texture and versatility make them a staple in kitchens around the world.",
    image: haricot,
  },

  {
    title: "Field Peas",
    description:
      "Widely used in dals, soups, and stews for their earthy flavor.",
    detail:
      "Field peas are known for their drought resistance and high yield. Their uniform size and nutritional value make them a preferred ingredient in various traditional dishes across different cultures.",
    image: field,
  },
];

const Pulses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeed, setSelectedSeed] = useState(null);
  const [modalWidth, setModalWidth] = useState("50%");

  useEffect(() => {
    const updateModalWidth = () => {
      if (window.innerWidth <= 480) {
        setModalWidth("100%"); // for mobile devices
      } else if (window.innerWidth <= 768) {
        setModalWidth("70%"); // for tablets
      } else {
        setModalWidth("50%"); // for larger screens
      }
    };

    window.addEventListener("resize", updateModalWidth);
    updateModalWidth(); // Set initial width on mount

    return () => {
      window.removeEventListener("resize", updateModalWidth);
    };
  }, []);

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
      style={{
        textAlign: "center",
        padding: 0,
        backgroundColor: "#F9FAFB",
        paddingTop: "50px",
      }}
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
                styles={{ body: { padding: "20px" } }}
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
        width={modalWidth}
        styles={{
          body: { padding: "30px" },
        }}
        style={{
          maxWidth: "800px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {selectedSeed && (
          <div style={{ textAlign: "center" }}>
            <img
              src={selectedSeed.image}
              alt={selectedSeed.title}
              style={{
                width: "20%",
                maxHeight: "100px",
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
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Pulses;
