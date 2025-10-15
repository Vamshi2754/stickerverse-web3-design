import { FileText, Download, BookOpen, Code, Network, Database } from "lucide-react";
import StickerCard from "@/components/StickerCard";
import FloatingShape from "@/components/FloatingShape";

export default function WhitePaperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-peach via-pastel-lavender to-pastel-mint relative overflow-hidden">
      {/* Floating Shapes */}
      <FloatingShape shape="polygon" color="bg-neon-green" size={100} top="8%" left="8%" delay={0} />
      <FloatingShape shape="circle" color="bg-neon-purple" size={90} top="40%" right="5%" delay={0.5} />
      <FloatingShape shape="square" color="bg-neon-yellow" size={70} bottom="20%" left="15%" delay={1} />

      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="bg-neon-pink p-8 rounded-3xl border-4 border-black shadow-2xl">
              <FileText size={80} className="text-black" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-black">
            White <span className="bg-neon-cyan px-4 inline-block -rotate-2">Paper</span>
          </h1>
          <p className="text-2xl text-black/80 max-w-3xl mx-auto mb-8">
            Dive deep into the technical architecture and vision of our blockchain platform.
          </p>
          <button className="bg-black text-white px-10 py-5 rounded-2xl text-xl font-bold hover:scale-110 transition-transform border-4 border-black shadow-lg flex items-center gap-3 mx-auto">
            <Download size={24} />
            Download PDF
          </button>
        </div>

        {/* Table of Contents */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-center mb-12 text-black">
            Table of <span className="bg-neon-yellow px-4 inline-block rotate-1">Contents</span>
          </h2>
          
          <StickerCard color="bg-white" className="p-10">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { section: "1. Introduction", page: "pg. 1-5" },
                { section: "2. Problem Statement", page: "pg. 6-10" },
                { section: "3. Technical Architecture", page: "pg. 11-25" },
                { section: "4. Consensus Mechanism", page: "pg. 26-35" },
                { section: "5. Security Model", page: "pg. 36-45" },
                { section: "6. Tokenomics", page: "pg. 46-55" },
                { section: "7. Governance", page: "pg. 56-65" },
                { section: "8. Roadmap & Conclusion", page: "pg. 66-72" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-5 bg-pastel-blue rounded-2xl border-4 border-black hover:scale-105 transition-transform cursor-pointer">
                  <span className="text-xl font-bold text-black">{item.section}</span>
                  <span className="text-lg font-bold text-black/60">{item.page}</span>
                </div>
              ))}
            </div>
          </StickerCard>
        </div>

        {/* Key Highlights */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-center mb-12 text-black">
            Key <span className="bg-neon-green px-4 inline-block -rotate-1">Highlights</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StickerCard color="bg-neon-cyan" className="p-8">
              <div className="bg-black text-neon-cyan p-6 rounded-3xl inline-block mb-6">
                <Code size={48} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-black">Novel Consensus</h3>
              <p className="text-lg text-black/80">
                Our unique Proof-of-Stake consensus mechanism combined with Byzantine Fault Tolerance ensures maximum security and efficiency.
              </p>
            </StickerCard>

            <StickerCard color="bg-neon-purple" className="p-8">
              <div className="bg-black text-neon-purple p-6 rounded-3xl inline-block mb-6">
                <Network size={48} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-black">Sharding Tech</h3>
              <p className="text-lg text-black/80">
                Revolutionary dynamic sharding allows infinite scalability while maintaining decentralization and security.
              </p>
            </StickerCard>

            <StickerCard color="bg-neon-pink" className="p-8">
              <div className="bg-black text-neon-pink p-6 rounded-3xl inline-block mb-6">
                <Database size={48} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-black">Cross-Chain</h3>
              <p className="text-lg text-black/80">
                Native cross-chain interoperability enables seamless asset transfers across multiple blockchain networks.
              </p>
            </StickerCard>
          </div>
        </div>

        {/* Abstract */}
        <div className="mb-20">
          <StickerCard color="bg-neon-yellow" className="p-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-black text-neon-yellow p-4 rounded-2xl">
                <BookOpen size={40} />
              </div>
              <div>
                <h2 className="text-5xl font-black mb-4 text-black">Abstract</h2>
                <p className="text-sm font-bold text-black/60">Last Updated: March 2024 | Version 2.1</p>
              </div>
            </div>
            
            <div className="space-y-6 text-lg text-black/80 leading-relaxed">
              <p>
                This white paper presents a comprehensive overview of our next-generation blockchain platform designed to address the scalability trilemma while maintaining true decentralization. We introduce a novel consensus mechanism that combines Proof-of-Stake with Byzantine Fault Tolerance, achieving unprecedented transaction throughput without sacrificing security.
              </p>
              <p>
                Our innovative sharding architecture dynamically adjusts to network demands, allowing the platform to scale horizontally as adoption grows. Each shard maintains its own state while the beacon chain coordinates cross-shard communication, enabling parallel processing of transactions.
              </p>
              <p>
                The platform incorporates advanced cryptographic techniques including zero-knowledge proofs for privacy-preserving transactions, threshold signatures for secure multi-party computation, and verifiable delay functions for randomness generation.
              </p>
              <p>
                Economic incentives are carefully designed to align validator behavior with network health, while our governance model ensures community-driven evolution of the protocol. Smart contract execution is optimized through a custom virtual machine that achieves EVM compatibility while reducing gas costs by up to 90%.
              </p>
            </div>
          </StickerCard>
        </div>

        {/* Technical Specifications */}
        <div>
          <h2 className="text-5xl font-black text-center mb-12 text-black">
            Technical <span className="bg-neon-blue px-4 inline-block rotate-2">Specs</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Performance Metrics",
                color: "bg-neon-green",
                items: [
                  "Throughput: 10,000+ TPS",
                  "Finality: <10 seconds",
                  "Block Time: 2 seconds",
                  "Network Latency: <500ms"
                ]
              },
              {
                title: "Security Features",
                color: "bg-electric-orange",
                items: [
                  "256-bit encryption",
                  "Multi-signature support",
                  "Hardware wallet integration",
                  "Formal verification tools"
                ]
              }
            ].map((spec, index) => (
              <StickerCard key={index} color={spec.color} className="p-10">
                <h3 className="text-4xl font-black mb-8 text-black">{spec.title}</h3>
                <ul className="space-y-4">
                  {spec.items.map((item, i) => (
                    <li key={i} className="text-lg text-black/80 flex items-center gap-3">
                      <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </StickerCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}