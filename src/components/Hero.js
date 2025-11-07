import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const scrollToTracking = () => {
    const trackingSection = document.getElementById('tracking-widget');
    if (trackingSection) {
      trackingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-particles"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-main">S&F LOGISTICS INC</span>
          <span className="title-sub">We Move Your World</span>
        </h1>

        <p className="hero-description">
          Professional logistics solutions that connect businesses globally.
          Fast, reliable, and secure transportation services.
        </p>

        <div className="hero-actions">
          <button onClick={scrollToTracking} className="hero-btn-primary">
            Track Shipment
          </button>
          <Link to="/quote" className="hero-btn-secondary">
            Get Quote
          </Link>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;

