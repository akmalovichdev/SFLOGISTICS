import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
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

  return (
    <div className="about-page">
      <section className="about-hero">
        <div
          className="about-hero-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1601581875101-85b8092a1e87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        >
          <div className="about-hero-overlay"></div>
        </div>
        <div className="container">
          <h1 className="page-title animate-on-scroll" id="about-title">About Us</h1>
          <p className="page-subtitle animate-on-scroll" id="about-subtitle">
            Building trust through reliable logistics solutions since 2010
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section animate-on-scroll" id="mission-section">
            <div className="about-section-content">
              <div className="about-text">
                <h2 className="section-heading">Our Mission</h2>
                <p className="section-text">
                  At S&F Logistics INC, we are committed to redefining the logistics industry through
                  innovation, reliability, and exceptional customer service. Our mission is to provide
                  seamless transportation solutions that empower businesses to grow and succeed in an
                  increasingly connected world.
                </p>
                <p className="section-text">
                  We believe that logistics is not just about moving goods from point A to point B,
                  but about creating value, building relationships, and driving success for our clients.
                  Every shipment is an opportunity to exceed expectations and demonstrate our commitment
                  to excellence.
                </p>
              </div>
              <div
                className="about-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
                }}
              ></div>
            </div>
          </div>

          <div className="about-section animate-on-scroll" id="values-section">
            <h2 className="section-heading">Our Values</h2>
            <div className="values-grid">
              <div className="value-card animate-on-scroll" id="value-1">
                <div className="value-icon">✓</div>
                <h3>Reliability</h3>
                <p>We deliver on our promises, ensuring your shipments arrive on time, every time.</p>
              </div>
              <div className="value-card animate-on-scroll" id="value-2">
                <div className="value-icon">⚡</div>
                <h3>Innovation</h3>
                <p>Leveraging cutting-edge technology to optimize routes and improve efficiency.</p>
              </div>
              <div className="value-card animate-on-scroll" id="value-3">
                <div className="value-icon">🤝</div>
                <h3>Integrity</h3>
                <p>Transparent communication and honest business practices in everything we do.</p>
              </div>
              <div className="value-card animate-on-scroll" id="value-4">
                <div className="value-icon">⭐</div>
                <h3>Excellence</h3>
                <p>Striving for perfection in every shipment, every interaction, every day.</p>
              </div>
            </div>
          </div>

          <div className="about-section animate-on-scroll" id="story-section">
            <div className="about-section-content reverse">
              <div
                className="about-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
                }}
              ></div>
              <div className="about-text">
                <h2 className="section-heading">Our Story</h2>
                <p className="section-text">
                  Founded in 2010, S&F Logistics INC began as a small regional transportation company with
                  a vision to transform the logistics landscape. Over the years, we've expanded our
                  network to cover major routes across North America and established international
                  partnerships that enable global shipping capabilities.
                </p>
                <p className="section-text">
                  Today, we serve hundreds of businesses, from startups to Fortune 500 companies,
                  providing tailored logistics solutions that meet their unique needs. Our commitment
                  to continuous improvement and customer satisfaction has made us a trusted partner
                  in the industry.
                </p>
                <p className="section-text">
                  Our journey has been marked by steady growth, strategic partnerships, and an unwavering
                  focus on customer success. We've invested in state-of-the-art facilities, cutting-edge
                  technology, and most importantly, our people.
                </p>
              </div>
            </div>
          </div>

          <div className="about-section animate-on-scroll" id="team-section">
            <h2 className="section-heading">Our Team</h2>
            <p className="section-text">
              Our success is built on the expertise and dedication of our team. From logistics
              coordinators to drivers, from customer service representatives to warehouse staff,
              every member of the S&F Logistics INC family is committed to delivering excellence.
            </p>
            <div className="team-stats">
              <div className="stat-item animate-on-scroll" id="stat-1">
                <div className="stat-icon">👥</div>
                <div className="stat-number">500+</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="stat-item animate-on-scroll" id="stat-2">
                <div className="stat-icon">📅</div>
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item animate-on-scroll" id="stat-3">
                <div className="stat-icon">😊</div>
                <div className="stat-number">1000+</div>
                <div className="stat-label">Satisfied Clients</div>
              </div>
              <div className="stat-item animate-on-scroll" id="stat-4">
                <div className="stat-icon">📍</div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Service Locations</div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2 className="section-heading">Licenses & Certifications</h2>
            <div className="certifications">
              <div className="cert-item">
                <strong>DOT Certified</strong>
                <p>Department of Transportation compliance</p>
              </div>
              <div className="cert-item">
                <strong>ISO 9001:2015</strong>
                <p>Quality management system certified</p>
              </div>
              <div className="cert-item">
                <strong>FMCSA Licensed</strong>
                <p>Federal Motor Carrier Safety Administration</p>
              </div>
              <div className="cert-item">
                <strong>C-TPAT Certified</strong>
                <p>Customs-Trade Partnership Against Terrorism</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

