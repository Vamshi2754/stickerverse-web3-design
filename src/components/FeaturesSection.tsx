"use client";

import StickerCard from "./StickerCard";
import { Shield, Zap, Network, Brain, Blocks, Lock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "SVCP Consensus",
    description: "Socially Verified Consensus Protocol - AI-powered behavior scoring and social graph validation for unmatched security.",
    bgColor: "bg-[#c7f5e8]", // Mint
    borderColor: "border-black",
  },
  {
    icon: Zap,
    title: "22M+ TPS",
    description: "Lightning-fast parallel execution delivering millions of transactions per second with near-instant finality.",
    bgColor: "bg-[#ffd4c4]", // Peach
    borderColor: "border-black",
  },
  {
    icon: Blocks,
    title: "Dynamic Sharding",
    description: "Adaptive, smart, reputation-based shard assignment that grows intelligently as your network scales.",
    bgColor: "bg-[#d4e7ff]", // Sky
    borderColor: "border-black",
  },
  {
    icon: Shield,
    title: "SVBFT Security",
    description: "Trust-weighted Byzantine Fault Tolerance provides tamper-proof security without energy drain.",
    bgColor: "bg-[#c7f5e8]", // Mint
    borderColor: "border-black",
  },
  {
    icon: Network,
    title: "Hybrid Architecture",
    description: "Seamless blend of on-chain trust with off-chain efficiency for privacy and performance.",
    bgColor: "bg-[#ffd4c4]", // Peach
    borderColor: "border-black",
  },
  {
    icon: Lock,
    title: "Cross-Shard Protocol",
    description: "Guaranteed atomic transactions across shards with advanced commit protocols for data integrity.",
    bgColor: "bg-[#d4e7ff]", // Sky
    borderColor: "border-black",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white relative overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black mb-6 leading-tight">
              What Makes Arthachain
              <br className="hidden sm:block" /> 
              <span className="relative inline-block">
                <span className="relative z-10">the King</span>
                <span className="absolute bottom-2 left-0 right-0 h-4 sm:h-6 bg-[#00ffff] -z-10" />
              </span>
              {" "}of Blockchain
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-black/60 max-w-3xl mx-auto font-semibold px-4">
              Balancing scale, security, and decentralization like it's 2030 already.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => (
            <StickerCard
              key={feature.title}
              bgColor={feature.bgColor}
              borderColor={feature.borderColor}
              delay={index * 0.1}
            >
              <div className="flex flex-col items-start">
                <div className="bg-black text-[#00ffff] p-4 sm:p-5 rounded-2xl mb-4 sm:mb-5 border-3 border-black shadow-[4px_4px_0px_rgba(0,255,255,0.3)]">
                  <feature.icon className="w-7 h-7 sm:w-9 sm:h-9" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-black/70 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StickerCard>
          ))}
        </div>
      </div>
    </section>
  );
}