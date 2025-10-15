"use client";

import { motion } from "framer-motion";
import FloatingShape from "./FloatingShape";
import { Sparkles, Zap, Rocket } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#c7f5e8] via-[#ffd4c4] to-[#d4e7ff] texture-noise">
      {/* Floating Shapes - More shapes for full screen */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape
          type="circle"
          color="text-[#00ffff]"
          size={80}
          className="absolute top-20 left-[10%] opacity-60"
          delay={0}
        />
        <FloatingShape
          type="square"
          color="text-[#ff006e]"
          size={60}
          className="absolute top-32 right-[15%] opacity-50"
          delay={0.5}
        />
        <FloatingShape
          type="polygon"
          color="text-[#00ff7f]"
          size={70}
          className="absolute bottom-40 left-[20%] opacity-40"
          delay={1}
        />
        <FloatingShape
          type="triangle"
          color="text-[#ffd500]"
          size={90}
          className="absolute bottom-20 right-[25%] opacity-50"
          delay={1.5}
        />
        <FloatingShape
          type="circle"
          color="text-[#a855f7]"
          size={50}
          className="absolute top-[60%] right-[10%] opacity-60"
          delay={0.8}
        />
        {/* Additional shapes for full-width design */}
        <FloatingShape
          type="square"
          color="text-[#0066ff]"
          size={55}
          className="absolute top-[40%] left-[5%] opacity-40"
          delay={1.2}
        />
        <FloatingShape
          type="circle"
          color="text-[#ff6b00]"
          size={65}
          className="absolute bottom-[30%] right-[5%] opacity-50"
          delay={0.3}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-20 pb-32 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-black text-white px-4 sm:px-6 py-3 rounded-full mb-6 sm:mb-8 border-4 border-white shadow-lg"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-bold text-xs sm:text-sm tracking-wide">INDIA'S FIRST SOCIALLY VERIFIED BLOCKCHAIN</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-center mb-4 sm:mb-6 text-black leading-[0.9] max-w-7xl"
        >
          Built to
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">Scale</span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-1 sm:bottom-2 left-0 h-4 sm:h-6 bg-[#00ffff] -z-10"
            />
          </span>
          <br />
          Designed to Trust
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-xl md:text-2xl text-black/80 text-center max-w-2xl lg:max-w-4xl mb-8 sm:mb-12 font-medium px-4"
        >
          A next-gen Layer 1 blockchain fusing social trust, AI-driven consensus,
          and real parallel processing for million-TPS performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center w-full max-w-md sm:max-w-none px-4"
        >
          <a 
            href="https://testnet.arthachain.online/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg border-4 border-black hover:bg-[#00ffff] hover:text-black transition-all duration-300 shadow-[6px_6px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_rgba(0,255,255,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
            Join Testnet
          </a>
          <a 
            href="https://docs.arthachain.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg border-4 border-black hover:bg-[#ff006e] hover:text-white transition-all duration-300 shadow-[6px_6px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_rgba(255,0,110,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
            Documentation
          </a>
        </motion.div>

        {/* Stats Cards - Full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-20 w-full max-w-5xl lg:max-w-6xl px-4"
        >
          {[
            { label: "Transactions/sec", value: "22M+", color: "bg-[#00ffff]" },
            { label: "AI-Powered", value: "SVCP", color: "bg-[#00ff7f]" },
            { label: "Made in", value: "Bharat", color: "bg-[#ffd500]" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className={`${stat.color} rounded-[20px] border-4 border-black p-4 sm:p-6 lg:p-8 text-center shadow-[4px_4px_0px_rgba(0,0,0,0.2)]`}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-black/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}