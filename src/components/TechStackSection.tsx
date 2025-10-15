"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Zap, Shield, Binary, Network } from "lucide-react";

const techStack = [
  {
    icon: Cpu,
    title: "AI-Powered Consensus",
    description: "Machine learning algorithms analyze node behavior in real-time",
    color: "bg-[#00ffff]",
  },
  {
    icon: Layers,
    title: "Multi-Layer Architecture",
    description: "Separate execution, consensus, and data availability layers",
    color: "bg-[#00ff7f]",
  },
  {
    icon: Zap,
    title: "Parallel Processing",
    description: "True parallel transaction execution across multiple shards",
    color: "bg-[#ffd500]",
  },
  {
    icon: Shield,
    title: "SVBFT Protocol",
    description: "Trust-weighted Byzantine Fault Tolerance for maximum security",
    color: "bg-[#ff006e]",
  },
  {
    icon: Binary,
    title: "Optimized EVM",
    description: "Enhanced Ethereum Virtual Machine with 100x performance boost",
    color: "bg-[#a855f7]",
  },
  {
    icon: Network,
    title: "Dynamic Sharding",
    description: "Adaptive shard allocation based on network demand",
    color: "bg-[#0066ff]",
  },
];

export default function TechStackSection() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-black relative overflow-hidden w-full">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Geometric Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute top-20 left-10 w-32 h-32 border-4 border-[#00ffff]/30 rounded-full"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-10 w-24 h-24 border-4 border-[#ff006e]/30"
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#00ffff] text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full mb-4 sm:mb-6 border-4 border-[#00ffff] shadow-lg"
          >
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-bold text-xs sm:text-sm tracking-wide">CUTTING-EDGE TECHNOLOGY</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
            Built on Advanced
            <br className="sm:hidden" /> Tech Stack
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium px-4">
            Powered by breakthrough innovations in consensus and scalability
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`
                ${tech.color}
                rounded-[20px] border-3 sm:border-4 border-black
                shadow-[6px_6px_0px_rgba(0,255,255,0.2)]
                hover:shadow-[10px_10px_0px_rgba(0,255,255,0.3)]
                p-5 sm:p-6 md:p-8
                transition-all duration-200
                texture-noise
              `}
            >
              <div className="bg-black text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl inline-flex mb-3 sm:mb-4 border-2 sm:border-3 border-white">
                <tech.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-2 sm:mb-3 leading-tight">
                {tech.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-black/80 font-medium leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { label: "Block Time", value: "0.5s" },
            { label: "Finality", value: "2s" },
            { label: "Shards", value: "64+" },
            { label: "Nodes", value: "10K+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm border-3 sm:border-4 border-[#00ffff] rounded-[20px] p-4 sm:p-6 text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#00ffff] mb-1 sm:mb-2">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm md:text-base font-bold text-white/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}