// src/app/about/page.js
"use client";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const left = document.querySelector(".about-left");
    if (!left) return;
    const scroll = () => {
      const y = window.scrollY;
      left.style.transform = `translateY(${y * 0.06}px)`;
      left.style.opacity = `${1 - y * 0.0005}`;
    };
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <div className="about-page relative z-20 w-full">
      <section className="fade-in w-full" style={{ paddingTop: 120, marginLeft: 10 }}>
        <div className="about-container">
          <h1 className="fancy-title" style={{ fontSize: 48, background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>About DeepCode Labs</h1>
          <p className="lead soft-fade muted" style={{ fontSize: 24, maxWidth: 999, marginTop: 15 }}>
            DeepCode Labs is a modern engineering and innovation company focused on creating high-impact digital solutions for India’s service ecosystem.
            <br /><br />
            We specialize in real-time systems, distributed computing, intelligent scheduling, predictive analytics, and geospatial intelligence.
          </p>
        </div>
      </section>

      <section className="about-section fade-in-delayed" style={{ marginTop: 40 }}>
        <div className="about-container">
          <h2 className="section-title" style={{ fontSize: 30, background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Our Vision & Mission</h2>

          <div className="vision-mission-grid " style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20 }}>
            <div className="vision-mission-card glass-card">
              <h3 style={{ fontSize: 30, background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Vision</h3>
              <p className="muted" style={{ fontSize: 24 }}>To revolutionize how service businesses interact with customers and use real-time intelligence.</p>
            </div>
            <div className="vision-mission-card glass-card">
              <h3 style={{ fontSize: 30, background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Mission</h3>
              <p className="muted" style={{ fontSize: 24 }}>To empower micro-enterprises and mid-scale businesses with cutting-edge technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section fade-in-delayed-2" style={{ marginTop: 24 }}>
        <div className="about-container">
          <h2 className="section-title" style={{ fontSize: 30 ,background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Our Approach</h2>
          <div className="approach-grid cap-grid-about" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginTop: 18 }}>
            <div className="approach-card hover-card glass-card"><h4 style={{ fontSize: 24 ,background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Innovation First</h4><p className="muted" style={{ fontSize: 20 }}>We design with the future in mind.</p></div>
            <div className="approach-card hover-card glass-card"><h4 style={{ fontSize: 24,background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Technology with Purpose</h4><p className="muted" style={{ fontSize: 20 }}>Practical solutions that solve real-world challenges.</p></div>
            <div className="approach-card hover-card glass-card"><h4 style={{ fontSize: 24,background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Scalable & Secure</h4><p className="muted" style={{ fontSize: 20 }}>Built on robust cloud-native foundations.</p></div>
            <div className="approach-card hover-card glass-card"><h4 style={{ fontSize: 24,background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Human-Centric</h4><p className="muted" style={{ fontSize: 20 }}>Prioritizing simplicity, speed, and intuitive experiences.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
