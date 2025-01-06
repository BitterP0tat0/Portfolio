"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/image/Linkedin.svg",
  "/image/Insta.svg",
  "/image/Linkedin.svg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);
    if (currentIndex > images.length - 1) {
      setCurrentIndex(0);
    }

    return () => clearInterval(interval);
    [currentIndex];
  });

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="carousel-container"
      style={{
        position: "relative",
        width: "600px",
        height: "300px",
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      </AnimatePresence>

      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "transparent",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {"<"}
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "transparent",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
