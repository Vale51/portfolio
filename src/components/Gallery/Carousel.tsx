import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      // Inicializa Flickity en el montaje del componente
      const flickityInstance = new Flickity(carouselRef.current, {
        // Configuración opcional de Flickity
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false

      });

      // Limpia Flickity en el desmontaje del componente
      return () => {
        flickityInstance.destroy();
      };
    }
  }, []);

  return <div ref={carouselRef} className='w-full h-50vh md:pt-12 md:pb-12 md:px-4 bg-gradient-radial from-amber-900 backdrop-blur-3xl'>{children}</div>;
};

export default Carousel;
