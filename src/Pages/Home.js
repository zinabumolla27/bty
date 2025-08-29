// Home.js
import React, { useState, useEffect } from "react";
import { Typography, Button, Col, Row, Card } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import bg1 from "../Assets/backofoil.jpg";
import bg2 from "../Assets/loglog.jpg";
import bg3 from "../Assets/image3.jpg";
import image1 from "../Assets/image1.jpeg";
import oio from "../Assets/oio.jpeg";
import image3 from "../Assets/image3.jpg";
import cer from "../Assets/cer.png";
import pppp from "../Assets/pppp.jpeg";
import img6 from "../Assets/img6.jpeg";
import clean from "../Assets/clean.jpg";
import "./Home.css";
import Testimonials from "./Testimonals";
import Partners from "./Partner";
import mining from "../Assets/mining.jpg";
import trans from "../Assets/trans.jpg";
import cons from "../Assets/cons.jpg";
import immm from "../Assets/immm.jpg";
import fab from "../Assets/fab.png";

const { Title, Paragraph, Text } = Typography;

const backgroundImages = [bg1, bg2, bg3];
const descriptions = [
  "Organic sesame, sunflower, and soybean oils cold-pressed for maximum nutrition.",
  "Nutritious Wheat, Barley, Teff, and Maize cultivated in Ethiopia's fertile highlands.",
  "Authentic  spices including Chili, Cardamom, and Pepper with rich flavors.",
  "Single-origin Yirgacheffe, Sidamo, and Jimma coffee beans with distinctive profiles.",
  "Hand-picked Chili and  peppers with perfect heat and aroma.",
  "White, Green, and Black tea leaves sourced from Ethiopia's finest gardens.",
];
const titles = [
  "Oil Seeds",
  "Cereals",
  "Spices",
  "Coffee",
  "Peppers",
  "Tea Leaves",
];
const images = [oio, cer, image1, image3, pppp, img6];

const titleColors = [
  "#1a936f",
  "#1a936f",
  "#1a936f",
  "#1a936f",
  "#1a936f",
  "#1a936f",
];

const descriptionColors = ["#555", "#555", "#555", "#555", "#555", "#555"];
//Services
const descriptions1 = [
  "Professional cleaning services  for Oilseeds, Spices, and Cereals .",
  "We provides wholesale food and beverage supply to retailers and service providers.",
  "Extraction and processing of minerals and natural resources sustainably.",
  "Integrated transportation logistics and modern agricultural practices supporting local farmers.",
  "Importing chemicals, medical supplies, scraps, electronics, computers, and sporting goods.",
  " Quality construction materials and local manufacturing deliver efficient, and timely building solutions.",
];

const titles1 = [
  "Cleaning Services",
  "Wholesale Trade",
  "Mining and Quarrying",
  "Transportation and Agriculture ",
  "Import Services",
  "Manufacturing and Construction",
];
const images1 = [clean, fab, mining, trans, immm, cons];

const titleColors1 = [
  "#1a936f",
  "#1a936f",
  "#1a936f",
  "#1a936f",
  "#1a936f",
  "#1a936f",
];

const descriptionColors1 = ["#555", "#555", "#555", "#555", "#555", "#555"];

