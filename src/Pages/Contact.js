import React, { useEffect } from "react";
import { Form, Input, Button, Typography, Divider, notification } from "antd";
import { motion } from "framer-motion";
import { PhoneOutlined } from "@ant-design/icons";
import {
  MailOutlined,
  EnvironmentOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import "./Contact.css";
import { connect, useDispatch } from "react-redux";
import {
  addContact,
  resetContactCreatedValue,
} from "../features/contact/contactSlice";
import { FaPhoneAlt } from "react-icons/fa";

const { Title, Paragraph, Text } = Typography;
const Context = React.createContext({ name: "Default" });

const Contact = (props) => {
  const [form] = Form.useForm();
  const { loading, contactCreated } = props;
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (contactCreated) {
      openNotification("bottomLeft");
      dispatch(resetContactCreatedValue());
    }
  }, [contactCreated]);

  const openNotification = (placement) => {
    api.info({
      message: `Thank You`,
      description:
        "Thank you for reaching out! 🙌We've received your message and will get back to you as soon as possible.In the meantime, feel free to explore more on our website",
      placement,
    });
  };

  const dispatch = useDispatch();
  const onFinish = async (values) => {
    form.resetFields();
    dispatch(addContact(values));
  };

  return (
    <div className="contact-container">
      {contextHolder}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title className="main-title">Get In Touch</Title>
        <Divider className="title-divider" />
        <Paragraph className="hero-text">
          We're here to help and answer any questions you might have. Whether
          you're interested in our services, need support, or just want to say
          hello - our team is ready to assist you.
        </Paragraph>

        <div className="contact-options">
          <motion.div
            className="contact-option email-option"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "mailto:btyb07@gmail.com")}
          >
            <MailOutlined className="option-icon" />
            <Text strong>Email Us</Text>
          </motion.div>

          <motion.div
            className="contact-option phone-option"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "tel:+251911257609")}
          >
            <PhoneOutlined className="option-icon" />
            <Text strong>Call Us</Text>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content - Centered Boxes */}
      <div className="centered-boxes-container">
        {/* Contact Form */}
        <motion.div
          className="centered-box form-box"
          style={{ backgroundColor: "#f1f5f9" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="box-header">
            <Title level={3} className="box-title" style={{ color: "#10b981" }}>
              <MailOutlined className="box-icon" /> Send us a message
            </Title>
            <Text className="box-subtitle">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </Text>
          </div>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="contact-form"
          >
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
                { required: false, message: "Please enter your last name" },
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
              <Input placeholder="Enter your email" className="form-input" />
            </Form.Item>

            <Form.Item
              name="phone"
              label={<Text className="form-label">Phone Number</Text>}
              rules={[
                { required: false, message: "Please enter your subject" },
              ]}
            >
              <Input
                placeholder="Enter Your Phone Number"
                className="form-input"
              />
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

            <Button
              type="primary"
              htmlType="submit"
              className="submit-button"
              loading={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="centered-box info-box"
          style={{ backgroundColor: "#f1f5f9" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="box-header">
            <Title level={3} className="box-title" style={{ color: "#10b981" }}>
              <EnvironmentOutlined className="box-icon" /> Contact Information
            </Title>
            <Text className="box-subtitle">
              Find our office location and contact details below.
            </Text>
          </div>

          <div className="info-content">
            <div className="info-section">
              <div className="info-icon-container">
                <EnvironmentOutlined className="info-icon" />
              </div>
              <div className="info-details">
                <Title
                  level={4}
                  className="info-title"
                  style={{ color: "#2563eb" }}
                >
                  Our Location
                </Title>
                <Paragraph className="info-text">
                  <Text strong>BTY Trading PLC</Text>
                  <br />
                  Bole, Woreda 03, DAT Tower/Building, 6th floor
                  <br />
                  Addis Ababa, Ethiopia
                </Paragraph>
              </div>
            </div>

            <div className="info-section">
              <div className="info-icon-container">
                <PhoneOutlined className="info-icon" />
              </div>
              <div className="info-details">
                <Title
                  level={4}
                  className="info-title"
                  style={{ color: "2563eb" }}
                >
                  Contact Details
                </Title>
                <div className="contact-methods">
                  <div className="contact-method">
                    <Text strong>
                      {" "}
                      <PhoneFilled />
                      +251 911257609
                    </Text>
                  </div>
                  <div className="contact-method">
                    <Text strong>
                      {" "}
                      <PhoneFilled />
                      +251 911257608
                    </Text>
                  </div>
                  <div className="contact-method">
                    <Text strong>
                      {" "}
                      <PhoneFilled />
                      +251 911257607
                    </Text>
                  </div>
                  <div className="contact-method">
                    <Text strong>☎️ 011263218</Text>
                  </div>
                  <div className="contact-method">
                    <MailOutlined />
                    <Text strong>btyb07@gmail.com</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe
          title="BTY Trading Location"
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
const mapStateToProps = ({ contact }) => {
  const { loading, contactCreated } = contact;
  return {
    loading,
    contactCreated,
  };
};
export default connect(mapStateToProps, {})(Contact);
