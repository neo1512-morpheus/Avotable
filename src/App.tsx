import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ReviewsSection from './components/ReviewsSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import DifferenceSection from './components/DifferenceSection';
import HealthBenefitsSection from './components/HealthBenefitsSection';
import InstagramSection from './components/InstagramSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import { useImagePreloader } from './hooks/useImagePreloader';
import { useImagePreloader } from './hooks/useImagePreloader';

function App() {
  // Preload all critical images
  const criticalImages = [
    // Hero background
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEpYzbDMSmV2SIraKe0WUujA76wYsQtqB31Dkx',
    // Menu images
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEOn8pNcbshTW8QfYrSPweVc9NIBoGiDsJ7ECn',
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEKLLr3LCxLMDIAT2lF91Zb3n4vp6BJteiEVSX',
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpENaLsecI1bClnv9iLZD0xEHa5uwm327JpcVdk',
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEpYzbDMSmV2SIraKe0WUujA76wYsQtqB31Dkx',
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEG3FmdqypFArUYvkTyIa8314ueMEzB9KNQtco',
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEzcGcMqt9fOESayYXKqrsZjCxLMPGJUe3N7F5',
    // Logo
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEKLyHPPTxLMDIAT2lF91Zb3n4vp6BJteiEVSX'
  ];
  
  const { loaded: imagesPreloaded, progress } = useImagePreloader(criticalImages);

  // Preload all critical images
  const criticalImages = [
    // Hero background
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEpYzbDMSmV2SIraKe0WUujA76wYsQtqB31Dkx',
    // Menu images
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEOn8pNcbshTW8QfYrSPweVc9NIBoGiDsJ7ECn',
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEKLLr3LCxLMDIAT2lF91Zb3n4vp6BJteiEVSX',
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpENaLsecI1bClnv9iLZD0xEHa5uwm327JpcVdk',
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEpYzbDMSmV2SIraKe0WUujA76wYsQtqB31Dkx',
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEG3FmdqypFArUYvkTyIa8314ueMEzB9KNQtco',
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEzcGcMqt9fOESayYXKqrsZjCxLMPGJUe3N7F5',
    // Logo
    'https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEKLyHPPTxLMDIAT2lF91Zb3n4vp6BJteiEVSX'
  ];
  
  const { loaded: imagesPreloaded, progress } = useImagePreloader(criticalImages);

  return (
    <div className="font-poppins min-h-screen relative main-background-container">
      {/* Loading Progress Indicator */}
      {!imagesPreloaded && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm">
          <div className="h-1 bg-forest-400 transition-all duration-300" style={{ width: `${progress}%` }} />
          <div className="text-center py-4 text-white">
            <div className="text-forest-400 text-2xl mb-2 animate-bounce">🥑</div>
            <div className="text-sm">Loading fresh content... {Math.round(progress)}%</div>
          </div>
        </div>
      )}
      
      {/* Loading Progress Indicator */}
      {!imagesPreloaded && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm">
          <div className="h-1 bg-forest-400 transition-all duration-300" style={{ width: `${progress}%` }} />
          <div className="text-center py-4 text-white">
            <div className="text-forest-400 text-2xl mb-2 animate-bounce">🥑</div>
            <div className="text-sm">Loading fresh content... {Math.round(progress)}%</div>
          </div>
        </div>
      )}
      
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <div id="hero-section">
        <HeroSection />
      </div>

      {/* Reviews Section */}
      <div id="reviews-section" className="content-section">
        <ReviewsSection />
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
        <HealthBenefitsSection />
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