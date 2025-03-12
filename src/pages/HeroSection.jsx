import React from 'react';
import './home-page.css';

function HeroSection() {
  return (
    <div className="hero">
      <div className="overlay">
        <div className='containerHome' style={{ marginLeft: '15px', marginTop: '60px' }}>
          <h3 className="h3Home">Learn about Alibaba.com</h3>
          <h2 className="heading heading-animation">
            The leading B2B ecommerce platform for <br /> global trade
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
