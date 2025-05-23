import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-accent/90 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg">
              Comprehensive digital solutions tailored to help your business thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Service 1 */}
            <div className="flex flex-col">
              <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Web Development</h2>
              <p className="text-gray-600 mb-4">
                Our web development services deliver custom, responsive, and high-performing websites and web applications 
                that provide exceptional user experiences and drive business growth.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Custom Website Development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>E-commerce Solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Progressive Web Applications (PWAs)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Content Management Systems</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary mt-auto self-start">
                Get Started
              </Link>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col">
              <div className="bg-secondary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Mobile App Development</h2>
              <p className="text-gray-600 mb-4">
                We build intuitive, feature-rich mobile applications that engage users and help businesses 
                reach their target audience on any device.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>iOS App Development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Android App Development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Cross-platform App Development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>App Maintenance and Support</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-secondary mt-auto self-start">
                Get Started
              </Link>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col">
              <div className="bg-accent/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">UI/UX Design</h2>
              <p className="text-gray-600 mb-4">
                Our design team creates beautiful, intuitive interfaces that enhance user experience 
                and strengthen your brand identity.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>User Interface Design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>User Experience Design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Wireframing and Prototyping</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Brand Identity Design</span>
                </li>
              </ul>
              <Link to="/contact" className="btn bg-accent text-white hover:bg-accent/90 mt-auto self-start">
                Get Started
              </Link>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col">
              <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Digital Marketing</h2>
              <p className="text-gray-600 mb-4">
                Our digital marketing strategies help businesses increase their online visibility, 
                attract qualified leads, and convert them into loyal customers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Search Engine Optimization (SEO)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Social Media Marketing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Pay-Per-Click (PPC) Advertising</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Email Marketing Campaigns</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary mt-auto self-start">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure every project is delivered successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-lg p-8 shadow-sm h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Discovery</h3>
                <p className="text-gray-600">
                  We start by understanding your business goals, target audience, and project requirements.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-lg p-8 shadow-sm h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Planning</h3>
                <p className="text-gray-600">
                  We create a detailed project plan, including timelines, milestones, and deliverables.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-lg p-8 shadow-sm h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Execution</h3>
                <p className="text-gray-600">
                  Our team works diligently to develop and implement your solution with regular updates.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="bg-white rounded-lg p-8 shadow-sm h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Launch & Support</h3>
                <p className="text-gray-600">
                  We ensure a smooth launch and provide ongoing support to help your business succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark to-dark/90 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss how our services can help you achieve your business goals.
            </p>
            <Link to="/contact" className="btn bg-primary hover:bg-primary/90 text-white">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
