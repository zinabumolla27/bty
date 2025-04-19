import React, { useState } from "react";
import { Card, Button, Row, Col, Typography, Modal } from "antd";
import whitesesameseedoil from "../Assets/whitesesameseedoil.png";
import Soybeans from "../Assets/Soybean.jpg";
import sunflowerseed from "../Assets/sunflowerseed.jpg";
import canola from "../Assets/canola.jpg";
import paunt from "../Assets/paunt.jpg";
import linseeds from "../Assets/linseeds.jpg";
import cotten from "../Assets/cotten.jpg";
import mosture from "../Assets/mosture.jpg";
import backofoil from "../Assets/backofoil.jpg";

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
      "https://www.medicalnewstoday.com/articles/263106",
    ],
    image: whitesesameseedoil,
  },
  {
    title: "Soybeans",
    description: [
      "Versatile legume widely used in the production of soybean oil, animal feed, and various food products.",
      "Rich in protein, fiber, and essential nutrients.",
      "Supports heart health and muscle growth.",
      "Key ingredient in plant-based diets.",
      "Ideal for agricultural and industrial uses.",
      "https://www.medicalnewstoday.com/articles/270434",
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
      "https://www.healthline.com/nutrition/sunflower-seeds",
    ],
    image: sunflowerseed,
  },
  {
    title: "Canola (Rapeseed)",
    description: [
      "Widely cultivated oilseed crop used to produce canola oil, one of the healthiest cooking oils.",
      "Contains low levels of saturated fat and is rich in omega-3 and omega-6 fatty acids.",
      "Promotes heart health and reduces cholesterol.",
      "Used in animal feed and biodiesel production.",
      "Versatile and valuable agricultural product.",
      "https://www.medicalnewstoday.com/articles/322381",
    ],
    image: canola,
  },
  {
    title: "Peanuts (Groundnuts)",
    description: [
      "Nutrient-rich legume used extensively for extracting peanut oil and in various food products.",
      "High in protein, healthy fats, vitamins, and antioxidants.",
      "Beneficial for heart health, weight management, and energy.",
      "Staple in many cuisines and used in confectionery, snacks, and animal feed.",
      "https://www.medicalnewstoday.com/articles/324813",
    ],
    image: paunt,
  },
  {
    title: "Flaxseeds (Linseeds)",
    description: [
      "Small, nutrient-dense seeds widely used for producing linseed oil and health supplements.",
      "Rich source of omega-3 fatty acids, fiber, and lignans (powerful antioxidants).",
      "Supports heart health, digestion, and hormonal balance.",
      "Popular in food, cosmetics, and pharmaceutical industries.",
      "https://www.medicalnewstoday.com/articles/263392",
    ],
    image: linseeds,
  },
  {
    title: "Cottonseeds",
    description: [
      "By-product of cotton harvesting, primarily used to produce cottonseed oil.",
      "Processed into animal feed and used in industrial applications.",
      "Rich in protein and beneficial fatty acids.",
      "Valuable in agricultural and commercial sectors.",
      "https://www.britannica.com/plant/cottonseed",
    ],
    image: cotten,
  },
  {
    title: "Mustard Seeds",
    description: [
      "Tiny, oil-rich seeds known for their sharp flavor.",
      "Widely used to produce mustard oil, a popular cooking oil.",
      "Rich in omega-3 fatty acids, antioxidants, and minerals.",
      "Supports cardiovascular health with antibacterial and anti-inflammatory properties.",
      "Used in traditional medicine, condiments, and spice blends.",
      "https://www.healthline.com/nutrition/mustard-seeds",
    ],
    image: mosture,
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
        <li
          key={index}
          style={{
            marginBottom: 8,
            listStyleType: "none",
            textAlign: "center",
          }}
        >
          <a
            href={item}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#1890ff",
              fontWeight: "bold",
              textDecoration: "underline",
              wordBreak: "break-word",
            }}
          >
            Click to learn more
          </a>
        </li>
      ) : (
        <li
          key={index}
          style={{
            marginBottom: 8,
            textAlign: "left",
            paddingLeft: "20px",
            listStylePosition: "outside",
            marginLeft: "20px",
          }}
        >
          {item}
        </li>
      )
    );

  return (
    <div style={{ backgroundColor: "#F3F4F6", paddingBottom: "40px" }}>
      <div
        style={{
          width: "100%",
          height: "200px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f0f0",
        }}
      >
        <img
          src={backofoil}
          alt="Oilseeds"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <Title
        level={2}
        style={{ textAlign: "center", color: "#1E3A8A", margin: "40px 0" }}
      >
        Oilseeds
      </Title>

      <Row gutter={[24, 24]} justify="center">
        {oilseeds.map((seed, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              onClick={() => showModal(seed)}
              style={{
                borderRadius: "8px",
                maxWidth: "280px",
                width: "100%",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
              cover={
                <div
                  style={{
                    height: "180px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    padding: "12px",
                  }}
                >
                  <img
                    src={seed.image}
                    alt={seed.title}
                    style={{
                      height: "100%",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              }
            >
              <Title
                level={4}
                style={{ textAlign: "center", color: "#1E3A8A" }}
              >
                {seed.title}
              </Title>
              <Button
                type="primary"
                block
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click bubbling
                  showModal(seed);
                }}
              >
                View Details
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title={
          <div style={{ textAlign: "center" }}>
            <Title level={3} style={{ color: "#1E3A8A", margin: 0 }}>
              {selectedSeed?.title}
            </Title>
          </div>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={Math.min(700, window.innerWidth - 40)}
        centered
      >
        {selectedSeed && (
          <div style={{ textAlign: "center" }}>
            <img
              src={selectedSeed.image}
              alt={selectedSeed.title}
              style={{
                width: "100%",
                maxWidth: "300px",
                maxHeight: "250px",
                objectFit: "contain",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            />
            <ul style={{ paddingLeft: 0 }}>
              {renderDescription(selectedSeed.description)}
            </ul>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Oilseeds;
