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
      "https://en.wikipedia.org/wiki/Coffee_production_in_Ethiopia",
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
      "https://en.wikipedia.org/wiki/Coffee_production_in_Ethiopia",
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
      "https://www.sciencepublishinggroup.com/article/10.11648/10069189",
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
      "https://en.wikipedia.org/wiki/Coffee_production_in_Ethiopia",
    ],
    image: beann,
  },
  {
    title: "Tea Leaf",
    description: [
      "Boosts Heart Health",
      "Enhances Mental Alertness",
      "Supports Weight Management",
      "Promotes Digestive Health",
      "Strengthens the Immune System",

      "https://en.wikipedia.org/wiki/The_Coffee_Bean_%26_Tea_Leaf",
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
        paddingTop: "50px",
      }}
    >
      {/* Full Width Image Banner */}
      <div
        style={{
          width: "100%",
          height: "300px",
          overflow: "hidden",
          marginBottom: "30px",
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
          }}
        />
      </div>

      {/* Page Title */}
      <Title
        level={2}
        style={{
          fontWeight: "bold",
          color: "#1E3A8A",
          marginBottom: "30px",
          padding: "0 16px",
        }}
      >
        Coffees & Teas
      </Title>

      {/* Coffee Cards Grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[24, 24]} justify="center">
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
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                }
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
                styles={{
                  body: {
                    padding: "16px",
                  },
                }}
              >
                <Title level={4} style={{ marginBottom: "8px" }}>
                  {seed.title}
                </Title>
                <Text
                  style={{
                    display: "block",
                    marginBottom: "16px",
                    color: "#666",
                  }}
                >
                  {seed.description[0]}
                </Text>
                <Button
                  type="primary"
                  onClick={() => showModal(seed)}
                  style={{
                    width: "100%",
                    backgroundColor: "#4CAF50",
                    borderColor: "#4CAF50",
                    fontWeight: 500,
                  }}
                >
                  View Details
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Modal for Detailed View */}
      <Modal
        title={
          <div
            style={{
              textAlign: "center",
              fontSize: "1.25rem",
              fontWeight: 600,
            }}
          >
            {selectedSeed?.title}
          </div>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        width={600}
        closable={true}
        maskClosable={true}
        style={{ top: 20 }}
        styles={{
          body: {
            padding: "24px",
            maxHeight: "calc(100vh - 200px)",
            overflowY: "auto",
          },
        }}
      >
        {selectedSeed && (
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                height: "100px",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "24px",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <img
                src={selectedSeed.image}
                alt={selectedSeed.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                textAlign: "left",
                margin: 0,
              }}
            >
              {selectedSeed.description.map((item, index) => {
                const isLink = item.startsWith("http");
                return (
                  <li
                    key={index}
                    style={{
                      marginBottom: "8px",
                      lineHeight: "1.6",
                      padding: 0, // Explicit padding to avoid mixing shorthand
                    }}
                  >
                    {isLink ? (
                      <a
                        href={item}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#1890ff" }}
                      >
                        Learn more
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
