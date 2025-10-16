"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Arthachain?",
    answer: "Arthachain is India's first socially verified blockchain that combines AI-powered consensus, social graph validation, and parallel execution to deliver 22M+ TPS. It's a Layer 1 blockchain built to solve the blockchain trilemma of scalability, security, and decentralization."
  },
  {
    question: "What is SVCP (Socially Verified Consensus Protocol)?",
    answer: "SVCP is our innovative consensus mechanism that uses AI to analyze node behavior and social graphs to verify transactions. It combines trust scores with Byzantine Fault Tolerance to create a more secure and efficient consensus process than traditional proof-of-work or proof-of-stake systems."
  },
  {
    question: "How does Arthachain achieve 22M+ TPS?",
    answer: "We achieve this through a combination of dynamic sharding, parallel transaction execution, optimized EVM, and our efficient SVCP consensus mechanism. Our architecture separates execution, consensus, and data availability layers for maximum throughput."
  },
  {
    question: "Is Arthachain EVM compatible?",
    answer: "Yes! Arthachain is fully EVM-compatible with significant performance enhancements. You can deploy your existing Ethereum smart contracts on Arthachain with minimal or no modifications, while benefiting from our 100x performance improvement."
  },
  {
    question: "How can I join the testnet?",
    answer: "You can join our testnet by visiting testnet.arthachain.online. Create a wallet, request test tokens from our faucet, and start building or testing your dApps immediately. Our comprehensive documentation guides you through the entire process."
  },
  {
    question: "What makes Arthachain different from other blockchains?",
    answer: "Arthachain uniquely combines social verification with AI-powered consensus, enabling unprecedented scalability without compromising security. Our hybrid architecture, dynamic sharding, and trust-weighted SVBFT protocol set us apart from traditional blockchains."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-[#ffd4c4] via-white to-[#d4e7ff] relative overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-5" />
      
      {/* Simplified Geometric Decorations */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.3, 1] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute top-20 right-20 w-32 h-32 bg-[#ff006e]/10 rounded-full border-6 border-black/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-28 h-28 bg-[#00ffff]/10 border-6 border-black/10"
        style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 max-w-7xl">
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-black text-white px-5 sm:px-7 py-3.5 rounded-full mb-8 border-3 border-black shadow-[4px_4px_0px_rgba(0,255,255,0.3)]"
            >
              <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00ffff]" />
              <span className="font-bold text-xs sm:text-sm tracking-wider">GOT QUESTIONS?</span>
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black mb-5 leading-tight">
              Frequently Asked
              <br /> 
              <span className="relative inline-block">
                <span className="relative z-10">Questions</span>
                <span className="absolute bottom-2 left-0 right-0 h-5 sm:h-6 bg-[#ff006e] -z-10" />
              </span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-black/60 max-w-3xl mx-auto font-semibold px-4">
              Everything you need to know about Arthachain
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                bg-white rounded-[28px] border-4 border-black
                shadow-[8px_8px_0px_rgba(0,0,0,0.15)]
                overflow-hidden
                transition-all duration-200
                ${openIndex === index ? "shadow-[12px_12px_0px_rgba(0,0,0,0.2)]" : ""}
              `}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start sm:items-center justify-between p-7 sm:p-8 md:p-10 text-left hover:bg-black/5 transition-colors"
              >
                <span className="text-lg sm:text-xl md:text-2xl font-black text-black pr-4 leading-tight">
                  {faq.question}
                </span>
                <div className={`
                  flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center
                  transition-transform duration-200
                  ${openIndex === index ? "rotate-180" : ""}
                `}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 sm:px-8 md:px-10 pb-7 sm:pb-8 md:pb-10 pt-0">
                      <div className="border-t-3 border-black/10 pt-5 sm:pt-6">
                        <p className="text-base sm:text-lg md:text-xl text-black/70 font-medium leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#00ffff] to-[#00cccc] rounded-[28px] border-4 border-black shadow-[10px_10px_0px_rgba(0,0,0,0.15)] p-8 sm:p-10 md:p-12 max-w-3xl mx-auto texture-noise">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 leading-tight">
              Still have questions?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-black/70 font-semibold mb-7 sm:mb-9 px-4">
              Our team is here to help you get started with Arthachain
            </p>
            <a
              href="/contact"
              className="inline-block bg-black text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg md:text-xl border-4 border-white hover:bg-white hover:text-black hover:border-black transition-all duration-300 shadow-[4px_4px_0px_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0px_rgba(255,255,255,0.4)] hover:-translate-y-1"
            >
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}