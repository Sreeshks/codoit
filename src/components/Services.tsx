import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="services" id="services">
      <h2 className="section-title">Our Premium Services</h2>
      <p className="section-subtitle">
        Cutting-edge solutions tailored to elevate your business to new heights
      </p>
      
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3>Web Development</h3>
          <p>
            Custom websites and web applications built with cutting-edge technologies. 
            From responsive design to complex functionality, we create digital experiences that captivate and convert.
          </p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
            </svg>
          </div>
          <h3>Mobile Apps</h3>
          <p>
            Native and cross-platform mobile applications that deliver exceptional user experiences. 
            From iOS to Android, we build apps that users love and businesses rely on.
          </p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
          </div>
          <h3>Analytics & Data</h3>
          <p>
            Transform raw data into actionable insights with our advanced analytics solutions. 
            Make informed decisions with real-time dashboards and comprehensive reporting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services; 