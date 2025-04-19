import React, { useState } from "react";
import { Card, Button, Row, Col, Typography, Modal } from "antd";
import Weat from "../Assets/weat.jpeg";
import Barley from "../Assets/Barley.jpg";
import Maize from "../Assets/Maize .jpg";
import bbaacc from "../Assets/bbaacc.jpg";
import Oats from "../Assets/Oats.jpg";
import teff5 from "../Assets/teff5.webp";
import Rice from "../Assets/Rice.jpg";
import Millets from "../Assets/Millets.jpg";

const { Title } = Typography;

const Spices2 = [
  {
    title: "Teff",
    description:
      "A highly nutritious grain used in making injera and other dishes.",
    detail:
      "While technically not a spice, teff is a staple grain in Ethiopia. It’s used primarily in making injera, the iconic Ethiopian flatbread, and is highly nutritious, rich in protein, and gluten-free.",
    image: teff5,
  },
  {
    title: "Wheat",
    description:
      "Used for a variety of products such as bread, pasta, and other baked goods.",
    detail:
      "Wheat is a key cereal crop in Ethiopia, contributing to food security and export. It is processed into flour for making bread and other products.",
    image: Weat,
  },
  {
    title: "Barley",
    description:
      "Widely cultivated in the Ethiopian highlands, used for food and brewing.",
    detail:
      "Barley is a versatile crop, used in food products, animal feed, and for making traditional Ethiopian drinks like t'ej and beer.",
    image: Barley,
  },
  {
    title: "Maize (Corn)",
    description:
      "A staple food grown across Ethiopia, used in various traditional dishes.",
    detail:
      "Maize, or corn, is a staple in Ethiopian cuisine. It is used to make dishes like kocho and boiled or roasted corn, and it is a key crop for export.",
    image: Maize,
  },
  {
    title: "Sorghum",
    description:
      "Drought-resistant cereal used in traditional dishes and as animal feed.",
    detail:
      "Sorghum is an important crop in Ethiopia, used in dishes like Injera, for brewing traditional beverages, and as animal feed. It is widely grown in the dry regions of Ethiopia.",
    image: Millets,
  },
  {
    title: "Oats",
    description:
      "Used in breakfast foods like oatmeal and also for animal feed.",
    detail:
      "Though less commonly grown, oats are becoming increasingly popular in Ethiopia for both human consumption (such as porridge) and as animal feed.",
    image: Oats,
  },
  {
    title: "Rice",
    description:
      "Expanding crop in Ethiopia used in various dishes, especially rice-based meals.",
    detail:
      "Rice cultivation in Ethiopia is on the rise. It is used in making rice-based dishes, and while it’s not as widely grown, its export is growing steadily.",
    image: Rice,
  },
  {
    title: "Millets",
    description:
      "Finger millet and other varieties are widely grown for both food and brewing.",
    detail:
      "Millets, especially finger millet, are an important crop in Ethiopia. They are used in food products, fermented beverages like t'ella, and as animal feed.",
    image: Millets,
  },
];

const Cereals = () => {
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
      style={{
        maxWidth: "1400px",
        margin: "0 ",
        padding: "0",
        minHeight: "100vh",
      }}
    >
      {/* Banner Image */}
      <div
        style={{
          width: "100%",
          height: "300px",
          overflow: "hidden",
          borderRadius: "12px",
          marginBottom: "40px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={bbaacc}
          alt="Cereals Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      {/* Page Title */}
      <Title
        level={1}
        style={{
          textAlign: "center",
          color: "#1E3A8A",
          margin: "0 auto 48px",
          fontWeight: "700",
          fontSize: "2.5rem",
        }}
      >
        Ethiopian Cereals
      </Title>

      {/* Cards Grid with improved spacing */}
      <Row
        gutter={[
          { xs: 24, sm: 32, md: 40, lg: 48 }, // Horizontal spacing
          { xs: 32, sm: 40, md: 48, lg: 56 }, // Vertical spacing
        ]}
        justify="center"
        style={{ marginBottom: "64px" }}
      >
        {Spices2.map((seed, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            style={{
              padding: "16px", // Increased padding
              display: "flex", // Ensures consistent card heights
              justifyContent: "center", // Centers the card
            }}
          >
            <Card
              hoverable
              cover={
                <img
                  alt={seed.title}
                  src={seed.image}
                  style={{
                    height: "220px", // Slightly taller image
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              }
              style={{
                borderRadius: "12px",
                width: "100%", // Ensures card fills column
                margin: 0,
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)", // Stronger shadow
                transition: "all 0.3s ease",
                maxWidth: "320px", // Limits card width on larger screens
              }}
              bodyStyle={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <Title
                level={3}
                style={{
                  marginBottom: "16px", // More space below title
                  textAlign: "center",
                  color: "#1E3A8A",
                  fontSize: "1.25rem",
                }}
              >
                {seed.title}
              </Title>

              <p
                style={{
                  textAlign: "center",
                  color: "#666",
                  marginBottom: "24px",
                  flexGrow: 1,
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                }}
              >
                {seed.description}
              </p>

              <Button
                type="primary"
                onClick={() => showModal(seed)}
                style={{
                  height: "42px",
                  fontWeight: "500",
                  backgroundColor: "#4CAF50",
                  borderColor: "#4CAF50",
                  fontSize: "1rem",
                }}
                block
              >
                View Details
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal
        title={
          <span
            style={{
              color: "#1E3A8A",
              fontWeight: "700",
              fontSize: "1.5rem",
              textShadow: "0px 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            {selectedSeed?.title}
          </span>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={700}
        centered
        bodyStyle={{
          padding: "32px",
          backgroundColor: "#F8FAFC",
        }}
        headerStyle={{
          backgroundColor: "#F8FAFC",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        {selectedSeed && (
          <div
            style={{
              textAlign: "center",

              borderRadius: "12px",
            }}
          >
            <div
              style={{
                height: "200px",
                marginBottom: "24px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <img
                src={selectedSeed.image}
                alt={selectedSeed.title}
                style={{
                  width: "50%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <p
              style={{
                textAlign: "left",
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#334155",
                margin: 0,
                padding: "16px",
                backgroundColor: "#F8FAFC",
                borderRadius: "8px",
                borderLeft: "4px solid #1E3E8A",
              }}
            >
              {selectedSeed.detail}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Cereals;
