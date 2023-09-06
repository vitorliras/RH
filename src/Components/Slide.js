import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const slidesData = [
  {
    text: 'Slide test 1',
    bgColor: '#FF5733',
  },
  {
    text: 'Slide test 2',
    bgColor: '#33FF57',
  },
  {
    text: 'Slide test 3',
    bgColor: '#5733FF',
  },
];

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1));
  };

  // Adicione o temporizador para avançar automaticamente a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(goToNextSlide, 5000);

    return () => {
      clearInterval(timer); // Limpe o temporizador ao desmontar o componente
    };
  }, []);

  return (
    <div className="slide-container">
      <div className="slide" style={{ backgroundColor: slidesData[currentSlide].bgColor }}>
        <h2 className="slide-text">{slidesData[currentSlide].text}</h2>
      </div>
      <div className="navigation">
        <button className="nav-button prev" onClick={goToPreviousSlide}>
          <FaArrowLeft />
        </button>
        <button className="nav-button next" onClick={goToNextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slide;


