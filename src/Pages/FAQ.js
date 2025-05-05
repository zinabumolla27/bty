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
        "BTY Trading PLC specializes in exporting agricultural products including Oil Seeds, Spices, Pulses, khat, Coffee and Tea Leaf and cereals. We also import a wide range of goods such as basic chemicals used for industry, chemical products, human health medical supplies and equipment, metal and non-metal scraps, sporting goods and equipment, communication and computer-related equipment, electrical equipment and appliances, vehicles and spare parts, regulatory equipment, jewelry, décor supplies, and more.",
    },

    {
      key: "2",
      question: "How competitive are your prices?",
      answer:
        "Our prices are highly competitive, reflecting the quality and reliability of our products. We strive to offer excellent value for businesses of all sizes, ensuring affordability without compromising standards.",
    },

    {
      key: "3",
      question: "Do you offer cleaning services?",
      answer:
        "Yes, we offer cleaning services specifically for oilseeds, cereals, and spices to ensure quality and export readiness.",
    },
    {
      key: "4",
      question: "What is the focus of BTY Trading PLC export?",
      answer:
        "BTY Trading PLC focuses on exporting a wide range of high-quality agricultural products, including oilseeds, coffee, tea leaves, khat, spices, pulses, and cereals. We are committed to delivering consistently superior products sourced from trusted farms with strict quality control standards.",
    },

    {
      key: "5",
      question: "Do you offer different quantities for your products?",
      answer:
        "Yes, we do. Our agricultural products, including sesame seeds, coffee, tea leaves, khat, spices, pulses, and cereals, are available in various quantities, from small to bulk orders, tailored to meet the needs of our clients. We also offer custom packaging if required.",
    },

    {
      key: "6",
      question: "Where are your products exported?",
      answer:
        "Our products are exported to several international markets including Israel, China, Singapore, Vietnam, Pakistan, Hong Kong, Turkey, India, Saudi Arabia, Sudan, and the UAE.",
    },
    {
      key: "7",
      question: "What are the services offered by BTY Trading PLC?",
      answer:
        "BTY Trading PLC offers a wide range of services, including Mining and Quarrying, Manufacturing, Construction, Agriculture, Transportation, Cleaning Services for oilseeds, cereals, and spices, as well as Wholesale Trade.",
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
