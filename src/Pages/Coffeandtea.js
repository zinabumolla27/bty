import React, { useState } from "react";
import { Card, Button, Row, Col, Typography, Modal } from "antd";
import sedamo from "../Assets/sedamo.jpeg";
import chefe from "../Assets/chefe.jpg";
import harer from "../Assets/harer.webp";
import jimmas from "../Assets/jimma.jpg";
import tea3 from "../Assets/tea3.jpeg";
import beann from "../Assets/beann.jpeg";
import coco from "../Assets/coco.jpg";

const { Title, Text } = Typography;

const ethiopianCoffees = [
  {
    title: "Sidamo Coffee",
    description: [
      "Known for its fruity, floral, and bright flavors with high acidity.",
      "Grown in the Sidamo region of southern Ethiopia.",
      "Typically washed processing method.",
      "Best enjoyed as pour-over or filter coffee.",
      "Source: Ethiopian Coffee Exporters Association",
    ],
    image: sedamo,
  },
  {
    title: "Yirgacheffe Coffee",
    description: [
      "Clean, bright, and complex coffee with floral and citrus notes.",
      "Considered one of the best coffees in the world.",
      "Often has bergamot and jasmine notes.",
      "Grown at high altitudes (1,700-2,200 meters).",
      "Source: Ethiopian Commodity Exchange",
    ],
    image: chefe,
  },
  {
    title: "Harrar Coffee",
    description: [
      "Wild, earthy, and spicy coffee with chocolate and wine-like notes.",
      "Dry-processed (natural) coffee beans.",
      "Known for its blueberry flavor notes.",
      "One of the oldest coffee varieties still in production.",
      "Source: National Coffee Association of USA",
    ],
    image: harer,
  },
  {
    title: "Jimma Coffee",
    description: [
      "Earthy, bold, and full-bodied coffee with lower acidity.",
      "Grown in the Kaffa region (birthplace of coffee).",
      "Often used in espresso blends.",
      "Known for its chocolatey and nutty flavors.",
      "Source: International Coffee Organization",
    ],
    image: jimmas,
  },
  {
    title: "Welega Coffee",
    description: [
      "Full-bodied and slightly spicy coffee with earthy and fruity flavors.",
      "Also known as Lekempti coffee.",
      "Grown in western Ethiopia.",
      "Often has winey and fruity characteristics.",
      "Source: African Fine Coffees Association",
    ],
    image: beann,
  },
  {
    title: "Black Tea",
    description: [
      "Ethiopian black tea is bold and full-bodied.",
      "Grown in the Gumaro and Wushwush regions.",
      "Often has malty and honey-like notes.",
      "Traditionally served with sugar and spices.",
      "Source: Ethiopian Tea Plantation Development",
    ],
    image: tea3,
  },
];

const Coffeandtea = () => {
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
        textAlign: "center",
        padding: "0px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        overflowX: "hidden",
        paddingBottom: "50px",
      }}
    >
      {/* Full Width Image */}
      <div
        style={{
          width: "100vw",
          height: "300px",
          overflow: "hidden",
          marginBottom: "30px",
          borderRadius: "0px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={coco}
          alt="Ethiopian Coffees"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Title */}
      <Title
        level={2}
        style={{
          fontWeight: "bold",
          color: "#1E3A8A",
          marginBottom: "30px",
        }}
      >
        Ethiopian Coffees & Teas
      </Title>

      {/* Coffee Cards */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: "80px" }}>
        <Row gutter={[32, 32]} justify="center">
          {ethiopianCoffees.map((seed, index) => (
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
                  <div
                    style={{
                      height: "200px",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt={seed.title}
                      src={seed.image}
                      style={{
                        height: "100%",
                        width: "auto",
                        maxWidth: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                }
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s",
                }}
                bodyStyle={{
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <Title level={4} style={{ marginBottom: "8px" }}>
                  {seed.title}
                </Title>
                <Text style={{ display: "block", marginBottom: "16px" }}>
                  {seed.description[0]}
                </Text>
                <Button
                  type="primary"
                  onClick={() => showModal(seed)}
                  style={{
                    width: "100%",
                    backgroundColor: "#4CAF50",
                    borderColor: "#4CAF50",
                  }}
                >
                  View Details
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Modal */}
      <Modal
        title={null}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        width={Math.min(800, window.innerWidth - 40)}
      >
        {selectedSeed && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <img
              src={selectedSeed.image}
              alt={selectedSeed.title}
              style={{
                width: "50%",
                maxWidth: "200px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            />

            <Title level={4} style={{ marginBottom: "20px", color: "#1E40AF" }}>
              {selectedSeed.title}
            </Title>

            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                textAlign: "left",
                maxWidth: "500px",
              }}
            >
              {selectedSeed.description.map((item, index) => {
                const isLink = item.toLowerCase().includes("source:");
                const linkMatch = item.match(/Source:\s*(.+)/i);
                return (
                  <li key={index} style={{ marginBottom: "10px" }}>
                    {isLink && linkMatch ? (
                      <a
                        href={`https://www.google.com/search?q=${encodeURIComponent(
                          linkMatch[1]
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item}
                      </a>
                    ) : (
                      item
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Coffeandtea;
