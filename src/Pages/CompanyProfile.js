import React from "react";
import { Card, Row, Col, Typography } from "antd";
import "./CompanyProfile.css";
import image1 from "../Assets/image1.jpeg";
import backofoil from "../Assets/backofoil.jpg";
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

const { Title, Paragraph, Text } = Typography;

const CompanyProfile = () => {
  return (
    <div className="company-profile-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-image-container">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="BTY Trading Agricultural Products"
            className="hero-image"
          />
          <div className="hero-overlay">
            <div className="hero-content">
              <Title className="hero-title" style={{ color: "blue" }}>
                Company Profile
              </Title>
              <Text className="hero-subtitle">
                BTY Trading PLC - Excellence in Agricultural Products Export
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* About Company Section */}
      <div className="section-container about-section">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <div className="section-header">
              <Title level={2} className="section-title about-title">
                About BTY Trading PLC
              </Title>
              <div className="section-divider about-divider"></div>
            </div>
            <Paragraph className="company-description">
              <Text strong className="highlight-text">
                BTY TRADING PLC
              </Text>
              , established on <Text strong>December 16, 2011</Text>, is a
              registered import-export company under the Ethiopian Ministry of
              Trade. We specialize in exporting{" "}
              <Text strong>oilseeds, pulses, and spices</Text> to countries like{" "}
              <Text strong>
                Israel, Turkey, India, Saudi Arabia, Sudan, and the UAE
              </Text>
              .
            </Paragraph>
            <Paragraph className="company-description">
              Our products include{" "}
              <Text strong>
                sesame seeds, chickpeas, soybeans, green mung beans, niger
                seeds, red kidney beans, and white pea beans
              </Text>
              . We also import{" "}
              <Text strong>chemicals, cars, machinery, and steel</Text> to
              support the growing demand in various industries.
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
              <Title level={2} className="section-title plans-title">
                BTY Trading PLC Plans
              </Title>
              <div className="section-divider plans-divider"></div>
            </div>
            <Paragraph className="company-description">
              We plan to <Text strong>modernize and diversify</Text> our
              operations by establishing new departments and producing
              exportable agricultural products. We also aim to{" "}
              <Text strong>build warehouses across the country</Text>.
            </Paragraph>
            <Paragraph className="company-description">
              Our <Text strong>long-term goal</Text> includes expanding both
              import and export portfolios to meet international demand while
              supporting Ethiopia's <Text strong>economic growth</Text>.
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
      <div
        style={{
          padding: "60px 0",
          background: "#f9f9f9",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          {/* Compact Section Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <Text
              style={{
                display: "block",
                color: "#3b82f6",
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              OUR FOUNDATION
            </Text>
            <Title
              level={2}
              style={{
                color: "#1e293b",
                fontSize: "28px",
                fontWeight: 700,
                margin: 0,
              }}
            >
              Core Principles
            </Title>
          </div>

          {/* Tightly Spaced Cards */}
          <Row gutter={[24, 24]} justify="center">
            {/* Mission Card */}
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                style={{
                  height: "100%",
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "rgba(59, 130, 246, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <RocketOutlined
                      style={{ fontSize: "20px", color: "#3b82f6" }}
                    />
                  </div>
                  <Title
                    level={3}
                    style={{
                      fontSize: "18px",
                      margin: "0 0 12px 0",
                      color: "#3b82f6",
                    }}
                  >
                    Mission
                  </Title>
                  <Text
                    style={{
                      color: "#64748b",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      textAlign: "justify",
                      wordWrap: "break-word",
                      wordSpacing: "normal",
                      hyphens: "auto",
                      textJustify: "inter-word",
                    }}
                  >
                    At BTY Trading PLC, our mission is to become the leading
                    exporter of agricultural products and trusted supplier of
                    industrial raw materials, vehicles, and machinery. We are
                    committed to sourcing high-quality, exclusive products
                    globally and ensuring efficient distribution nationwide.
                    With a focus on reliability, innovation, and customer
                    satisfaction, we aim to drive sustainable growth.
                  </Text>
                </div>
              </Card>
            </Col>

            {/* Vision Card */}
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                style={{
                  height: "100%",
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "rgba(16, 185, 129, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <EyeOutlined
                      style={{ fontSize: "20px", color: "#10b981" }}
                    />
                  </div>
                  <Title
                    level={3}
                    style={{
                      fontSize: "18px",
                      margin: "0 0 12px 0",
                      color: "#10b981",
                    }}
                  >
                    Vision
                  </Title>
                  <Text
                    style={{
                      color: "#64748b",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      textAlign: "justify",
                      wordWrap: "break-word",
                      wordSpacing: "-0.5px",
                      hyphens: "auto",
                    }}
                  >
                    BTY Trading PLC aims to lead the market in the export of
                    agricultural products and the import and supply of various
                    industrial raw materials, vehicles, car spare parts, and
                    machinery. With over 10 years of experience in the import
                    and export sector, we are committed to sourcing
                    high-quality, exclusive products from around the globe and
                    distributing them across the country.
                  </Text>
                </div>
              </Card>
            </Col>

            {/* Values Card */}
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                style={{
                  height: "100%",
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "rgba(245, 158, 11, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <StarOutlined
                      style={{ fontSize: "20px", color: "#f59e0b" }}
                    />
                  </div>
                  <Title
                    level={3}
                    style={{
                      fontSize: "18px",
                      margin: "0 0 12px 0",
                      textAlign: "center",
                      color: "#f59e0b",
                    }}
                  >
                    Our Values
                  </Title>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      width: "100%",
                    }}
                  >
                    {[
                      {
                        icon: (
                          <CheckCircleFilled style={{ color: "#10b981" }} />
                        ),
                        text: "Integrity: Honest dealings",
                      },
                      {
                        icon: <CrownFilled style={{ color: "#f59e0b" }} />,
                        text: "Quality: Uncompromising standards",
                      },
                      {
                        icon: <HeartFilled style={{ color: "#ef4444" }} />,
                        text: "Sustainability: Ethical practices",
                      },
                      {
                        icon: <ToolFilled style={{ color: "#3b82f6" }} />,
                        text: "Innovation: Continuous improvement",
                      },
                      {
                        icon: <TeamOutlined style={{ color: "#8b5cf6" }} />,
                        text: "Partnership: Strong relationships",
                      },
                    ].map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "8px",
                          fontSize: "14px",
                          color: "#64748b",
                        }}
                      >
                        <span style={{ marginRight: "8px" }}>{item.icon}</span>
                        {item.text}
                      </li>
                    ))}
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
