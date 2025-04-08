import React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Pranav Mahale</h3>
            <p className="footer-about">
              Digital artist & video editor creating compelling visual experiences.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://instagram.com/artnav360" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="social-icon" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#art">Art Gallery</a></li>
              <li><a href="#editing">Editing</a></li>
              <li><a href="#certificates">Certificates</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-contact">
              <li>
                <FaEnvelope className="contact-icon" />
                <span>pranavmahale04@gmail.com</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>pranavmahale04@outlook.com</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>+91 8767557467</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Pranav Mahale. All rights reserved.
          </div>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <FiArrowUp className="arrow-icon" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;