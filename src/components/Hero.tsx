import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Transform Your Ideas Into
          <span className="gradient-text"> Digital Reality</span>
        </h1>
        <p className="hero-subtitle">
          We create innovative digital solutions that help businesses grow and succeed
          in the modern world.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">
            Get Started
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="btn btn-secondary">
            Learn More
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="hero-image">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
    </section>
  );
};

export default Hero; 