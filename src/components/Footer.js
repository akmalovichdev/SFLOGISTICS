import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">S&F LOGISTICS</h3>
          <p className="footer-description">
            We redefine logistics with reliable, fast, and secure transportation services worldwide.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/quote">Get a Quote</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li>FTL Transportation</li>
            <li>LTL Transportation</li>
            <li>International Shipping</li>
            <li>Warehouse Logistics</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact Info</h4>
          <ul className="footer-contact">
            <li>Email: info@sf-logistics.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Logistics Way, Business District</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} S&F Logistics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

