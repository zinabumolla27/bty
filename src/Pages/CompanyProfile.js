import React from "react";
import { Card, Row, Col, Typography } from "antd";
import {
  CheckCircleFilled,
  CrownFilled,
  EyeOutlined,
  HeartFilled,
  RocketOutlined,
  StarOutlined,
  TeamOutlined,
  ToolFilled,
} from "@ant-design/icons";
import "./CompanyProfile.css";
import image1 from "../Assets/image1.jpeg";
import backofoil from "../Assets/backofoil.jpg";

const { Title, Paragraph, Text } = Typography;

const CompanyProfile = () => {
  return (
    <div className="company-profile-container">
      {/* Hero Section */}
      <div className="hero-image-container">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="BTY Trading Agricultural Products"
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <Title
              className="hero-title"
              style={{
                color: "#1a365d",
                fontfamily: "'Poppins', sans-serif",
              }}
            >
              Company Profile
            </Title>
            <Text
              className="hero-subtitle"
              style={{ color: "#f0f0f0", fontFamily: "'Poppins', sans-serif" }}
            >
              BTY Trading PLC - Excellence in Agricultural Products Export
            </Text>
          </div>
        </div>
      </div>

      {/* About Company Section */}
      <div
        className="section-container about-section"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <div className="section-header">
              <Title
                level={2}
                className="section-title about-title"
                style={{
                  color: "#1a365d",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                About BTY Trading PLC
              </Title>
              <div className="section-divider about-divider"></div>
            </div>
            <Paragraph
              className="company-description"
              style={{ color: "#4a5568", fontFamily: "'Poppins', sans-serif" }}
            >
              <Text
                strong
                style={{
                  color: "#2b6cb0",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                BTY TRADING PLC
              </Text>
              , established on{" "}
              <Text
                strong
                style={{
                  color: "#2b6cb0",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                December 16, 2011
              </Text>
              , is a registered import-export company under the Ethiopian
              Ministry of Trade. We specialize in exporting{" "}
              <Text
                strong
                style={{
                  color: "#2b6cb0",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                oilseeds, pulses, and spices
              </Text>{" "}
              to countries like{" "}
              <Text
                strong
                style={{
                  color: "#2b6cb0",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Israel, Turkey, India, Saudi Arabia, Sudan, and the UAE
              </Text>
              .
            </Paragraph>
            <Paragraph
              className="company-description"
              style={{ color: "#4a5568", fontFamily: "'Poppins', sans-serif" }}
            >
              Our products include{" "}
              <Text
                strong
                style={{
                  color: "#2b6cb0",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                sesame seeds, chickpeas, soybeans, green mung beans, niger
                seeds, red kidney beans, and white pea beans
              </Text>
              . We also import{" "}
              <Text
                strong
                style={{
                  color: "#2b6cb0",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                chemicals, cars, machinery, and steel
              </Text>{" "}
              to support growing industrial demand.
            </Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <div className="company-image-container">
              <img
                src={backofoil}
                alt="BTY Trading Operations"
                className="company-image"
              />
            </div>
          </Col>
        </Row>
      </div>

      {/* Company Plans Section */}
      <div className="section-container plans-section">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12} order={2}>
            <div className="section-header">
              <Title
                level={2}
                className="section-title plans-title"
                style={{
                  color: "#1a365d",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                BTY Trading PLC Plans
              </Title>
              <div className="section-divider plans-divider"></div>
            </div>
            <Paragraph
              className="company-description"
              style={{ color: "#4a5568", fontFamily: "'Poppins', sans-serif" }}
            >
              We plan to{" "}
              <Text
                strong
                style={{
                  color: "#2b6cb0",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                modernize and diversify
              </Text>{" "}
              our operations by establishing new departments and producing
              exportable agricultural products. We aim to{" "}
              <Text
                strong
                style={{
                  color: "#2b6cb0",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                build warehouses across the country
              </Text>
              .
            </Paragraph>
            <Paragraph
              className="company-description"
              style={{ color: "#4a5568", fontFamily: "'Poppins', sans-serif" }}
            >
              Our{" "}
              <Text
                strong
                style={{
                  color: "#2b6cb0",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                long-term goal
              </Text>{" "}
              includes expanding both import and export portfolios to meet
              international demand and support Ethiopia's{" "}
              <Text
                strong
                style={{
                  color: "#2b6cb0",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                economic growth
              </Text>
              .
            </Paragraph>
          </Col>
          <Col xs={24} md={12} order={1}>
            <div className="company-image-container">
              <img
                src={image1}
                alt="BTY Trading Future Plans"
                className="company-image"
              />
            </div>
          </Col>
        </Row>
      </div>

      {/* Core Principles Section */}
      <div style={{ padding: "60px 0", background: "#f7fafc" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Text
              style={{
                display: "block",
                color: "#4299e1",
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: "1px",
                marginBottom: "8px",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              OUR FOUNDATION
            </Text>
            <Title
              level={2}
              style={{
                color: "#1a365d",
                fontSize: "28px",
                fontWeight: 700,
                margin: 0,
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Core Principles
            </Title>
          </div>

          {/* Cards */}
          <Row gutter={[24, 24]} justify="center">
            {/* Mission */}
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                style={{
                  height: "100%",
                  borderRadius: "12px",
                  borderTop: "4px solid #3182ce",
                  background:
                    "linear-gradient(to bottom right, #f8fafc, #e0f2fe, #bae6fd)",
                }}
                styles={{ body: { padding: "20px" } }}
              >
                <div style={{ textAlign: "center" }}>
                  <RocketOutlined
                    style={{ fontSize: "40px", color: "#3b82f6" }}
                  />
                  <Title
                    level={3}
                    style={{
                      marginTop: "16px",
                      color: "#3b82f6",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    Mission
                  </Title>
                  <Text
                    style={{
                      color: "#4a5568",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Lead in exporting agricultural products and supplying
                    industrial raw materials, vehicles, and machinery. Focused
                    on quality sourcing, efficient distribution, and customer
                    satisfaction.
                  </Text>
                </div>
              </Card>
            </Col>

            {/* Vision */}
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                style={{
                  height: "100%",
                  borderRadius: "12px",
                  borderTop: "4px solid #38b2ac",
                  background:
                    "linear-gradient(to bottom right, #f8fafc, #f0f9ff)",
                }}
                styles={{ body: { padding: "20px" } }}
              >
                <div style={{ textAlign: "center" }}>
                  <EyeOutlined style={{ fontSize: "40px", color: "#10b981" }} />
                  <Title
                    level={3}
                    style={{
                      marginTop: "16px",
                      color: "#065f46",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    Vision
                  </Title>
                  <Text
                    style={{
                      color: "#4a5568",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      fontFamily: "'Poppins', sans-serif",
                      background:
                        "linear-gradient(to bottom right, #f0fdf4, #ecfdf5)",
                    }}
                  >
                    To be a market leader in sourcing and distributing
                    agricultural and industrial products nationally and
                    internationally.
                  </Text>
                </div>
              </Card>
            </Col>

            {/* Values */}
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                style={{
                  height: "100%",
                  borderRadius: "12px",
                  borderTop: "4px solid #d69e2e",
                  background:
                    "linear-gradient(to bottom right, #fffbeb, #fef3c7)",
                }}
                styles={{ body: { padding: "20px" } }}
              >
                <div style={{ textAlign: "center" }}>
                  <StarOutlined
                    style={{ fontSize: "40px", color: "#f59e0b" }}
                  />
                  <Title
                    level={3}
                    style={{
                      marginTop: "16px",
                      color: "#92400e",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    Our Values
                  </Title>
                  <ul
                    style={{
                      padding: 0,
                      margin: "16px 0",
                      listStyle: "none",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    <li style={{ color: "#4a5568" }}>
                      <CheckCircleFilled
                        style={{ color: "#3182ce", marginRight: "8px" }}
                      />
                      Integrity
                    </li>
                    <li style={{ color: "#4a5568" }}>
                      <HeartFilled
                        style={{ color: "#e53e3e", marginRight: "8px" }}
                      />
                      Passion
                    </li>
                    <li style={{ color: "#4a5568" }}>
                      <ToolFilled
                        style={{ color: "#38b2ac", marginRight: "8px" }}
                      />
                      Innovation
                    </li>
                    <li style={{ color: "#4a5568" }}>
                      <TeamOutlined
                        style={{ color: "#805ad5", marginRight: "8px" }}
                      />
                      Teamwork
                    </li>
                    <li style={{ color: "#4a5568" }}>
                      <CrownFilled
                        style={{ color: "#d69e2e", marginRight: "8px" }}
                      />
                      Leadership
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
