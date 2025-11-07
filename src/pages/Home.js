import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TrackingWidget from '../components/TrackingWidget';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const stats = [
    { number: '500+', label: 'Fleet Vehicles', icon: '🚛' },
    { number: '1000+', label: 'Satisfied Clients', icon: '😊' },
    { number: '99.8%', label: 'On-Time Delivery', icon: '⏱️' },
    { number: '50+', label: 'Service Locations', icon: '📍' },
  ];

  return (
    <div className="home">
      <Hero />
      <Features />

      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Our Numbers Speak</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card animate-on-scroll" id={`stat-${index}`}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrackingWidget />

      <section className="news-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll" id="news-title">Latest News & Projects</h2>
          <div className="news-grid">
            <div className="news-card animate-on-scroll" id="news-1">
              <div
                className="news-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
                }}
              ></div>
              <div className="news-content">
                <h3>Expanding Our Network</h3>
                <p>We're excited to announce the opening of three new distribution centers across North America, enhancing our delivery capabilities and reducing transit times by 25%.</p>
                <span className="news-date">March 15, 2024</span>
              </div>
            </div>
            <div className="news-card animate-on-scroll" id="news-2">
              <div
                className="news-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
                }}
              ></div>
              <div className="news-content">
                <h3>Sustainable Logistics Initiative</h3>
                <p>Our commitment to the environment: transitioning to eco-friendly vehicles and reducing carbon footprint by 30%. Join us in building a greener future.</p>
                <span className="news-date">February 28, 2024</span>
              </div>
            </div>
            <div className="news-card animate-on-scroll" id="news-3">
              <div
                className="news-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1601581875101-85b8092a1e87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
                }}
              ></div>
              <div className="news-content">
                <h3>New International Routes</h3>
                <p>We've launched new shipping routes connecting Europe and Asia, providing faster transit times for our clients and expanding our global reach.</p>
                <span className="news-date">January 10, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll" id="process-title">How We Work</h2>
          <div className="process-steps">
            <div className="process-step animate-on-scroll" id="step-1">
              <div className="step-number">01</div>
              <h3>Request a Quote</h3>
              <p>Fill out our simple form with your shipment details and get an instant quote.</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step animate-on-scroll" id="step-2">
              <div className="step-number">02</div>
              <h3>We Plan & Prepare</h3>
              <p>Our logistics experts create the optimal route and prepare your shipment.</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step animate-on-scroll" id="step-3">
              <div className="step-number">03</div>
              <h3>Ship & Track</h3>
              <p>Your shipment is on the way with real-time tracking available 24/7.</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step animate-on-scroll" id="step-4">
              <div className="step-number">04</div>
              <h3>Safe Delivery</h3>
              <p>Your cargo arrives safely and on time at the destination.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="animate-on-scroll" id="cta-title">Ready to Get Started?</h2>
          <p className="animate-on-scroll" id="cta-text">Get a free quote for your shipping needs today</p>
          <Link to="/quote" className="cta-button animate-on-scroll" id="cta-btn">GET A QUOTE</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

