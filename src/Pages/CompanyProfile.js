import React from "react";
import { Card, Row, Col, Typography } from "antd";
import "./CompanyProfile.css";
import image1 from "../Assets/image1.jpeg";
import backofoil from "../Assets/backofoil.jpg";

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
      <div className="section-container values-section">
        <div className="section-header center-header">
          <Title level={2} className="section-title center-title">
            Our Core Principles
          </Title>
          <div className="section-divider center-divider"></div>
        </div>
        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} sm={24} md={8}>
            <Card className="value-card mission-card">
              <Title level={3} className="value-title">
                Mission
              </Title>
              <div className="value-description">
                To bridge the gap between African agricultural producers and
                global markets by providing reliable, efficient, and transparent
                export and import services, while maintaining the highest
                standards of quality and ethical business practices.
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Card className="value-card vision-card">
              <Title level={3} className="value-title">
                Vision
              </Title>
              <div className="value-description">
                BTY Trading PLC aims to become the leading exporter of
                agricultural products and importer/supplier of industrial raw
                materials, cars, spare parts, and machinery. With over 10 years
                of experience in import and export, we focus on importing
                exclusive, high-quality products from around the world and
                distributing them nationwide.
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Card className="value-card values-card">
              <Title level={3} className="value-title">
                Our Values
              </Title>
              <div className="value-description">
                <ul className="values-list">
                  <li>
                    <Text strong>Integrity:</Text> Honesty and transparency in
                    all dealings.
                  </li>
                  <li>
                    <Text strong>Quality:</Text> Uncompromising standards in our
                    products.
                  </li>
                  <li>
                    <Text strong>Sustainability:</Text> Ethical and responsible
                    trading practices.
                  </li>
                  <li>
                    <Text strong>Innovation:</Text> Continuous improvement in
                    our processes and services.
                  </li>
                  <li>
                    <Text strong>Partnership:</Text> Building strong and
                    mutually beneficial relationships with our clients and
                    suppliers.
                  </li>
                </ul>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CompanyProfile;
