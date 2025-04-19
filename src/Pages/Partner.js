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
        padding: "40px 20px",
        background: "#fff",
        textAlign: "center",
      }}
    >
      <Row justify="center" gutter={[16, 16]}>
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
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
                borderRadius: "8px",
                transition: "transform 0.3s ease",
              }}
              // Add hover effect for interactivity
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Partners;
