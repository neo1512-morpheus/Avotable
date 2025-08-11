import React from 'react';

interface MenuCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ image, title, description, className = '' }) => {
  const openOrderModal = () => {
    const modal = document.getElementById('order-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col h-full ${className}`}>
      <div className="aspect-w-16 aspect-h-12 overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <button 
          onClick={openOrderModal}
          className="w-full bg-forest-500 hover:bg-forest-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 mt-auto"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default MenuCard;