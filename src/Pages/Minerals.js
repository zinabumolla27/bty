// Minerals.js
import React from "react";
import { Row, Col, Card } from "antd";

const mineralsData = [
  {
    id: 1,
    title: "Export Trade in Metals, Non-Metallic, Metallic Minerals and Scraps",
    description:
      "Trade and export of metals, non-metallic minerals, metallic minerals, and scraps to global markets.",
    color: "#4ECDC4", // red-ish
  },
  {
    id: 2,
    title: "Export Trade in Minerals and Mineral Products",
    description:
      "Export of various minerals and mineral-based products, ensuring quality and compliance with international standards.",
    color: "#4ECDC4", // teal
  },
];

const Minerals = () => {
  return (
    <div
      style={{
        padding: "100px 20px",
        background: "#f9f9f9",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "2em",
          color: "#11dee9ff",
        }}
      >
        Minerals Export Categories
      </h2>
      <Row gutter={[24, 24]} justify="center">
        {mineralsData.map((item) => (
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={10}
            key={item.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{
                borderRadius: "15px",
                borderLeft: `8px solid ${item.color}`,
                background: "#fff",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                width: "100%",
                maxWidth: "400px",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <h3 style={{ color: item.color, fontSize: "1.2em" }}>
                {item.title}
              </h3>
              <p style={{ color: "#555", fontSize: "1em" }}>
                {item.description}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Minerals;
