import React, { useState } from "react";
import { Collapse, Divider } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "./FAQ.css";

const FAQ = () => {
  const [activeKeys, setActiveKeys] = useState(["1"]);

  const faqItems = [
    {
      key: "1",
      question: "What does BTY Trading PLC specialize in?",
      answer:
        "BTY Trading PLC specializes in importing and exporting high-quality sesame and agricultural products. We ensure timely delivery and adherence to international trade standards.",
    },
    {
      key: "2",
      question: "How competitive are your prices?",
      answer:
        "We provide competitive pricing for bulk shipments and ensure that our products meet global market standards. Whether you're a distributor or wholesaler, we are equipped to fulfill large orders.",
    },
    {
      key: "3",
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer worldwide shipping to various countries. Our logistics partners ensure efficient and secure transport to destinations across the globe.",
    },
    {
      key: "4",
      question: "What is the focus of BTY Trading PLC in sesame seed export?",
      answer:
        "We focus on high-quality sesame seeds and have established a solid reputation for providing top-tier sesame with consistent quality. Our sesame seeds are sourced from trusted farms with strict quality control standards.",
    },
    {
      key: "5",
      question: "Do you offer different quantities for sesame seeds?",
      answer:
        "Yes, we do. Our sesame seeds are available in various quantities, from small to bulk orders, tailored to meet the needs of our clients. We also offer custom packaging if required.",
    },
    {
      key: "6",
      question: "Where are your sesame seeds exported?",
      answer:
        "Our sesame seeds are exported globally to markets in the Middle East, Asia, Europe, and North America. We adhere to the highest standards to meet international market requirements.",
    },
  ];

  const handlePanelChange = (keys) => {
    setActiveKeys(keys);
  };

  const collapseItems = faqItems.map((item, index) => ({
    key: item.key,
    label: (
      <div className={`faq-panel faq-panel-${index + 1}`}>
        <span className="faq-question">{item.question}</span>
      </div>
    ),
    children: (
      <div className="faq-answer">
        <p>{item.answer}</p>
      </div>
    ),
    className: "faq-panel", // for styling and animation
  }));

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">
            <span className="faq-title-text">Frequently Asked Questions</span>
            <span className="faq-title-highlight"></span>
          </h2>
          <p className="faq-subtitle">
            Get answers to common questions about our products and services
          </p>
          <Divider className="faq-divider" />
        </div>

        <div className="faq-content">
          <Collapse
            accordion
            bordered={false}
            activeKey={activeKeys}
            onChange={handlePanelChange}
            expandIcon={({ isActive }) =>
              isActive ? (
                <MinusOutlined className="faq-icon" />
              ) : (
                <PlusOutlined className="faq-icon" />
              )
            }
            expandIconPosition="end"
            className="faq-accordion"
            items={collapseItems} // ✅ correct usage of items + label
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
