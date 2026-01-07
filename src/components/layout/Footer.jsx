import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Dheeraj Sai | &copy; {currentYear} | Data Scientist & MERN Developer | Built with &#10084;&#65039; using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
