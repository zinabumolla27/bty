import React, { useState } from "react";
import { Typography, Button, Col, Row, Card } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import bg1 from "../Assets/backofoil.jpg";
import bg2 from "../Assets/loglog.jpg";
import bg3 from "../Assets/image3.jpg";
import image1 from "../Assets/image1.jpeg";
import image2 from "../Assets/image2.jpeg";
import image3 from "../Assets/image3.jpg";
import image4 from "../Assets/image4.jpeg";
import image5 from "../Assets/image5.jpg";
import img6 from "../Assets/img6.jpeg";
import "./Home.css";
import Testimonials from "./Testimonals";
import Partners from "./Partner";

const { Title, Paragraph, Text } = Typography;

const backgroundImages = [bg1, bg2, bg3];
const descriptions = [
  "Includes White, Green, and Black.",
  "Includes Mitmita, Korerima (Ethiopian Cardamom), Berbere.",
  "Includes sesame, sunflower, soybean.",
  "Includes Yirgacheffe, Sidamo, Jimma.",
  "Includes Wheat, Barley, Teff, Maize.",
  "Includes Mitmita, Korarima.",
];
const titles = [
  "Tea Leaves",
  "Spices",
  "Oil Seeds",
  "Coffee",
  "Cereals",
  "Peppers",
];
const images = [img6, image1, image2, image3, image4, image5];

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const navigate = useNavigate();

  // This will handle the navigation to the company profile
  const handleClick = () => {
    navigate("/companyprofile");
  };

  // Handle next background image
  const goNext = () => {
    setBgIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  // Handle previous background image
  const goPrev = () => {
    setBgIndex(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length
    );
  };

  return (
    <div>
      {/* Background Section */}
      <div
        className="home-background"
        style={{ backgroundImage: `url(${backgroundImages[bgIndex]})` }}
        onClick={(e) => e.stopPropagation()} // Prevent background click from triggering redirection
      >
        <LeftOutlined className="nav-arrow left" onClick={goPrev} />
        <RightOutlined className="nav-arrow right" onClick={goNext} />

        <div className="overlay">
          <div className="content-wrapper">
            <Title
              level={1}
              className="main-heading"
              style={{ color: "white" }}
            >
              BTY TRADING PLC IMPORT AND EXPORT
            </Title>
            <Paragraph className="subtitle" style={{ color: "white" }}>
              Exporting Agricultural Products
            </Paragraph>
            <div className="sign-up-button-container">
              <Button
                type="primary"
                size="large"
                className="sign-up-button"
                onClick={handleClick}
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <Row gutter={[32, 32]} align="middle" justify="center">
          <Col xs={24} md={10}>
            <Text className="about-label">About BTY TRADING</Text>
            <Title
              level={1}
              className="about-title"
              style={{ color: "#3b7b57" }}
            >
              Ethiopia's <br /> Agricultural <br /> Products Exporter.
            </Title>
          </Col>
          <Col xs={24} md={10}>
            <Paragraph className="about-description">
              BTY TRADING PLC, established on December 16, 2011 G.C. is a
              licensed import-export company registered with the Ethiopian
              Ministry of Trade. It exports oil seeds, pulses, and spices
              worldwide, while also importing chemicals, cars, machinery, and
              steel. The company supports 14 permanent staff and over 120
              temporary employees.
            </Paragraph>
            <Button
              type="primary"
              size="large"
              className="learn-more-button"
              onClick={handleClick} // Add the navigation handler here as well
            >
              Learn more
            </Button>
          </Col>
        </Row>
      </div>

      {/* Gallery Section */}
      <Row gutter={[32, 32]} justify="center">
        {images.map((img, index) => (
          <Col xs={24} sm={12} md={8} lg={8} key={index}>
            <Card
              hoverable
              className="gallery-card"
              cover={
                <img
                  alt="product"
                  src={img}
                  style={{
                    objectFit: "cover",
                    height: "160px",
                    width: "100%",
                  }}
                />
              }
            >
              <Meta title={titles[index]} description={descriptions[index]} />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Partners Section */}
      <Title level={2} className="partners-title" style={{ color: "green" }}>
        Our Partners
      </Title>
      <Partners />
    </div>
  );
};

export default Home;
