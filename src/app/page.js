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
        <section style={{padding: "0",marginTop:"120px", marginBottom: "60px"}}>
          <div className="hero-content" style={{maxWidth: "800px"}}>
            <h1 className="hero-title gradient-text">
              BUILDING THE FUTURE<br />
              OF REAL-TIME<br />
              INTELLIGENT SYSTEMS
            </h1>
            <p className="hero-text" style={{fontSize:"20px"}}>
              DeepCode Labs develops next-generation, cloud-native platforms that power
              the future of customer experiences, operational automation, and intelligent
              decision systems.
            </p>
            <a href="/deepq" className="btn primary">
              Learn More
            </a>
          </div>
        </section>

        {/* WHO WE ARE + DEEPQ - Remove default padding */}
        <section style={{padding: "0", marginBottom: "60px"}}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div className="two-col">
              {/* LEFT - WHO WE ARE */}
              <div>
                <h2 className="section-title gradient-text" style={{fontWeight:"bold"}}>
                  Who We Are
                </h2>
                <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "24px" }}>
                  DeepCode Labs is a technology innovation studio focused on designing
                  and building future-ready, high-performance digital systems for India's
                  fast-growing service economy.
                </p>
                <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "40px" }}>
                  Our work sits at the intersection of real-time architecture, geospatial
                  intelligence, AI-driven prediction models, and cloud-scale engineering.
                </p>
              </div>
      
              {/* RIGHT - INTRODUCING DEEPQ */}
              <div>
                <div className="deepq-card">
                  <h2 className="section-title gradient-text" style={{fontWeight:"bold"}}>
                    Introducing<br />DeepQ
                  </h2>
                  <img
                    src="/assets/torus (3).png"
                    alt="DeepQ Torus"
                    className="deepq-torus-intro"
                  />
                  <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "28px", maxWidth: "400px" }}>
                    DeepQ is a next-generation <br />queue management ecosystem<br /> designed for
                    the hybrid <br />Indian service sector — built for<br /> transparency, efficiency
                    & real-time <br />decision-making.
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
        <div style={{marginBottom: "60px"}}>
          <div className="capabilities-grid">
            <div className="card">
              <img
                src="/assets/Real-Time Distributed Systems-Photoroom - Copy.png"
                className="card-icon"
                alt="Real-Time Systems"
              />
              <h4 className="card-title gradient-text">
                Real-Time<br />Distributed Systems
              </h4>
              <p className="card-text" style={{marginTop:"30px"}}>
                Low-latency, event-driven platforms for thousands of users.
              </p>
            </div>

            <div className="card">
              <img
                src="/assets/Cloud-Native Engineering-Photoroom.png"
                className="card-icon"
                alt="Cloud Native"
              />
              <h4 className="card-title gradient-text">
                Cloud-Native<br />Engineering
              </h4>
              <p className="card-text" style={{marginTop:"30px"}}>
                Scalable, secure architecture on modern cloud infrastructure.
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
              <p className="card-text" style={{marginTop:"30px"}}>
                Forecasting, predicting wait-times, optimizing resources.
              </p>
            </div>

            <div className="card">
              <img
                src="/assets/Geospatial & Hyperlocal Computing.png"
                className="card-icon"
                alt="Geospatial"
              />
              <h4 className="card-title gradient-text">
                Geospatial &<br />Hyperlocal Computing
              </h4>
              <p className="card-text" style={{marginTop:"30px"}}>
                Real-time spatial intelligence blending GPS & analytics.
              </p>
            </div>
          </div>
        </div>

        {/* INDUSTRY SOLUTIONS */}
        <section style={{padding: "0", marginBottom: "40px"}}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <h2 className="section-title gradient-text" style={{fontWeight:"bold"}}>
              Industry Solutions
            </h2>

            <div className="industry-grid">
              <div className="industry-card">
                <img
                  src="/assets/Service Economy Digitization-Photoroom.png"
                  className="industry-icon"
                  alt="Service Economy"
                />
                <h4 className="card-title gradient-text">
                  Service Economy<br />Digitization
                </h4>
                <p className="card-text" style={{marginTop:"20px"}}>
                  Empowering salons, clinics, micro-businesses.
                </p>
              </div>

              <div className="industry-card">
                <img
                  src="/assets/Retail & Customer Flow Optimization-Photoroom.png"
                  className="industry-icon"
                  alt="Retail"
                />
                <h4 className="card-title gradient-text">
                  Retail & Customer<br />Flow Optimization
                </h4>
                <p className="card-text" style={{marginTop:"20px"}}>
                  Improving customer throughput & operations.
                </p>
              </div>

              <div className="industry-card">
                <img
                  src="/assets/Healthcare Wait-Time & Appointment Systems-Photoroom.png"
                  className="industry-icon"
                  alt="Healthcare"
                  style={{width:"90px"}}
                />
                <h4 className="card-title gradient-text" style={{marginBottom:"20px"}}>
                  Healthcare Wait-Time &<br />Appointment Systems
                </h4>
                <p className="card-text">
                  Reducing congestion in high-footfall environments.
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
