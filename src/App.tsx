import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './App.css';

// Add type declarations for particles
interface Particle extends THREE.Mesh {
  velocity: {
    x: number;
    y: number;
    z: number;
  };
}

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let particles: Particle[] = [];

  const animateLogo = () => {
    if (!logoRef.current || isAnimating) return;
    
    setIsAnimating(true);
    const logo = logoRef.current;
    const navLinks = document.querySelectorAll('.nav-links a');
    const ctaBtn = document.querySelector('.cta-btn');
    
    // Store original position
    const originalPosition = logo.getBoundingClientRect();
    
    // Animation sequence
    const sequence = async () => {
      // Move to each nav link
      for (const link of navLinks) {
        const rect = link.getBoundingClientRect();
        logo.style.transform = `translate(${rect.left - originalPosition.left}px, ${rect.top - originalPosition.top}px) rotate(360deg)`;
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      // Move to CTA button
      if (ctaBtn) {
        const rect = ctaBtn.getBoundingClientRect();
        logo.style.transform = `translate(${rect.left - originalPosition.left}px, ${rect.top - originalPosition.top}px) rotate(720deg)`;
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      // Return to original position
      logo.style.transform = 'translate(0, 0) rotate(0deg)';
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setIsAnimating(false);
    };
    
    sequence();
  };

  useEffect(() => {
    // Add click event to logo
    const logo = logoRef.current;
    if (logo) {
      logo.addEventListener('click', animateLogo);
    }

    return () => {
      if (logo) {
        logo.removeEventListener('click', animateLogo);
      }
    };
  }, []);

  useEffect(() => {
    init3DBackground();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 1s ease';
      document.body.style.opacity = '1';
    }, 100);

    // Navigation scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const scrollIndicator = document.getElementById('scrollIndicator');
      
      if (navbar && scrollIndicator) {
        if (window.scrollY > 100) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        
        // Update scroll indicator
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.width = scrollPercent + '%';
      }
    };

    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute('href') || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Particle system for interactive effects
    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.width = Math.random() * 5 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.opacity = (Math.random() * 0.5 + 0.3).toString();
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 8000);
    };

    // Add particle effects on mouse move
    let particleTimer: ReturnType<typeof setTimeout>;
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(particleTimer);
      particleTimer = setTimeout(() => {
        if (Math.random() > 0.95) {
          createParticle(e.clientX, e.clientY);
        }
      }, 50);
    };

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.service-card, .feature-item').forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(50px)';
      element.style.transition = 'all 0.6s ease';
      observer.observe(element);
    });

    // CTA button interactions
    document.querySelectorAll('.cta-btn, .btn-primary, .btn-secondary').forEach(btn => {
      const button = btn as HTMLElement;
      button.addEventListener('mouseenter', () => {
        button.style.animation = 'glow 1s ease-in-out';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.animation = '';
      });
    });

    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
      mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
      });
    }

    // Window resize handler
    const handleResize = () => {
      if (renderer && camera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (particleTimer) clearTimeout(particleTimer);
    };
  }, []);

  const init3DBackground = () => {
    if (!canvasRef.current) return;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Create particles
    const geometry = new THREE.SphereGeometry(0.1, 8, 8);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xFFD700,
      transparent: true,
      opacity: 0.6
    });
    
    for (let i = 0; i < 100; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      const particle = mesh as unknown as Particle;
      particle.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      particle.velocity = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      };
      particles.push(particle);
      scene.add(particle);
    }
    
    camera.position.z = 50;
    animate3D();
  };

  const animate3D = () => {
    requestAnimationFrame(animate3D);
    
    particles.forEach(particle => {
      particle.position.x += particle.velocity.x;
      particle.position.y += particle.velocity.y;
      particle.position.z += particle.velocity.z;
      
      if (particle.position.x > 50) particle.position.x = -50;
      if (particle.position.x < -50) particle.position.x = 50;
      if (particle.position.y > 50) particle.position.y = -50;
      if (particle.position.y < -50) particle.position.y = 50;
      if (particle.position.z > 50) particle.position.z = -50;
      if (particle.position.z < -50) particle.position.z = 50;
      
      particle.rotation.x += 0.01;
      particle.rotation.y += 0.01;
    });
    
    renderer.render(scene, camera);
  };

  return (
    <>
      <div className="scroll-indicator" id="scrollIndicator"></div>
      <canvas ref={canvasRef} id="bg-canvas"></canvas>
      
    <nav id="navbar">
        <div className="nav-container">
          <div className="logo">
            <img 
              ref={logoRef}
              src="/Codoit Logo.jpeg" 
              alt="CO DO IT Logo" 
              className="logo-image nav-logo-image" 
            />
          </div>
          <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
          <button className="cta-btn">Get Started</button>
          <div className="mobile-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
    
      <section className="hero" id="home">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
        
        <div className="hero-container">
          <div className="hero-logo">
            <img src="/Codoit Logo.jpeg" alt="CO DO IT Logo" className="hero-logo-image" />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Transform Your Digital Vision</h1>
            <p className="hero-subtitle">We turn innovative ideas into powerful digital solutions that drive growth and success for forward-thinking businesses.</p>
            <div className="hero-buttons">
              <a href="#services" className="btn-primary">Explore Services</a>
              <a href="#contact" className="btn-secondary">Start Project</a>
            </div>
            </div>
        </div>
    </section>
    
      <section className="services" id="services">
        <h2 className="section-title">Our Premium Services</h2>
        <p className="section-subtitle">Cutting-edge solutions tailored to elevate your business to new heights</p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
                    <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                </div>
                <h3>Web Development</h3>
                <p>Custom websites and web applications built with cutting-edge technologies. From responsive design to complex functionality, we create digital experiences that captivate and convert.</p>
            </div>
            
          <div className="service-card">
            <div className="service-icon">
                    <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                </div>
                <h3>Mobile Apps</h3>
                <p>Native and cross-platform mobile applications that deliver exceptional user experiences. From iOS to Android, we build apps that users love and businesses rely on.</p>
            </div>
            
          <div className="service-card">
            <div className="service-icon">
                    <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                </div>
                <h3>Analytics & Data</h3>
                <p>Transform raw data into actionable insights with our advanced analytics solutions. Make informed decisions with real-time dashboards and comprehensive reporting.</p>
            </div>
            
          <div className="service-card">
            <div className="service-icon">
                    <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                </div>
                <h3>UI/UX Design</h3>
                <p>Beautiful, intuitive designs that create meaningful connections between your brand and users. We craft experiences that are both visually stunning and functionally superior.</p>
            </div>
            
          <div className="service-card">
            <div className="service-icon">
                    <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                </div>
                <h3>Cloud Solutions</h3>
                <p>Scalable cloud infrastructure and deployment solutions that grow with your business. Secure, reliable, and optimized for peak performance across all platforms.</p>
            </div>
            
          <div className="service-card">
            <div className="service-icon">
                    <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                </div>
                <h3>Digital Strategy</h3>
                <p>Comprehensive digital transformation strategies that align technology with your business goals. From planning to execution, we guide your digital journey.</p>
            </div>
        </div>
    </section>
    
      <section className="features" id="features">
        <h2 className="section-title">Why Choose CO DO IT?</h2>
        <p className="section-subtitle">We combine innovation, expertise, and passion to deliver exceptional results</p>
        
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-number">01</div>
                <h4>Premium Quality</h4>
                <p>Every project is crafted with attention to detail and built to exceed industry standards.</p>
            </div>
            
          <div className="feature-item">
            <div className="feature-number">02</div>
                <h4>Lightning Fast</h4>
                <p>Rapid development cycles without compromising on quality or functionality.</p>
            </div>
            
          <div className="feature-item">
            <div className="feature-number">03</div>
                <h4>24/7 Support</h4>
                <p>Round-the-clock support to ensure your digital solutions run smoothly.</p>
            </div>
            
          <div className="feature-item">
            <div className="feature-number">04</div>
                <h4>Scalable Solutions</h4>
                <p>Future-proof technologies that grow and adapt with your business needs.</p>
            </div>
        </div>
    </section>
    
      <section className="cta-section" id="contact">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Business?</h2>
          <p className="section-subtitle">Let's discuss how CO DO IT can bring your vision to life with cutting-edge digital solutions.</p>
          <div className="hero-buttons">
            <a href="#" className="btn-primary">Start Your Project</a>
            <a href="#" className="btn-secondary">Schedule Consultation</a>
            </div>
        </div>
    </section>
    
    <footer>
        <div className="footer-content">
          <div className="footer-section">
                <h4>CO DO IT</h4>
                <p>Transforming digital visions into reality through innovative solutions and exceptional craftsmanship.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                    </a>
              <a href="#" className="social-link">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.16c-.37.63-.58 1.37-.58 2.15 0 .88.35 1.68.92 2.27C3.74 10.13 2.79 9.84 2 9.33v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                        </svg>
                    </a>
              <a href="#" className="social-link">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
              <a href="#" className="social-link">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 2.567-1.645 0-3.768-2.245-3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.747.099.118.112.223.085.345-.09.381-.294 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.739-1.378l-.742 2.811c-.269 1.045-1.004 2.352-1.495 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                        </svg>
                    </a>
                </div>
            </div>
            
          <div className="footer-section">
                <h4>Services</h4>
                <p><a href="#services">Web Development</a></p>
                <p><a href="#services">Mobile Apps</a></p>
                <p><a href="#services">UI/UX Design</a></p>
                <p><a href="#services">Cloud Solutions</a></p>
            </div>
            
          <div className="footer-section">
                <h4>Company</h4>
                <p><a href="#features">About Us</a></p>
                <p><a href="#contact">Contact</a></p>
                <p><a href="#">Careers</a></p>
                <p><a href="#">Blog</a></p>
            </div>
            
          <div className="footer-section">
                <h4>Contact Info</h4>
                <p>📧 hello@codoit.com</p>
                <p>📱 +1 (555) 123-4567</p>
                <p>📍 San Francisco, CA</p>
            </div>
        </div>
        
        <div className="copyright">
            <p>&copy; 2025 CO DO IT. All rights reserved. | Crafted with ❤️ for digital excellence</p>
        </div>
    </footer>
    </>
  );
};

export default App;