const fontStyles = {
  mainHeading: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 900,
    letterSpacing: "1px",
  },
  subtitle: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 300,
    letterSpacing: "2px",
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
  },
  cardTitle: {
    fontFamily: "'Lora', serif",
    fontWeight: 600,
  },
  cardDescription: {
    fontFamily: "'Open Sans', sans-serif",
  },
};

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [animatedText, setAnimatedText] = useState(false);
  const [cardHover, setCardHover] = useState(Array(images.length).fill(false));
  const navigate = useNavigate();

  useEffect(() => {
    setAnimatedText(true);

    const link1 = document.createElement("link");
    link1.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap";
    link1.rel = "stylesheet";

    const link2 = document.createElement("link");
    link2.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap";
    link2.rel = "stylesheet";

    const link3 = document.createElement("link");
    link3.href =
      "https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&display=swap";
    link3.rel = "stylesheet";

    const link4 = document.createElement("link");
    link4.href =
      "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap";
    link4.rel = "stylesheet";

    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(link3);
    document.head.appendChild(link4);
  }, []);

  const handleClick = () => {
    navigate("/companyprofile");
  };

  const goNext = () => {
    setBgIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const goPrev = () => {
    setBgIndex(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length
    );
  };

  const handleCardHover = (index, isHovering) => {
    const newHoverState = [...cardHover];
    newHoverState[index] = isHovering;
    setCardHover(newHoverState);
  };

  return (
    <div>
      <div
        className="home-background"
        style={{ backgroundImage: `url(${backgroundImages[bgIndex]})` }}
        onClick={(e) => e.stopPropagation()}
      >
        <LeftOutlined className="nav-arrow left" onClick={goPrev} />
        <RightOutlined className="nav-arrow right" onClick={goNext} />

        <div className="overlay">
          <div
            className={`content-wrapper ${animatedText ? "animate-in" : ""}`}
          >
            <Title
              level={1}
              className="main-heading"
              style={{
                color: "white",
                ...fontStyles.mainHeading,
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)",
              }}
            >
              <span className="text-gradient">BTY TRADING PLC</span>
              <br />
              <span style={{ fontSize: "0.8em" }}>IMPORT AND EXPORT</span>
            </Title>
            <Paragraph
              className="subtitle"
              style={{
                color: "rgba(255, 255, 255, 0.95)",
                ...fontStyles.subtitle,
                textShadow: "0 1px 5px rgba(0, 0, 0, 0.5)",
                fontWeight: "bold",
              }}
            >
              Exporting Ethiopia's Finest Agricultural Products Worldwide
            </Paragraph>
            <div className="sign-up-button-container">
              <Button
                type="primary"
                size="large"
                className="sign-up-button pulse"
                onClick={handleClick}
                style={{
                  background:
                    "linear-gradient(135deg, #1a936f 0%, #114b5f 100%)",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(26, 147, 111, 0.6)",
                }}
              >
                Explore Our Products
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <Row gutter={[32, 32]} align="middle" justify="center">
          <Col xs={24} md={10} className="about-col-left">
            <Text className="about-label">About BTY TRADING</Text>
            <Title
              level={1}
              className="about-title"
              style={{
                color: "#1a936f",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
              }}
            >
              Ethiopia's <br /> Agricultural <br /> Products Exporter.
            </Title>
          </Col>
          <Col xs={24} md={10} className="about-col-right">
            <Paragraph
              className="about-description"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                textAlign: "justify",
                lineHeight: "1.6",
                color: "#444",
                // hyphens: "auto",
                textJustify: "inter-word",
              }}
            >
              BTY TRADING PLC, established in 2011, is a premier import export
              company specializing in Ethiopia's finest agricultural products.
              We combine traditional farming wisdom with modern export standards
              to deliver exceptional quality oil seeds, pulses, and spices to
              global markets. Our operations support sustainable agriculture and
              provide livelihoods for many local workers.
            </Paragraph>
            <Button
              type="primary"
              size="large"
              className="learn-more-button"
              onClick={handleClick}
              style={{
                background: "linear-gradient(135deg, #114b5f 0%, #1a936f 100%)",
                border: "none",
                boxShadow: "0 4px 15px rgba(17, 75, 95, 0.4)",
              }}
            >
              Discover Our Story
            </Button>
          </Col>
        </Row>
      </div>

      {/* Gallery Section */}
      <div className="gallery-container">
        <Title
          level={1}
          className="section-title"
          style={{
            color: "#1a936f",
            ...fontStyles.sectionTitle,
          }}
        >
          Our Products
        </Title>
        <Row gutter={[32, 32]} justify="center">
          {images.map((img, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={8}
              key={index}
              className="product-col"
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              <Card
                hoverable
                className={`gallery-card ${cardHover[index] ? "hovered" : ""}`}
                cover={
                  <div className="card-image-container">
                    <img alt="product" src={img} className="card-image" />
                    <div className="card-image-overlay"></div>
                  </div>
                }
              >
                <Meta
                  title={
                    <span
                      style={{
                        color: titleColors[index],
                        ...fontStyles.cardTitle,
                        transition: "all 0.5s ease",
                      }}
                    >
                      {titles[index]}
                    </span>
                  }
                  description={
                    <span
                      style={{
                        color: descriptionColors[index],
                        ...fontStyles.cardDescription,
                        transition: "all 0.5s ease",
                      }}
                    >
                      {descriptions[index]}
                    </span>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="gallery-container">
        <Title
          level={1}
          className="section-title"
          style={{
            color: "#1a936f",
            ...fontStyles.sectionTitle,
          }}
        >
          Our Services
        </Title>
        <Row gutter={[32, 32]} justify="center">
          {images1.map((images1, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={8}
              key={index}
              className="product-col"
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              <Card
                hoverable
                className={`gallery-card ${cardHover[index] ? "hovered" : ""}`}
                cover={
                  <div className="card-image-container">
                    <img alt="product" src={images1} className="card-image" />
                    <div className="card-image-overlay"></div>
                  </div>
                }
              >
                <Meta
                  title={
                    <span
                      style={{
                        color: titleColors1[index],
                        ...fontStyles.cardTitle,
                        transition: "all 0.5s ease",
                      }}
                    >
                      {titles1[index]}
                    </span>
                  }
                  description={
                    <span
                      style={{
                        color: descriptionColors1[index],
                        ...fontStyles.cardDescription,
                        transition: "all 0.5s ease",
                      }}
                    >
                      {descriptions1[index]}
                    </span>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Testimonials />

      <Partners />
    </div>
  );
};

export default Home;
