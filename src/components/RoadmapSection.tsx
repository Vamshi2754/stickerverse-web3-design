"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q1 2025",
    title: "Foundation",
    status: "completed",
    items: ["Core Protocol Development", "SVCP Consensus Implementation", "Initial Testnet Launch"],
    bgColor: "bg-[#c7f5e8]",
  },
  {
    quarter: "Q2 2025",
    title: "Enhancement",
    status: "in-progress",
    items: ["Public Testnet Rollout", "AI Behavior Scoring", "Dynamic Shard Assignment"],
    bgColor: "bg-[#ffd4c4]",
  },
  {
    quarter: "Q3 2025",
    title: "Mainnet",
    status: "upcoming",
    items: ["Mainnet Launch", "22M+ TPS Achievement", "Developer SDK Release"],
    bgColor: "bg-[#d4e7ff]",
  },
  {
    quarter: "Q4 2025",
    title: "Ecosystem",
    status: "upcoming",
    items: ["DeFi Integration", "Cross-Chain Bridges", "Global Partnerships"],
    bgColor: "bg-[#00ffff]",
  },
];

export default function RoadmapSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white relative overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black mb-5 leading-tight">
              Our 
              <span className="relative inline-block mx-3">
                <span className="relative z-10">Roadmap</span>
                <span className="absolute bottom-2 left-0 right-0 h-5 sm:h-6 bg-[#ff006e] -z-10" />
              </span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-black/60 max-w-3xl mx-auto font-semibold px-4">
              Building the future of decentralized infrastructure
            </p>
          </motion.div>
        </div>

        {/* Desktop Horizontal Scroll */}
        <div className="hidden md:block overflow-x-auto pb-10 scrollbar-hide">
          <div className="flex gap-8 min-w-max px-4">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.quarter}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`
                  ${item.bgColor} 
                  rounded-[28px] border-4 border-black
                  shadow-[8px_8px_0px_rgba(0,0,0,0.15)]
                  hover:shadow-[12px_12px_0px_rgba(0,0,0,0.2)]
                  p-9 min-w-[340px] max-w-[340px]
                  transition-all duration-200
                  texture-noise
                `}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-black text-black/70 tracking-wider">
                    {item.quarter}
                  </span>
                  {item.status === "completed" ? (
                    <CheckCircle2 className="w-7 h-7 text-black" strokeWidth={2.5} />
                  ) : item.status === "in-progress" ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Circle className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </motion.div>
                  ) : (
                    <Circle className="w-7 h-7 text-black/40" strokeWidth={2.5} />
                  )}
                </div>

                <h3 className="text-4xl font-black text-black mb-5 leading-tight">
                  {item.title}
                </h3>

                <ul className="space-y-4">
                  {item.items.map((task) => (
                    <li key={task} className="flex items-start gap-3">
                      <ArrowRight className="w-6 h-6 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-base font-bold text-black/80 leading-snug">
                        {task}
                      </span>
                    </li>
                  ))}
                </ul>

                {item.status === "in-progress" && (
                  <div className="mt-7 pt-7 border-t-3 border-black/20">
                    <div className="bg-black/10 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "75%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-black h-full rounded-full"
                      />
                    </div>
                    <p className="text-sm font-black text-black/60 mt-3">
                      75% Complete
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Stack */}
        <div className="md:hidden space-y-6">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.quarter}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                ${item.bgColor} 
                rounded-[28px] border-4 border-black
                shadow-[8px_8px_0px_rgba(0,0,0,0.15)]
                p-7 sm:p-8
                texture-noise
              `}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs sm:text-sm font-black text-black/70 tracking-wider">
                  {item.quarter}
                </span>
                {item.status === "completed" ? (
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-black" strokeWidth={2.5} />
                ) : item.status === "in-progress" ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Circle className="w-6 h-6 sm:w-7 sm:h-7 text-black" strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <Circle className="w-6 h-6 sm:w-7 sm:h-7 text-black/40" strokeWidth={2.5} />
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-black mb-4 leading-tight">
                {item.title}
              </h3>

              <ul className="space-y-3">
                {item.items.map((task) => (
                  <li key={task} className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-sm sm:text-base font-bold text-black/80 leading-snug">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>

              {item.status === "in-progress" && (
                <div className="mt-6 pt-6 border-t-3 border-black/20">
                  <div className="bg-black/10 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-black h-full rounded-full"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-black text-black/60 mt-2">
                    75% Complete
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}