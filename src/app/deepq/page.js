"use client";

import { useEffect } from "react";

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
          <div className="deepq-hero-left" style={{marginTop:"-80px"}}>
            <h1 className="hero-title fancy-title">
              DeepQ - <br />
              The Next Generation of<br />
              Queue Management Systems
            </h1>

            <p className="muted-deepq glass-card-deepq">
              An intelligent, hyperlocal, real-time platform designed to modernize customer flow
              and service delivery in India's fast-moving service economy.
            </p>

            <a className="btn ghost hover-outline" href="/contact" style={{ marginTop: "25px" }}>
              Learn More
            </a>
          </div>
        </section>

        {/* WHAT IS DEEPQ */}
        <section style={{ marginTop: "-80px" }}>
          <h2 className="section-title" style={{fontWeight:"bold", marginTop: "100px", fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            What is DeepQ?
          </h2>

          <p className="muted glass-card-deepq" style={{ marginTop: "12px", maxWidth: "750px", fontSize: "20px" }}>
            DeepQ is a futuristic queue management system engineered for the unique needs of
            walk-in–heavy businesses such as beauty salons, wellness centers, clinics, and
            service outlets.
          </p>
        </section>

        {/* WHY DEEPQ IS DIFFERENT */}
        <section style={{ marginTop: "0px" }}>
          <h2 className="section-title" style={{fontWeight:"bold", fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Why DeepQ Is Different?
          </h2>

          <div className="features-grid">
            <div className="feature-box glass-card-deepq hover-card card">
              <h4 style={{ fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Hybrid-Ready System
              </h4>
              <p className="muted" style={{ marginTop: "30px", fontSize: "20px" }}>
                Works effortlessly for walk-ins, scheduled visits, and spontaneous customer flow.
              </p>
            </div>

            <div className="feature-box glass-card-deepq hover-card card">
              <h4 style={{ fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Real-Time Experience
              </h4>
              <p className="muted" style={{ marginTop: "30px", fontSize: "20px" }}>
                Provides a smooth, modern journey with live updates and smart notifications.
              </p>
            </div>

            <div className="feature-box glass-card-deepq hover-card card">
              <h4 style={{ fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                India-First <br/>Design
              </h4>
              <p className="muted" style={{ marginTop: "30px", fontSize: "20px" }}>
                Built for the country's dynamic service culture and operational patterns.
              </p>
            </div>

            <div className="feature-box glass-card-deepq hover-card card">
              <h4 style={{ fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Enterprise-Grade Reliability
              </h4>
              <p className="muted" style={{ marginTop: "30px", fontSize: "20px" }}>
                Runs on cloud-native foundations ensuring speed, security, and scale.
              </p>
            </div>
          </div>
        </section>

        {/* WHO DEEPQ IS FOR */}
        <section style={{ marginTop: "50px" }}>
          <h2 className="section-title" style={{fontWeight:"bold", marginTop: "-50px", fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
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
          <h2 className="section-title" style={{fontWeight:"bold", marginTop: "-150px", fontSize: "26px", background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Future of Service Flow
          </h2>

          <p className="muted glass-card-deepq" style={{ marginTop: "14px", maxWidth: "700px", fontSize: "20px" }}>
            DeepQ represents a shift from traditional manual queues to intelligent,
            digital-first flow systems that boost customer satisfaction and business productivity.
          </p>

          <a href="/contact" className="btn ghost hover-outline" style={{ fontWeight:"bold",color: "white", marginTop: "24px", fontSize: "20px" }}>
            Contact DeepCode Labs
          </a>
        </section>
      </div>
    </div>
  );
}
