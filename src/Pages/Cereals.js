import React, { useState } from "react";
import { Card, Button, Row, Col, Typography, Modal } from "antd";
import Weat from "../Assets/weat.jpeg";
import Barley from "../Assets/Barley.jpg";
import Maize from "../Assets/Maize .jpg";
import bbaacc from "../Assets/bbaacc.jpg";
import Oats from "../Assets/Oats.jpg";
import teff5 from "../Assets/teff5.webp";
import Millets from "../Assets/Millets.jpg";

const { Title } = Typography;

const Spices2 = [
  {
    title: "Teff",
    description:
      "A highly nutritious grain used in making injera and other dishes.",
    detail:
      "While technically not a spice, teff is a staple grain in Ethiopia. It's used primarily in making injera, the iconic Ethiopian flatbread, and is highly nutritious, rich in protein, and gluten-free.",
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
        margin: "0 auto",
        paddingTop: "50px",
        minHeight: "100vh",
      }}
    >
      {/* Banner */}
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
          marginBottom: "48px",
          fontWeight: "700",
          fontSize: "2.5rem",
        }}
      >
        Cereals
      </Title>

      {/* Cards Grid - Modified to fix padding issues */}
      <Row
        gutter={[32, 40]} // Simplified gutter definition
        justify="center"
        style={{
          marginBottom: "64px",
          width: "100%",
          maxWidth: "calc(100% - 32px)", // Accounts for gutter spacing
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {Spices2.map((seed, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={8}
            lg={8}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              hoverable
              cover={
                <img
                  alt={seed.title}
                  src={seed.image}
                  style={{
                    height: "150px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              }
              style={{
                borderRadius: "12px",
                width: "100%",
                maxWidth: "320px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                margin: "5px", // Added margin instead of padding
              }}
            >
              <Title
                level={3}
                style={{
                  marginBottom: "16px",
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

      {/* Modal - unchanged */}
      <Modal
        title={
          <span
            style={{
              color: "#1E3A8A",
              fontWeight: "700",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            {selectedSeed?.title}
          </span>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        width="90%"
        style={{
          maxWidth: "400px",
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
                height: "160px",
                marginBottom: "16px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <img
                src={selectedSeed.image}
                alt={selectedSeed.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <p
              style={{
                textAlign: "left",
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#334155",
                margin: 0,
                padding: "12px",
                backgroundColor: "#F8FAFC",
                borderRadius: "8px",
                borderLeft: "4px solid #1E3A8A",
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
