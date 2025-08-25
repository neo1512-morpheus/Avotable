import { useEffect, useState } from 'react';

interface PreloadResult {
  loaded: boolean;
  progress: number;
}

export const useImagePreloader = (imageUrls: string[]): PreloadResult => {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setLoaded(true);
      setProgress(100);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const preloadImage = (url: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        
        const handleLoad = () => {
          loadedCount++;
          const newProgress = (loadedCount / totalImages) * 100;
          setProgress(newProgress);
          
          if (loadedCount === totalImages) {
            setLoaded(true);
          }
          resolve();
        };

        const handleError = () => {
          loadedCount++;
          const newProgress = (loadedCount / totalImages) * 100;
          setProgress(newProgress);
          
          if (loadedCount === totalImages) {
            setLoaded(true);
          }
          resolve();
        };

        img.onload = handleLoad;
        img.onerror = handleError;
        img.src = url;
      });
    };

    // Preload all images
    Promise.all(imageUrls.map(preloadImage));
  }, [imageUrls]);

  return { loaded, progress };
};