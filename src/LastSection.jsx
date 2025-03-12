import React, { useState } from "react";
import img1 from "./assets/image1.jpg";
import img2 from "./assets/image2.webp";
import img3 from "./assets/image3.jpg";
import img4 from "./assets/image4.webp";
import img5 from "./assets/image5.webp";
import img6 from "./assets/image6.jpg";
import img7 from "./assets/image7.jpg";
import img8 from "./assets/image8.jpg";
import img9 from "./assets/image9.webp";
import img10 from "./assets/image10.webp";
import "./LastSection.css";
import PriceCard from "../src/components/PriceCard";

const LastSection = () => {
  const [verticalIndex, setVerticalIndex] = useState(0);  
  const [horizontalIndex, setHorizontalIndex] = useState(0); 
  const [selectedImage, setSelectedImage] = useState(null);  

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

 
  const nextVerticalImages = () => {
    setVerticalIndex((prevIndex) => (prevIndex + 1) % (images.length - 5));
  };

  const prevVerticalImages = () => {
    setVerticalIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 6 : prevIndex - 1
    );
  };

 
  const nextHorizontalImage = () => {
    setHorizontalIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevHorizontalImage = () => {
    setHorizontalIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = (image) => {
    setSelectedImage(image); 
  };

  const closeModal = () => {
    setSelectedImage(null); 
  };

  return (
    <>
    <div className="MainContainer">
    <div className="sliders-container">
      <div className="vertical-slider">
        <button className="arrow-button top-arrow" onClick={prevVerticalImages}>
          &#9650; 
        </button>
        <div className="vertical-image-container">
          {images.slice(verticalIndex, verticalIndex + 4).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${verticalIndex + index + 1}`}
              className="small-image"
              onClick={() => handleImageClick(image)} 
            />
          ))}
        </div>
        <button className="arrow-button bottom-arrow" onClick={nextVerticalImages}>
          &#9660; 
        </button>
      </div>

      <div className="horizontal-slider-container bigger-slider">
  <div className="horizontal-slider">
    <button className="arrow-button left-arrow" onClick={prevHorizontalImage}>
      &#9664; 
    </button>
    <div className="horizontal-image-container">
      <img
        src={images[horizontalIndex]}
        alt={`Slide ${horizontalIndex + 1}`}
        className="horizontal-image"
        onClick={() => handleImageClick(images[horizontalIndex])}
      />
    </div>
    <button className="arrow-button right-arrow" onClick={nextHorizontalImage}>
      &#9654;
    </button>
  </div>
</div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" className="large-image" />
          </div>
        </div>
      )}
    </div>
    <PriceCard />
    </div>
    </>
  );
};

export default LastSection;
