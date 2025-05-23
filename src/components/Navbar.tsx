import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-primary font-bold text-2xl">Co Do It</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-dark hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-medium text-dark hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/services" className="font-medium text-dark hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/contact" className="font-medium text-dark hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-dark"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-dark hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-dark hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="font-medium text-dark hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-dark hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-primary inline-block text-center"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
