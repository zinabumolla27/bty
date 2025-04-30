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
            <Title className="hero-title" style={{ color: "blue" }}>
              Company Profile
            </Title>
            <Text className="hero-subtitle">
              BTY Trading PLC - Excellence in Agricultural Products Export
            </Text>
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
              support growing industrial demand.
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
              exportable agricultural products. We aim to{" "}
              <Text strong>build warehouses across the country</Text>.
            </Paragraph>
            <Paragraph className="company-description">
              Our <Text strong>long-term goal</Text> includes expanding both
              import and export portfolios to meet international demand and
              support Ethiopia's <Text strong>economic growth</Text>.
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
      <div style={{ padding: "60px 0", background: "#f9f9f9" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
                color: "#10b981",
                fontSize: "28px",
                fontWeight: 700,
                margin: 0,
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
                  borderTop: "4px solid #3b82f6",
                  boxShadow: "0 6px 16px rgba(59, 130, 246, 0.12)",
                  background:
                    "linear-gradient(to bottom right, #f8fafc, #f0f9ff)",
                }}
                styles={{ body: { padding: "20px" } }}
              >
                <div style={{ textAlign: "center" }}>
                  <RocketOutlined
                    style={{ fontSize: "40px", color: "#3b82f6" }}
                  />
                  <Title
                    level={3}
                    style={{ marginTop: "16px", color: "#1e40af" }}
                  >
                    Mission
                  </Title>
                  <Text
                    style={{
                      color: "#475569",
                      fontSize: "15px",
                      lineHeight: "1.6",
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
                  borderTop: "4px solid #10b981",
                  boxShadow: "0 6px 16px rgba(16, 185, 129, 0.12)",
                  background:
                    "linear-gradient(to bottom right, #f0fdf4, #ecfdf5)",
                }}
                styles={{ body: { padding: "20px" } }}
              >
                <div style={{ textAlign: "center" }}>
                  <EyeOutlined style={{ fontSize: "40px", color: "#10b981" }} />
                  <Title
                    level={3}
                    style={{ marginTop: "16px", color: "#065f46" }}
                  >
                    Vision
                  </Title>
                  <Text
                    style={{
                      color: "#475569",
                      fontSize: "15px",
                      lineHeight: "1.6",
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
                  borderTop: "4px solid #f59e0b",
                  boxShadow: "0 6px 16px rgba(245, 158, 11, 0.12)",
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
                    style={{ marginTop: "16px", color: "#92400e" }}
                  >
                    Our Values
                  </Title>
                  <ul
                    style={{ padding: 0, margin: "16px 0", listStyle: "none" }}
                  >
                    <li>
                      <CheckCircleFilled
                        style={{ color: "#3b82f6", marginRight: "8px" }}
                      />
                      Integrity
                    </li>
                    <li>
                      <HeartFilled
                        style={{ color: "#f43f5e", marginRight: "8px" }}
                      />
                      Passion
                    </li>
                    <li>
                      <ToolFilled
                        style={{ color: "#10b981", marginRight: "8px" }}
                      />
                      Innovation
                    </li>
                    <li>
                      <TeamOutlined
                        style={{ color: "#6366f1", marginRight: "8px" }}
                      />
                      Teamwork
                    </li>
                    <li>
                      <CrownFilled
                        style={{ color: "#f59e0b", marginRight: "8px" }}
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
