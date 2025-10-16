"use client";

import { motion } from "framer-motion";
import StickerCard from "./StickerCard";
import { Building2, Code2, Wallet, Lock, Database, Globe } from "lucide-react";

const partners = [
  {
    icon: Building2,
    name: "DeFi Protocols",
    count: "50+",
    bgColor: "bg-[#1E4BFF]",
  },
  {
    icon: Code2,
    name: "Developers",
    count: "10K+",
    bgColor: "bg-[#00C2A8]",
  },
  {
    icon: Wallet,
    name: "Wallets",
    count: "25+",
    bgColor: "bg-[#1E4BFF]",
  },
  {
    icon: Lock,
    name: "Security Partners",
    count: "15+",
    bgColor: "bg-[#00C2A8]",
  },
  {
    icon: Database,
    name: "Infrastructure",
    count: "30+",
    bgColor: "bg-[#1E4BFF]",
  },
  {
    icon: Globe,
    name: "Global Reach",
    count: "100+ Countries",
    bgColor: "bg-[#00C2A8]",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-[#F7F9FC] relative overflow-hidden w-full">
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
        className="absolute top-20 right-10 w-24 h-24 bg-[#1E4BFF]/10 rounded-full"
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
        className="absolute bottom-20 left-10 w-20 h-20 bg-[#00C2A8]/10"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#0F1724] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg"
          >
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C2A8]" />
            <span className="font-bold text-xs sm:text-sm tracking-wide">GROWING ECOSYSTEM</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0F1724] mb-4 sm:mb-6 leading-tight">
            Partners &
            <br className="sm:hidden" /> Ecosystem
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto font-medium px-4">
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
                rounded-2xl shadow-lg hover:shadow-xl
                p-5 sm:p-6 md:p-8 text-center
                transition-all duration-200
              `}
            >
              <partner.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2">
                {partner.count}
              </div>
              <p className="text-xs sm:text-sm md:text-base font-bold text-white/90">
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
            bgColor="bg-[#0F1724]"
            borderColor="border-[#0F1724]"
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
                <button className="btn-primary px-8 py-4 text-base">
                  Become a Partner
                </button>
                <button className="btn-secondary !bg-white !text-[#0F1724] !border-white hover:!bg-white/90 px-8 py-4 text-base">
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