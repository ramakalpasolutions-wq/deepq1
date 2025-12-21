"use client";

import Background from "./components/Background";

export default function Home() {
  return (
    <>
      <div className="bg-layer">
        <Background />
      </div>

      {/* WRAPPER WITH DEEPQ-STYLE PADDING */}
      <div className="deepq-wrapper fade-in">

        {/* HERO - Remove default padding */}
        <section style={{ padding: "0", marginTop: "120px", marginBottom: "60px" }}>
          <div className="hero-content" style={{ maxWidth: "800px" }}>
            <h1 className="hero-title gradient-text">
              BUILDING THE FUTURE<br />
              OF REAL-TIME<br />
              INTELLIGENT SYSTEMS
            </h1>
            <p className="hero-text" style={{ fontSize: "23px" }}>
              DeepCode Labs develops next-generation, cloud-native platforms that power
              the future of customer experiences, operational automation, and intelligent
              decision systems.
            </p>
            <a href="/deepq" className="btn ghost">
              Learn More
            </a>
          </div>
        </section>

        {/* WHO WE ARE + DEEPQ - Remove default padding */}
        <section style={{ padding: "0", marginBottom: "60px" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div className="two-col">
              {/* LEFT - WHO WE ARE */}
              <div>
                <h2 className="section-title gradient-text" style={{ fontWeight: "bold" }}>
                  Who We Are
                </h2>
                <p className="who-p" style={{ maxWidth: "650px", textAlign: "justify", fontSize: "20px", lineHeight: "1.7", marginBottom: "24px" }}>
                  DeepCode Labs is a technology innovation studio focused on designing
                  and building future-ready, high-performance digital systems for India's
                  fast-growing service economy.
                </p>
                <p className="who-p" style={{ maxWidth: "600px", textAlign: "justify", fontSize: "20px", lineHeight: "1.7", marginBottom: "40px" }}>
                  Our work sits at the intersection of real-time architecture, geospatial
                  intelligence, AI-driven prediction models, and cloud-scale engineering.
                </p>
              </div>

              {/* RIGHT - INTRODUCING DEEPQ */}
              <div>
                <div className="deepq-card">
                  <h2 className="section-title gradient-text" style={{ fontWeight: "bold" }}>
                    Introducing<br />DeepQ
                  </h2>
                  <img
                    src="/assets/torus (3).png"
                    alt="DeepQ Torus"
                    className="deepq-torus-intro"
                  />
                  <p style={{ textAlign: "justity", fontSize: "20px", lineHeight: "1.6", marginBottom: "28px", maxWidth: "280px" }}>
                    DeepQ is a next-generation queue management ecosystem designed for
                    the hybrid Indian service sector — built for transparency, efficiency
                    & real-time decision-making.
                  </p>
                  <a href="/deepq" className="btn ghost">
                    Explore DeepQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES GRID */}
        <div style={{ marginBottom: "60px" }}>
          <div className="capabilities-grid">
            <div className="card">
              <img
                src="/assets/Real-Time Distributed Systems-Photoroom - Copy.png"
                className="card-icon"
                alt="Real-Time Systems"
              />
              <h4 className="card-title gradient-text">
                Real-Time Distributed Systems
              </h4>
              <p className="card-text" style={{ marginTop: "20px" }}>
                Designing low-latency, event-driven platforms capable of handling thousands of concurrent users.
              </p>
            </div>

            <div className="card">
              <img
                src="/assets/Cloud-Native Engineering-Photoroom.png"
                className="card-icon"
                alt="Cloud Native"
              />
              <h4 className="card-title gradient-text">
                Cloud-Native Engineering
              </h4>
              <p className="card-text" style={{ marginTop: "40px" }}>
                Architecting scalable systems on Microsoft Azure with seamless data flow, security, and high availability.
              </p>
            </div>

            <div className="card">
              <img
                src="/assets/AI & Predictive Intelligence2-Photoroom.png"
                className="card-icon"
                alt="AI Intelligence"
              />
              <h4 className="card-title gradient-text">
                AI & Predictive<br />Intelligence
              </h4>
              <p className="card-text" style={{ marginTop: "40px" }}>
                Developing intelligent models for forecasting demand, predicting wait times, and optimizing resources.
              </p>
            </div>

            <div className="card">
              <img
                src="/assets/Geospatial & Hyperlocal Computing.png"
                className="card-icon"
                alt="Geospatial"
              />
              <h4 className="card-title gradient-text">
                Geospatial Intelligence
              </h4>
              <p className="card-text" style={{ marginTop: "40px" }}>
                {/* Geospatial & Hyperlocal Computing */}
                Building location-aware applications that blend GPS, real-time analytics, and spatial intelligence.

              </p>
            </div>
          </div>
        </div>

        {/* INDUSTRY SOLUTIONS */}
        <section style={{ padding: "0", marginBottom: "40px" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <h2 className="section-title gradient-text" style={{ fontWeight: "bold" }}>
              Industry Solutions
            </h2>

            <div className="industry-grid">
              <div className="industry-card">
                <img
                  src="/assets/Service Economy Digitization-Photoroom.png"
                  className="industry-icon"
                  alt="Service Economy"
                  style={{ width: "80px", height: "80px" }}

                />
                <h4 className="card-title gradient-text">
                  Service Digitization
                </h4>
                <p className="card-text" style={{ marginTop: "20px", textAlign:"justify" }}>
                  We help service businesses transition from manual processes to seamless, real-time digital operations. Our solutions modernize workflows, improve transparency, and elevate customer experience.
                </p>
              </div>

              <div className="industry-card">
                <img
                  src="/assets/Retail & Customer Flow Optimization-Photoroom.png"
                  className="industry-icon"
                  alt="Retail"
                  style={{ width: "80px", height: "80px" }}

                />
                <h4 className="card-title gradient-text">
                  Retail Flow Control
                </h4>
                <p className="card-text" style={{ marginTop: "20px" , textAlign:"justify"}}>
                  Optimize customer movement and reduce bottlenecks with intelligent, data-driven flow management. Our system enhances efficiency, boosts throughput, and ensures smoother in-store experiences.
                </p>
              </div>

              <div className="industry-card">
                <img
                  src="/assets/Healthcare Wait-Time & Appointment Systems-Photoroom.png"
                  className="industry-icon"
                  alt="Healthcare"
                  style={{ width: "80px", height: "80px" }}
                />
                <h4 className="card-title gradient-text" style={{ marginBottom: "20px" }}>
                  Healthcare Queues
                </h4>
                <p className="card-text" style={{ textAlign:"justify"}}>
                  Streamline patient wait times with real-time queue visibility and smart scheduling. Designed for clinics and diagnostic centers, it improves service flow while reducing congestion and delays.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
      {/* END WRAPPER */}
    </>
  );
}
