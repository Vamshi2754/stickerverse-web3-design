"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/98 backdrop-blur-md border-b-4 border-[#00ffff]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="bg-[#00ffff] text-black p-2.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                <Shield size={26} strokeWidth={2.5} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-black text-white leading-none tracking-tight">Arthachain</h1>
                <p className="text-xs text-[#00ffff] font-bold">22M+ TPS</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-9">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`
                      font-bold text-base transition-all duration-200 relative tracking-wide
                      ${isActive 
                        ? "text-[#00ffff]" 
                        : "text-white/85 hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1.5 left-0 right-0 h-1 bg-[#00ffff] rounded-full shadow-[0_0_8px_rgba(0,255,255,0.6)]"
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
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="ml-3 bg-[#00ffff] text-black font-black text-base px-6 py-2.5 rounded-xl border-3 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-200"
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
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/98 backdrop-blur-md border-t-2 border-[#00ffff]/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                    <motion.div
                      whileTap={{ scale: 0.97 }}
                      className={`
                        font-bold text-lg transition-colors py-2
                        ${isActive 
                          ? "text-[#00ffff]" 
                          : "text-white/85 hover:text-white"
                        }
                      `}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                );
              })}
              <a 
                href="https://testnet.arthachain.online/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="bg-[#00ffff] text-black font-black text-lg text-center py-3 rounded-xl border-3 border-white shadow-[4px_4px_0px_rgba(255,255,255,0.3)] mt-4">
                  Launch Testnet
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}