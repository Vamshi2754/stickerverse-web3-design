import { Zap, Shield, Cpu, Layers, TrendingUp, Lock } from "lucide-react";
import StickerCard from "@/components/StickerCard";
import FloatingShape from "@/components/FloatingShape";

export default function FeaturesPage() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing fast transaction speeds with our optimized blockchain infrastructure. Process thousands of transactions per second.",
      color: "bg-neon-yellow",
      stats: "10,000+ TPS"
    },
    {
      icon: Shield,
      title: "Ultra Secure",
      description: "Military-grade encryption and advanced security protocols keep your assets safe. Multi-layer security architecture.",
      color: "bg-neon-green",
      stats: "99.99% Uptime"
    },
    {
      icon: Cpu,
      title: "Smart Contracts",
      description: "Deploy and execute smart contracts with ease. Full EVM compatibility and advanced development tools.",
      color: "bg-neon-cyan",
      stats: "100K+ Contracts"
    },
    {
      icon: Layers,
      title: "Scalable",
      description: "Built to scale infinitely with our innovative sharding technology. Grow without limits.",
      color: "bg-neon-purple",
      stats: "Infinite Scale"
    },
    {
      icon: TrendingUp,
      title: "Low Fees",
      description: "Enjoy minimal transaction costs. Our efficient architecture keeps fees near zero.",
      color: "bg-neon-pink",
      stats: "$0.001 avg"
    },
    {
      icon: Lock,
      title: "Decentralized",
      description: "True decentralization with thousands of validators worldwide. No single point of failure.",
      color: "bg-neon-blue",
      stats: "5000+ Nodes"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-mint via-pastel-peach to-pastel-blue relative overflow-hidden">
      {/* Floating Shapes */}
      <FloatingShape shape="circle" color="bg-neon-pink" size={120} top="5%" right="5%" delay={0} />
      <FloatingShape shape="triangle" color="bg-neon-yellow" size={90} top="50%" left="3%" delay={0.5} />
      <FloatingShape shape="square" color="bg-neon-cyan" size={80} bottom="10%" right="10%" delay={1} />

      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-black">
            Powerful <span className="bg-neon-cyan px-4 inline-block rotate-2">Features</span>
          </h1>
          <p className="text-2xl text-black/80 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale your Web3 applications.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <StickerCard key={index} color={feature.color} className="p-8 hover:scale-105 transition-transform duration-300">
                <div className="bg-black text-white p-6 rounded-3xl inline-block mb-6">
                  <Icon size={48} />
                </div>
                <h3 className="text-3xl font-black mb-4 text-black">{feature.title}</h3>
                <p className="text-lg text-black/80 mb-6">{feature.description}</p>
                <div className="bg-black text-white px-6 py-3 rounded-2xl inline-block font-bold">
                  {feature.stats}
                </div>
              </StickerCard>
            );
          })}
        </div>

        {/* Technical Specs */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-center mb-12 text-black">
            Technical <span className="bg-neon-pink px-4 inline-block -rotate-1">Specs</span>
          </h2>
          
          <StickerCard color="bg-pastel-lavender" className="p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Consensus", value: "PoS + BFT" },
                { label: "Block Time", value: "2 seconds" },
                { label: "Finality", value: "< 10 sec" },
                { label: "Throughput", value: "10K+ TPS" },
                { label: "Languages", value: "Solidity, Rust" },
                { label: "VM", value: "EVM Compatible" },
                { label: "Storage", value: "IPFS + Custom" },
                { label: "Network", value: "Peer-to-Peer" },
              ].map((spec, index) => (
                <div key={index} className="bg-white p-6 rounded-3xl border-4 border-black shadow-lg">
                  <div className="text-sm font-bold text-black/60 mb-2">{spec.label}</div>
                  <div className="text-2xl font-black text-black">{spec.value}</div>
                </div>
              ))}
            </div>
          </StickerCard>
        </div>

        {/* Integration Section */}
        <div>
          <h2 className="text-5xl font-black text-center mb-12 text-black">
            Easy <span className="bg-neon-green px-4 inline-block rotate-1">Integration</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <StickerCard color="bg-neon-yellow" className="p-10">
              <h3 className="text-4xl font-black mb-6 text-black">Developer Friendly</h3>
              <ul className="space-y-4 text-lg text-black/80">
                <li className="flex items-center gap-3">
                  <span className="bg-black text-neon-yellow px-3 py-1 rounded-lg font-bold">✓</span>
                  Comprehensive SDK & APIs
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-black text-neon-yellow px-3 py-1 rounded-lg font-bold">✓</span>
                  Detailed documentation
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-black text-neon-yellow px-3 py-1 rounded-lg font-bold">✓</span>
                  Active developer community
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-black text-neon-yellow px-3 py-1 rounded-lg font-bold">✓</span>
                  24/7 technical support
                </li>
              </ul>
            </StickerCard>

            <StickerCard color="bg-neon-blue" className="p-10">
              <h3 className="text-4xl font-black mb-6 text-black">Ecosystem Tools</h3>
              <ul className="space-y-4 text-lg text-black/80">
                <li className="flex items-center gap-3">
                  <span className="bg-black text-neon-blue px-3 py-1 rounded-lg font-bold">✓</span>
                  Block Explorer
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-black text-neon-blue px-3 py-1 rounded-lg font-bold">✓</span>
                  Wallet Integration
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-black text-neon-blue px-3 py-1 rounded-lg font-bold">✓</span>
                  Analytics Dashboard
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-black text-neon-blue px-3 py-1 rounded-lg font-bold">✓</span>
                  Testing Framework
                </li>
              </ul>
            </StickerCard>
          </div>
        </div>
      </div>
    </div>
  );
}