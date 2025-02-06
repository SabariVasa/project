import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/assets/image.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/films">Films</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/book-us">Book Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
