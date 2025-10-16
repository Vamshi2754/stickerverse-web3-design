"use client";

import { motion } from "framer-motion";
import FloatingShape from "./FloatingShape";
import { Sparkles, Zap, Rocket } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#F7F9FC] via-white to-[#F7F9FC] texture-noise">
      {/* Floating Shapes - Limited to brand colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape
          type="circle"
          color="text-[#1E4BFF]"
          size={80}
          className="absolute top-20 left-[10%] opacity-40"
          delay={0}
        />
        <FloatingShape
          type="square"
          color="text-[#00C2A8]"
          size={60}
          className="absolute top-32 right-[15%] opacity-30"
          delay={0.5}
        />
        <FloatingShape
          type="polygon"
          color="text-[#1E4BFF]"
          size={70}
          className="absolute bottom-40 left-[20%] opacity-25"
          delay={1}
        />
        <FloatingShape
          type="triangle"
          color="text-[#00C2A8]"
          size={90}
          className="absolute bottom-20 right-[25%] opacity-30"
          delay={1.5}
        />
        <FloatingShape
          type="circle"
          color="text-[#1E4BFF]"
          size={50}
          className="absolute top-[60%] right-[10%] opacity-35"
          delay={0.8}
        />
        <FloatingShape
          type="square"
          color="text-[#00C2A8]"
          size={55}
          className="absolute top-[40%] left-[5%] opacity-25"
          delay={1.2}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-20 pb-32 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#0F1724] text-white px-4 sm:px-6 py-3 rounded-full mb-6 sm:mb-8 shadow-lg"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C2A8]" />
          <span className="font-bold text-xs sm:text-sm tracking-wide">INDIA'S FIRST SOCIALLY VERIFIED BLOCKCHAIN</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center mb-6 text-[#0F1724] leading-[1.1] max-w-6xl"
        >
          India's Fastest
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">Socially-Verified</span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-2 left-0 h-4 sm:h-6 bg-[#00C2A8] opacity-40 -z-10"
            />
          </span>
          <br />
          Blockchain
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-[#6B7280] text-center max-w-3xl mb-10 font-medium px-4 leading-relaxed"
        >
          Next-gen Layer 1 blockchain combining social trust, AI-driven consensus,
          and parallel processing for 22M+ TPS performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none px-4"
        >
          <a 
            href="https://testnet.arthachain.online/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center gap-2 text-base sm:text-lg px-8 py-4"
          >
            <Rocket className="w-5 h-5" />
            Join Testnet
          </a>
          <a 
            href="https://docs.arthachain.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center gap-2 text-base sm:text-lg px-8 py-4"
          >
            <Zap className="w-5 h-5" />
            Documentation
          </a>
        </motion.div>

        {/* Stats Cards - Brand colors */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 w-full max-w-5xl px-4"
        >
          {[
            { label: "Transactions/sec", value: "22M+", color: "bg-[#1E4BFF]" },
            { label: "AI-Powered", value: "SVCP", color: "bg-[#00C2A8]" },
            { label: "Made in", value: "Bharat", color: "bg-[#0F1724]" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`${stat.color} rounded-2xl p-8 text-center shadow-xl`}
            >
              <div className="text-5xl sm:text-6xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-base sm:text-lg font-semibold text-white/90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}