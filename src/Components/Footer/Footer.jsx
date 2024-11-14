// Footer.js
import React from 'react';
import './Footer.css'; // Import for custom styling

function Footer() {
  return (
    <footer className="footer bg-slate-300">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/news">Newsroom</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/security">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BANKSTORE . All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
