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
  { href: "/", label: "Home", icon: Home, color: "bg-neon-cyan" },
  { href: "/about-us", label: "About Us", icon: Users, color: "bg-neon-green" },
  { href: "/features", label: "Features", icon: Sparkles, color: "bg-neon-yellow" },
  { href: "/white-paper", label: "White Paper", icon: FileText, color: "bg-neon-pink" },
  { href: "/documentation", label: "Documentation", icon: BookOpen, color: "bg-neon-purple" },
  { href: "/testnet", label: "Testnet", icon: TestTube, color: "bg-neon-blue" },
  { href: "/contact", label: "Contact", icon: Mail, color: "bg-electric-orange" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button - Only visible on small/medium screens, hidden on large */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 bg-black text-white p-3 sm:p-4 rounded-2xl border-4 border-black shadow-2xl hover:scale-110 transition-transform"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop for mobile */}
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

      {/* Sidebar - Right Side - Only visible on mobile/tablet when opened */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : "100%",
        }}
        transition={{ type: "spring", damping: 20 }}
        className="md:hidden fixed top-0 right-0 h-full w-[90vw] sm:w-[380px] bg-gradient-to-br from-pastel-mint via-pastel-peach to-pastel-lavender border-l-4 sm:border-l-8 border-black shadow-2xl z-40 overflow-y-auto scrollbar-hide"
      >
        <div className="p-5 sm:p-7 lg:p-8 relative min-h-full">
          {/* Floating Decorative Elements */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-6 left-6 w-10 h-10 sm:w-12 sm:h-12 bg-neon-yellow rounded-full border-3 sm:border-4 border-black opacity-30"
          />
          
          <motion.div
            animate={{
              rotate: -360,
              y: [0, -10, 0],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-32 left-8 w-8 h-8 sm:w-10 sm:h-10 bg-neon-pink border-3 sm:border-4 border-black opacity-20"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />

          {/* Logo/Brand - Arthachain */}
          <Link href="/" onClick={() => setIsOpen(false)}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-black shadow-xl mb-6 sm:mb-8 cursor-pointer"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <Shield size={28} className="text-neon-cyan sm:w-8 sm:h-8" />
                <h1 className="text-2xl sm:text-3xl font-black">Arthachain</h1>
              </div>
              <p className="text-xs sm:text-sm text-white/90 font-bold leading-tight">
                India's First Socially Verified Blockchain
              </p>
              <p className="text-xs sm:text-sm text-neon-cyan font-bold mt-1.5">22M+ TPS</p>
            </motion.div>
          </Link>

          {/* Decorative Doodle Image */}
          <div className="mb-6 sm:mb-8 relative">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4794464d-ee3c-4139-bb7b-8d04aae34059/generated_images/abstract-geometric-doodle-icon-set-for-w-b726da20-20251014171827.jpg?" 
              alt="Geometric doodles"
              className="w-full h-24 sm:h-28 object-cover rounded-xl sm:rounded-2xl border-3 sm:border-4 border-black shadow-lg opacity-60"
            />
          </div>

          {/* Navigation with better spacing */}
          <nav className="space-y-4 sm:space-y-5 lg:space-y-6 mb-6">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, x: -5 }}
                    whileTap={{ scale: 0.97 }}
                    className={`
                      ${isActive ? item.color : "bg-white"}
                      p-4 sm:p-5 rounded-xl sm:rounded-2xl border-3 sm:border-4 border-black shadow-lg
                      cursor-pointer transition-all duration-200
                      ${isActive ? "shadow-2xl" : "hover:shadow-xl"}
                      min-h-[68px] sm:min-h-[76px]
                    `}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`${isActive ? "bg-black text-white" : item.color} p-2.5 sm:p-3 rounded-lg sm:rounded-xl border-2 sm:border-3 border-black flex-shrink-0`}>
                        <Icon size={20} className="sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-base sm:text-lg font-black text-black leading-tight">{item.label}</span>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* Isometric Bar Chart Image */}
          <div className="mt-6 sm:mt-8 mb-6 sm:mb-8">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4794464d-ee3c-4139-bb7b-8d04aae34059/generated_images/isometric-3d-bar-chart-motif-illustratio-cc11d81f-20251014171834.jpg?" 
              alt="Isometric bars"
              className="w-full h-32 sm:h-36 object-cover rounded-xl sm:rounded-2xl border-3 sm:border-4 border-black shadow-lg"
            />
          </div>

          {/* Call to Action Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-neon-purple to-neon-pink p-6 sm:p-7 rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-black shadow-xl"
          >
            <div className="flex items-center gap-2.5 mb-3.5">
              <Zap size={28} className="text-black sm:w-8 sm:h-8" />
              <h3 className="text-xl sm:text-2xl font-black text-black">Join Testnet</h3>
            </div>
            <p className="text-black/80 font-bold text-sm sm:text-base mb-4 sm:mb-5 leading-snug">
              Start building on Arthachain today!
            </p>
            <a 
              href="https://testnet.arthachain.online/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-black text-white py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg text-center hover:scale-105 transition-transform"
            >
              Launch Testnet
            </a>
          </motion.div>

          {/* Decorative Bottom Elements */}
          <div className="mt-6 sm:mt-8 flex justify-center gap-3 sm:gap-4 pb-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="w-7 h-7 sm:w-8 sm:h-8 bg-neon-cyan rounded-lg border-2 sm:border-3 border-black"
              />
            ))}
          </div>
        </div>
      </motion.aside>
    </>
  );
}