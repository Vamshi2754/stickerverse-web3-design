"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/white-paper", label: "White Paper" },
  { href: "/documentation", label: "Docs" },
  { href: "/testnet", label: "Testnet" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F1724]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="bg-[#1E4BFF] text-white p-2 rounded-lg">
                <Shield size={24} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white leading-none">Arthachain</h1>
                <p className="text-xs text-[#00C2A8] font-medium">22M+ TPS</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`
                      font-medium text-base transition-all duration-200 relative
                      ${isActive 
                        ? "text-[#1E4BFF]" 
                        : "text-white/90 hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#1E4BFF]"
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
            
            {/* CTA Button */}
            <a 
              href="https://testnet.arthachain.online/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-base px-6 py-2.5"
              >
                Launch Testnet
              </motion.button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-[#0F1724]/98 backdrop-blur-sm border-t border-white/10"
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  <div
                    className={`
                      font-medium text-lg transition-colors
                      ${isActive 
                        ? "text-[#1E4BFF]" 
                        : "text-white/90 hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                  </div>
                </Link>
              );
            })}
            <a 
              href="https://testnet.arthachain.online/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="text-[#1E4BFF] font-semibold text-lg pt-2 border-t border-white/10">
                Launch Testnet
              </div>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}