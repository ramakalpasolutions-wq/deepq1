// src/app/contact/page.js
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="relative z-20 w-full page fade-in">
      <section className="hero hero-wide relative z-20 fade-in w-full" style={{ marginTop: 20, width: "100%", display: "flex", justifyContent: "center" }}>
        <div className="hero-left" style={{ width: "100%", maxWidth: 900, padding: 20 }}>
          <h1 className="hero-title fancy-title" style={{background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Contact Us</h1>
          <p className="lead soft-fade" style={{ maxWidth: 900 }}>
            We’d love to hear from you. Our team will get back to you shortly.
          </p>

          <div className="glass-card-contact mt-6 fade-in-delayed" style={{ width: "100%", maxWidth: 900, padding: 26, marginTop: 15}}>
            <p className="muted"><strong style={{color:"#00C8FF"}}>📧 Email:</strong> info@deepcodelabs.io</p>
            <p className="muted"><strong style={{color:"#00C8FF"}}>🌐 Website:</strong> deepcodelabs.io</p>
            <p className="muted"><strong style={{color:"#00C8FF"}}>📍 Locations:</strong> Hyderabad • Chennai • Bangalore</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form glass-card fade-in-delayed-2" style={{ marginTop: 28, width: "100%", maxWidth: 900, padding: 28 }}>
            <h3 className="section-title" style={{background: "linear-gradient(90deg,#4da3ff,#9bc9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Send a Message</h3>

            <input type="text" name="name" placeholder="Your Name" required style={{ height: 52, fontSize: 16, width: "100%", marginTop: 12 ,background:"transparent",color:"white"}} />
            <input type="email" name="email" placeholder="Your Email" required style={{ height: 52, fontSize: 16, width: "100%", marginTop: 12 ,background:"transparent",color:"white" }} />
            <input type="text" name="company" placeholder="Company / Organization" style={{ height: 52, fontSize: 16, width: "100%", marginTop: 12,background:"transparent",color:"white" }} />
            <textarea name="message" rows="6" placeholder="Your Message" required style={{ fontSize: 16, padding: 16, width: "100%", marginTop: 12 ,background:"transparent",color:"white"}} />

            <button className="btn primary hover-glow" type="submit" style={{ marginTop: 10, width: 200, height: 48, fontSize: 16 }}>Submit</button>

            {submitted && <p className="muted fade-in" style={{ color: "#4da3ff", marginTop: 10 }}>✔ Message submitted! (Email service not yet connected)</p>}
          </form>
        </div>
      </section>
    </div>
  );
}
