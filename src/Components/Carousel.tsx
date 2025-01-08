"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/image/bake.png",
  "/image/camera.png",
  "/image/games.png",
  "/image/listening.png",
  "/image/movie.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="carousel-container"
      style={{
        position: "relative",
        width: "300px",
        height: "300px",
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            width: "50%",
            height: "50%",
            right: "60px",
            top: "70px",
          }}
        />
      </AnimatePresence>

      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "-20px",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "transparent",
          color: "white",
          border: "none",
          padding: "20px",
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
          right: "-20px",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "transparent",
          color: "white",
          border: "none",
          padding: "20px",
          cursor: "pointer",
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
