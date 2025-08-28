import React, { useState, useEffect } from "react";
import clean from "../Assets/clean.jpg";

const CleaningServices = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    { text: "Oilseed purification & quality control", color: "#4facfe" },
    { text: "Cereal cleaning & safety standardization", color: "#6a11cb" },
    { text: "Spice purification & contamination removal", color: "#f093fb" },
  ];

  // Responsive values
  const headingFontSize =
    windowWidth > 1200 ? "3rem" : windowWidth > 768 ? "2.2rem" : "1.8rem";
  const textFontSize = windowWidth > 768 ? "1.1rem" : "1rem";
  const locationHeadingSize =
    windowWidth > 1200 ? "32px" : windowWidth > 768 ? "28px" : "24px";
  const imageHeight = windowWidth > 768 ? "400px" : "250px";
  const mapHeight = windowWidth > 768 ? "450px" : "300px";
  const serviceFlexDirection = windowWidth > 768 ? "row" : "column";
  const serviceAlignItems = windowWidth > 768 ? "flex-start" : "center";
  const serviceTextAlign = windowWidth > 768 ? "left" : "center";

  return (
    <div
      style={{
        padding: "60px 20px",
        background: "linear-gradient(135deg, #f8fbfd, #e8f4f8)",
        minHeight: "100vh",
        fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: headingFontSize,
          fontWeight: 800,
          background: "linear-gradient(to right, #2c73d2, #0089d0, #0081cf)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "20px",
          lineHeight: 1.2,
        }}
      >
        Cleaning Services
      </h1>

      {/* Decorative Bar */}
      <div
        style={{
          width: "80px",
          height: "5px",
          background: "linear-gradient(to right, #4facfe, #00f2fe)",
          margin: "0 auto 30px",
          borderRadius: "3px",
        }}
      />

      {/* Full Width Image */}
      <img
        src={clean}
        alt="Cleaning Service"
        style={{
          width: "100%",
          height: imageHeight,
          borderRadius: "10px",
          objectFit: "cover",
          marginBottom: "40px",
        }}
      />

      {/* Description */}
      <p
        style={{
          fontSize: textFontSize,
          color: "#2d3748",
          lineHeight: 1.8,
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "justify",
        }}
      >
        BTY Trading PLC provides specialized cleaning services for oilseeds,
        cereals, and spices, ensuring the highest quality processing and hygiene
        for agricultural products. Our advanced techniques maintain purity and
        compliance with international standards, helping clients achieve premium
        quality results for their agricultural products.
      </p>

      {/* Services List */}
      <div
        style={{
          display: "flex",
          flexDirection: serviceFlexDirection,
          alignItems: serviceAlignItems,
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {services.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: serviceTextAlign,
              flex: windowWidth > 768 ? "1 1 0" : "unset",
              justifyContent: windowWidth > 768 ? "flex-start" : "center",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${item.color} 0%, #00f2fe 100%)`,
                marginRight: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              ✓
            </div>
            <span style={{ fontSize: "1.1rem", color: "#2d3748" }}>
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {/* Location Heading */}
      <div
        style={{
          fontWeight: "bold",
          fontSize: locationHeadingSize,
          background: "linear-gradient(90deg, #396285ff, #5aafb4ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          paddingTop: "30px",
          paddingBottom: "20px",
          textAlign: "center",
        }}
      >
        Location of Cleaning Service
      </div>

      {/* Google Map */}
      <div style={{ width: "100%", height: mapHeight }}>
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
  );
};

export default CleaningServices;
