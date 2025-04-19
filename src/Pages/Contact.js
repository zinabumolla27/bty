import React from "react";
import { Form, Input, Button, Typography } from "antd";
import "./Contact.css";
import { motion } from "framer-motion";
const { Title, Paragraph } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <div className="contact-wrapper">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        {/* Main Title with Gradient Text */}
        <Title
          level={1}
          style={{
            fontSize: "2.8rem",
            fontWeight: 700,
            marginBottom: "24px",
            background: "linear-gradient(45deg, #3182ce, #805ad5)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1.2,
          }}
        >
          Get in Touch
        </Title>

        {/* Decorative Divider */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "linear-gradient(90deg, #3182ce, #805ad5)",
            margin: "0 auto 24px",
            borderRadius: "2px",
          }}
        />

        {/* Animated Description Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Paragraph
            style={{
              fontSize: "1.1rem",
              color: "#4a5568",
              lineHeight: 1.7,
              marginBottom: 0,
            }}
          >
            We're here to help. Whether you have questions about our services,
            need assistance, or just want to say hello — our team is ready to
            connect with you. Reach out and we'll respond promptly.
          </Paragraph>
        </motion.div>

        {/* Floating Contact Icons (Optional) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginTop: "32px",
          }}
        >
          {["📩", "📞", "💬"].map((icon, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.1 }}
              style={{
                fontSize: "28px",
                cursor: "default",
                opacity: 0.7,
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="form-address-row">
        <div className="form-container">
          <Title level={3} style={{ color: "#3498db" }}>
            📬 Contact Form
          </Title>
          <Form layout="vertical" onFinish={onFinish} className="enhanced-form">
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                { required: true, message: "Please enter your first name" },
              ]}
            >
              <Input placeholder="Enter First Name" />
            </Form.Item>

            <Form.Item name="middleName" label="Middle Name">
              <Input placeholder=" Enter Middle Name" />
            </Form.Item>

            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                { required: true, message: "Please enter your last name" },
              ]}
            >
              <Input placeholder=" Enter Last Name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Enter a valid email",
                },
              ]}
            >
              <Input placeholder="Enter Your Email" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Your Message"
              rules={[{ required: true, message: "Message cannot be empty" }]}
            >
              <Input.TextArea
                placeholder="Write your message here..."
                rows={5}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="submit-button"
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div
          className="info-container"
          style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Title
            level={2}
            style={{
              color: "#2c3e50",
              marginBottom: "16px",
              borderBottom: "2px solid #3498db",
              paddingBottom: "8px",
            }}
          >
            <span style={{ color: "#3498db" }}>BTY</span> Trading PLC
          </Title>

          <Paragraph
            style={{ lineHeight: "1.6", fontSize: "16px", color: "#34495e" }}
          >
            <strong style={{ display: "block", marginBottom: "8px" }}>
              <span style={{ color: "#3498db" }}>📍</span> Bole, Addis Ababa,
              Ethiopia
            </strong>
            <span style={{ color: "#3498db" }}>📞</span> +251 929260805
            <br />
            <span style={{ color: "#3498db" }}>✉️</span> info@btytrading.com
          </Paragraph>

          <Title
            level={3}
            style={{
              color: "#2c3e50",
              marginTop: "24px",
              borderBottom: "1px solid #eee",
              paddingBottom: "6px",
            }}
          >
            <span style={{ color: "#3498db" }}>⏰</span> Working Hours
          </Title>
          <Paragraph
            style={{ lineHeight: "1.6", fontSize: "16px", color: "#34495e" }}
          >
            <strong>Monday - Friday:</strong> 8:00 AM - 5:30 PM
            <br />
            <strong>Saturday:</strong> 2:00 AM - 5:30 PM
            <br />
            <strong>Sunday:</strong>{" "}
            <span style={{ color: "#e74c3c" }}>Closed</span>
          </Paragraph>
        </div>
      </div>

      <div
        className="map-box"
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)", // Counteracts container padding
          height: "400px", // Adjust height as needed
          position: "relative",
          left: 0,
          right: 0,
        }}
      >
        <iframe
          title="BTY Trading Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.622192751086!2d38.74381081477663!3d9.02455309352841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85330c9e8f1b%3A0x65f09fbd9945930b!2sSarbet!5e0!3m2!1sen!2set!4v1615729371626!5m2!1sen!2set"
          width="100%"
          height="100%"
          style={{
            border: 0,
            display: "block", // Removes iframe default inline spacing
          }}
          allowFullScreen
          aria-hidden="false"
          loading="lazy" // Improves page load performance
        />
      </div>
    </div>
  );
};

export default Contact;
