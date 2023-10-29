import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src="../images/logo.jpeg" alt="Logo" />
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <Link to="/mission">Mission</Link>
          </li>
          <li>
            <Link to="/vision">Vision</Link>
          </li>
          <li>
            <Link to="/impact">Impact</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/partners">Partners</Link>
          </li>
        </ul>
      </div>
      <div className="social-media">
        <a href="https://facebook.com">
          <img src="../images/facebook.png" alt="Facebook" className="social-icon"  />
        </a>
        <a href="https://twitter.com">
          <img src="../images/twitter.png" alt="Twitter" className="social-icon"/>
        </a>
        <a href="https://instagram.com">
          <img src="../images/instagram.png" alt="Instagram" className="social-icon"/>
        </a>
        <a href="https://linkedin.com">
          <img src="../images/linkedin.png" alt="Linkedin" className="social-icon"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
