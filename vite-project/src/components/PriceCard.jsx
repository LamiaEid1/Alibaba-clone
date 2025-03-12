import React from "react";
import "./PriceCard.css";

const PriceCard = () => {
  return (
    <div className="price-card">
      {/* Lowest Price Tag */}
      <div className="lowest-price-tag">180-day lowest price</div>

      {/* Pricing Section */}
      <div className="price-section">
        <div className="price-row">
          <span>1 - 499 pieces</span> <strong>$3.68</strong>
        </div>
        <div className="price-row">
          <span>500 - 1999 pieces</span> <strong>$3.28</strong>
        </div>
        <div className="price-row">
          <span>2000 - 4999 pieces</span> <strong>$2.98</strong>
        </div>
        <div className="price-row">
          <span>&gt;= 5000 pieces</span> <strong>$2.48</strong>
        </div>
      </div>

      {/* Sample Price */}
      <div className="sample-section">
        <span>Sample price: <strong>$6.00</strong></span>
        <button className="sample-btn">Get sample</button>
      </div>

      {/* Variations */}
      <div className="variations">
        <h4>Variations</h4>
        <p>Total options: <strong>2 colors ; 1 Voltage (V)</strong></p>
        <a href="#" className="select-now">Select now</a>

        {/* Color Options */}
        <div className="variation-group">
          <p>color(2): <strong>Gold</strong></p>
          <div className="color-options">
            <div className="color-option gold"></div>
            <div className="color-option white"></div>
          </div>
        </div>

        {/* Voltage Option */}
        <div className="variation-group">
          <p>Voltage (V)(1): <strong>110V-220V</strong></p>
          <button className="voltage-btn">110V-220V</button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
