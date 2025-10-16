"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Rocket } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#c7f5e8] via-[#ffd4c4] to-[#d4e7ff] texture-noise">
      {/* Bold Retro Shape Illustrations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[8%] w-24 h-24 sm:w-32 sm:h-32 opacity-60"
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4794464d-ee3c-4139-bb7b-8d04aae34059/generated_images/bold-retro-abstract-shape-illustration-w-cb4a4228-20251016095714.jpg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-40 right-[12%] w-20 h-20 sm:w-28 sm:h-28 opacity-50"
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4794464d-ee3c-4139-bb7b-8d04aae34059/generated_images/bold-retro-geometric-shape-illustration--242f9d8a-20251016095721.jpg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-[15%] w-28 h-28 sm:w-36 sm:h-36 opacity-55"
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4794464d-ee3c-4139-bb7b-8d04aae34059/generated_images/bold-retro-abstract-shape-illustration-w-00c54b23-20251016095729.jpg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -22, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-20 right-[20%] w-20 h-20 sm:w-28 sm:h-28 opacity-50"
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4794464d-ee3c-4139-bb7b-8d04aae34059/generated_images/bold-retro-geometric-shape-illustration--1635dc41-20251016095738.jpg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Geometric Doodle Patterns */}
      <div className="absolute top-10 right-10 w-32 h-32 pattern-dots opacity-20 rounded-full" />
      <div className="absolute bottom-20 left-10 w-40 h-40 pattern-grid opacity-15" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-24 pb-32 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-black text-white px-5 sm:px-7 py-3.5 rounded-full mb-8 border-3 border-black shadow-[4px_4px_0px_rgba(0,255,255,0.3)]"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#00ffff]" />
          <span className="font-bold text-xs sm:text-sm tracking-wider">INDIA'S FIRST SOCIALLY VERIFIED BLOCKCHAIN</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-center mb-6 text-black leading-[0.95] max-w-7xl"
        >
          Built to
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">Scale</span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-2 sm:bottom-3 left-0 h-5 sm:h-7 bg-[#00ffff] -z-10"
            />
          </span>
          <br />
          Designed to Trust
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-black/70 text-center max-w-2xl lg:max-w-4xl mb-10 sm:mb-14 font-semibold px-4 leading-relaxed"
        >
          A next-gen Layer 1 blockchain fusing social trust, AI-driven consensus,
          and real parallel processing for million-TPS performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 justify-center w-full max-w-md sm:max-w-none px-4"
        >
          <a 
            href="https://testnet.arthachain.online/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#00ffff] text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-lg sm:text-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center gap-3"
            >
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
              Join Testnet
            </motion.div>
          </a>
          <a 
            href="https://docs.arthachain.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-lg sm:text-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.3)] hover:shadow-[12px_12px_0px_rgba(255,0,110,0.5)] hover:bg-[#ff006e] hover:text-white transition-all duration-200 flex items-center justify-center gap-3"
            >
              <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
              Documentation
            </motion.div>
          </a>
        </motion.div>

        {/* Stats Cards - Using 3-color palette */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-7 lg:gap-9 mt-16 sm:mt-24 w-full max-w-5xl lg:max-w-6xl px-4"
        >
          {[
            { label: "Transactions/sec", value: "22M+", color: "bg-[#00ffff]" },
            { label: "AI-Powered", value: "SVCP", color: "bg-[#ffd4c4]" },
            { label: "Made in", value: "Bharat", color: "bg-[#ff006e]" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.15 }}
              whileHover={{ scale: 1.08, rotate: 3, y: -8 }}
              className={`${stat.color} rounded-[28px] border-4 border-black p-6 sm:p-8 lg:p-10 text-center shadow-[8px_8px_0px_rgba(0,0,0,0.25)] hover:shadow-[12px_12px_0px_rgba(0,0,0,0.35)] transition-all duration-200`}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base md:text-lg font-bold text-black/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}