"use client";

import { motion } from "framer-motion";
import { Heart, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white py-12 sm:py-16 overflow-hidden w-full">
      {/* Refined accent line - Using 3-color palette */}
      <div className="absolute top-0 left-0 right-0 h-2 sm:h-3 flex">
        <div className="flex-1 bg-[#c7f5e8]" />
        <div className="flex-1 bg-[#00ffff]" />
        <div className="flex-1 bg-[#ffd4c4]" />
        <div className="flex-1 bg-[#ff006e]" />
        <div className="flex-1 bg-[#d4e7ff]" />
        <div className="flex-1 bg-[#00ffff]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="bg-[#00ffff] text-black p-2.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                <Shield size={26} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black">Arthachain</h3>
            </div>
            <p className="text-white/70 font-semibold max-w-md text-base sm:text-lg leading-relaxed">
              India's first socially verified blockchain with 22M+ TPS. Building the most scalable, decentralized network for everyone.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-black mb-4 sm:mb-5 text-[#00ffff]">Product</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { label: "Features", href: "/features" },
                { label: "Testnet", href: "/testnet" },
                { label: "Documentation", href: "/documentation" },
                { label: "White Paper", href: "/white-paper" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#00ffff] transition-colors font-semibold text-base sm:text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-black mb-4 sm:mb-5 text-[#00ffff]">Company</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Contact", href: "/contact" },
                { label: "Testnet", href: "https://testnet.arthachain.online/" },
                { label: "Docs", href: "https://docs.arthachain.com/" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-white/70 hover:text-[#00ffff] transition-colors font-semibold text-base sm:text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 sm:pt-10 border-t-2 border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-5"
        >
          <p className="text-white/60 font-semibold text-sm sm:text-base text-center sm:text-left">
            © {currentYear} Arthachain. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/60 text-sm sm:text-base font-semibold">
            Made with <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff006e] fill-[#ff006e]" /> for the Web3 community
          </div>
        </motion.div>
      </div>
    </footer>
  );
}