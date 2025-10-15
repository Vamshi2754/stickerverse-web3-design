import { BookOpen, Code, Terminal, Package, Rocket, Settings } from "lucide-react";
import StickerCard from "@/components/StickerCard";
import FloatingShape from "@/components/FloatingShape";

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-lavender via-pastel-mint to-pastel-blue relative overflow-hidden">
      {/* Floating Shapes */}
      <FloatingShape shape="triangle" color="bg-neon-pink" size={110} top="12%" right="8%" delay={0} />
      <FloatingShape shape="circle" color="bg-neon-yellow" size={85} top="55%" left="5%" delay={0.5} />
      <FloatingShape shape="polygon" color="bg-neon-cyan" size={95} bottom="15%" right="12%" delay={1} />

      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-black">
            Docs & <span className="bg-neon-purple px-4 inline-block rotate-2">Guides</span>
          </h1>
          <p className="text-2xl text-black/80 max-w-3xl mx-auto">
            Everything you need to get started building on our platform.
          </p>
        </div>

        {/* Quick Start */}
        <div className="mb-20">
          <StickerCard color="bg-neon-cyan" className="p-12">
            <div className="flex items-center gap-6 mb-8">
              <div className="bg-black text-neon-cyan p-6 rounded-3xl">
                <Rocket size={60} />
              </div>
              <div>
                <h2 className="text-5xl font-black text-black">Quick Start</h2>
                <p className="text-xl text-black/80 mt-2">Get up and running in 5 minutes</p>
              </div>
            </div>
            
            <div className="bg-black text-neon-cyan p-8 rounded-3xl font-mono text-lg space-y-3">
              <div>$ npm install @web3hub/sdk</div>
              <div>$ web3hub init my-project</div>
              <div>$ cd my-project && web3hub dev</div>
            </div>
          </StickerCard>
        </div>

        {/* Documentation Categories */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-center mb-12 text-black">
            Browse <span className="bg-neon-green px-4 inline-block -rotate-1">Categories</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Getting Started",
                description: "Introduction, installation, and basic concepts",
                color: "bg-neon-yellow",
                guides: "12 guides"
              },
              {
                icon: Code,
                title: "API Reference",
                description: "Complete API documentation with examples",
                color: "bg-neon-pink",
                guides: "45 endpoints"
              },
              {
                icon: Terminal,
                title: "CLI Tools",
                description: "Command-line interface and automation",
                color: "bg-neon-purple",
                guides: "8 commands"
              },
              {
                icon: Package,
                title: "SDK Libraries",
                description: "Client libraries for multiple languages",
                color: "bg-neon-blue",
                guides: "5 languages"
              },
              {
                icon: Settings,
                title: "Configuration",
                description: "Network setup and advanced configuration",
                color: "bg-neon-green",
                guides: "10 guides"
              },
              {
                icon: Rocket,
                title: "Tutorials",
                description: "Step-by-step project walkthroughs",
                color: "bg-electric-orange",
                guides: "15 tutorials"
              },
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <StickerCard 
                  key={index} 
                  color={category.color} 
                  className="p-8 hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="bg-black text-white p-6 rounded-3xl inline-block mb-6">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-3xl font-black mb-3 text-black">{category.title}</h3>
                  <p className="text-lg text-black/80 mb-4">{category.description}</p>
                  <div className="bg-black text-white px-5 py-2 rounded-2xl inline-block text-sm font-bold">
                    {category.guides}
                  </div>
                </StickerCard>
              );
            })}
          </div>
        </div>

        {/* Popular Guides */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-center mb-12 text-black">
            Popular <span className="bg-neon-yellow px-4 inline-block rotate-1">Guides</span>
          </h2>
          
          <div className="space-y-6">
            {[
              { title: "Building Your First Smart Contract", time: "15 min read", difficulty: "Beginner", color: "bg-neon-cyan" },
              { title: "Deploying to Testnet", time: "10 min read", difficulty: "Beginner", color: "bg-neon-green" },
              { title: "Creating a Token", time: "20 min read", difficulty: "Intermediate", color: "bg-neon-purple" },
              { title: "Building a DeFi Protocol", time: "45 min read", difficulty: "Advanced", color: "bg-neon-pink" },
              { title: "Implementing Cross-Chain Bridges", time: "60 min read", difficulty: "Advanced", color: "bg-neon-blue" },
            ].map((guide, index) => (
              <StickerCard key={index} color={guide.color} className="p-8 hover:scale-[1.02] transition-transform cursor-pointer">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-black mb-2">{guide.title}</h3>
                    <div className="flex gap-4 text-lg text-black/70">
                      <span>⏱️ {guide.time}</span>
                      <span>📊 {guide.difficulty}</span>
                    </div>
                  </div>
                  <div className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg">
                    Read →
                  </div>
                </div>
              </StickerCard>
            ))}
          </div>
        </div>

        {/* Code Examples */}
        <div>
          <h2 className="text-5xl font-black text-center mb-12 text-black">
            Code <span className="bg-neon-pink px-4 inline-block -rotate-2">Examples</span>
          </h2>
          
          <StickerCard color="bg-pastel-beige" className="p-10">
            <h3 className="text-4xl font-black mb-6 text-black">Connect Wallet Example</h3>
            <div className="bg-black text-green-400 p-8 rounded-3xl font-mono overflow-x-auto">
              <pre className="text-sm md:text-base">
{`import { Web3Hub } from '@web3hub/sdk';

// Initialize the SDK
const web3 = new Web3Hub({
  network: 'mainnet',
  apiKey: process.env.API_KEY
});

// Connect wallet
async function connectWallet() {
  try {
    const wallet = await web3.connect();
    console.log('Connected:', wallet.address);
    return wallet;
  } catch (error) {
    console.error('Connection failed:', error);
  }
}

// Execute transaction
async function sendTransaction(to, amount) {
  const tx = await web3.sendTransaction({
    to: to,
    value: amount,
    gasLimit: 21000
  });
  return tx.hash;
}`}
              </pre>
            </div>
          </StickerCard>
        </div>
      </div>
    </div>
  );
}