import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
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

  const services = [
    {
      title: 'FTL Transportation',
      description: 'Full Truckload services for large shipments requiring dedicated vehicle space. Perfect for businesses with substantial cargo volumes.',
      features: ['Dedicated vehicle', 'Fast transit times', 'Secure handling', 'Real-time tracking'],
      icon: '🚛',
      image: 'https://images.unsplash.com/photo-1601581875101-85b8092a1e87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'LTL Transportation',
      description: 'Less Than Truckload solutions for smaller shipments. Cost-effective option sharing space with other shipments.',
      features: ['Cost-effective', 'Flexible scheduling', 'Multiple pickups', 'Consolidation services'],
      icon: '📦',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'International Shipping',
      description: 'Global logistics network connecting continents. Seamless cross-border transportation with customs handling.',
      features: ['Worldwide coverage', 'Customs clearance', 'Documentation support', 'Multi-modal transport'],
      icon: '🌐',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Warehouse Logistics',
      description: 'Comprehensive warehousing solutions including storage, inventory management, and distribution services.',
      features: ['Secure storage', 'Inventory management', 'Pick & pack', 'Distribution services'],
      icon: '🏭',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive logistics solutions tailored to your business needs
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-card animate-on-scroll`} id={`service-${index}`}>
                <div
                  className="service-image"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="service-overlay"></div>
                </div>
                <div className="service-content">
                  <div className="service-icon">{service.icon}</div>
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Need a Custom Solution?</h2>
          <p>Contact us to discuss your specific logistics requirements</p>
          <Link to="/quote" className="cta-button">GET A QUOTE</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

