import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">S&F LOGISTICS INC</h3>
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
          <h4 className="footer-heading">Additional Contact</h4>
          <ul className="footer-contact">
            <li>Phone: +1 (718) 701 33-35</li>
            <li>Address: 9743 Cowden St Philadelphia, PA 19115</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact Info</h4>
          <ul className="footer-contact">
            <li>Email: info@sflogistic.com</li>
            <li>Phone: +1 (215) 970 77-70</li>
            <li>Address: 2609 E 14th St #380 Brooklyn, NY 11235</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} S&F Logistics INC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

