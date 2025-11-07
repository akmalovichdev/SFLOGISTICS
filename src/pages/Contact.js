import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with our team - we're here to help
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2 className="section-heading">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <div className="form-success">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                <button type="submit" className="submit-button">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2 className="section-heading">Contact Information</h2>

              <div className="contact-info">
                <div className="info-block">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>Address</h3>
                    <p>123 Logistics Way<br />Business District<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="info-block">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>+1 (215) 970 77-70<br />+1 (215) 970 77-70</p>
                  </div>
                </div>

                <div className="info-block">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>info@sflogistic.com<br />support@sf-logistics.com</p>
                  </div>
                </div>

                <div className="info-block">
                  <div className="info-icon">🕒</div>
                  <div className="info-content">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="map-placeholder">
                <p>Map Location</p>
                <div className="map-content">
                  <p>Interactive map would be integrated here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

