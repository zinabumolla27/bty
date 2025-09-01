import React, { useEffect, useState } from "react";
import cons from "../Assets/cons.jpg"; // 👈 same image

export default function Construction() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ✅ Responsive grid columns
  const cols = width >= 1200 ? 4 : width >= 900 ? 3 : width >= 640 ? 2 : 1;

  const palette = {
    bg: "#0f172a",
    card: "#0b1222",
    surface: "#111a31",
    text: "#f1f5f9",
    subtext: "#cbd5e1",
    accent: "#22d3ee",
    border: "#1f2a44",
  };

  const styles = {
    page: {
      minHeight: "100vh",
      fontFamily: "'Poppins', 'Inter', system-ui, sans-serif",
      color: palette.text,
      backgroundColor: palette.bg,
    },
    container: {
      width: "min(1100px, 92%)",
      margin: "0 auto",
      padding: "56px 0 72px",
    },
    hero: {
      position: "relative",
      borderRadius: 20,
      padding: width < 640 ? "28px 18px" : "40px 28px", // ✅ tighter padding on mobile
      background: `linear-gradient(135deg, ${palette.surface} 0%, ${palette.card} 100%)`,
      border: `1px solid ${palette.border}`,
      boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
      textAlign: "center",
    },
    heroTitle: {
      fontSize: width < 480 ? "1.8rem" : width < 768 ? "2rem" : "2.5rem", // ✅ responsive font size
      fontWeight: 800,
      marginBottom: "16px",
      lineHeight: 1.2,
    },
    heroText: {
      fontSize: width < 480 ? "0.95rem" : "1.1rem", // ✅ smaller font on mobile
      lineHeight: 1.7,
      color: palette.subtext,
      maxWidth: "850px",
      margin: "0 auto",
      textAlign: "justify",
    },
    imageSection: {
      marginTop: 40,
      textAlign: "center",
    },
    image: {
      width: "100%",
      height: "auto", // ✅ lets it scale naturally
      maxHeight: width < 640 ? "220px" : "350px", // ✅ smaller height on phones
      objectFit: "cover",
      borderRadius: 16,
      border: `2px solid ${palette.border}`,
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      gap: 20,
      marginTop: 40,
    },
    card: {
      background: `linear-gradient(180deg, ${palette.surface} 0%, ${palette.card} 100%)`,
      border: `1px solid ${palette.border}`,
      borderRadius: 16,
      padding: 20,
      textAlign: "center",
      transition: "transform .2s ease, box-shadow .2s ease",
    },
    cardTitle: {
      fontSize: "1.2rem",
      fontWeight: 700,
      marginBottom: 10,
      color: palette.accent,
    },
    cardText: {
      color: palette.subtext,
      fontSize: "0.95rem",
      lineHeight: 1.65,
    },
  };

  const services = [
    {
      icon: "🏗️",
      title: "Building Construction",
      text: "Residential, commercial, and industrial building projects with top-quality standards.",
    },
    {
      icon: "🛣️",
      title: "Infrastructure Development",
      text: "Roads, bridges, and public infrastructure built with durability and sustainability in mind.",
    },
    {
      icon: "🚧",
      title: "Civil Engineering Works",
      text: "Comprehensive structural, civil, and site preparation services for all scales of projects.",
    },
    {
      icon: "🔧",
      title: "Maintenance & Renovation",
      text: "Restoration, repairs, and upgrades to extend the life and functionality of structures.",
    },
  ];

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        {/* Hero */}
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>Construction Solutions</h1>
          <p style={styles.heroText}>
            BTY Trading PLC offers expert construction services for residential,
            commercial, and infrastructure projects. With a focus on quality,
            safety, and efficiency, we deliver durable and innovative solutions
            that meet international standards. Our team of engineers,
            architects, and skilled professionals ensures timely project
            delivery and sustainable construction practices to support urban
            development and industrial growth.
          </p>
        </section>

        {/* Image */}
        <section style={styles.imageSection}>
          <img src={cons} alt="Construction" style={styles.image} />
        </section>

        {/* Services */}
        <section>
          <div style={styles.grid}>
            {services.map((svc, i) => (
              <article key={i} style={styles.card}>
                <h3 style={styles.cardTitle}>
                  {svc.icon} {svc.title}
                </h3>
                <p style={styles.cardText}>{svc.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
