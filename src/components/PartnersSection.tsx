"use client";

import { motion } from "framer-motion";
import StickerCard from "./StickerCard";
import { Building2, Code2, Wallet, Lock, Database, Globe } from "lucide-react";

const partners = [
  {
    icon: Building2,
    name: "DeFi Protocols",
    count: "50+",
    bgColor: "bg-[#c7f5e8]",
  },
  {
    icon: Code2,
    name: "Developers",
    count: "10K+",
    bgColor: "bg-[#ffd4c4]",
  },
  {
    icon: Wallet,
    name: "Wallets",
    count: "25+",
    bgColor: "bg-[#d4e7ff]",
  },
  {
    icon: Lock,
    name: "Security Partners",
    count: "15+",
    bgColor: "bg-[#c7f5e8]",
  },
  {
    icon: Database,
    name: "Infrastructure",
    count: "30+",
    bgColor: "bg-[#ffd4c4]",
  },
  {
    icon: Globe,
    name: "Global Reach",
    count: "100+ Countries",
    bgColor: "bg-[#d4e7ff]",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-[#ffd4c4] relative overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-5" />
      
      {/* Simplified Floating Shapes */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-20 w-32 h-32 bg-[#00ffff]/10 rounded-full border-6 border-black/10"
      />
      <motion.div
        animate={{ rotate: -360, y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-28 h-28 bg-[#ff006e]/10 border-6 border-black/10"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
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
              className="inline-flex items-center gap-2 bg-black text-white px-5 sm:px-7 py-3.5 rounded-full mb-8 border-3 border-black shadow-[4px_4px_0px_rgba(0,255,255,0.3)]"
            >
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#00ffff]" />
              <span className="font-bold text-xs sm:text-sm tracking-wider">GROWING ECOSYSTEM</span>
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black mb-5 leading-tight">
              Partners & 
              <span className="relative inline-block mx-3">
                <span className="relative z-10">Ecosystem</span>
                <span className="absolute bottom-2 left-0 right-0 h-5 sm:h-6 bg-[#00ffff] -z-10" />
              </span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-black/60 max-w-3xl mx-auto font-semibold px-4">
              Building the future together with leading innovators
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-20">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05, rotate: 2 }}
              className={`
                ${partner.bgColor}
                rounded-[28px] border-4 border-black
                shadow-[8px_8px_0px_rgba(0,0,0,0.15)]
                hover:shadow-[12px_12px_0px_rgba(0,0,0,0.2)]
                p-7 sm:p-9 md:p-10 text-center
                transition-all duration-200
                texture-noise
              `}
            >
              <partner.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-black mx-auto mb-4 sm:mb-5" strokeWidth={2.5} />
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-2">
                {partner.count}
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-black/70">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Ecosystem CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <StickerCard
            bgColor="bg-black"
            borderColor="border-white"
            delay={0.3}
          >
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                Join Our Ecosystem
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/80 font-semibold mb-8 sm:mb-10 px-4 leading-relaxed">
                Become a partner and build the next generation of decentralized applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
                <button className="bg-[#00ffff] text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg md:text-xl border-4 border-white hover:bg-[#00cccc] transition-all duration-300 shadow-[4px_4px_0px_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0px_rgba(255,255,255,0.4)] hover:-translate-y-1">
                  Become a Partner
                </button>
                <button className="bg-white text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg md:text-xl border-4 border-white hover:bg-[#ff006e] hover:text-white transition-all duration-300 shadow-[4px_4px_0px_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0px_rgba(255,0,110,0.4)] hover:-translate-y-1">
                  Explore Ecosystem
                </button>
              </div>
            </div>
          </StickerCard>
        </motion.div>
      </div>
    </section>
  );
}