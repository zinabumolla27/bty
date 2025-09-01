import React, { useEffect, useState } from "react";
import mining from "../Assets/mining.jpg";

export default function MiningandQuarrying() {
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
      width: "100%", // 👈 medium size
      height: "350px",
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
      icon: "⛏️",
      title: "Drilling & Blasting",
      text: "Safe, precise drilling and controlled blasting for quarry faces and mine benches.",
    },
    {
      icon: "🪨",
      title: "Crushing & Screening",
      text: "Producing graded aggregates, ballast, base course, and specialized sizes.",
    },
    {
      icon: "🚜",
      title: "Heavy Equipment Rental",
      text: "Dozers, excavators, wheel loaders, and drill rigs with certified operators.",
    },
    {
      icon: "📐",
      title: "Geological Surveying",
      text: "Resource mapping, core sampling, and reserve estimation with technical reports.",
    },
  ];

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        {/* Hero */}
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>Mining & Quarrying Solutions</h1>
          <p style={styles.heroText}>
            BTY Trading PLC provides reliable mining and quarrying solutions
            with a strong focus on efficiency, sustainability, and quality. Our
            operations include the extraction and processing of minerals,
            metals, and construction materials, ensuring compliance with
            international standards. With skilled expertise, advanced equipment,
            and a commitment to safety, we deliver consistent, high-quality
            resources to support industrial and construction needs locally and
            globally.
          </p>
        </section>

        {/* 👇 Medium Image in the middle */}
        <section style={styles.imageSection}>
          <img src={mining} alt="Mining and Quarrying" style={styles.image} />
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
