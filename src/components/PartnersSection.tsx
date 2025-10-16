"use client";

import { motion } from "framer-motion";
import StickerCard from "./StickerCard";
import { Building2, Code2, Wallet, Lock, Database, Globe } from "lucide-react";

const partners = [
  {
    icon: Building2,
    name: "DeFi Protocols",
    count: "50+",
    bgColor: "bg-[#00ffff]",
  },
  {
    icon: Code2,
    name: "Developers",
    count: "10K+",
    bgColor: "bg-[#00ff7f]",
  },
  {
    icon: Wallet,
    name: "Wallets",
    count: "25+",
    bgColor: "bg-[#ffd500]",
  },
  {
    icon: Lock,
    name: "Security Partners",
    count: "15+",
    bgColor: "bg-[#ff006e]",
  },
  {
    icon: Database,
    name: "Infrastructure",
    count: "30+",
    bgColor: "bg-[#a855f7]",
  },
  {
    icon: Globe,
    name: "Global Reach",
    count: "100+ Countries",
    bgColor: "bg-[#0066ff]",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-[#e8d4ff] via-[#ffd4c4] to-[#c7f5e8] relative overflow-hidden w-full">
      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute top-20 right-10 w-24 h-24 bg-[#00ffff]/20 rounded-full border-4 border-black/20"
      />
      <motion.div
        animate={{
          rotate: -360,
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute bottom-20 left-10 w-20 h-20 bg-[#ff006e]/20 border-4 border-black/20"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full mb-4 sm:mb-6 border-4 border-white shadow-lg"
          >
            <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-bold text-xs sm:text-sm tracking-wide">GROWING ECOSYSTEM</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black mb-4 sm:mb-6 leading-tight">
            Partners &
            <br className="sm:hidden" /> Ecosystem
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-black/70 max-w-3xl mx-auto font-medium px-4">
            Building the future together with leading projects and innovators
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className={`
                ${partner.bgColor}
                rounded-[20px] border-3 sm:border-4 border-black
                shadow-[4px_4px_0px_rgba(0,0,0,0.1)]
                hover:shadow-[8px_8px_0px_rgba(0,0,0,0.15)]
                p-5 sm:p-6 md:p-8 text-center
                transition-all duration-200
                texture-noise
              `}
            >
              <partner.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-black mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-1 sm:mb-2">
                {partner.count}
              </div>
              <p className="text-xs sm:text-sm md:text-base font-bold text-black/80">
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
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
                Join Our Ecosystem
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/80 font-medium mb-6 sm:mb-8 px-4">
                Become a partner and build the next generation of decentralized applications
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-[#00ffff] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg border-4 border-white hover:bg-[#00ff7f] transition-all duration-300 shadow-lg hover:-translate-y-1">
                  Become a Partner
                </button>
                <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg border-4 border-white hover:bg-[#ffd500] transition-all duration-300 shadow-lg hover:-translate-y-1">
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