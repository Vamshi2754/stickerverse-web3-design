"use client";

import { motion } from "framer-motion";
import StickerCard from "./StickerCard";
import { Twitter, Send, MessageCircle, Github, ArrowRight } from "lucide-react";

const socialLinks = [
  {
    icon: Twitter,
    name: "Twitter",
    followers: "500K+",
    bgColor: "bg-[#1E4BFF]",
    href: "#",
  },
  {
    icon: Send,
    name: "Telegram",
    followers: "250K+",
    bgColor: "bg-[#00C2A8]",
    href: "#",
  },
  {
    icon: MessageCircle,
    name: "Discord",
    followers: "180K+",
    bgColor: "bg-[#1E4BFF]",
    href: "#",
  },
  {
    icon: Github,
    name: "GitHub",
    followers: "15K+",
    bgColor: "bg-[#00C2A8]",
    href: "#",
  },
];

export default function CommunitySection() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-[#F7F9FC] relative overflow-hidden w-full">
      {/* Geometric Decorations */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute top-20 right-10 w-28 sm:w-40 h-28 sm:h-40 bg-[#1E4BFF]/10 rounded-full"
      />
      <motion.div
        animate={{
          rotate: -360,
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute bottom-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-[#00C2A8]/10"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0F1724] mb-4 sm:mb-6 leading-tight">
            Join the Revolution
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#6B7280] max-w-3xl mx-auto font-medium px-4">
            Connect with builders, creators, and innovators shaping Web3
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className={`
                ${social.bgColor}
                rounded-2xl shadow-lg hover:shadow-xl
                p-5 sm:p-6 lg:p-8 text-center
                transition-all duration-200
                block
              `}
            >
              <social.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1 sm:mb-2">
                {social.name}
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-bold text-white/80">
                {social.followers} followers
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Developer CTA */}
          <StickerCard
            bgColor="bg-[#1E4BFF]"
            borderColor="border-[#1E4BFF]"
            delay={0.2}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
                Start Building
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium mb-5 sm:mb-6 flex-grow">
                Access our comprehensive docs, SDKs, and developer tools.
                Deploy your first smart contract in minutes.
              </p>
              <button className="btn-secondary !bg-white !text-[#1E4BFF] !border-white hover:!bg-white/90 flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-bold">
                View Docs
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </StickerCard>

          {/* Wallet CTA */}
          <StickerCard
            bgColor="bg-[#00C2A8]"
            borderColor="border-[#00C2A8]"
            delay={0.3}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
                Create Wallet
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium mb-5 sm:mb-6 flex-grow">
                Get your free wallet in seconds. No fees, no hassle.
                Start your Web3 journey today.
              </p>
              <button className="btn-secondary !bg-white !text-[#00C2A8] !border-white hover:!bg-white/90 flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-bold">
                Get Started
                <ArrowRight className="w-5 h-5" />
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
          className="mt-12 sm:mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F1724] mb-3 sm:mb-4 text-center">
              Stay Updated
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#6B7280] font-medium mb-5 sm:mb-6 text-center px-2">
              Get the latest updates, news, and exclusive insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#1E4BFF] focus:border-transparent"
              />
              <button className="btn-primary px-8 py-4 text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}