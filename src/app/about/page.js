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
            {/* Card 1 - Innovation Engineered */}
            <div className="approach-card hover-card">
              <div className="approach-image-wrapper" style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                <img
                  src="/assets/06.png"
                  alt="Innovation Engineered"
                  style={{ width: "80px", height: "80px", objectFit: "contain" }}
                />
              </div>
              <h4 style={{ fontSize: "26px" }}>Innovation Engineered</h4>
              <p style={{ fontSize: "20px", marginTop: "40px" }}>
                We build adaptive, AI-forward systems designed to evolve with emerging technologies.
                Every solution is crafted to stay ahead of tomorrow's challenges.
              </p>
            </div>

            {/* Card 2 - Intelligent Purpose Tech */}
            <div className="approach-card hover-card">
              <div className="approach-image-wrapper" style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                <img
                  src="/assets/03.png"
                  alt="Intelligent Purpose Tech"
                  style={{ width: "80px", height: "80px", objectFit: "contain" }}
                />
              </div>
              <h4 style={{ fontSize: "26px" }}>Intelligent Purpose Tech</h4>
              <p style={{ fontSize: "20px", marginTop:"40px"}}>
                Our platforms use AI-driven logic to solve real-world problems with precision and clarity.
                Technology is built with intent—optimized for impact, efficiency, and scalability.
              </p>
            </div>

            {/* Card 3 - Hyper-Scalable Architecture */}
            <div className="approach-card hover-card">
              <div className="approach-image-wrapper" style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                <img
                  src="/assets/02.png"
                  alt="Hyper-Scalable Architecture"
                  style={{ width: "80px", height: "80px", objectFit: "contain" }}
                />
              </div>
              <h4 style={{ fontSize: "26px" }}>Hyper-Scalable Architecture</h4>
              <p style={{ fontSize: "20px", marginTop: "40px" }}>
                AI-enhanced, cloud-native foundations allow our systems to scale without limits.
                Speed, resilience, and reliability remain constant—even under extreme demand.
              </p>
            </div>

            {/* Card 4 - Human-Aligned Design */}
            <div className="approach-card hover-card">
              <div className="approach-image-wrapper" style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                <img
                  src="/assets/09.png"
                  alt="Human-Aligned Design"
                  style={{ width: "80px", height: "80px", objectFit: "contain" }}
                />
              </div>
              <h4 style={{ fontSize: "26px" }}>Human-Aligned Design</h4>
              <p style={{ fontSize: "20px", marginTop: "40px" }}>
                We create interfaces that adapt intelligently to user behavior in real time.
                Every interaction is engineered to be seamless, intuitive, and effortlessly fast.
              </p>
            </div>
          </div>
        </section>

      </div>
      {/* END WRAPPER */}
    </div>
  );
}
