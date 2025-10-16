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
    <section className="py-16 sm:py-20 md:py-32 bg-white relative overflow-hidden w-full">
      {/* Geometric Decorations */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
        className="absolute top-10 right-10 w-20 sm:w-32 h-20 sm:h-32 bg-[#1E4BFF]/10 rounded-full"
      />
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-10 w-16 sm:w-24 h-16 sm:h-24 bg-[#00C2A8]/10"
        style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#0F1724] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg"
          >
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C2A8]" />
            <span className="font-bold text-xs sm:text-sm tracking-wide">GOT QUESTIONS?</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0F1724] mb-4 sm:mb-6 leading-tight">
            Frequently Asked
            <br className="sm:hidden" /> Questions
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto font-medium px-4">
            Everything you need to know about Arthachain
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                bg-[#F7F9FC] rounded-2xl shadow-md hover:shadow-lg
                overflow-hidden
                transition-all duration-200
              `}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start sm:items-center justify-between p-5 sm:p-6 md:p-8 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E4BFF] focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="text-base sm:text-lg md:text-xl font-black text-[#0F1724] pr-4 leading-tight">
                  {faq.question}
                </span>
                <div className={`
                  flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1E4BFF] text-white flex items-center justify-center
                  transition-transform duration-200
                  ${openIndex === index ? "rotate-180" : ""}
                `}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
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
                    <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 pt-0">
                      <div className="border-t-2 border-gray-200 pt-4 sm:pt-5">
                        <p className="text-sm sm:text-base md:text-lg text-[#6B7280] font-medium leading-relaxed">
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
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#1E4BFF] to-[#00C2A8] rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
              Still have questions?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium mb-5 sm:mb-6 px-4">
              Our team is here to help you get started with Arthachain
            </p>
            <a
              href="/contact"
              className="inline-block btn-secondary !bg-white !text-[#1E4BFF] !border-white hover:!bg-white/90 px-8 py-4 text-base font-bold"
            >
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}