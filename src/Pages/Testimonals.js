import React from "react";
import { Card, Row, Col, Typography, Avatar } from "antd";
import { StarFilled } from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const testimonials = [
  {
    name: "Emma Johnson",
    text: "BTY Trading PLC consistently delivers top-quality sesame seeds. Their service is fast, reliable, and professional.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Olivia Smith",
    text: "Their customer support and export quality are outstanding. Highly recommend BTY for consistent supply.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Liam Brown",
    text: "Working with BTY Trading PLC has been a game-changer. We trust them for all our oilseed import needs.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Noah Davis",
    text: "The purity of BTY's sesame seeds and the smooth import process impressed us. A trusted trading partner!",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        padding: "30px 0",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Text
            style={{
              color: "#1a936f",
              fontWeight: 600,
              letterSpacing: "1px",
              fontSize: "14px",
              display: "block",
              marginBottom: "12px",
            }}
          >
            CLIENT TESTIMONIALS
          </Text>
          <Title
            level={2}
            style={{
              color: "#114b5f",
              marginBottom: 60,
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            What Our Clients Say
          </Title>
        </motion.div>

        <Row gutter={[24, 24]} justify="center">
          {testimonials.map((item, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              style={{ display: "flex" }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
              >
                <Card
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                    padding: "30px 25px",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                    border: "none",
                  }}
                  bodyStyle={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    padding: 0,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <Avatar
                      size={72}
                      src={item.image}
                      style={{
                        marginBottom: "20px",
                        border: "3px solid #f4a825",
                      }}
                    />
                    <Text
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#114b5f",
                        display: "block",
                        marginBottom: "15px",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: "15px",
                        color: "#555",
                        lineHeight: 1.6,
                        fontStyle: "italic",
                        display: "block",
                      }}
                    >
                      "{item.text}"
                    </Text>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    {[...Array(5)].map((_, i) => (
                      <StarFilled
                        key={i}
                        style={{
                          color: "#f4a825",
                          fontSize: "16px",
                          margin: "0 2px",
                        }}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Testimonials;
