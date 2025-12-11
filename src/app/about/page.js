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
      {/* WRAPPER WITH DEEPQ-STYLE PADDING */}
      <div className="deepq-wrapper fade-in">
        
        {/* HERO SECTION */}
        <section style={{ padding: 0, marginTop: 40, marginBottom: 60 }}>
          <div className="about-left" style={{ maxWidth: "100%" }}>
            <h1 className="fancy-title" style={{ fontSize:"30px" }}>
              About DeepCode Labs
            </h1>
            <p className="lead soft-fade muted" style={{ fontSize: 23, maxWidth: 900, marginTop: 15 }}>
              DeepCode Labs is a modern engineering and innovation company focused on creating high-impact digital solutions for India's service ecosystem.
              <br /><br />
              We specialize in real-time systems, distributed computing, intelligent scheduling, predictive analytics, and geospatial intelligence.
            </p>
          </div>
        </section>

        {/* VISION & MISSION SECTION */}
        <section style={{ padding: 0, marginBottom: 60 }} className="fade-in-delayed">
          <h2 className="section-title" style={{ fontSize: 26, color: "#4da3ff", fontWeight: "bold" }}>
            Our Vision & Mission
          </h2>

          <div className="vision-mission-grid">
            <div className="vision-mission-card">
              <h3 style={{ fontSize: "26px" }}>Vision</h3>
              <p style={{ fontSize: "20px" }}>
                To revolutionize how service businesses interact with customers and use real-time intelligence.
              </p>
            </div>
            <div className="vision-mission-card">
              <h3 style={{ fontSize: "26px" }}>Mission</h3>
              <p style={{ fontSize: "20px" }}>
                To empower micro-enterprises and mid-scale businesses with cutting-edge technology.
              </p>
            </div>
          </div>
        </section>

        {/* OUR APPROACH SECTION */}
        <section style={{ padding: 0, marginBottom: 40 }} className="fade-in-delayed-2">
          <h2 className="section-title" style={{ fontSize: 26, color: "#4da3ff", fontWeight: "bold" }}>
            Our Approach
          </h2>
          <div className="approach-grid">
            <div className="approach-card hover-card">
              <h4 style={{ fontSize: "26px" }}>Innovation First</h4>
              <p style={{ fontSize: "20px", marginTop: "40px" }}>We design with the future in mind.</p>
            </div>
            <div className="approach-card hover-card">
              <h4 style={{ fontSize: "26px" }}>Technology with Purpose</h4>
              <p style={{ fontSize: "20px" }}>Practical solutions that solve real-world challenges.</p>
            </div>
            <div className="approach-card hover-card">
              <h4 style={{ fontSize: "26px" }}>Scalable & Secure</h4>
              <p style={{ fontSize: "20px", marginTop: "40px" }}>Built on robust cloud-native foundations.</p>
            </div>
            <div className="approach-card hover-card">
              <h4 style={{ fontSize: "26px" }}>Human-Centric</h4>
              <p style={{ fontSize: "20px", marginTop: "40px" }}>Prioritizing simplicity, speed, and intuitive experiences.</p>
            </div>
          </div>
        </section>

      </div>
      {/* END WRAPPER */}
    </div>
  );
}
