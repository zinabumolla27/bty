import React from "react";
import clean from "../Assets/clean.jpg";
import "./CleaningServices.css";

const CleaningServices = () => {
  const services = [
    {
      text: "Oilseed purification & quality control",
      color: "#4facfe",
      icon: "🔍",
    },
    {
      text: "Cereal cleaning & safety standardization",
      color: "#6a11cb",
      icon: "🌾",
    },
    {
      text: "Spice purification & contamination removal",
      color: "#f093fb",
      icon: "🌶️",
    },
    {
      text: "Cleaning of pulses and oil seeds/crops",
      color: "#f9d423",
      icon: "🥜",
    },
    { text: "More than 6000 m² warehouse", color: "#fc4a1a", icon: "🏭" },
    {
      text: "More than 15,000 m² open space with enough parking",
      color: "#00c6ff",
      icon: "🅿️",
    },
    { text: "Skilled manpower", color: "#7f00ff", icon: "👨‍🔧" },
    { text: "Secure and accessible", color: "#ff6a00", icon: "🔒" },
  ];

  return (
    <div className="cleaning-services-container">
      {/* Heading */}
      <div className="section-heading">
        <h1>Cleaning Services</h1>
        <div className="decorative-bar"></div>
      </div>

      {/* Full Width Image */}
      <div className="hero-image-container">
        <img src={clean} alt="Cleaning Service" className="hero-image" />
        <div className="image-overlay"></div>
      </div>

      {/* Description */}
      <div className="description-container">
        <p>
          BTY Trading PLC provides specialized cleaning services for oilseeds,
          cereals, pulses, and spices, ensuring the highest quality processing
          and hygiene for agricultural products. Our advanced techniques
          maintain purity and compliance with international standards, helping
          clients achieve premium quality results for their agricultural
          products.
        </p>
      </div>

      {/* Services List */}
      <div className="services-section">
        <h2 className="services-heading">Our Services</h2>
        <div className="services-grid">
          {services.map((item, index) => (
            <div
              key={index}
              className="service-card"
              style={{ "--card-color": item.color }}
            >
              <div
                className="service-icon"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Location Section */}
      <div className="location-section">
        <h2 className="location-heading">Location of Cleaning Service</h2>
        <div className="map-container">
          <iframe
            title="Warehouse Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.2249659360077!2d37.45154697358012!3d12.487380425312457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1643310035f5918f%3A0xfc87d539d47a8bbd!2zQlRZIFRyYWRpbmcgcGxjIENsZWFuaW5nIC8g4Ymi4Ymy4YuL4YutIOGJteGIrOGLsuGKleGMjSDhioMv4Yuo4YmwL-GLqOGMjS_hiJvhiIXhiaDhiK0g4Yib4Ymg4Yyg4Yiq4Yur!5e1!3m2!1sen!2set!4v1756368682728!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CleaningServices;
