import React from 'react';
import img1 from '../assets/service1.png';
import './Cards.css';
import img2 from '../assets/secure.png';
import img3 from '../assets/box.png';
import img4 from '../assets/file.png';

const Cards = () => {
  return (
    <div className='cardMain'>
      <div className='card'>
        <img className='card-img' src={img1} alt="" />
        <h1 className='card-h1'>Millions of business offerings</h1>
        <p className='card-p'>Explore products and suppliers for your business from millions of offerings worldwide</p>
      </div>
      <div className='card'>
        <img className='card-img' src={img2} alt="" />
        <h1 className='card-h1'>Assured quality and transactions</h1>
        <p className='card-p'>Ensure production quality from verified suppliers, with your orders protected from payment to delivery.</p>
      </div>
      <div className='card'>
        <img className='card-img' src={img3} alt="" />
        <h1 className='card-h1'>One-Stop trading solution</h1>
        <p className='card-p'>Order seamlessly from product/supplier search to order management, payment and fulfillment.</p>
      </div>
      <div className='card'>
        <img className='card-img' src={img4} alt="" />
        <h1 className='card-h1'>Tailored trading experience</h1>
        <p className='card-p'>Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way.</p>
      </div>
    </div>
  );
};

export default Cards;