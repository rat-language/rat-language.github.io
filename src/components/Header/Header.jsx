import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-content">
        <h1><Link to="/">MyLanguage</Link></h1>
        <nav className="header-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/docs">Documentation</Link></li>
            {/* More navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
