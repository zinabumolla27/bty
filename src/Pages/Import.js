import React from "react";
import "./Import.css";

const cardData = [
  {
    title: "Basic Chemicals",
    description: "High-quality chemicals for industrial and lab use.",
  },
  {
    title: "Medical Supplies",
    description: "Essential medical products and hospital equipment.",
  },
  {
    title: "Metal Scraps",
    description: "Recyclable metal scraps for manufacturing and reuse.",
  },
  {
    title: "Sporting Goods",
    description: "Equipment and gear for all types of sports.",
  },
  {
    title: "Computers & Communication",
    description: "Latest computers, gadgets, and communication tools.",
  },
  {
    title: "Electrical Equipments",
    description: "Reliable electrical tools and machinery for industries.",
  },
  {
    title: "Vehicles & Spare Parts",
    description: "Automobiles, parts, and accessories for various vehicles.",
  },
  {
    title: "Fruits & Cereals",
    description: "Fresh fruits, grains, and cereals imported from top farms.",
  },
  {
    title:
      "Industrial, Agricultural, Construction Machinery, and Other Related Works",
    description:
      "Importing high-quality industrial, agricultural, and construction machinery, along with related equipment, ensuring reliability and compliance with international standards.",
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
