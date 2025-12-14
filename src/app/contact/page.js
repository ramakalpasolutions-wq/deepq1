"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
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
              <strong>📧 Email:</strong> <a href="mailto:info@deepcodelabs.io" style={{color: '#4da3ff', textDecoration: 'none'}}>info@deepcodelabs.io</a>
            </p>
            <p className="muted">
              <strong>🌐 Website:</strong> deepcodelabs.io
            </p>
            <p className="muted">
              <strong>📍 Location:</strong> 406, Regus Business Center,
              <span style={{ display: 'block', marginLeft: '115px' }}>Gumidelli Towers, Begumpet,</span>
              <span style={{ display: 'block', marginLeft: '115px' }}>Hyderabad, Telangana 500016.</span>
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
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
            />

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

            <input
              type="text"
              name="company"
              placeholder="Company / Organization"
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
              disabled={loading}
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
            />

            <button 
              className="btn primary hover-glow" 
              type="submit"
              disabled={loading}
              style={{
                opacity: loading ? 0.6 : 1,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>

            {submitted && (
              <p className="muted fade-in" style={{ color: "#4da3ff", marginTop: 16 }}>
                ✔ Message sent successfully! We'll get back to you soon.
              </p>
            )}

            {error && (
              <p className="muted fade-in" style={{ color: "#ff4d4d", marginTop: 16 }}>
                ✖ {error}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
