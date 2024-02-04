import React from 'react';
import { Link } from 'react-router-dom';
//Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
        <p>Contact us: PantryPal@business.com | Call +1(234) 567 8901</p>
      </div>
      <div className="socials">
        <Link to="/twitter" target="_blank" rel="noopener noreferrer">Twitter</Link>
        <Link to="/instagram" target="_blank" rel="noopener noreferrer">Instagram</Link>
      </div>
    </footer>
  );
};

export default Footer;