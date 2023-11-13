import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[]; 
  width?: string; 
  height?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, width = '800px', height = '800px'  }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(intervalId); 
  }, [images.length]);

  return (
    <div>
      <img 
        src={images[currentImageIndex]} 
        alt="Slideshow" 
        style={{ width: width, height: height, objectFit: 'contain' }}
      />
    </div>
  );
};

export default ImageSlider;