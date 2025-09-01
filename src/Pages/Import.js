import React from "react";
import "./Import.css";

const cardData = [
  {
    title: "Basic Chemicals",
    description: "High-quality chemicals for industrial and lab use.",
  },
  {
    title: "Medical Supplies",
    description: "Human Health Medical Supplies and Equipment.",
  },
  {
    title: "Metal and Non-Metal Scraps",
    description:
      "Recyclable metal and Non-Metal scraps for manufacturing and reuse.",
  },
  {
    title: "Sporting Goods",
    description: "Sporting Goods and Equipments for all types of Sports.",
  },
  {
    title: " Communication & Computers ",
    description: "Latest Communication, Computers and Related Equipments.",
  },
  {
    title: "Electrical Equipments",
    description: "Lates and Reliable electrical Equipments and Appliances.",
  },
  {
    title: "Vehicles & Spare Parts",
    description:
      "Differnt Types of Vehicles, Vehicle Spre Parts, Regulatory Equipments and Decore.",
  },
  {
    title: "Fruits & Vegetables",
    description: "Different Types of Fruits and Vegtables.",
  },
  {
    title:
      "Industrial, Agricultural, Construction Machinery, and Other Related Works",
    description:
      "High-quality Industrial, Agricultural, and Construction Machinery, along with related equipment, ensuring reliability and compliance with international standards.",
  },
];

const Import = () => {
  return (
    <div className="import-section">
      <p className="import-heading">Our Imports</p>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card ${
              index === cardData.length - 1 ? "card-large" : ""
            }`}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Import;
