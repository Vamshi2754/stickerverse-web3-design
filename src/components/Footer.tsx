"use client";

import { motion } from "framer-motion";
import { Heart, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white py-8 sm:py-12 overflow-hidden w-full">
      {/* Colorful accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 sm:h-2 flex">
        <div className="flex-1 bg-[#00ffff]" />
        <div className="flex-1 bg-[#00ff7f]" />
        <div className="flex-1 bg-[#ffd500]" />
        <div className="flex-1 bg-[#ff006e]" />
        <div className="flex-1 bg-[#a855f7]" />
        <div className="flex-1 bg-[#0066ff]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Shield size={24} className="text-[#00ffff] sm:w-7 sm:h-7" />
              <h3 className="text-2xl sm:text-3xl font-black">Arthachain</h3>
            </div>
            <p className="text-white/70 font-medium max-w-md text-sm sm:text-base">
              India's first socially verified blockchain with 22M+ TPS. Building the most scalable, decentralized network for everyone.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-base sm:text-lg font-black mb-3 sm:mb-4">Product</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { label: "Features", href: "/features" },
                { label: "Testnet", href: "/testnet" },
                { label: "Documentation", href: "/documentation" },
                { label: "White Paper", href: "/white-paper" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#00ffff] transition-colors font-medium text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-black mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2">
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
                    className="text-white/70 hover:text-[#00ffff] transition-colors font-medium text-sm sm:text-base"
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
          className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4"
        >
          <p className="text-white/50 font-medium text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} Arthachain. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/50 text-xs sm:text-sm font-medium">
            Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[#ff006e] fill-[#ff006e]" /> for the Web3 community
          </div>
        </motion.div>
      </div>
    </footer>
  );
}