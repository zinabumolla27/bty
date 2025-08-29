import React from "react";
import { Row, Col, Card } from "antd";

const mineralsData = [
  {
    id: 1,
    title: "Export Trade in Metals, Non-Metallic, Metallic Minerals and Scraps",
    description:
      "Trade and export of metals, non-metallic minerals, metallic minerals, and scraps to global markets.",
    color: "#1a73e8",
    gradient: "linear-gradient(135deg, #1a73e8 0%, #6c8ef5 100%)",
    icon: "🔗",
  },
  {
    id: 2,
    title: "Export Trade in Minerals and Mineral Products",
    description:
      "Export of various minerals and mineral-based products, ensuring quality and compliance with international standards.",
    color: "#34a853",
    gradient: "linear-gradient(135deg, #34a853 0%, #8dec64 100%)",
    icon: "🌍",
  },
];

const Minerals = () => {
  return (
    <div
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
        minHeight: "100vh",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2
          style={{
            fontSize: "2.5em",
            color: "#1a237e",
            marginBottom: "15px",
            fontWeight: "700",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Minerals Export Categories
        </h2>
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "linear-gradient(to right, #1a73e8, #34a853)",
            margin: "0 auto",
            borderRadius: "2px",
          }}
        />
        <p
          style={{
            color: "#5f6368",
            fontSize: "1.1em",
            maxWidth: "600px",
            margin: "20px auto 0",
            lineHeight: "1.6",
          }}
        >
          Connecting global markets with premium quality minerals and resources
        </p>
      </div>

      <Row gutter={[30, 30]} justify="center">
        {mineralsData.map((item) => (
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={10}
            xl={10}
            key={item.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{
                borderRadius: "16px",
                background: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                width: "100%",
                maxWidth: "450px",
                transition: "all 0.3s ease",
                overflow: "hidden",
                position: "relative",
                border: "none",
              }}
              bodyStyle={{ padding: "24px" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0,0,0,0.08)";
              }}
            >
              {/* Decorative header */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "6px",
                  background: item.gradient,
                }}
              />

              {/* Icon */}
              <div
                style={{
                  fontSize: "2.5em",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  color: item.color,
                  fontSize: "1.3em",
                  marginBottom: "15px",
                  fontWeight: "600",
                  textAlign: "center",
                  lineHeight: "1.4",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#5f6368",
                  fontSize: "1em",
                  lineHeight: "1.6",
                  textAlign: "center",
                }}
              >
                {item.description}
              </p>

              {/* Decorative element */}
              <div
                style={{
                  width: "40px",
                  height: "3px",
                  background: item.gradient,
                  margin: "20px auto 0",
                  borderRadius: "2px",
                }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Additional decorative element */}
      <div
        style={{
          textAlign: "center",
          marginTop: "60px",
          color: "#5f6368",
          fontSize: "0.9em",
        }}
      >
        <p>Global Reach • Premium Quality • Reliable Export Solutions</p>
      </div>
    </div>
  );
};

export default Minerals;
