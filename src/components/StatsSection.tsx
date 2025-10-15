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
    bgColor: "bg-[#00ff7f]",
    delay: 0.1,
  },
  {
    icon: Blocks,
    value: "100M+",
    label: "Transactions Processed",
    bgColor: "bg-[#ffd500]",
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
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#d4e7ff] to-[#c7f5e8] relative overflow-hidden w-full">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute -top-10 -right-10 w-40 sm:w-60 h-40 sm:h-60 border-8 border-black rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            x: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
          className="absolute -bottom-10 -left-10 w-32 sm:w-48 h-32 sm:h-48 border-8 border-black"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute top-1/2 left-1/4 w-24 sm:w-36 h-24 sm:h-36 border-8 border-black rotate-45"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-3 sm:mb-4 leading-tight">
            The Numbers Speak
            <br className="sm:hidden" /> For Themselves
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/70 font-medium px-4">
            Real-time metrics from the Arthachain network
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
              whileHover={{ 
                scale: 1.05, 
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              className={`
                ${stat.bgColor}
                rounded-[24px] border-4 border-black
                shadow-[6px_6px_0px_rgba(0,0,0,0.15)]
                hover:shadow-[10px_10px_0px_rgba(0,0,0,0.2)]
                p-6 sm:p-8 lg:p-10
                text-center
                transition-all duration-200
                texture-noise
                relative
              `}
            >
              {/* Icon Background Circle */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
                className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-black/10 rounded-full"
              />

              <div className="relative z-10">
                <div className="bg-black text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl inline-flex mb-4 sm:mb-6 border-3 border-white">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-2 sm:mb-3"
                >
                  {stat.value}
                </motion.div>
                
                <p className="text-xs sm:text-sm lg:text-base font-bold text-black/80 leading-tight px-2">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 sm:mt-14 lg:mt-16 bg-black text-white rounded-[24px] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.1)] p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00ffff] mb-1 sm:mb-2">0.5s</div>
              <p className="text-xs sm:text-sm lg:text-base font-bold text-white/70">Block Time</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00ff7f] mb-1 sm:mb-2">2s</div>
              <p className="text-xs sm:text-sm lg:text-base font-bold text-white/70">Finality</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#ffd500] mb-1 sm:mb-2">64+</div>
              <p className="text-xs sm:text-sm lg:text-base font-bold text-white/70">Shards</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#ff006e] mb-1 sm:mb-2">$0.001</div>
              <p className="text-xs sm:text-sm lg:text-base font-bold text-white/70">Avg Gas Fee</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}