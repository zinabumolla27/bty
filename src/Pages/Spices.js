import React, { useState } from "react";
import { Card, Button, Row, Col, Typography, Modal } from "antd";
import backspices from "../Assets/backspices.jpeg";
import berbere from "../Assets/Berbere.webp";
import korerima from "../Assets/korerima.webp";
import mitmita from "../Assets/mitmita.jpg";
import turmeric from "../Assets/turmeric.jpg";
import garlic from "../Assets/garlic.jpg"; // Add image for garlic
import blackCumin from "../Assets/blackCumin.jpeg"; // Add image for black cumin
import ginger from "../Assets/ginger.jpg"; // Add image for ginger
import fenugreek1 from "../Assets/fenugreek1.jpeg"; // Add image for fenugreek

const { Title } = Typography;

const Spices2 = [
  {
    title: "Chili Pepper",
    description:
      "A signature spice blend made of chili, garlic, ginger, and other spices.",
    detail:
      "Chili pepper is a core spice used in many dishes, adding heat and a rich depth of flavor. It’s often combined with garlic, ginger, and coriander in spice blends. Commonly used in sauces, stews, and marinades, it can vary in intensity from mild to very hot.",
    image: berbere,
  },
  {
    title: "Cardamom",
    description:
      "Known for its intense, warm aroma and used in both sweet and savory dishes.",
    detail:
      "Cardamom adds a rich, aromatic flavor and is often used in both savory stews and sweet desserts, as well as in beverages like coffee. Its fragrant and slightly citrusy taste is also found in many traditional spice blends.",
    image: korerima,
  },
  {
    title: "Chili Hot",
    description:
      "A fiery spice blend with bird's eye chili peppers, cloves, and other spices.",
    detail:
      "Chili hot spices provide an intense heat and flavor to dishes, commonly used to spice up meats and stews for a bold kick. It’s often used in fiery sauces or to add heat to dishes like grilled meats or soups.",
    image: mitmita,
  },
  {
    title: "Turmeric",
    description: "A warm, slightly bitter spice used in stews and rice dishes.",
    detail:
      "Turmeric adds both color and flavor, commonly used in various dishes to bring out warmth and a mild bitterness. Known for its vibrant yellow color, it’s often a key ingredient in curry blends and rice dishes.",
    image: turmeric,
  },
  {
    title: "Garlic",
    description:
      "A pungent spice widely used for flavoring dishes and in spice mixes.",
    detail:
      "Garlic is a staple ingredient that adds savory depth to many dishes and is often used in combination with other spices like ginger and chili. Its strong, pungent flavor is present in everything from soups to meat dishes and pasta.",
    image: garlic,
  },
  {
    title: "Black Cumin",
    description:
      "A spice known for its warm, slightly bitter flavor and used in both savory and sweet dishes.",
    detail:
      "Black cumin offers a smoky, slightly bitter taste, commonly found in spice blends and known for its potential health benefits. It’s frequently used in savory dishes such as curries and meat stews, but also appears in some sweet pastries.",
    image: blackCumin,
  },
  {
    title: "Ginger",
    description:
      "A spicy, aromatic root commonly used in both savory and sweet dishes.",
    detail:
      "Ginger is a versatile spice used to add a warm, spicy kick to stews, spice mixes, and beverages. It pairs well with garlic and other spices and is essential in many desserts, teas, and Asian cuisines.",
    image: ginger,
  },
  {
    title: "Fenugreek",
    description:
      "A slightly bitter, aromatic herb often used in spice blends and stews.",
    detail:
      "Fenugreek is used to bring complexity to dishes, often included in spice mixes and stews for its distinctive flavor. It has a mildly bitter taste and is known for its use in curry powders and sauces.",
    image: fenugreek1,
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
    <div
      style={{ textAlign: "center", margin: 0, padding: 0, paddingTop: "50px" }}
    >
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
                // Replace deprecated bodyStyle with styles.body
                styles={{ body: { flex: 1 } }}
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
