import React from "react";
import { Form, Input, Button, Typography, Divider } from "antd";
import { motion } from "framer-motion";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "./Contact.css";

const { Title, Paragraph, Text } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title className="main-title">Connect With Us</Title>
        <Divider className="title-divider" />
        <Paragraph className="hero-text">
          We're here to help and answer any questions you might have. Whether
          you're interested in our services, need support, or just want to say
          hello—our team is ready to assist you.
        </Paragraph>

        <div className="contact-options">
          <motion.div
            className="contact-option email-option"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MailOutlined className="option-icon" />
            <Text strong>Email Us</Text>
          </motion.div>

          <motion.div
            className="contact-option phone-option"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PhoneOutlined className="option-icon" />
            <Text strong>Call Us</Text>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="content-grid">
        {/* Contact Form */}
        <motion.div
          className="form-section"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="section-header">
            <Title level={3} className="section-title">
              <MailOutlined className="title-icon" /> Send us a message
            </Title>
            <Text className="section-subtitle">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </Text>
          </div>

          <Form layout="vertical" onFinish={onFinish} className="contact-form">
            <Form.Item
              name="firstName"
              label={<Text className="form-label">First Name</Text>}
              rules={[
                { required: true, message: "Please enter your first name" },
              ]}
            >
              <Input placeholder="Enter first name" className="form-input" />
            </Form.Item>

            <Form.Item
              name="lastName"
              label={<Text className="form-label">Last Name</Text>}
              rules={[
                { required: true, message: "Please enter your last name" },
              ]}
            >
              <Input placeholder="Enter last name" className="form-input" />
            </Form.Item>

            <Form.Item
              name="email"
              label={<Text className="form-label">Email Address</Text>}
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="your@email.com" className="form-input" />
            </Form.Item>

            <Form.Item
              name="message"
              label={<Text className="form-label">Your Message</Text>}
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea
                placeholder="Write your message here..."
                rows={6}
                className="form-textarea"
              />
            </Form.Item>

            <Button type="primary" htmlType="submit" className="submit-button">
              Send Message
            </Button>
          </Form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="info-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="section-header">
            <Title level={3} className="section-title">
              <EnvironmentOutlined className="title-icon" /> Contact Information
            </Title>
            <Text className="section-subtitle">
              Find our office location and contact details below.
            </Text>
          </div>

          <div className="info-block">
            <Title level={4} className="info-title">
              <EnvironmentOutlined className="info-icon" /> Our Location
            </Title>
            <Paragraph className="info-text">
              <Text strong>BTV Trading PLC</Text>
              <br />
              Bole, Woreda 03, DAT Tower/Building, 6rd floor
              <br />
              Addis Ababa, Ethiopia
            </Paragraph>
          </div>

          <div className="info-block">
            <Title level={4} className="info-title">
              <PhoneOutlined className="info-icon" /> Contact Details
            </Title>
            <Paragraph className="info-text">
              <Text strong>+251 911257609</Text>
              <br />
              <Text strong>+251 911257608</Text>
              <br />
              <Text strong>+251 911257607</Text>
              <br />
              <Text strong>info@btvtrading.com</Text>
            </Paragraph>
          </div>
        </motion.div>
      </div>

      {/* Full Width Map Section */}
      <div className="map-container">
        <iframe
          title="BTV Trading Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.697727938423!2d38.7809864737524!3d8.999936489445814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850921741007%3A0x4f00e48587b0714!2sDat%20Tower!5e0!3m2!1sen!2set!4v1745669332798!5m2!1sen!2set"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="full-width-map"
        />
      </div>
    </div>
  );
};

export default Contact;
