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
      <section className="hero hero-wide">
        <div className="hero-left">
          <h1 className="fancy-title">Contact Us</h1>
          <p className="lead soft-fade">
            We'd love to hear from you. Our team will get back to you shortly.
          </p>

          <div className="glass-card-contact fade-in-delayed">
            <p className="muted">
              <strong>📧 Email:</strong> info@deepcodelabs.io
            </p>
            <p className="muted">
              <strong>🌐 Website:</strong> deepcodelabs.io
            </p>
            <p className="muted">
              <strong>📍 Locations:</strong> Hyderabad • Chennai • Bangalore
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form fade-in-delayed-2">
            <h3 className="section-title">Send a Message</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              autoComplete="name"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              autoComplete="email"
            />

            <input
              type="text"
              name="company"
              placeholder="Company / Organization"
              autoComplete="organization"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            />

            <button className="btn primary hover-glow" type="submit">
              Submit
            </button>

            {submitted && (
              <p className="muted fade-in" style={{ color: "#4da3ff", marginTop: 16 }}>
                ✔ Message submitted! (Email service not yet connected)
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
