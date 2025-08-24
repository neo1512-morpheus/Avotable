import React, { useEffect, useRef, useState } from 'react';
import { Instagram } from 'lucide-react';

const InstagramSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set([...prev, index]));
  };

  // Curated gallery images from the restaurant's best dishes
  const instagramPosts = [
    {
      src: "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEKLLr3LCxLMDIAT2lF91Zb3n4vp6BJteiEVSX",
      alt: "Artisanal Avocado Toast",
      fallback: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=400&fit=crop"
    },
    {
      src: "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEOn8pNcbshTW8QfYrSPweVc9NIBoGiDsJ7ECn",
      alt: "Ultimate Avocado Sandwich",
      fallback: "https://images.unsplash.com/photo-1623428454614-abaf00244e52?w=400&h=400&fit=crop"
    },
    {
      src: "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpENaLsecI1bClnv9iLZD0xEHa5uwm327JpcVdk",
      alt: "Fresh Guacamole & Nachos",
      fallback: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop"
    },
    {
      src: "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEpYzbDMSmV2SIraKe0WUujA76wYsQtqB31Dkx",
      alt: "Nourish Bowl Salad",
      fallback: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop"
    },
    {
      src: "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEG3FmdqypFArUYvkTyIa8314ueMEzB9KNQtco",
      alt: "Chilled Avocado Pesto Pasta",
      fallback: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=400&fit=crop"
    },
    {
      src: "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEzcGcMqt9fOESayYXKqrsZjCxLMPGJUe3N7F5",
      alt: "Energizer Avocado Smoothie",
      fallback: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`py-16 md:py-24 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
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
                src={imageErrors.has(index) ? post.fallback : post.src}
                alt={post.alt}
                className="w-full h-full object-cover"
                onError={() => handleImageError(index)}
                loading="lazy"
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