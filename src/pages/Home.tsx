import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-accent/90 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your Ideas Into Reality
              </h1>
              <p className="text-lg mb-8">
                Co Do It helps businesses and startups build innovative digital solutions. 
                We turn your vision into impactful products that drive growth and success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
                  Get Started
                </Link>
                <Link to="/services" className="btn border-2 border-white text-white hover:bg-white/10">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/src/assets/hero-image.svg" 
                alt="Digital Transformation" 
                className="max-w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Co+Do+It';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Co Do It?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with creative thinking to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovative Solutions</h3>
              <p className="text-gray-600">
                We stay ahead of the curve with cutting-edge technologies and creative approaches to solve complex problems.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Our agile development process ensures quick turnaround times without compromising on quality.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team of seasoned developers, designers, and strategists brings years of experience to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-600 mb-3">
                  Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.
                </p>
                <Link to="/services" className="text-primary font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
                <p className="text-gray-600 mb-3">
                  Native and cross-platform mobile applications that provide seamless experiences across all devices.
                </p>
                <Link to="/services" className="text-secondary font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                <p className="text-gray-600 mb-3">
                  User-centered design that combines aesthetics with functionality to create intuitive and engaging interfaces.
                </p>
                <Link to="/services" className="text-accent font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
                <p className="text-gray-600 mb-3">
                  Strategic marketing solutions to boost your online presence and drive targeted traffic to your business.
                </p>
                <Link to="/services" className="text-primary font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark to-dark/90 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8">
              Let's discuss how Co Do It can help you achieve your business goals with our innovative digital solutions.
            </p>
            <Link to="/contact" className="btn bg-primary hover:bg-primary/90 text-white">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
