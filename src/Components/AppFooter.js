import React from "react";
import { Layout, Row, Col, Typography, Divider } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookFilled,
  LinkedinFilled,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import "./AppFooter.css";

const { Footer } = Layout;
const { Text, Title } = Typography;

const AppFooter = () => {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Agricultural" },
        { name: "Manufacturing" },
        { name: "Transportation" },
        { name: "Construction" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "About us", path: "/companyprofile" },
        { name: "FAQ", path: "/faq" },
        { name: "companyprofile", path: "/companyprofile" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "Spices", path: "/spices" },
        { name: "Cereals", path: "/cereals" },
        { name: "Pulses", path: "/pulses" },
        { name: "Coffee and Tea", path: "/coffeeandtea" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FacebookFilled />,
      url: "https://web.facebook.com/profile.php?id=61575287050660",
    },
    {
      icon: <FaTelegramPlane />,
      url: "https://t.me/btytrading",
    },
    {
      icon: <LinkedinFilled />,
      url: "https://linkedin.com/company/btytrading",
    },
  ];

  return (
    <Footer className="main-footer">
      <div className="footer-top">
        <Row gutter={[32, 32]} justify="space-between">
          <Col xs={24} sm={24} md={8} lg={6} className="footer-col">
            <div className="footer-brand">
              <Title level={3} className="footer-logo">
                BTY TRADING PLC
              </Title>
              <Text className="footer-description">
                Global trading solutions with local expertise. Connecting
                markets since 2010.
              </Text>

              <div className="contact-info">
                <div className="contact-item">
                  <span className="icon-wrapper">
                    <PhoneOutlined />
                  </span>
                  <a href="tel:+251911257609" className="contact-link">
                    +251 911257609 | +251 911257608 | +251 911257607
                  </a>
                </div>
                <div className="contact-item">
                  <span className="icon-wrapper">
                    <MailOutlined />
                  </span>
                  <a href="mailto:btyb07@gmail.com" className="contact-link">
                    btyb07@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="icon-wrapper">
                    <EnvironmentOutlined />
                  </span>
                  <Text className="contact-text">
                    Bole, Addis Ababa, Ethiopia
                  </Text>
                </div>
              </div>
            </div>
          </Col>

          {footerLinks.map((section, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={4}
              key={index}
              className="footer-col"
            >
              <div className="footer-section">
                <Title level={4} className="footer-section-title">
                  {section.title}
                </Title>
                <ul className="footer-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.path ? (
                        <Link to={link.path} className="footer-link">
                          {link.name}
                        </Link>
                      ) : (
                        <span className="footer-link">{link.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}

          <Col xs={24} sm={12} md={8} lg={6} className="footer-col">
            <div className="footer-section follow-us-section">
              <Title level={4} className="footer-section-title">
                Follow Us
              </Title>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Divider className="footer-divider" />

      <div className="footer-bottom">
        <Row justify="center" align="middle">
          <Col xs={24} md={24} style={{ textAlign: "center" }}>
            <Text className="copyright-text">
              ©2025 BTY Trading PLC. All rights reserved.
            </Text>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default AppFooter;
