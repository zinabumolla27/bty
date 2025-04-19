import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  FaAppleAlt,
  FaFlask,
  FaHospital,
  FaRecycle,
  FaFootballBall,
  FaLaptop,
  FaPlug,
  FaCar,
} from "react-icons/fa";
import "./Import.css";

const Import = () => {
  const importCategories = [
    {
      title: "Import of Fruits, Vegetables & Cereals",
      icon: <FaAppleAlt className="import-icon" />,
    },
    {
      title:
        "Import Trade in Basic Chemicals used for Industry and Chemical Products",
      icon: <FaFlask className="import-icon" />,
    },
    {
      title: "Import trade in human health medical supplies and equipment",
      icon: <FaHospital className="import-icon" />,
    },
    {
      title: "Import trade in material metal and non-metal scraps",
      icon: <FaRecycle className="import-icon" />,
    },
    {
      title: "Import of sporting goods and equipments",
      icon: <FaFootballBall className="import-icon" />,
    },
    {
      title: "Import trade in communication, computer and related equipments",
      icon: <FaLaptop className="import-icon" />,
    },
    {
      title: "Import trade in electrical equipments and appliances",
      icon: <FaPlug className="import-icon" />,
    },
    {
      title:
        "Importing of vehicles, vehicles spare parts, regulatory equipments and jewelry/décor supplies",
      icon: <FaCar className="import-icon" />,
    },
  ];

  return (
    <section className="import-section">
      <div className="import-wrapper">
        <h2 className="section-title">Our Import Services</h2>
        <Row className="g-4 justify-content-center mx-0">
          {importCategories.map((category, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <div className="import-card">
                <div className="icon-wrapper">{category.icon}</div>
                <h3 className="import-title">{category.title}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Import;
