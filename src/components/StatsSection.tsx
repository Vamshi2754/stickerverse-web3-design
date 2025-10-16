"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Blocks, Zap } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "22M+",
    label: "Transactions Per Second",
    bgColor: "bg-[#00ffff]",
    delay: 0,
  },
  {
    icon: Users,
    value: "10K+",
    label: "Active Developers",
    bgColor: "bg-[#c7f5e8]",
    delay: 0.1,
  },
  {
    icon: Blocks,
    value: "100M+",
    label: "Transactions Processed",
    bgColor: "bg-[#ffd4c4]",
    delay: 0.2,
  },
  {
    icon: TrendingUp,
    value: "99.99%",
    label: "Network Uptime",
    bgColor: "bg-[#ff006e]",
    delay: 0.3,
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-[#d4e7ff] via-white to-[#c7f5e8] relative overflow-hidden w-full">
      {/* Simplified Geometric Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-48 h-48 border-8 border-black rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-40 h-40 border-8 border-black"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black mb-5 leading-tight">
            The Numbers Speak
            <br className="sm:hidden" /> 
            <span className="relative inline-block">
              <span className="relative z-10">For Themselves</span>
              <span className="absolute bottom-2 left-0 right-0 h-5 sm:h-6 bg-[#00ffff] -z-10" />
            </span>
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-black/60 font-semibold px-4">
            Real-time metrics from the Arthachain network
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
              whileHover={{ 
                scale: 1.06, 
                y: -12,
                rotate: 3,
                transition: { duration: 0.3 }
              }}
              className={`
                ${stat.bgColor}
                rounded-[28px] border-4 border-black
                shadow-[8px_8px_0px_rgba(0,0,0,0.2)]
                hover:shadow-[14px_14px_0px_rgba(0,0,0,0.25)]
                p-8 sm:p-10 lg:p-12
                text-center
                transition-all duration-200
                texture-noise
                relative
              `}
            >
              <div className="relative z-10">
                <div className="bg-black text-white p-4 sm:p-5 rounded-2xl inline-flex mb-5 sm:mb-7 border-3 border-white shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
                  <stat.icon className="w-7 h-7 sm:w-9 sm:h-9" strokeWidth={2.5} />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-black text-black mb-3 sm:mb-4"
                >
                  {stat.value}
                </motion.div>
                
                <p className="text-sm sm:text-base lg:text-lg font-bold text-black/70 leading-tight px-2">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Bar - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 sm:mt-20 lg:mt-24 bg-black text-white rounded-[28px] border-4 border-black shadow-[10px_10px_0px_rgba(0,255,255,0.2)] p-8 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center">
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00ffff] mb-2">0.5s</div>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-white/70">Block Time</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00ffff] mb-2">2s</div>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-white/70">Finality</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00ffff] mb-2">64+</div>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-white/70">Shards</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00ffff] mb-2">$0.001</div>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-white/70">Avg Gas Fee</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}