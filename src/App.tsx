import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <header className="bg-dark shadow-lg border-b border-primary/30">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="gold-accent font-bold text-3xl shine">Co Do It</span>
            </div>
            <nav className="hidden md:flex space-x-8 stagger-fade-in">
              <a href="#" className="font-medium text-white hover:text-primary transition-all duration-300">Home</a>
              <a href="#" className="font-medium text-white hover:text-primary transition-all duration-300">About</a>
              <a href="#" className="font-medium text-white hover:text-primary transition-all duration-300">Services</a>
              <a href="#" className="font-medium text-white hover:text-primary transition-all duration-300">Contact</a>
            </nav>
            <div className="hidden md:block">
              <a href="#" className="btn bg-primary text-dark hover:bg-primary/80 transition-all duration-300 pulse">Get Started</a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary mb-4 shine">
                  <span className="gold-accent">Premium Digital Solutions</span>
                </span>
                <h1 className="text-4xl font-bold mb-6 text-white">
                  Transform Your Ideas Into <span className="gold-accent">Reality</span>
                </h1>
                <p className="text-lg mb-8 text-white">
                  Co Do It helps businesses and startups build innovative digital solutions. 
                  We turn your vision into impactful products that drive growth and success.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="btn bg-primary text-dark hover:bg-primary/90 transition-all duration-300 shine">Get Started</a>
                  <a href="#" className="btn border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300">Our Services</a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-gray-dark w-full h-80 rounded-lg flex items-center justify-center text-white shadow-lg overflow-hidden border border-primary/30 float">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 pulse"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/20 rounded-full translate-x-1/4 translate-y-1/4 pulse" style={{animationDelay: '1s'}}></div>
                    <div className="relative z-10 text-center">
                      <span className="gold-accent text-4xl font-bold block mb-2 shine">Co Do It</span>
                      <span className="text-primary block">Premium Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-dark">
          <div className="container-custom">
            <div className="text-center mb-16 fade-in">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary mb-4 mx-auto shine">
                <span className="gold-accent">Premium Quality</span>
              </span>
              <h2 className="text-3xl font-bold mb-4 text-white">Why Choose <span className="gold-accent">Co Do It</span>?</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-light">
                We combine technical expertise with creative thinking to deliver solutions that exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-fade-in">
              <div className="bg-dark p-8 rounded-lg shadow-lg border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white text-center">Innovative <span className="gold-accent">Solutions</span></h3>
                <p className="text-gray-light text-center">
                  We stay ahead of the curve with cutting-edge technologies and creative approaches.
                </p>
              </div>
              <div className="bg-dark p-8 rounded-lg shadow-lg border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white text-center">Fast <span className="gold-accent">Delivery</span></h3>
                <p className="text-gray-light text-center">
                  Our agile development process ensures quick turnaround times without compromising quality.
                </p>
              </div>
              <div className="bg-dark p-8 rounded-lg shadow-lg border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white text-center">Expert <span className="gold-accent">Team</span></h3>
                <p className="text-gray-light text-center">
                  Our team brings years of experience to every project we undertake.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-full pulse"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary/10 rounded-full pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary/10 rounded-full pulse" style={{animationDelay: '0.7s'}}></div>
          </div>
          <div className="container-custom text-center relative z-10 fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary mb-4 mx-auto shine">
              <span className="gold-accent">Premium Experience</span>
            </span>
            <h2 className="text-4xl font-bold mb-6">Ready to <span className="gold-accent">Elevate</span> Your Business?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-white">
              Let's discuss how Co Do It can help you achieve your business goals with our innovative digital solutions.
            </p>
            <a href="#" className="btn bg-primary text-dark hover:bg-primary/90 transition-all duration-300 shine pulse">
              Contact Us Today
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold text-white mb-4 inline-block">Co Do It</span>
              <p className="text-gray-300 mt-4">
                Empowering businesses to achieve their digital transformation goals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Web Development</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">UI/UX Design</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Digital Marketing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-300">123 Innovation Street, Tech City</p>
              <p className="text-gray-300">info@codoit.com</p>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-6">
            <p className="text-gray-300 text-center">
              © {new Date().getFullYear()} Co Do It. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
