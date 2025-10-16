"use client";

import { motion } from "framer-motion";
import StickerCard from "./StickerCard";
import { Twitter, Send, MessageCircle, Github, ArrowRight } from "lucide-react";

const socialLinks = [
  {
    icon: Twitter,
    name: "Twitter",
    followers: "500K+",
    bgColor: "bg-[#00ffff]",
    href: "#",
  },
  {
    icon: Send,
    name: "Telegram",
    followers: "250K+",
    bgColor: "bg-[#c7f5e8]",
    href: "#",
  },
  {
    icon: MessageCircle,
    name: "Discord",
    followers: "180K+",
    bgColor: "bg-[#ffd4c4]",
    href: "#",
  },
  {
    icon: Github,
    name: "GitHub",
    followers: "15K+",
    bgColor: "bg-[#d4e7ff]",
    href: "#",
  },
];

export default function CommunitySection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-[#ffd4c4] via-white to-[#d4e7ff] relative overflow-hidden w-full">
      {/* Simplified Geometric Decorations */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-20 w-32 h-32 bg-[#ff006e]/10 rounded-full border-6 border-black/20"
      />
      <motion.div
        animate={{ rotate: -360, y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-28 h-28 bg-[#00ffff]/10 border-6 border-black/20"
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
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black mb-5 leading-tight">
              Join the 
              <span className="relative inline-block mx-3">
                <span className="relative z-10">Revolution</span>
                <span className="absolute bottom-2 left-0 right-0 h-5 sm:h-6 bg-[#00ffff] -z-10" />
              </span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-black/60 max-w-3xl mx-auto font-semibold px-4">
              Connect with builders, creators, and innovators shaping Web3
            </p>
          </motion.div>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-20">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05, rotate: 2 }}
              className={`
                ${social.bgColor}
                rounded-[28px] border-4 border-black
                shadow-[8px_8px_0px_rgba(0,0,0,0.15)]
                hover:shadow-[12px_12px_0px_rgba(0,0,0,0.2)]
                p-7 sm:p-9 lg:p-10 text-center
                transition-all duration-200
                texture-noise
                block
              `}
            >
              <social.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-black mx-auto mb-4 sm:mb-5" strokeWidth={2.5} />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-2">
                {social.name}
              </h3>
              <p className="text-base sm:text-lg md:text-xl font-bold text-black/60">
                {social.followers} followers
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {/* Developer CTA */}
          <StickerCard
            bgColor="bg-[#ff006e]"
            borderColor="border-black"
            delay={0.2}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                Start Building
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-semibold mb-6 sm:mb-8 flex-grow leading-relaxed">
                Access our comprehensive docs, SDKs, and developer tools.
                Deploy your first smart contract in minutes.
              </p>
              <button className="group bg-black text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg md:text-xl border-4 border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 w-full shadow-[4px_4px_0px_rgba(255,255,255,0.3)]">
                View Docs
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />
              </button>
            </div>
          </StickerCard>

          {/* Wallet CTA */}
          <StickerCard
            bgColor="bg-[#00ffff]"
            borderColor="border-black"
            delay={0.3}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 leading-tight">
                Create Wallet
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-black/70 font-semibold mb-6 sm:mb-8 flex-grow leading-relaxed">
                Get your free wallet in seconds. No fees, no hassle.
                Start your Web3 journey today.
              </p>
              <button className="group bg-black text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg md:text-xl border-4 border-black hover:bg-white hover:text-black hover:border-black transition-all duration-300 flex items-center justify-center gap-3 w-full shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
                Get Started
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />
              </button>
            </div>
          </StickerCard>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20 max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-[28px] border-4 border-black shadow-[10px_10px_0px_rgba(0,0,0,0.15)] p-8 sm:p-10 md:p-14 texture-noise">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 text-center leading-tight">
              Stay Updated
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-black/60 font-semibold mb-7 sm:mb-9 text-center px-2">
              Get the latest updates, news, and exclusive insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 sm:px-7 py-4 sm:py-5 rounded-full border-4 border-black font-bold text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-[#00ffff]/30"
              />
              <button className="bg-black text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg border-4 border-black hover:bg-[#00ffff] hover:text-black transition-all duration-300 whitespace-nowrap shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}