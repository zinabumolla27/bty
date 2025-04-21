import React from "react";
import { Form, Input, Button, Typography, Divider } from "antd";
import { motion } from "framer-motion";
import {
  MailOutlined,
  PhoneOutlined,
  MessageOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./Contact.css";

const { Title, Paragraph, Text } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Form submitted:", values);
  };

  // Color palette
  const colors = {
    primary: "#4F46E5", // Indigo-600
    primaryLight: "#6366F1", // Indigo-500
    primaryDark: "#4338CA", // Indigo-700
    secondary: "#10B981", // Emerald-500
    accent: "#F59E0B", // Amber-500
    dark: "#1F2937", // Gray-800
    medium: "#4B5563", // Gray-600
    light: "#F3F4F6", // Gray-100
    white: "#FFFFFF",
    error: "#EF4444", // Red-500
  };

  return (
    <div className="contact-wrapper">
      {/* Hero Section */}
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "60px 20px 40px",
        }}
      >
        <Title
          level={1}
          style={{
            fontSize: "3.5rem",
            fontWeight: 800,
            marginBottom: "24px",
            background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1.2,
          }}
        >
          Connect With Us
        </Title>

        <Divider
          style={{
            width: "100px",
            height: "4px",
            background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
            margin: "0 auto 24px",
            borderRadius: "2px",
            border: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Paragraph
            style={{
              fontSize: "1.2rem",
              color: colors.medium,
              lineHeight: 1.7,
              marginBottom: 0,
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            We're here to help and answer any questions you might have. Whether
            you're interested in our services, need support, or just want to say
            hello—our team is ready to assist you.
          </Paragraph>
        </motion.div>

        {/* Contact Method Chips */}
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {[
            {
              icon: <MailOutlined style={{ fontSize: "20px" }} />,
              text: "Email Us",
              color: colors.primary,
            },
            {
              icon: <PhoneOutlined style={{ fontSize: "20px" }} />,
              text: "Call Us",
              color: colors.secondary,
            },
            {
              icon: <MessageOutlined style={{ fontSize: "20px" }} />,
              text: "Live Chat",
              color: colors.accent,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 20px",
                borderRadius: "50px",
                backgroundColor: `${item.color}15`,
                border: `1px solid ${item.color}30`,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${item.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = `${item.color}15`;
              }}
            >
              <div style={{ color: item.color }}>{item.icon}</div>
              <Text strong style={{ color: colors.dark }}>
                {item.text}
              </Text>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Main Content - Centered Container */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div className="form-address-row">
          {/* Contact Form - Centered */}
          <motion.div
            className="form-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              flex: 1,
              minWidth: "320px",
              maxWidth: "600px",
              margin: "0 auto",
              padding: "0 20px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <MailOutlined
                  style={{
                    fontSize: "28px",
                    color: colors.primary,
                  }}
                />
                <Title
                  level={3}
                  style={{
                    margin: 0,
                    color: colors.dark,
                    fontWeight: 600,
                  }}
                >
                  Send us a message
                </Title>
              </div>
              <Text style={{ color: colors.medium }}>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </Text>
            </div>

            <Form
              layout="vertical"
              onFinish={onFinish}
              className="enhanced-form"
            >
              <div style={{ display: "flex", gap: "16px" }}>
                <Form.Item
                  name="firstName"
                  label={
                    <Text strong style={{ color: colors.medium }}>
                      First Name
                    </Text>
                  }
                  rules={[
                    { required: true, message: "Please enter your first name" },
                  ]}
                  style={{ flex: 1 }}
                >
                  <Input
                    placeholder="Enter first name"
                    style={{
                      padding: "12px 16px",
                      borderRadius: "8px",
                      borderColor: `${colors.medium}30`,
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="lastName"
                  label={
                    <Text strong style={{ color: colors.medium }}>
                      Last Name
                    </Text>
                  }
                  rules={[
                    { required: true, message: "Please enter your last name" },
                  ]}
                  style={{ flex: 1 }}
                >
                  <Input
                    placeholder="Enter last name"
                    style={{
                      padding: "12px 16px",
                      borderRadius: "8px",
                      borderColor: `${colors.medium}30`,
                    }}
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="email"
                label={
                  <Text strong style={{ color: colors.medium }}>
                    Email Address
                  </Text>
                }
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input
                  placeholder="your@email.com"
                  style={{
                    padding: "12px 16px",
                    borderRadius: "8px",
                    borderColor: `${colors.medium}30`,
                  }}
                />
              </Form.Item>

              <Form.Item
                name="subject"
                label={
                  <Text strong style={{ color: colors.medium }}>
                    Subject
                  </Text>
                }
                rules={[{ required: true, message: "Please enter a subject" }]}
              >
                <Input
                  placeholder="What's this about?"
                  style={{
                    padding: "12px 16px",
                    borderRadius: "8px",
                    borderColor: `${colors.medium}30`,
                  }}
                />
              </Form.Item>

              <Form.Item
                name="message"
                label={
                  <Text strong style={{ color: colors.medium }}>
                    Your Message
                  </Text>
                }
                rules={[{ required: true, message: "Message cannot be empty" }]}
              >
                <Input.TextArea
                  placeholder="Write your message here..."
                  rows={6}
                  style={{
                    padding: "12px 16px",
                    borderRadius: "8px",
                    borderColor: `${colors.medium}30`,
                    resize: "vertical",
                  }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="submit-button"
                  style={{
                    height: "48px",
                    width: "100%",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "16px",
                    backgroundColor: colors.primary,
                    border: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </motion.div>

          {/* Contact Information - Centered */}
          <motion.div
            className="info-container"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              flex: 1,
              minWidth: "320px",
              maxWidth: "600px",
              margin: "0 auto",
              padding: "0 20px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <EnvironmentOutlined
                  style={{
                    fontSize: "28px",
                    color: colors.secondary,
                  }}
                />
                <Title
                  level={3}
                  style={{
                    margin: 0,
                    color: colors.dark,
                    fontWeight: 600,
                  }}
                >
                  Contact Information
                </Title>
              </div>
              <Text style={{ color: colors.medium }}>
                Find our office location and contact details below.
              </Text>
            </div>

            <div style={{ marginBottom: "32px", textAlign: "center" }}>
              <Title
                level={4}
                style={{
                  color: colors.dark,
                  fontWeight: 600,
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <EnvironmentOutlined style={{ color: colors.secondary }} />
                Our Location
              </Title>
              <Paragraph
                style={{
                  color: colors.medium,
                  lineHeight: 1.7,
                }}
              >
                <Text strong style={{ color: colors.dark, display: "block" }}>
                  BTY Trading PLC
                </Text>
                Bole, Addis Ababa, Ethiopia
                <br />
                <Text type="secondary" style={{ fontSize: "14px" }}>
                  Near Bole Medhanealem Cathedral
                </Text>
              </Paragraph>
            </div>

            <div style={{ marginBottom: "32px", textAlign: "center" }}>
              <Title
                level={4}
                style={{
                  color: colors.dark,
                  fontWeight: 600,
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <PhoneOutlined style={{ color: colors.primaryLight }} />
                Contact Details
              </Title>
              <Paragraph
                style={{
                  color: colors.medium,
                  lineHeight: 1.7,
                }}
              >
                <Text strong style={{ color: colors.dark, display: "block" }}>
                  <PhoneOutlined style={{ marginRight: "8px" }} />
                  +251 929260805
                </Text>
                <Text
                  strong
                  style={{
                    color: colors.dark,
                    display: "block",
                    marginTop: "8px",
                  }}
                >
                  <MailOutlined style={{ marginRight: "8px" }} />
                  info@btytrading.com
                </Text>
              </Paragraph>
            </div>

            <div style={{ textAlign: "center" }}>
              <Title
                level={4}
                style={{
                  color: colors.dark,
                  fontWeight: 600,
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <ClockCircleOutlined style={{ color: colors.accent }} />
                Working Hours
              </Title>
              <Paragraph
                style={{
                  color: colors.medium,
                  lineHeight: 1.7,
                }}
              >
                <Text strong style={{ color: colors.dark, display: "block" }}>
                  Monday - Friday:{" "}
                  <Text style={{ fontWeight: 400 }}>8:00 AM - 5:30 PM</Text>
                </Text>
                <Text
                  strong
                  style={{
                    color: colors.dark,
                    display: "block",
                    marginTop: "4px",
                  }}
                >
                  Saturday:{" "}
                  <Text style={{ fontWeight: 400 }}>2:00 AM - 5:30 PM</Text>
                </Text>
                <Text
                  strong
                  style={{
                    color: colors.dark,
                    display: "block",
                    marginTop: "4px",
                  }}
                >
                  Sunday:{" "}
                  <CloseOutlined
                    style={{ color: colors.error, marginLeft: "4px" }}
                  />
                  <Text
                    style={{
                      fontWeight: 400,
                      color: colors.error,
                      marginLeft: "4px",
                    }}
                  >
                    Closed
                  </Text>
                </Text>
              </Paragraph>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-width Map Section */}
      <div
        style={{
          width: "100%",
          marginTop: "60px",
        }}
      >
        <iframe
          title="BTY Trading Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7419884392707!2d38.787333673752336!3d8.995872489509235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8584b0f1294d%3A0x78c5c25e5067a736!2sBole%20Medhanialem%20Church!5e0!3m2!1sen!2set!4v1745237595933!5m2!1sen!2set"
          width="100%"
          height="400"
          style={{
            display: "block",
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Contact;
