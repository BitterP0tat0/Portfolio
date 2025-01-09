"use client";

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
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-indigo-500 opacity-3 pointer-events-none z-[9999] overflow-visible cursor-none"
      style={{
        x: cursorPosition.x,
        y: cursorPosition.y,
      }}
      animate={{
        x: cursorPosition.x - 10,
        y: cursorPosition.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 30,
        duration: 0,
      }}
    />
  );
};

export default Cursor;

