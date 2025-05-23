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

      <footer className="bg-dark text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary shine"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-fade-in">
            <div>
              <span className="gold-accent text-3xl font-bold mb-4 inline-block shine">Co Do It</span>
              <p className="text-gray-300 mt-4">
                Empowering businesses to achieve their digital transformation goals with premium solutions.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="bg-gray-dark p-2 rounded-full text-primary hover:bg-primary hover:text-dark transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-dark p-2 rounded-full text-primary hover:bg-primary hover:text-dark transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-dark p-2 rounded-full text-primary hover:bg-primary hover:text-dark transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-primary transition-all duration-300">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-all duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-all duration-300">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-all duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-primary transition-all duration-300">Web Development</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-all duration-300">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-all duration-300">UI/UX Design</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-all duration-300">Digital Marketing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-gray-300">123 Innovation Street, Tech City</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-gray-300">info@codoit.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-6">
            <p className="text-gray-300 text-center">
              © {new Date().getFullYear()} <span className="gold-accent">Co Do It</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
