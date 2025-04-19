import React from "react";
import { Layout, Row, Col, Typography, Divider } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
        { name: "SisterCompany", path: "/sistercompany" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "Spices", path: "/spices" },
        { name: "Cereals", path: "/cereals" },
        { name: "Pulses", path: "/pulses" },
        { name: "Coffee and Tea", path: "/coffee-and-tea" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FacebookFilled />,
      url: "https://facebook.com/btytrading",
    },
    {
      icon: <TwitterSquareFilled />,
      url: "https://twitter.com/btytrading",
    },

    {
      icon: <LinkedinFilled />,
      url: "https://linkedin.com/company/btytrading",
    },
  ];

  return (
    <Footer className="main-footer">
      <div className="footer-top">
        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} sm={24} md={8} lg={6} className="footer-col">
            <div className="footer-brand">
              <Title level={3} className="footer-logo">
                BTY TRADING
              </Title>
              <Text className="footer-description">
                Global trading solutions with local expertise. Connecting
                markets since 2010.
              </Text>

              <div className="contact-info">
                <div className="contact-item">
                  <EnvironmentOutlined />
                  <Text className="contact-text">
                    Bole, Addis Ababa, Ethiopia
                  </Text>
                </div>
                <div className="contact-item">
                  <MailOutlined />
                  <Link
                    href="mailto:info@btytrading.com"
                    className="contact-link"
                  >
                    info@btytrading.com
                  </Link>
                </div>
                <div className="contact-item">
                  <PhoneOutlined />
                  <Link href="tel:+251984567890" className="contact-link">
                    +251 956 7890
                  </Link>
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
                        <span className="footer-link">{link.name}</span> // For links without a path
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
                    aria-label={`Follow us on ${social.icon.type.name}`}
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
          <Col xs={24} md={24} className="footer-bottom-col">
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
