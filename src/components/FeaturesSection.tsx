"use client";

import StickerCard from "./StickerCard";
import { Shield, Zap, Network, Brain, Blocks, Lock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "SVCP Consensus",
    description: "Socially Verified Consensus Protocol - AI-powered behavior scoring and social graph validation for unmatched security.",
    bgColor: "bg-[#00ffff]",
    borderColor: "border-black",
  },
  {
    icon: Zap,
    title: "22M+ TPS",
    description: "Lightning-fast parallel execution delivering millions of transactions per second with near-instant finality.",
    bgColor: "bg-[#00ff7f]",
    borderColor: "border-black",
  },
  {
    icon: Blocks,
    title: "Dynamic Sharding",
    description: "Adaptive, smart, reputation-based shard assignment that grows intelligently as your network scales.",
    bgColor: "bg-[#ffd500]",
    borderColor: "border-black",
  },
  {
    icon: Shield,
    title: "SVBFT Security",
    description: "Trust-weighted Byzantine Fault Tolerance provides tamper-proof security without energy drain.",
    bgColor: "bg-[#ff006e]",
    borderColor: "border-black",
  },
  {
    icon: Network,
    title: "Hybrid Architecture",
    description: "Seamless blend of on-chain trust with off-chain efficiency for privacy and performance.",
    bgColor: "bg-[#a855f7]",
    borderColor: "border-black",
  },
  {
    icon: Lock,
    title: "Cross-Shard Protocol",
    description: "Guaranteed atomic transactions across shards with advanced commit protocols for data integrity.",
    bgColor: "bg-[#0066ff]",
    borderColor: "border-black",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-[#f5e6d3] relative overflow-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-4 sm:mb-6">
            What Makes Arthachain
            <br className="hidden sm:block" /> the King of Blockchain
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-black/70 max-w-3xl mx-auto font-medium px-4">
            Balancing scale, security, and decentralization like it's 2030 already.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <StickerCard
              key={feature.title}
              bgColor={feature.bgColor}
              borderColor={feature.borderColor}
              delay={index * 0.1}
            >
              <div className="flex flex-col items-start">
                <div className="bg-black text-white p-3 sm:p-4 rounded-2xl mb-3 sm:mb-4 border-2 border-white">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-black/80 font-medium leading-relaxed">
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