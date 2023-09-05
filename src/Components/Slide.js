import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importe os ícones desejados

const slidesData = [
  {
    text: 'Slide 1 Text',
    imageUrl: 'logo512.png',
  },
  {
    text: 'Slide 2 Text',
    imageUrl: 'logo512.png',
  },
  {
    text: 'Slide 3 Text',
    imageUrl: 'logo512.png',
  },
];

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Avança para o próximo slide
      setCurrentSlide((prevSlide) =>
        prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="slide-container">
      <div className="slide-nav" onClick={goToPreviousSlide}>
        <FaArrowLeft />
      </div>
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active-slide' : ''}`}
        >
          <img className='img-slide' src={slide.imageUrl} alt={`Slide ${index + 1}`} />
          <p className='slide-text'>{slide.text}</p>
          <button className='btn-slide'>Botão</button>
        </div>
      ))}
      <div className="slide-nav" onClick={goToNextSlide}>
        <FaArrowRight />
      </div>
    </div>
  )
}

export default Slide;