"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q1 2025",
    title: "Foundation",
    status: "completed",
    items: ["Core Protocol Development", "SVCP Consensus Implementation", "Initial Testnet Launch"],
    bgColor: "bg-[#00ffff]",
  },
  {
    quarter: "Q2 2025",
    title: "Enhancement",
    status: "in-progress",
    items: ["Public Testnet Rollout", "AI Behavior Scoring", "Dynamic Shard Assignment"],
    bgColor: "bg-[#00ff7f]",
  },
  {
    quarter: "Q3 2025",
    title: "Mainnet",
    status: "upcoming",
    items: ["Mainnet Launch", "22M+ TPS Achievement", "Developer SDK Release"],
    bgColor: "bg-[#ffd500]",
  },
  {
    quarter: "Q4 2025",
    title: "Ecosystem",
    status: "upcoming",
    items: ["DeFi Integration", "Cross-Chain Bridges", "Global Partnerships"],
    bgColor: "bg-[#ff006e]",
  },
];

export default function RoadmapSection() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-[#d4e7ff] to-[#e8d4ff] relative overflow-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black mb-4 sm:mb-6">
            Our Roadmap
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-black/70 max-w-3xl mx-auto font-medium px-4">
            Building the future of decentralized infrastructure
          </p>
        </div>

        {/* Desktop Horizontal Scroll */}
        <div className="hidden md:block overflow-x-auto pb-8 scrollbar-hide">
          <div className="flex gap-6 min-w-max px-4">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.quarter}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`
                  ${item.bgColor} 
                  rounded-[24px] border-4 border-black
                  shadow-[6px_6px_0px_rgba(0,0,0,0.1)]
                  hover:shadow-[10px_10px_0px_rgba(0,0,0,0.15)]
                  p-8 min-w-[320px] max-w-[320px]
                  transition-all duration-200
                  texture-noise
                `}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-black text-black/60 tracking-wider">
                    {item.quarter}
                  </span>
                  {item.status === "completed" ? (
                    <CheckCircle2 className="w-6 h-6 text-black" />
                  ) : item.status === "in-progress" ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Circle className="w-6 h-6 text-black" />
                    </motion.div>
                  ) : (
                    <Circle className="w-6 h-6 text-black/40" />
                  )}
                </div>

                <h3 className="text-3xl font-black text-black mb-4">
                  {item.title}
                </h3>

                <ul className="space-y-3">
                  {item.items.map((task) => (
                    <li key={task} className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-base font-bold text-black/80">
                        {task}
                      </span>
                    </li>
                  ))}
                </ul>

                {item.status === "in-progress" && (
                  <div className="mt-6 pt-6 border-t-2 border-black/20">
                    <div className="bg-black/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "75%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-black h-full rounded-full"
                      />
                    </div>
                    <p className="text-sm font-bold text-black/60 mt-2">
                      75% Complete
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Stack */}
        <div className="md:hidden space-y-4 sm:space-y-6">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.quarter}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                ${item.bgColor} 
                rounded-[24px] border-4 border-black
                shadow-[6px_6px_0px_rgba(0,0,0,0.1)]
                p-5 sm:p-6
                texture-noise
              `}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs sm:text-sm font-black text-black/60 tracking-wider">
                  {item.quarter}
                </span>
                {item.status === "completed" ? (
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                ) : item.status === "in-progress" ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Circle className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </motion.div>
                ) : (
                  <Circle className="w-5 h-5 sm:w-6 sm:h-6 text-black/40" />
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-black mb-3 sm:mb-4">
                {item.title}
              </h3>

              <ul className="space-y-2 sm:space-y-3">
                {item.items.map((task) => (
                  <li key={task} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-black/80">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>

              {item.status === "in-progress" && (
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2 border-black/20">
                  <div className="bg-black/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-black h-full rounded-full"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-black/60 mt-2">
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