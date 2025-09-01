import React, { useState, useEffect } from "react";
import trans from "../Assets/trans.jpg";

export default function Transportation() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const palette = {
    bg: "#0f172a",
    card: "#111a31",
    border: "#1f2a44",
    text: "#e5e7eb",
    subtext: "#cbd5e1",
    accent: "#22d3ee",
    accent2: "#f59e0b",
  };

  const styles = {
    page: {
      minHeight: "100vh",
      fontFamily:
        "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial",
      color: palette.text,
      backgroundColor: palette.bg,
      backgroundImage:
        "radial-gradient(1000px 300px at 100% -10%, rgba(34,211,238,0.08), rgba(15,23,42,0))," +
        "radial-gradient(800px 200px at 0% 0%, rgba(245,158,11,0.08), rgba(15,23,42,0))",
    },
    container: {
      width: "min(1100px, 92%)",
      margin: "0 auto",
      padding: "56px 0 72px",
    },
    hero: {
      display: "flex",
      flexDirection: width < 900 ? "column" : "row",
      gap: 28,
      alignItems: "center",
      background: `linear-gradient(135deg, ${palette.card}, ${palette.bg})`,
      border: `1px solid ${palette.border}`,
      borderRadius: 20,
      padding: 32,
      boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
      textAlign: width < 900 ? "center" : "left",
    },
    image: {
      flex: "0 0 auto",
      width: width < 900 ? "70%" : "300px", // ✅ smaller on desktop, 70% width on mobile
      maxWidth: "100%",
      borderRadius: 16,
      objectFit: "cover",
      margin: width < 900 ? "0 auto 20px" : "0", // ✅ centers on mobile
      boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      transition: "transform 0.3s ease-in-out",
    },
    content: {
      flex: 1,
    },
    title: {
      fontSize: width < 600 ? 24 : 32,
      fontWeight: 800,
      marginBottom: 12,
    },
    text: {
      fontSize: 16,
      color: palette.subtext,
      lineHeight: 1.6,
      marginBottom: 20,
    },
    button: {
      padding: "12px 20px",
      borderRadius: 12,
      fontWeight: 700,
      border: "none",
      cursor: "pointer",
      background: `linear-gradient(135deg, ${palette.accent}, ${palette.accent2})`,
      color: "#0f172a",
      boxShadow: "0 8px 18px rgba(34,211,238,0.25)",
    },
  };

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <section style={styles.hero}>
          <img src={trans} alt="BTY Transportation" style={styles.image} />
          <div style={styles.content}>
            <h1 style={styles.title}>Transportation Services</h1>
            <p style={styles.text}>
              BTY Trading PLC provides secure and reliable logistics solutions
              for mining materials, agricultural products, and construction
              supplies. Our modern fleet ensures{" "}
              <strong>on-time delivery</strong> across Ethiopia, supported by
              GPS tracking and safety-first trip management.
            </p>
            <button style={styles.button}>Request Transportation</button>
          </div>
        </section>
      </div>
    </main>
  );
}
