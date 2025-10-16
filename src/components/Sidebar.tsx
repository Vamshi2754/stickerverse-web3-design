"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Users, 
  Sparkles, 
  FileText, 
  BookOpen, 
  TestTube, 
  Mail,
  Menu,
  X,
  Zap,
  Shield
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about-us", label: "About Us", icon: Users },
  { href: "/features", label: "Features", icon: Sparkles },
  { href: "/white-paper", label: "White Paper", icon: FileText },
  { href: "/documentation", label: "Documentation", icon: BookOpen },
  { href: "/testnet", label: "Testnet", icon: TestTube },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 bg-black text-white p-3 rounded-xl border-3 border-black shadow-xl hover:scale-110 transition-transform"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="md:hidden fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Simplified */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : "100%",
        }}
        transition={{ type: "spring", damping: 20 }}
        className="md:hidden fixed top-0 right-0 h-full w-[280px] bg-gradient-to-br from-pastel-mint via-pastel-peach to-pastel-lavender border-l-4 border-black shadow-2xl z-40 overflow-y-auto scrollbar-hide"
      >
        <div className="p-6 relative min-h-full">
          {/* Playful floating shapes - smaller */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-4 left-4 w-8 h-8 bg-neon-yellow rounded-full border-2 border-black opacity-20"
          />
          
          <motion.div
            animate={{ rotate: -360, y: [0, -8, 0] }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-24 left-6 w-6 h-6 bg-neon-pink border-2 border-black opacity-15"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />

          {/* Brand Header */}
          <Link href="/" onClick={() => setIsOpen(false)}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white p-4 rounded-2xl border-3 border-black shadow-lg mb-6 cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-1">
                <Shield size={24} className="text-neon-cyan" />
                <h1 className="text-xl font-black">Arthachain</h1>
              </div>
              <p className="text-xs text-white/90 font-bold">
                India's First Socially Verified Blockchain
              </p>
              <p className="text-xs text-neon-cyan font-bold mt-1">22M+ TPS</p>
            </motion.div>
          </Link>

          {/* Simple Navigation List */}
          <nav className="space-y-1 mb-6">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      flex items-center gap-3 px-3 py-3 rounded-xl
                      cursor-pointer transition-all duration-200
                      ${isActive 
                        ? "bg-neon-cyan text-black font-black" 
                        : "text-black/80 font-bold hover:bg-black/5"
                      }
                    `}
                  >
                    <Icon size={20} className={isActive ? "text-black" : "text-black/60"} />
                    <span className="text-sm">{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* Decorative Doodle */}
          <div className="mb-6">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4794464d-ee3c-4139-bb7b-8d04aae34059/generated_images/abstract-geometric-doodle-icon-set-for-w-b726da20-20251014171827.jpg?" 
              alt="Geometric doodles"
              className="w-full h-20 object-cover rounded-xl border-3 border-black shadow-md opacity-50"
            />
          </div>

          {/* CTA Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-neon-purple to-neon-pink p-5 rounded-2xl border-3 border-black shadow-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap size={24} className="text-black" />
              <h3 className="text-lg font-black text-black">Join Testnet</h3>
            </div>
            <p className="text-black/80 font-bold text-xs mb-4">
              Start building on Arthachain today!
            </p>
            <a 
              href="https://testnet.arthachain.online/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-black text-white py-3 rounded-xl font-bold text-sm text-center hover:scale-105 transition-transform"
            >
              Launch Testnet
            </a>
          </motion.div>

          {/* Playful bottom decorations */}
          <div className="mt-6 flex justify-center gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="w-6 h-6 bg-neon-cyan rounded-lg border-2 border-black"
              />
            ))}
          </div>
        </div>
      </motion.aside>
    </>
  );
}