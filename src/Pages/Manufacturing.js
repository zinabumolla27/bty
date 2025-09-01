import React, { useEffect, useState } from "react";
import bg0 from "../Assets/bg0.png"; // 👈 replace with your manufacturing image

export default function Manufacturing() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
      padding: "40px 28px",
      background: `linear-gradient(135deg, ${palette.surface} 0%, ${palette.card} 100%)`,
      border: `1px solid ${palette.border}`,
      boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
      textAlign: "center",
    },
    heroTitle: {
      fontSize: "2.5rem",
      fontWeight: 800,
      marginBottom: "16px",
      lineHeight: 1.2,
    },
    heroText: {
      fontSize: "1.1rem",
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
      height: "350px",
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
      icon: "🏭",
      title: "Product Design & Prototyping",
      text: "Transforming ideas into market-ready products with advanced design and prototyping tools.",
    },
    {
      icon: "⚙️",
      title: "Precision Manufacturing",
      text: "High-quality machining, fabrication, and assembly services tailored to industry standards.",
    },
    {
      icon: "🛠️",
      title: "Custom Equipment Production",
      text: "Building specialized machinery and tools to meet unique industrial requirements.",
    },
    {
      icon: "📦",
      title: "Packaging & Distribution",
      text: "Efficient packaging solutions and logistics for safe, timely delivery worldwide.",
    },
  ];

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        {/* Hero */}
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>Manufacturing Solutions</h1>
          <p style={styles.heroText}>
            BTY Trading PLC delivers reliable and innovative manufacturing
            solutions across diverse industries. From product design and
            prototyping to large-scale production and packaging, we ensure
            quality, precision, and efficiency. Our facilities are equipped with
            modern technology, skilled professionals, and strict quality control
            measures, enabling us to provide durable, cost-effective, and
            sustainable products for local and global markets.
          </p>
        </section>

        {/* 👇 Image */}
        <section style={styles.imageSection}>
          <img src={bg0} alt="Manufacturing" style={styles.image} />
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
