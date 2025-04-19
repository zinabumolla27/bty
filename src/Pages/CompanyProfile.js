import React, { useEffect } from "react";
import { Row, Col, Typography } from "antd";
import { motion, useAnimation } from "framer-motion";
import image1 from "../Assets/image1.jpeg";
import image3 from "../Assets/image3.jpg";
import backofoil from "../Assets/backofoil.jpg";
import "./CompanyProfile.css";
import Mission from "./Mission";

const { Title, Paragraph } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.2,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const SectionWrapper = ({ children, id }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const element = document.getElementById(id);
        if (element) {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (elementTop < windowHeight * 0.75) {
            controls.start("visible");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, id]);

  return (
    <motion.div
      id={id}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      style={{ width: "100%" }}
    >
      <div className="content-container">{children}</div>
    </motion.div>
  );
};

const CompanyProfile = () => {
  return (
    <div className="company-profile-container">
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${image3})`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="hero-overlay"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Title level={1} className="hero-title floating">
              Company Profile
            </Title>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div
              style={{
                height: 4,
                width: 100,
                background: "white",
                margin: "20px auto",
                borderRadius: 2,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <SectionWrapper id="about-section">
        <Row gutter={[0, 30]} className="section about-section" align="middle">
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="image-col">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src={image1}
                alt="About our company"
                className="section-image"
              />
            </motion.div>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="text-col">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              style={{ width: "100%" }}
            >
              <Title level={2} className="section-title">
                About Our Company
              </Title>
              <Paragraph className="section-text">
                BTY TRADING PLC, established on December 16, 2011, is a
                registered import-export company under the Ethiopian Ministry of
                Trade. We specialize in exporting oilseeds, pulses, and spices
                to countries like Israel, Turkey, India, Saudi Arabia, Sudan,
                and the UAE.
              </Paragraph>
              <Paragraph className="section-text">
                Our products include sesame seeds, chickpeas, soybeans, green
                mung beans, niger seeds, red kidney beans, and white pea beans.
                We also import chemicals, cars, machinery, and steel to support
                the growing demand in various industries.
              </Paragraph>
            </motion.div>
          </Col>
        </Row>
      </SectionWrapper>

      {/* Plans Section */}
      <SectionWrapper id="plans-section">
        <Row gutter={[0, 30]} className="section plans-section" align="middle">
          <Col
            xs={24}
            sm={24}
            md={{ span: 12, order: 2 }}
            lg={{ span: 12, order: 2 }}
            xl={{ span: 12, order: 2 }}
            className="text-col"
          >
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Title level={2} className="section-title">
                Bty Trading Plc Plans
              </Title>
              <Paragraph className="section-text">
                We plan to modernize and diversify our operations by
                establishing new departments and producing exportable
                agricultural products. We also aim to build warehouses across
                the country.
              </Paragraph>
              <Paragraph className="section-text">
                Our long-term goal includes expanding both import and export
                portfolios to meet international demand while supporting
                Ethiopia’s economic growth.
              </Paragraph>
            </motion.div>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={{ span: 12, order: 1 }}
            lg={{ span: 12, order: 1 }}
            xl={{ span: 12, order: 1 }}
            className="image-col"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src={backofoil} alt="Our plans" className="section-image" />
            </motion.div>
          </Col>
        </Row>
      </SectionWrapper>

      {/* Mission Component */}
      <SectionWrapper id="mission-section">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Mission />
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default CompanyProfile;
