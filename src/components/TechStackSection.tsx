"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Zap, Shield, Binary, Network } from "lucide-react";

const techStack = [
  {
    icon: Cpu,
    title: "AI-Powered Consensus",
    description: "Machine learning algorithms analyze node behavior in real-time",
    color: "bg-[#c7f5e8]",
  },
  {
    icon: Layers,
    title: "Multi-Layer Architecture",
    description: "Separate execution, consensus, and data availability layers",
    color: "bg-[#ffd4c4]",
  },
  {
    icon: Zap,
    title: "Parallel Processing",
    description: "True parallel transaction execution across multiple shards",
    color: "bg-[#d4e7ff]",
  },
  {
    icon: Shield,
    title: "SVBFT Protocol",
    description: "Trust-weighted Byzantine Fault Tolerance for maximum security",
    color: "bg-[#c7f5e8]",
  },
  {
    icon: Binary,
    title: "Optimized EVM",
    description: "Enhanced Ethereum Virtual Machine with 100x performance boost",
    color: "bg-[#ffd4c4]",
  },
  {
    icon: Network,
    title: "Dynamic Sharding",
    description: "Adaptive shard allocation based on network demand",
    color: "bg-[#d4e7ff]",
  },
];

export default function TechStackSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-black relative overflow-hidden w-full">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Simplified Floating Elements */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-20 w-32 h-32 border-6 border-[#00ffff]/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360, x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-28 h-28 border-6 border-[#ff006e]/20"
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 max-w-7xl">
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#00ffff] text-black px-5 sm:px-7 py-3.5 rounded-full mb-8 border-3 border-[#00ffff] shadow-[4px_4px_0px_rgba(0,255,255,0.3)]"
            >
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-bold text-xs sm:text-sm tracking-wider">CUTTING-EDGE TECHNOLOGY</span>
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-5 leading-tight">
              Built on Advanced
              <br /> 
              <span className="relative inline-block">
                <span className="relative z-10">Tech Stack</span>
                <span className="absolute bottom-2 left-0 right-0 h-5 sm:h-6 bg-[#00ffff] -z-10" />
              </span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/60 max-w-3xl mx-auto font-semibold px-4">
              Powered by breakthrough innovations in consensus and scalability
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03, rotate: 2 }}
              className={`
                ${tech.color}
                rounded-[28px] border-4 border-black
                shadow-[8px_8px_0px_rgba(0,255,255,0.2)]
                hover:shadow-[12px_12px_0px_rgba(0,255,255,0.3)]
                p-7 sm:p-9 md:p-10
                transition-all duration-200
                texture-noise
              `}
            >
              <div className="bg-black text-white p-4 sm:p-5 rounded-2xl inline-flex mb-4 sm:mb-5 border-3 border-white shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
                <tech.icon className="w-7 h-7 sm:w-9 sm:h-9" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-3 leading-tight">
                {tech.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-black/70 font-semibold leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-7"
        >
          {[
            { label: "Block Time", value: "0.5s" },
            { label: "Finality", value: "2s" },
            { label: "Shards", value: "64+" },
            { label: "Nodes", value: "10K+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm border-4 border-[#00ffff] rounded-[28px] p-6 sm:p-8 text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00ffff] mb-2">
                {stat.value}
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-white/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}