import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import DifferenceSection from './components/DifferenceSection';
import InstagramSection from './components/InstagramSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';

function App() {
  return (
    <div className="font-poppins min-h-screen relative main-background-container">
      {/* Hero Section */}
      <div id="hero-section">
        <HeroSection />
      </div>

      {/* All other sections */}
      <div id="about-section" className="content-section">
        <AboutSection />
      </div>
      <div id="menu-section" className="content-section">
        <MenuSection />
      </div>
      <div className="content-section">
        <DifferenceSection />
      </div>
      <div className="content-section">
        <InstagramSection />
      </div>
      <div id="contact-section" className="content-section">
        <ContactSection />
      </div>
      <div className="content-section">
        <Footer />
      </div>
      
      <OrderModal />
    </div>
  );
}

export default App;