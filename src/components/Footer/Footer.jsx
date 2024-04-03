import React from 'react';
import './footer.css'; // Assuming you might want some CSS for styling

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} My Programming Language. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
