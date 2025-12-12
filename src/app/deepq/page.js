"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function DeepQPage() {
  useEffect(() => {
    const hero = document.querySelector(".deepq-hero-left");
    if (!hero) return;

    const scroll = () => {
      const y = window.scrollY;
      hero.style.transform = `translateY(${y * 0.06}px)`;
      hero.style.opacity = `${1 - y * 0.0004}`;
    };

    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <div className="relative z-20 w-full">
      <div className="deepq-wrapper fade-in">

        {/* TORUS TOP-RIGHT IMAGE */}
        <img
          src="/assets/torus (3).png"
          alt="DeepQ Torus"
          className="deepq-torus"
        />

        {/* HERO SECTION */}
        <section className="deepq-hero-inner">
          <div className="deepq-hero-left" style={{ marginTop: "-80px" }}>
            <h1 className="hero-title fancy-title">
              DeepQ — Next-Generation <br />Queue Systems
            </h1>

            <p className="muted-deepq glass-card-deepq">
              DeepQ is a hyperlocal, real-time intelligence platform built to transform customer flow and modernize service delivery. Designed for India's fast-moving service economy, it brings speed, transparency, and efficiency to every interaction.
            </p>

            <a className="btn ghost hover-outline" href="/contact" style={{ marginTop: "25px" }}>
              Learn More
            </a>
          </div>
        </section>

        {/* WHAT IS DEEPQ */}
        <section style={{ marginTop: "-80px" }}>
          <h2 className="section-title" style={{ fontWeight: "bold", marginTop: "100px", fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            What is DeepQ?
          </h2>

          <p className="muted glass-card-deepq" style={{ marginTop: "12px", maxWidth: "750px", fontSize: "20px" }}>
            DeepQ is a next-generation queue intelligence platform built for high-footfall, walk-in–driven businesses, enabling smoother customer flow and real-time operational efficiency across clinics, wellness centers, and service outlets.
          </p>
        </section>

        {/* WHY DEEPQ IS DIFFERENT */}
        <section style={{ marginTop: "0px" }}>
          <h2 className="section-title" style={{ fontWeight: "bold", fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Why DeepQ Is Different?
          </h2>

          <div className="features-grid">
            {/* Feature 1 - Hybrid Ready */}
            <div className="feature-box glass-card-deepq hover-card card">
              <div className="feature-image-wrapper" style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                <img
                  src="/assets/01.png"
                  alt="Hybrid Ready System"
                  style={{ width: "120px", height: "120px", objectFit: "contain" }}
                />
              </div>
              <h4 style={{ fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Hybrid-Ready System
              </h4>
              <p className="muted" style={{ marginTop: "30px", fontSize: "20px" }}>
                Designed for the next era of service flow, DeepQ seamlessly orchestrates walk-ins, scheduled visits, and dynamic real-time demand through intelligent, adaptive queue logic.
              </p>
            </div>

            {/* Feature 2 - Real-Time */}
            <div className="feature-box glass-card-deepq hover-card card">
              <div className="feature-image-wrapper" style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                <img
                  src="/assets/08.png"
                  alt="Real-Time Experience"
                  style={{ width: "120px", height: "120px", objectFit: "contain" }}
                />
              </div>
              <h4 style={{ fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Real-Time Experience
              </h4>
              <p className="muted" style={{ marginTop: "30px", fontSize: "20px" }}>
                Delivers an ultra-responsive, modern customer journey powered by instant updates, predictive alerts, and smart notifications that keep every interaction in sync.
              </p>
            </div>

            {/* Feature 3 - India First */}
            <div className="feature-box glass-card-deepq hover-card card">
              <div className="feature-image-wrapper" style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                <img
                  src="/assets/04.png"
                  alt="India First Design"
                  style={{ width: "120px", height: "120px", objectFit: "contain" }}
                />
              </div>
              <h4 style={{ fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                India-First<br /> Design
              </h4>
              <p className="muted" style={{ marginTop: "30px", fontSize: "20px" }}>
                Engineered for the complexity and pace of India's service ecosystem, DeepQ adapts to hyperlocal patterns, cultural behaviors, and high-volume operational environments.
              </p>
            </div>

            {/* Feature 4 - Enterprise Grade */}
            <div className="feature-box glass-card-deepq hover-card card">
              <div className="feature-image-wrapper" style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                <img
                  src="/assets/05.png"
                  alt="Enterprise Grade Reliability"
                  style={{ width: "120px", height: "120px", objectFit: "contain" }}
                />
              </div>
              <h4 style={{ fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Enterprise-Grade Reliability
              </h4>
              <p className="muted" style={{ marginTop: "30px", fontSize: "20px" }}>
                Built on cloud-native, distributed architecture to guarantee unmatched speed, security, and scalability—even under peak footfall and concurrent user loads.
              </p>
            </div>
          </div>
        </section>

        {/* WHO DEEPQ IS FOR */}
        <section style={{ marginTop: "50px" }}>
          <h2 className="section-title" style={{ fontWeight: "bold", marginTop: "-50px", fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Who DeepQ Is For
          </h2>

          <ul className="muted glass-card-deepq" style={{ marginTop: "14px", lineHeight: "1.9", maxWidth: "600px", padding: "20px 26px", fontSize: "20px" }}>
            <li>Beauty & grooming salons</li>
            <li>Clinics & diagnostic centers</li>
            <li>Spas and wellness outlets</li>
            <li>Any high-footfall service business that values efficiency</li>
          </ul>
        </section>

        {/* FUTURE OF SERVICE FLOW */}
        <section style={{ marginTop: "90px" }}>
          <h2 className="section-title" style={{ fontWeight: "bold", marginTop: "-150px", fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Future of Service Flow
          </h2>

          <p className="muted glass-card-deepq" style={{ marginTop: "14px", maxWidth: "700px", fontSize: "20px" }}>
           DeepQ marks a breakthrough in how service flow is managed—moving beyond manual queues to intelligent, digital-first systems that elevate customer experience, maximize throughput, and unlock new levels of operational efficiency.
          </p>

          <a href="/contact" className="btn ghost hover-outline" style={{ fontWeight: "bold", color: "white", marginTop: "24px", fontSize: "20px" }}>
            Contact DeepCode Labs
          </a>
        </section>
      </div>
    </div>
  );
}
