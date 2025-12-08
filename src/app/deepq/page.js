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

      {/* MAIN OUTER WRAPPER */}
      <div
        className="deepq-wrapper fade-in"
        style={{
          width: "92%",
          maxWidth: "1500px",
          margin: "10px auto",
          borderRadius: "22px",
          padding: "60px 70px",
          background: "transparent",
          border: "2px solid rgba(77,163,255,0.06)",
          backdropFilter: "blur(0px)",
          position: "relative",
        }}
      >

        {/* TORUS TOP-RIGHT IMAGE */}
        <img
          src="/assets/torus (3).png"
          alt="DeepQ Torus"
          className="deepq-torus"
          style={{
            position: "absolute",
            top: "20px",
            right: "100px",
            width: "560px",
            opacity: 2,
            filter: "drop-shadow(0 0 22px rgba(77,163,255,0.45))",
            animation: "slowSpin 80s linear infinite",
            pointerEvents: "none",
          }}
        />

        {/* HERO SECTION */}
        <section className="deepq-hero-inner" style={{ display: "flex", gap: "40px" }}>
          <div className="deepq-hero-left" style={{ maxWidth: "720px", paddingTop: "40px" }}>
            <h1 className="hero-title fancy-title" style={{ fontSize: "48px", color:"#00C8FF" }}>
              DeepQ - <br></br >The Next Generation of<br />Queue Management Systems
            </h1>

            <p className="muted-deepq glass-card-deepq" style={{ maxWidth: "500px", marginTop: "20px", fontSize: "30px" }}>
              An intelligent, hyperlocal, real-time platform designed to modernize customer flow
              and service delivery in India’s fast-moving service economy.
            </p>

            <a className="btn ghost hover-outline" href="/contact" style={{ marginTop: "25px" ,border:"1"}}>
              Learn More
            </a>
          </div>
        </section>

        {/* WHAT IS DEEPQ */}
        <section style={{ marginTop: "80px" }}>
          <h2 className="section-title " style={{ marginTop: "100px", fontSize: "30px" , color:"#00C8FF"}}>What is DeepQ?</h2>

          <p className="muted glass-card-deepq" style={{ marginTop: "12px", maxWidth: "750px", fontSize: "24px" }}>
            DeepQ is a futuristic queue management system engineered for the unique needs of
            walk-in–heavy businesses such as beauty salons, wellness centers, clinics, and
            service outlets.
          </p>
        </section>

        {/* WHY DEEPQ IS DIFFERENT */}
        <section style={{ marginTop: "80px" }}>
          <h2 className="section-title" style={{ fontSize: "30px" , color:"#00C8FF"}}>Why DeepQ Is Different?</h2>

          <div
            className="features-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "22px",
              marginTop: "20px",
            }}
          >
            <div className="feature-box glass-card-deepq hover-card" >
              <h4 style={{ fontSize: "30px" , color:"#00C8FF"}}>Hybrid-Ready <br />By Design</h4>
              {/* <img
                src="/assets/torus (3).png"
                alt="DeepQ Torus"
                className="deepq-torus"
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "20px",
                  width: "90px",
                  opacity: 9,
                  filter: "drop-shadow(0 0 22px rgba(77,163,255,0.45))",
                  animation: "slowSpin 80s linear infinite",
                  pointerEvents: "none",
                }}
              /> */}
              <p className="muted" style={{ marginTop: "60px",fontSize: "24px" }}>
                Works effortlessly for walk-ins,<br /> scheduled visits, and <br />spontaneous customer flow.
              </p>
            </div>

            <div className="feature-box glass-card-deepq hover-card">
              <h4 style={{ fontSize: "30px", color:"#00C8FF" }}>Real-Time Customer <br />Experience</h4>
              {/* <img
                src="/assets/torus (3).png"
                alt="DeepQ Torus"
                className="deepq-torus"
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "20px",
                  width: "90px",
                  opacity: 9,
                  filter: "drop-shadow(0 0 22px rgba(77,163,255,0.45))",
                  animation: "slowSpin 80s linear infinite",
                  pointerEvents: "none",
                }}
              /> */}
              <p className="muted" style={{ marginTop: "20px",fontSize: "24px" }}>
                Provides a smooth, modern<br /> journey with live updates and<br /> smart notifications.
              </p>
            </div>

            <div className="feature-box glass-card-deepq hover-card">
              <h4 style={{ fontSize: "30px" , color:"#00C8FF"}}>Designed for <br />Indian Market<br /> Nuances</h4>
              {/* <img
                src="/assets/torus (3).png"
                alt="DeepQ Torus"
                className="deepq-torus"
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "20px",
                  width: "90px",
                  opacity: 9,
                  filter: "drop-shadow(0 0 22px rgba(77,163,255,0.45))",
                  animation: "slowSpin 80s linear infinite",
                  pointerEvents: "none",
                }}
              /> */}
              <p className="muted" style={{ marginTop: "20px",fontSize: "24px" }}>
                Built for the country’s dynamic <br />service culture and operational <br />patterns.
              </p>
            </div>

            <div className="feature-box glass-card-deepq hover-card">
              <h4 style={{ fontSize: "30px" , color:"#00C8FF"}}>Enterprise-Grade<br /> Reliability</h4>
              {/* <img
                src="/assets/torus (3).png"
                alt="DeepQ Torus"
                className="deepq-torus"
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "20px",
                  width: "90px",
                  opacity: 9,
                  filter: "drop-shadow(0 0 22px rgba(77,163,255,0.45))",
                  animation: "slowSpin 80s linear infinite",
                  pointerEvents: "none",
                }}
              /> */}
              <p className="muted" style={{ marginTop: "60px",fontSize: "24px" }}>
                Runs on cloud-native<br /> foundations ensuring speed,<br /> security, and scale.
              </p>
            </div>
          </div>
        </section>

        {/* WHO DEEPQ IS FOR */}
        <section style={{ marginTop: "80px" }}>
          <h2 className="section-title" style={{ marginTop: "50px",fontSize: "30px" , color:"#00C8FF"}}>Who DeepQ Is For</h2>

          <ul
            className="muted glass-card-deepq"
            style={{
              marginTop: "14px",
              lineHeight: "1.9",
              maxWidth: "600px",
              padding: "20px 26px",
              fontSize:"24px"
            }}
          >
            <li>Beauty & grooming salons</li>
            <li>Clinics & diagnostic centers</li>
            <li>Spas and wellness outlets</li>
            <li>Any high-footfall service business that values efficiency</li>
          </ul>
        </section>

        {/* FUTURE OF SERVICE FLOW */}
        <section style={{ marginTop: "90px" }}>
          <h2 className="section-title" style={{ marginTop: "50px",fontSize: "30px", color:"#00C8FF" }}>Future of Service Flow</h2>

          <p className="muted glass-card-deepq" style={{ marginTop: "14px", maxWidth: "700px" ,fontSize:"24px" }}>
            DeepQ represents a shift from traditional manual queues to intelligent,
            digital-first flow systems that boost customer satisfaction and business productivity.
          </p>

          <a href="/contact" className="btn ghost hover-outline" style={{ marginTop: "24px",fontSize:"24px" }}>
            Contact DeepCode Labs
          </a>
        </section>

      </div>
    </div>
  );
}
