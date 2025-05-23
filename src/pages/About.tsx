import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-accent/90 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Co Do It</h1>
            <p className="text-lg">
              We're a passionate team of tech enthusiasts dedicated to transforming ideas into impactful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2023, Co Do It began with a simple mission: to make cutting-edge technology accessible to businesses of all sizes. 
                Our founders recognized that many companies struggled to navigate the rapidly evolving digital landscape.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of dedicated developers has grown into a full-service digital agency, 
                helping clients across various industries achieve their goals through innovative technology solutions.
              </p>
              <p className="text-gray-600">
                Today, we continue to push boundaries and explore new technologies, always with our clients' success as our primary focus.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/src/assets/about-image.svg" 
                alt="Our Story" 
                className="max-w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Our+Story';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Co Do It.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We believe in transparency and honesty in all our interactions. We do what we say and stand behind our work.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and approaches to deliver the most effective solutions for our clients.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our clients, treating their challenges as our own and celebrating their successes together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind Co Do It's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                <img 
                  src="https://via.placeholder.com/300x300?text=CEO" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-primary">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                <img 
                  src="https://via.placeholder.com/300x300?text=CTO" 
                  alt="CTO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-primary">CTO</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                <img 
                  src="https://via.placeholder.com/300x300?text=Designer" 
                  alt="Lead Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Emily Rodriguez</h3>
              <p className="text-primary">Lead Designer</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                <img 
                  src="https://via.placeholder.com/300x300?text=Developer" 
                  alt="Lead Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">David Kim</h3>
              <p className="text-primary">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Check out our current openings or drop us a line.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
