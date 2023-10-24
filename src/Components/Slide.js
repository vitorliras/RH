import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const slidesData = [
  {
    titulo: 'Bem-vindo!',
    subTitulo: 'Modernize, simplifique a comunicação interna e alinhe seus colaboradores com a ReasyH.',
    buttonLabel: 'Comprar',
    imageUrl: '../logoRh.png',
  },
  {
    titulo: 'Quem nós somos',
  },
  // {
  //   text: 'Explore nosso serviço',
  //   imageUrl: 'url_da_imagem3.jpg',
  // },
];

function Slide ({ userName }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  // if(userName){
  //     slidesData[0].titulo = "Bem-vindo! "+ userName;
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slide-container">
      <div className="slide">
        <div className="content">
          <div className="left-content">
            {slidesData[currentSlide].titulo && (
              <p className="slide-text">{slidesData[currentSlide].titulo}</p>
            )}
            {slidesData[currentSlide].subTitulo && (
              <p className="slide-text-subtitle">{slidesData[currentSlide].subTitulo}</p>
            )}
            {slidesData[currentSlide].buttonLabel && (
              <button className="btn-slide">{slidesData[currentSlide].buttonLabel}</button>
            )}
          </div>
          <div className="right-content">
            {slidesData[currentSlide].imageUrl && (
              <div className="logo-circle">
                <img src={slidesData[currentSlide].imageUrl} alt="Imagem do Slide" />
              </div>
            )}
          </div>
        </div>
        <div className="navigation">
          <button className="nav-button prev" onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          <button className="nav-button next" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;