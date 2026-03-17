import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function Slider({ slides }) {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  
  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length]);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        startAutoPlay();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        startAutoPlay();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);
  
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
      startAutoPlay();
    }
    
    if (touchStart - touchEnd < -50) {
      prevSlide();
      startAutoPlay();
    }
  };
  
  return (
    <div className="slider-container">
      <div 
        className="slider"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={t(slide.title)} />
            <div className="slide-caption">
              <h3>{t(slide.title)}</h3>
              <p>{t(slide.description)}</p>
            </div>
          </div>
        ))}
      </div>
      
      {}
      <button 
        className="slider-btn prev" 
        onClick={() => { 
          prevSlide(); 
          startAutoPlay(); 
        }}
        aria-label="Previous slide"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button 
        className="slider-btn next" 
        onClick={() => { 
          nextSlide(); 
          startAutoPlay(); 
        }}
        aria-label="Next slide"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      
      {}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => { 
              goToSlide(index); 
              startAutoPlay(); 
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;