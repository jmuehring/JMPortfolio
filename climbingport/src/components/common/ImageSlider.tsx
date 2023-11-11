import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[]; 
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
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
      <img src={images[currentImageIndex]} alt="Slideshow" />
    </div>
  );
};

export default ImageSlider;