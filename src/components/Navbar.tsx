import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          CO DO IT
        </a>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="navbar-link">Home</a>
          <a href="#services" className="navbar-link">Services</a>
          <a href="#features" className="navbar-link">Features</a>
          <a href="#contact" className="navbar-link">Contact</a>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
