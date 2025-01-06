"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-indigo-500 opacity-0.3 pointer-events-none z-50"
      style={{
        x: cursorPosition.x, 
        y: cursorPosition.y,
      }}
      animate={{
        x: cursorPosition.x - 16,
        y: cursorPosition.y - 16,
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 30,
      }}
    />
  );
};

export default Cursor;
