import React, { useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';

const InstagramSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Curated gallery images from the restaurant's best dishes
  const instagramPosts = [
    {
      src: "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEKLLr3LCxLMDIAT2lF91Zb3n4vp6BJteiEVSX",
      alt: "Artisanal Avocado Toast"
    },
    {
      src: "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEOn8pNcbshTW8QfYrSPweVc9NIBoGiDsJ7ECn",
      alt: "Ultimate Avocado Sandwich"
    },
    {
      src: "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpENaLsecI1bClnv9iLZD0xEHa5uwm327JpcVdk",
      alt: "Fresh Guacamole & Nachos"
    },
    {
      src: "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEpYzbDMSmV2SIraKe0WUujA76wYsQtqB31Dkx",
      alt: "Nourish Bowl Salad"
    },
    {
      src: "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEG3FmdqypFArUYvkTyIa8314ueMEzB9KNQtco",
      alt: "Chilled Avocado Pesto Pasta"
    },
    {
      src: "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEzcGcMqt9fOESayYXKqrsZjCxLMPGJUe3N7F5",
      alt: "Energizer Avocado Smoothie"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 w-full opacity-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            Follow the Freshness: <span className="text-forest-400">#TheAvocadoTable</span>
          </h2>
          
          <a 
            href="https://www.instagram.com/_the_avocado_table/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg text-forest-400 hover:text-forest-300 font-medium transition-colors duration-300"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            <Instagram className="w-6 h-6 mr-2" />
            @_the_avocado_table
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://www.instagram.com/_the_avocado_table/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-gallery-image aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 block"
            >
              <img 
                src={post.src} 
                alt={post.alt}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/_the_avocado_table/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;