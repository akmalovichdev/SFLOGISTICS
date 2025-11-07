import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Global Reach',
      description: 'Worldwide shipping network connecting continents with reliable transportation solutions.',
      color: '#000000'
    },
    {
      icon: '⚙️',
      title: 'On-Time Delivery',
      description: '99.8% on-time delivery rate ensuring your shipments arrive exactly when promised.',
      color: '#000000'
    },
    {
      icon: '🛡️',
      title: 'Secure Transport',
      description: 'Advanced security measures and insurance coverage for complete peace of mind.',
      color: '#000000'
    },
    {
      icon: '🔗',
      title: 'Trusted Partnerships',
      description: 'Building long-term relationships with businesses of all sizes across industries.',
      color: '#000000'
    }
  ];

  return (
    <section className="features">
      <div className="features-background"></div>
      <div className="container">
        <div className="features-header">
          <span className="features-badge">Our Advantages</span>
          <h2 className="features-title">
            Why Choose <span className="title-accent">S&F Logistics</span>?
          </h2>
          <p className="features-subtitle">
            We combine cutting-edge technology with decades of experience to deliver
            logistics solutions that exceed expectations.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ '--card-color': feature.color }}>
              <div className="feature-card-inner">
                <div className="feature-icon-wrapper" style={{ background: feature.color }}>
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
                <div className="feature-hover-effect"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

