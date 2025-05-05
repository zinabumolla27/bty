import React, { useState } from "react";
import { Card, Button, Row, Col, Typography, Modal } from "antd";
import whitesesameseedoil from "../Assets/whitesesameseedoil.png";
import Soybeans from "../Assets/Soybean.jpg";
import sunflowerseed from "../Assets/sunflowerseed.jpg";
import linseeds from "../Assets/linseeds.jpg";
import backofoil from "../Assets/backofoil.jpg";
import niger from "../Assets/niger.png";
import gnn from "../Assets/gnn.jpg";
import cb from "../Assets/cb.jpg";
import rp from "../Assets/rp.jpeg";

const { Title } = Typography;

const oilseeds = [
  {
    title: "Sesame Seeds",
    description: [
      "Sesame seeds are small, oil-rich seeds that are highly valued for their nutty flavor and health benefits.",
      "Commonly used to produce sesame oil and in various culinary applications.",
      "Rich in protein, healthy fats, and antioxidants.",
      "Supports heart health, improves skin, and enhances digestion.",
      "Popular ingredient in global cuisines and a natural source of energy and nutrition.",
    ],
    image: whitesesameseedoil,
  },
  {
    title: "Groundnut (Peanut)",
    description: [
      "Also known as peanuts, groundnuts are nutrient-rich legumes grown worldwide.",
      "Excellent source of protein, healthy fats, vitamins, and minerals.",
      "Supports heart health, muscle development, and energy production.",
      "Widely used in food products, cooking oil, snacks, and livestock feed.",
    ],
    image: gnn, // replace with your actual image variable
  },
  {
    title: "Niger Seeds",
    description: [
      "Tiny black seeds known for their high oil content and nutritional value.",
      "Excellent source of healthy fats, especially omega-3 and omega-6 fatty acids.",
      "Promotes cardiovascular health, boosts immunity, and aids digestion.",
      "Widely used in edible oil production, bird feed, and traditional medicine.",
    ],
    image: niger,
  },
  {
    title: "Soybeans",
    description: [
      "Versatile legume widely used in the production of soybean oil, animal feed, and various food products.",
      "Rich in protein, fiber, and essential nutrients.",
      "Supports heart health and muscle growth.",
      "Key ingredient in plant-based diets.",
      "Ideal for agricultural and industrial uses.",
    ],
    image: Soybeans,
  },
  {
    title: "Sunflower Seeds",
    description: [
      "Popular agricultural product used primarily for extracting high-quality sunflower oil.",
      "Consumed as a healthy snack and used in cooking and baking.",
      "Packed with vitamin E, healthy fats, and antioxidants.",
      "Supports heart health, reduces inflammation, and boosts skin vitality.",
      "High economic value and nutritional benefits.",
    ],
    image: sunflowerseed,
  },
  {
    title: "Flaxseeds (Linseeds)",
    description: [
      "Small, nutrient-dense seeds widely used for producing linseed oil and health supplements.",
      "Rich source of omega-3 fatty acids, fiber, and lignans (powerful antioxidants).",
      "Supports heart health, digestion, and hormonal balance.",
      "Popular in food, cosmetics, and pharmaceutical industries.",
    ],
    image: linseeds,
  },

  {
    title: "Castor Bean",
    description: [
      "Castor beans are the seeds of the Ricinus communis plant, known for their high oil content.",
      "Main source of castor oil, used in industrial, pharmaceutical, and cosmetic applications.",
      "Contains ricin, a toxic compound—processing is required to ensure safety.",
      "Castor oil is valued for its anti-inflammatory, moisturizing, and lubricant properties.",
    ],
    image: cb, // replace with your actual image variable
  },
  {
    title: "Rapeseed",
    description: [
      "Rapeseed is a bright-yellow flowering plant from the Brassicaceae family, cultivated for its oil-rich seeds.",
      "It is a primary source of rapeseed oil, widely used in cooking, food processing, and biodiesel production.",
      "Modern varieties like canola are bred to reduce erucic acid content, making the oil safe and heart-healthy.",
      "Rapeseed oil is known for its light flavor, high smoke point, and nutritional benefits including omega-3 fatty acids.",
    ],
    image: rp, // replace with your actual image variable
  },
];

const Oilseeds = () => {
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

  const renderDescription = (description) =>
    description.map((item, index) =>
      item.startsWith("http") ? (
        <li key={index} style={{ listStyle: "none", marginTop: 10 }}></li>
      ) : (
        <li key={index} style={{ marginBottom: 8, lineHeight: "1.6" }}>
          {item}
        </li>
      )
    );

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        paddingBottom: "40px",
        paddingTop: "50px",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          width: "100%",
          height: "220px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e5e7eb",
        }}
      >
        <img
          src={backofoil}
          alt="Oilseeds Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Title */}
      <Title
        level={2}
        style={{
          textAlign: "center",
          color: "#1E3A8A",
          margin: "40px 0 20px",
          fontWeight: "bold",
        }}
      >
        Oilseeds
      </Title>

      {/* Cards */}
      <div>
        <Row gutter={[24, 24]} justify="center">
          {oilseeds.map((seed, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                hoverable
                onClick={() => showModal(seed)}
                style={{
                  width: "100%", // Changed to 90% width
                  maxWidth: "300px", // Added max-width for larger screens
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                }}
                styles={{
                  body: {
                    padding: "16px",
                  },
                }}
                cover={
                  <div
                    style={{
                      height: "180px",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px",
                    }}
                  >
                    <img
                      src={seed.image}
                      alt={seed.title}
                      style={{
                        maxHeight: "100%",
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                }
              >
                <Title
                  level={5}
                  style={{
                    textAlign: "center",
                    color: "#1E3A8A",
                    marginBottom: "15px",
                    fontWeight: "bold",
                  }}
                >
                  {seed.title}
                </Title>
                <Button
                  type="primary"
                  block
                  onClick={(e) => {
                    e.stopPropagation();
                    showModal(seed);
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
          <div style={{ textAlign: "center" }}>
            <Title level={4} style={{ color: "#1E3A8A", marginBottom: 0 }}>
              {selectedSeed?.title}
            </Title>
          </div>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={400}
        centered
        styles={{
          body: {
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        {selectedSeed && (
          <div style={{ textAlign: "center" }}>
            <img
              src={selectedSeed.image}
              alt={selectedSeed.title}
              style={{
                width: "100%",
                maxWidth: "200px",
                maxHeight: "80px",
                objectFit: "contain",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            />
            <ul
              style={{
                textAlign: "left",
                paddingLeft: "20px",
                margin: "0",
              }}
            >
              {renderDescription(selectedSeed.description)}
            </ul>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Oilseeds;
