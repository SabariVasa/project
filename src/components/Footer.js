import React from 'react';
import './Footer.css'; // Importing the CSS for styling
import { FaFacebook, FaTwitter, FaInstagram,FaAngleUp } from 'react-icons/fa'; // Import FaArrowUp

const Footer = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  return (
    <footer>
      {/* Left Side: Copyrights */}
      <div className="footer-left">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>

      {/* Right Side: Social Media Icons */}
      <div className="footer-right">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      {/* Scroll to Top Button with Arrow Icon */}
      <div className="scroll-to-top" onClick={scrollToTop}>
        <FaAngleUp /> {/* Up Arrow Icon */}
        <span></span>
      </div>
    </footer>
  );
};

export default Footer;
