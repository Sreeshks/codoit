import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="features" id="features">
      <h2 className="section-title">Why Choose Us</h2>
      <p className="section-subtitle">
        Experience excellence in every aspect of our service
      </p>
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
              <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3>Transparency</h3>
          <p>
            Clear communication and complete visibility into every step of your project. 
            We believe in building trust through openness and honesty.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3>Timely Delivery</h3>
          <p>
            We value your time and deliver projects on schedule. 
            Our efficient workflow ensures you get results when you need them.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3>Quality Assurance</h3>
          <p>
            Rigorous testing and quality control processes ensure that every deliverable 
            meets the highest standards of excellence.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3>Expert Team</h3>
          <p>
            Our team consists of skilled professionals with years of experience 
            in delivering successful projects across various industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features; 