import React, { useState } from 'react';
import './Landing.css';

import pic1 from '../images/pic1[1].png';
import pic2 from '../images/pic2[1].png';
import pic3 from '../images/pic3[1].png';
import pic5 from '../images/pic5[1].png';
import pic6 from '../images/plain-removebg-preview.png';

const Landing = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const panelsData = [
    { image: pic1 },
    { image: pic2 },
    { image: pic3 },
    { image: pic5 },
    { image: pic6, text: "Add your Koottukkar" },
  ];

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % panelsData.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + panelsData.length) % panelsData.length);
  };

  return (
    <div className="landing-container">
      <div 
        className="landing-panel" 
        style={{ backgroundImage: `url(${panelsData[activeIndex].image})` }}
      >
        {panelsData[activeIndex].text && (
          <div className="overlay-text">
            {panelsData[activeIndex].text}
          </div>
        )}
      </div>

      <button className="arrow left" onClick={goToPrevSlide}>
        &#10094; {/* Left Arrow */}
      </button>
      <button className="arrow right" onClick={goToNextSlide}>
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Landing;