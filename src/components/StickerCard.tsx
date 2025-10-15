"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StickerCardProps {
  children: ReactNode;
  className?: string;
  bgColor?: string;
  borderColor?: string;
  delay?: number;
}

export default function StickerCard({
  children,
  className = "",
  bgColor = "bg-white",
  borderColor = "border-black",
  delay = 0,
}: StickerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "12px 12px 0px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.2 },
      }}
      className={`
        ${bgColor} ${borderColor}
        rounded-[24px] border-4 
        shadow-[6px_6px_0px_rgba(0,0,0,0.1)]
        p-6 md:p-8
        transition-all duration-200
        texture-noise
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}