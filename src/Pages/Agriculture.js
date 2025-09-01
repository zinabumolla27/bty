import React from "react";
import agri from "../Assets/agri.jpg";
function Agriculture() {
  const styles = {
    page: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#333",
      lineHeight: 1.6,
    },
    hero: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "50px 20px",
      background: "linear-gradient(135deg, #4e6880ff, #365d6dff)",
      color: "#fff",
      flexWrap: "wrap",
    },
    heroText: {
      flex: 1,
      padding: "20px",
    },
    heroTitle: {
      fontSize: "2.5rem",
      marginBottom: "20px",
    },
    heroDesc: {
      fontSize: "1.2rem",
      marginBottom: "20px",
    },
    button: {
      padding: "12px 25px",
      backgroundColor: "#ff9800",
      border: "none",
      borderRadius: "8px",
      color: "#fff",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    heroImg: {
      flex: "1",
      maxWidth: "400px",
      margin: "20px auto",
      borderRadius: "12px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    },
    section: {
      padding: "40px 20px",
      textAlign: "center",
    },
    sectionTitle: {
      fontSize: "2rem",
      marginBottom: "20px",
      color: "#2f6547",
    },
    sectionDesc: {
      fontSize: "1.1rem",
      maxWidth: "800px",
      margin: "0 auto",
    },
    // Responsive
    "@media (max-width: 768px)": {
      hero: {
        flexDirection: "column",
        textAlign: "center",
      },
      heroImg: {
        maxWidth: "90%",
      },
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>Agriculture Services</h1>
          <p style={styles.heroDesc}>
            At BTY Trading PLC, we support agriculture through the supply of
            oilseeds, grains, and spices. Our focus is on sustainable farming
            and delivering high-quality products to global markets.
          </p>
          <button style={styles.button}>Explore Agriculture</button>
        </div>
        <img src={agri} alt="Agriculture" style={styles.heroImg} />
      </section>

      {/* Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Sustainable Agriculture</h2>
        <p style={styles.sectionDesc}>
          We provide sesame seeds, chickpeas, soybeans, mung beans, niger seeds,
          and other agricultural exports with strict quality control. BTY
          Trading is committed to connecting local farmers to international
          buyers, ensuring fair trade and long-term growth.
        </p>
      </section>
    </div>
  );
}

export default Agriculture;
