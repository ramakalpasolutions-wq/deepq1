
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });

        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(
          data.message ||
            "Failed to send message. Please try again."
        );
      }
    } catch (err) {
      console.error("Error:", err);

      setError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative z-20 w-full page fade-in">
      <section className="hero hero-wide">
        <div className="hero-left">

          {/* PAGE TITLE */}
          <h1 className="fancy-title">
            Contact Us
          </h1>

          {/* CONTACT INFORMATION + WORLD MAP */}
          <div className="contact-map-section fade-in-delayed-2">

            {/* LEFT SIDE: CONTACT GLASS CARD */}
            <div className="glass-card-contact">

              {/* EMAIL */}
              <p className="muted">
                <strong>📧 Email:</strong>{" "}
                <a
                  href="mailto:info@deepq.in"
                  style={{
                    color: "#4da3ff",
                    textDecoration: "none",
                  }}
                >
                 info@deepq.in
                </a>
              </p>

              {/* WEBSITE */}
              {/* <p className="muted">
                <strong>🌐 Website:</strong>{" "}
                deepcodelabs.io
              </p> */}

              {/* OFFICE ADDRESS SECTION */}
              <div className="office-address-grid">

                {/* CORPORATE OFFICE */}
                <div className="office-address-column">
                  <h3 className="office-address-title">
                    🏢 Corporate Office
                  </h3>

                  <p className="muted office-address-text">
                    406, Regus Business Center,
                    <br />
                    Gumidelli Towers, Begumpet,
                    <br />
                    Hyderabad, TS -16.
                  </p>
                </div>

                {/* REGISTERED OFFICE */}
                <div className="office-address-column">
                  <h3 className="office-address-title">
                    📍 Registered Office
                  </h3>

                  <p className="muted office-address-text">
                    4-14-142, 3rd Floor,
                    <br />
                    West Marredpally,
                    <br />
                    Secunderabad, TS -26.
                  </p>
                </div>

              </div>

              {/* LOCATIONS */}
              <div
                className="muted"
                style={{
                  marginTop: "20px",
                  paddingTop: "16px",
                  borderTop:
                    "1px solid rgba(255,255,255,0.12)",
                  lineHeight: "1.8",
                }}
              >
                <strong>📍 Locations:</strong>{" "}
                Hyderabad | Bangalore | San Diego
              </div>
            </div>

            {/* RIGHT SIDE: WORLD MAP */}
            <div className="world-map-container">
              <img
                src="/world-map.jpg"
                alt="World Map"
                className="world-map"
              />

              {/* SAN DIEGO */}
              <div className="map-pin san-diego left">
                <span className="pin-dot"></span>
                <span className="pin-line"></span>
                <span className="pin-line-vert"></span>
                <span className="pin-label">
                  San Diego, USA
                </span>
              </div>

              {/* BANGALORE */}
              <div className="map-pin hyderabad top-left">
                <span className="pin-dot"></span>
                <span className="pin-line"></span>
                <span className="pin-line-vert"></span>
                <span className="pin-label">
                  Bangalore, India
                </span>
              </div>

              {/* HYDERABAD */}
              <div className="map-pin bangalore top-right">
                <span className="pin-dot"></span>
                <span className="pin-line"></span>
                <span className="pin-line-vert"></span>
                <span className="pin-label">
                  Hyderabad, India
                </span>
              </div>
            </div>
          </div>

          {/* CONTACT INTRODUCTION */}
          <p
            className="lead soft-fade"
            style={{
              marginTop: "50px",
            }}
          >
            We'd love to hear from you. Our team will
            get back to you shortly.
          </p>

          {/* CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            className="contact-form fade-in-delayed"
          >
            <h3 className="section-title">
              Send a Message
            </h3>

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />

            {/* COMPANY */}
            <input
              type="text"
              name="company"
              placeholder="Company / Organization"
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
              disabled={loading}
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
            />

            {/* SUBMIT BUTTON */}
            <button
              className="btn ghost hover-glow"
              type="submit"
              disabled={loading}
              style={{
                opacity: loading ? 0.6 : 1,
                cursor: loading
                  ? "not-allowed"
                  : "pointer",
              }}
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <p
                className="muted fade-in"
                style={{
                  color: "#4da3ff",
                  marginTop: 16,
                }}
              >
                ✔ Message sent successfully! We'll
                get back to you soon.
              </p>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <p
                className="muted fade-in"
                style={{
                  color: "#ff4d4d",
                  marginTop: 16,
                }}
              >
                ✖ {error}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
