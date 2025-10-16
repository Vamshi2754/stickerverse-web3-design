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
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
        rotate: 2,
        boxShadow: "16px 16px 0px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className={`
        ${bgColor} ${borderColor}
        rounded-[28px] border-4 
        shadow-[8px_8px_0px_rgba(0,0,0,0.15)]
        p-7 md:p-9
        transition-all duration-200
        texture-noise
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}