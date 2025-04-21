import React from "react";
import { Row, Col } from "antd";

const partnerLogos = [
  "https://dummyimage.com/80x80/000/fff&text=YA",
  "https://dummyimage.com/80x80/5e2a84/fff&text=Deer",
  "https://dummyimage.com/80x80/f1441e/fff&text=A",
  "https://dummyimage.com/80x80/333/fff&text=Drum",
  "https://dummyimage.com/80x80/00cfff/fff&text=Start",
];

const Partners = () => {
  return (
    <div
      style={{
        padding: "60px 20px",
        background: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <Row justify="center" gutter={[24, 24]}>
        {partnerLogos.map((logo, index) => (
          <Col
            xs={12}
            sm={8}
            md={6}
            lg={4}
            xl={4}
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                background: "#fff",
                padding: "16px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 6px 16px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 10px rgba(0, 0, 0, 0.05)";
              }}
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Partners;
