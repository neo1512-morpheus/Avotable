import React, { useState } from 'react';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  fallback?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const ImageSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`animate-pulse bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center ${className}`}>
    <div className="text-forest-400 text-4xl animate-bounce">🥑</div>
  </div>
);

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  priority = false,
  fallback,
  onLoad,
  onError
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
    onError?.();
  };

  return (
    <div className="relative overflow-hidden">
      {!loaded && !error && <ImageSkeleton className={className} />}
      
      <img 
        src={error && fallback ? fallback : src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 absolute inset-0`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : loading}
        fetchPriority={priority ? 'high' : 'auto'}
      />
      
      {error && !fallback && (
        <div className={`${className} bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-forest-400`}>
          <div className="text-center">
            <div className="text-2xl mb-2">🥑</div>
            <div className="text-sm">Image loading...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressiveImage;