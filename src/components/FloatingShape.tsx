"use client";

import { motion } from "framer-motion";

interface FloatingShapeProps {
  type: "circle" | "square" | "triangle" | "polygon";
  color: string;
  size?: number;
  className?: string;
  delay?: number;
}

export default function FloatingShape({
  type,
  color,
  size = 60,
  className = "",
  delay = 0,
}: FloatingShapeProps) {
  const floatAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 3 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  };

  const shapes = {
    circle: (
      <motion.div
        animate={floatAnimation}
        className={`rounded-full ${color} ${className}`}
        style={{ width: size, height: size }}
      />
    ),
    square: (
      <motion.div
        animate={floatAnimation}
        className={`rounded-xl ${color} ${className}`}
        style={{ width: size, height: size }}
      />
    ),
    triangle: (
      <motion.div
        animate={floatAnimation}
        className={`${className}`}
        style={{ width: 0, height: 0 }}
      >
        <div
          className={`${color}`}
          style={{
            width: 0,
            height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid currentColor`,
          }}
        />
      </motion.div>
    ),
    polygon: (
      <motion.svg
        animate={floatAnimation}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={className}
      >
        <polygon
          points="50,10 90,35 75,80 25,80 10,35"
          className={color}
          fill="currentColor"
        />
      </motion.svg>
    ),
  };

  return shapes[type];
}