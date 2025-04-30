import React from "react";
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import cb from "../Assets/cb.jpeg";
import ab from "../Assets/ab.jpg";
import abay from "../Assets/abay.png";
import am from "../Assets/am.png";
import buna from "../Assets/buna.png";
import ep from "../Assets/ep.jpg";
import adcham from "../Assets/adcham.png";
import "./Partner.css"; // Import the CSS file

const partnerLogos = [
  { src: cb, alt: "Commercial Bank of Ethiopia" },
  { src: ab, alt: "Bank of Abyssinia" },
  { src: am, alt: "Amhara Bank" },
  { src: abay, alt: "Abay Bank" },
  { src: buna, alt: "Buna Bank" },
];

const memberLogos = [
  {
    src: ep,
    name: "Ethiopian Pulses, Oilseeds and Spices Processors Exporters Association (EPOSPEA)",
  },
  {
    src: adcham,
    name: "Addis Ababa Chamber of Commerce and Sectoral Association (AACCSA)",
  },
];

const Partners = () => {
  return (
    <div className="partners-container">
      <div className="partners-content">
        {/* Partner Logos */}
        <Row justify="center" gutter={[24, 24]} className="partner-logos-row">
          {partnerLogos.map((logo, index) => (
            <Col
              key={index}
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              className="partner-col"
            >
              <motion.div
                className="partner-card"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={logo.src} alt={logo.alt} className="partner-logo" />
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Divider Line */}
        <motion.div
          className="divider-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Member Section */}
        <div className="member-section">
          <motion.h3
            className="member-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Member of
          </motion.h3>

          <Row justify="center" gutter={[24, 24]} className="member-logos-row">
            {memberLogos.map((member, index) => (
              <Col
                key={index}
                xs={24}
                sm={20}
                md={12}
                lg={10}
                className="member-col"
              >
                <motion.div
                  className="member-card"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <img
                    src={member.src}
                    alt={member.name}
                    className="member-logo"
                  />
                  <p className="member-name">{member.name}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Partners;
