import React, { useState } from "react";
import "./ReviewSection.css"; // Import the CSS file

const ReviewSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      name: "Maria Smith",
      role: "Founder of Green Living",
      content:
        "“The support and services offered by Alibaba.com have been instrumental in helping us achieve our sustainability goals. We couldn't have done it without them.”",
      image: "https://marketplace.canva.com/EAFqNrAJpQs/2/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-nHZ1TkZ0aGk.jpg",
    },
    {
      name: "John Doe",
      role: "CEO of Tech Innovations",
      content:
        "“Alibaba.com has provided us with the tools and resources to scale our business globally. Their platform is unmatched in terms of reliability and efficiency.”",
      image: "https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg",
    },
    {
      name: "Eva Jane",
      role: "Founder of Eva Jane Beauty",
      content:
        "“As an entrepreneur who is deeply involved in the Beauty industry, I have been very devoted to creating my original products. Alibaba.com has been my trusted partner in this process.”",
      image: "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-before.jpg?auto=avif,webp&format=jpg&width=944",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="review-section">
      <div className="review-container">
        <button className="nav-button prev-button" onClick={prevSlide}>
          &#10094;
        </button>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
          >
            <img
              src={slide.image}
              alt={slide.name}
              className="slide-image"
            />
            <div className="slide-content">
              <h2 className="slide-name">{slide.name}</h2>
              <p className="slide-role">{slide.role}</p>
              <h2 className="slide-quote">“{slide.content}”</h2>
            </div>
          </div>
        ))}

        <button className="nav-button next-button" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;