"use client";

import { useEffect, useState } from "react";
import Background from "./components/Background";

export default function Home() {

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero-left");
    if (!hero) return;

    const handleScroll = () => {
      const y = window.scrollY;
      hero.style.transform = `translateY(${y * 0.08}px)`;

      let opacity = 1 - y * 0.0004;
      if (opacity < 0.75) opacity = 0.75;
      hero.style.opacity = opacity;
    };

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => setIsDesktop(window.innerWidth >= 1025);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative z-10 w-full">

      {/* BACKGROUND */}
      <div className="bg-layer">
        <Background />
      </div>

      {/* ========================= HERO ========================= */}
      <section className="hero hero-wide fade-in w-full">
        <div
          className="home-grid home-grid-responsive"
          style={isDesktop ? {
            maxWidth: "1500px",
            gridTemplateColumns: "1.6fr 1fr",
            columnGap: "10px",
            padding: "40px",
          } : {}}
        >

          {/* LEFT HERO CONTENT */}
          <div
            className="hero-left home-left-responsive"
            style={isDesktop ? { marginLeft: "0px", marginTop: "0px", marginBottom: "0px" } : {}}
          >
            <h1
              className="hero-title fancy-title hero-title-responsive"
              style={{
                background: "linear-gradient(90deg,#4da3ff,#9bc9ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                ...(isDesktop ? { fontSize: "43px", lineHeight: "1.25" } : {})
              }}
            >
              BUILDING THE FUTURE<br />
              OF REAL-TIME<br />
              INTELLIGENT SYSTEMS
            </h1>

            <p
              className="lead soft-fade hero-desc-responsive"
              style={isDesktop ? { fontSize: "30px", maxWidth: "60px", marginBottom: "20px" } : {}}
            >
              DeepCode Labs develops next-generation, cloud-native<br />
              platforms that power the future of customer experiences,<br />
              operational automation, and intelligent decision systems.
            </p>

            <div className="hero-cta fade-up hero-cta-responsive" style={{ marginTop: "20px" }}>
              <a className="btn primary hover-glow cta-btn" href="/deepq">
                Learn More
              </a>
            </div>
          </div>

          {/* RIGHT HERO (EMPTY ON DESKTOP) */}
          <aside
            className="hero-right hero-right-responsive"
            style={isDesktop ? { display: "none" } : {}}
          ></aside>

        </div>
      </section>

      {/* ========================= WHO WE ARE + DEEPQ ========================= */}
      <section
        className="fade-in-delayed who-section-responsive"
        style={isDesktop ? { marginTop: "0px", paddingTop: "0px" } : {}}   // FIX 1 (remove gap above WHO WE ARE)
      >
        <div
          className="who-grid-desktop"
          style={isDesktop ? {
            maxWidth: "1500px",
            padding: "40px",
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr",
            columnGap: "0px",
            alignItems: "start",   // FIX 2 (align WHO + DEEPQ vertically)
          } : {}}
        >

          {/* LEFT — WHO WE ARE */}
          <div className="who-left-block">
            <h3
              className="section-title who-title"
              style={{
                background: "linear-gradient(90deg,#4da3ff,#9bc9ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                ...(isDesktop ? { fontSize: "27px", marginLeft: "10px" } : {})
              }}
            >
              Who We Are
            </h3>

            <p
              className="muted-p who-desc-responsive"
              style={isDesktop ? { fontSize: "20px", maxWidth: "620px" } : {}}
            >
              DeepCode Labs is a technology innovation studio focused on designing and
              building future-ready, high-performance digital systems for India’s fast-growing
              service economy.
              <br /><br />
              Our work sits at the intersection of real-time architecture, geospatial intelligence,
              AI-driven prediction models, and cloud-scale engineering.
            </p>

            {/* CAPABILITIES */}
            <div
              className="capabilities-grid cap-grid-responsive"
              style={isDesktop ? {
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "26px",
                marginTop: "40px",
                width: "50vw",
                height: "70vh"
              } : {}}
            >

              {/* CAPABILITY CARDS — unchanged */}
              <div className="capability-card hover-card" style={{ marginTop: "250px", width: "250px" }}>
                <img src="/assets/Real-Time Distributed Systems-Photoroom - Copy.png" className="cap-icon" />
                <h4 className="card-heading" style={{background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",  fontSize: "24px" }}>
                  Real-Time<br />Distributed Systems
                </h4>
                <p className="muted small" style={{ fontSize: "20px" }}>Low-latency, event-driven platforms for thousands of users.</p>
              </div>

              <div className="capability-card hover-card" style={{ marginTop: "250px", width: "250px" }}>
                <img src="/assets/Cloud-Native Engineering-Photoroom.png" className="cap-icon" />
                <h4 className="card-heading" style={{ background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "24px" }}>
                  Cloud-Native<br />Engineering
                </h4>
                <p className="muted small" style={{ background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",fontSize: "20px" }}>Scalable, secure architecture on modern cloud infrastructure.</p>
              </div>

              <div className="capability-card hover-card" style={{ marginTop: "250px", width: "250px" }}>
                <img src="/assets/AI & Predictive Intelligence2-Photoroom.png" className="cap-icon" />
                <h4 className="card-heading" style={{ background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "24px" }}>
                  AI & Predictive<br />Intelligence
                </h4>
                <p className="muted small" style={{ fontSize: "20px" }}>Forecasting, predicting wait-times, optimizing resources.</p>
              </div>

              <div className="capability-card hover-card" style={{ marginTop: "250px", width: "250px" }}>
                <img src="/assets/Geospatial & Hyperlocal Computing.png" className="cap-icon" />
                <h4 className="card-heading" style={{  background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "24px" }}>
                  Geospatial &<br />Hyperlocal Computing
                </h4>
                <p className="muted small" style={{ fontSize: "20px" }}>Real-time spatial intelligence blending GPS & analytics.</p>
              </div>
            </div>
          </div>

          {/* RIGHT — DEEPQ CARD */}
          <aside
            className="deepq-side"
            style={isDesktop ? { display: "flex", justifyContent: "center" } : {}}
          >
            <div
              className="deepq-home-card deepq-card-responsive"
              style={isDesktop ? {
                width: "520px",
                height: "430px",
                padding: "32px",
                borderRadius: "22px",
                marginTop: "20px"
              } : {}}
            >
              <div>
                <h2
                  className="section-title intro-title-responsive"
                  style={{
                    background: "linear-gradient(90deg,#4da3ff,#9bc9ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    ...(isDesktop ? { fontSize: "30px" } : {})
                  }}
                >
                  Introducing<br />DeepQ
                </h2>

                <p
                  className="muted-p intro-desc-responsive"
                  style={isDesktop ? { fontSize: "18px", maxWidth: "380px" } : {}}
                >
                  DeepQ is a next-generation<br />
                  queue management ecosystem<br />
                  designed for the hybrid<br />
                  Indian service sector — built for<br />
                  transparency, efficiency & real-time<br />
                  decision-making.
                </p>

                <a className="btn ghost hover-outline intro-btn-responsive" href="/deepq">
                  Explore DeepQ
                </a>
              </div>

              <img
                src="/assets/torus (3).png"
                alt="Torus"
                className="deepq-card-img deepq-torus-responsive"
                style={isDesktop ? { width: "240px", right: "-10px", bottom: "-18px" } : {}}
              />
            </div>
          </aside>

        </div>
      </section>

      {/* ========================= INDUSTRY SOLUTIONS ========================= */}
      <section
    className="industry fade-in-delayed-2 industry-responsive"
    style={isDesktop ? { maxWidth: "1500px", padding: "40px" } : {}}
>
    <h3 className="section-title" style={{ 
        fontSize: "30px", 
        background: "linear-gradient(90deg,#4da3ff,#9bc9ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent" 
    }}>
        Industry Solutions
    </h3>

    <div
        className="solutions-grid solutions-grid-responsive"
        style={isDesktop ? { gridTemplateColumns: "repeat(3,1fr)", gap: "34px" } : {}}
    >
        {/* Card 1 */}
        <div className="glass-card industry-cards">
            {/* 💡 APPLY DESKTOP-SPECIFIC STYLE HERE */}
            <img 
                src="/assets/Service Economy Digitization-Photoroom.png" 
                className="sol-img" 
                alt="Service Economy Digitization"
                style={isDesktop ? { width: '70px', height: '70px' } : {}} 
            />
            <h4 className="card-heading" style={{ 
                background: "linear-gradient(90deg,#4da3ff,#9bc9ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent" 
            }}>
                Service Economy<br />Digitization
            </h4>
            <p className="muted">Empowering salons, clinics, micro-businesses.</p>
        </div>

        {/* Card 2 */}
        <div className="glass-card industry-cards">
            {/* 💡 APPLY DESKTOP-SPECIFIC STYLE HERE */}
            <img 
                src="/assets/Retail & Customer Flow Optimization-Photoroom.png" 
                className="sol-img" 
                alt="Retail & Customer Flow Optimization" 
                style={isDesktop ? { width: '70px', height: '70px' } : {}}
            />
            <h4 className="card-heading" style={{ 
                background: "linear-gradient(90deg,#4da3ff,#9bc9ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent" 
            }}>
                Retail & Customer<br />Flow Optimization
            </h4>
            <p className="muted">Improving customer throughput & operations.</p>
        </div>

        {/* Card 3 */}
        <div className="glass-card industry-cards">
            {/* 💡 APPLY DESKTOP-SPECIFIC STYLE HERE */}
            <img 
                src="/assets/Healthcare Wait-Time & Appointment Systems-Photoroom.png" 
                className="sol-img" 
                alt="Healthcare Wait-Time & Appointment Systems" 
                style={isDesktop ? { width: '70px', height: '70px' } : {}}
            />
            <h4 className="card-heading" style={{ 
                background: "linear-gradient(90deg,#4da3ff,#9bc9ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent" 
            }}>
                Healthcare Wait-Time &<br />Appointment Systems
            </h4>
            <p className="muted">Reducing congestion in high-footfall environments.</p>
        </div>
    </div>
</section>

    </div>
  );
}
