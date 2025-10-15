import { TestTube, Zap, Download, Copy, CheckCircle } from "lucide-react";
import StickerCard from "@/components/StickerCard";
import FloatingShape from "@/components/FloatingShape";

export default function TestnetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-blue via-pastel-peach to-pastel-lavender relative overflow-hidden">
      {/* Floating Shapes */}
      <FloatingShape shape="square" color="bg-neon-green" size={100} top="10%" left="10%" delay={0} />
      <FloatingShape shape="circle" color="bg-neon-pink" size={90} top="50%" right="8%" delay={0.5} />
      <FloatingShape shape="polygon" color="bg-neon-yellow" size={110} bottom="10%" left="5%" delay={1} />

      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="bg-neon-blue p-8 rounded-3xl border-4 border-black shadow-2xl animate-bounce">
              <TestTube size={80} className="text-black" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-black">
            Test <span className="bg-neon-cyan px-4 inline-block rotate-2">Network</span>
          </h1>
          <p className="text-2xl text-black/80 max-w-3xl mx-auto">
            Experiment, build, and test your applications in a risk-free environment.
          </p>
        </div>

        {/* Network Status */}
        <div className="mb-20">
          <StickerCard color="bg-neon-green" className="p-12">
            <div className="flex items-center justify-between flex-wrap gap-8">
              <div>
                <h2 className="text-5xl font-black text-black mb-4">Network Status</h2>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-2xl font-bold text-black">All Systems Operational</span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Uptime", value: "99.9%" },
                  { label: "TPS", value: "8,542" },
                  { label: "Validators", value: "4,821" },
                  { label: "Block Height", value: "2.4M" },
                ].map((stat, index) => (
                  <div key={index} className="bg-black text-neon-green p-6 rounded-2xl text-center">
                    <div className="text-3xl font-black mb-1">{stat.value}</div>
                    <div className="text-sm font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </StickerCard>
        </div>

        {/* Faucet Section */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-center mb-12 text-black">
            Get Test <span className="bg-neon-yellow px-4 inline-block -rotate-1">Tokens</span>
          </h2>
          
          <StickerCard color="bg-neon-yellow" className="p-12">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-6 mb-8">
                <div className="bg-black text-neon-yellow p-6 rounded-3xl">
                  <Zap size={60} />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-black">Testnet Faucet</h3>
                  <p className="text-xl text-black/80 mt-2">Receive free test tokens instantly</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="text-xl font-bold text-black block mb-3">Your Wallet Address</label>
                  <div className="flex gap-3">
                    <input 
                      type="text" 
                      placeholder="0x..." 
                      className="flex-1 p-5 rounded-2xl border-4 border-black text-lg font-mono focus:outline-none focus:ring-4 focus:ring-neon-cyan"
                    />
                    <button className="bg-black text-white px-8 py-5 rounded-2xl font-bold hover:scale-105 transition-transform">
                      Request
                    </button>
                  </div>
                </div>
                
                <div className="bg-black text-neon-yellow p-6 rounded-2xl">
                  <p className="font-bold">💧 Rate Limit: 1 request per 24 hours</p>
                  <p className="font-bold">💰 Amount: 10 TEST tokens per request</p>
                </div>
              </div>
            </div>
          </StickerCard>
        </div>

        {/* Network Configuration */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-center mb-12 text-black">
            Network <span className="bg-neon-pink px-4 inline-block rotate-1">Configuration</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <StickerCard color="bg-neon-purple" className="p-10">
              <h3 className="text-4xl font-black mb-8 text-black">Connection Details</h3>
              <div className="space-y-6">
                {[
                  { label: "Network Name", value: "Web3Hub Testnet" },
                  { label: "RPC URL", value: "https://testnet-rpc.web3hub.io" },
                  { label: "Chain ID", value: "8888" },
                  { label: "Currency", value: "TEST" },
                  { label: "Explorer", value: "https://testnet.web3hub.io" },
                ].map((config, index) => (
                  <div key={index} className="bg-white p-5 rounded-2xl border-4 border-black">
                    <div className="text-sm font-bold text-black/60 mb-2">{config.label}</div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-lg font-mono text-black truncate">{config.value}</div>
                      <button className="bg-black text-white p-2 rounded-lg hover:scale-110 transition-transform">
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </StickerCard>

            <StickerCard color="bg-neon-cyan" className="p-10">
              <h3 className="text-4xl font-black mb-8 text-black">Add to Wallet</h3>
              <div className="space-y-6">
                <p className="text-lg text-black/80">
                  Easily add the testnet to your wallet with one click using these buttons:
                </p>
                
                <div className="space-y-4">
                  {["MetaMask", "WalletConnect", "Coinbase Wallet", "Trust Wallet"].map((wallet, index) => (
                    <button 
                      key={index}
                      className="w-full bg-black text-white p-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform flex items-center justify-between"
                    >
                      <span>{wallet}</span>
                      <Download size={24} />
                    </button>
                  ))}
                </div>
              </div>
            </StickerCard>
          </div>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-5xl font-black text-center mb-12 text-black">
            Testnet <span className="bg-neon-blue px-4 inline-block -rotate-2">Features</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Fast Transactions",
                description: "Same performance as mainnet with 2-second block times",
                color: "bg-neon-yellow"
              },
              {
                icon: "🔄",
                title: "Regular Resets",
                description: "Network resets monthly for clean testing environment",
                color: "bg-neon-green"
              },
              {
                icon: "🎯",
                title: "Full Featured",
                description: "Complete parity with mainnet for accurate testing",
                color: "bg-neon-pink"
              },
              {
                icon: "🔍",
                title: "Block Explorer",
                description: "Detailed transaction and contract inspection tools",
                color: "bg-neon-blue"
              },
              {
                icon: "📊",
                title: "Analytics",
                description: "Real-time network metrics and performance data",
                color: "bg-neon-purple"
              },
              {
                icon: "🛠️",
                title: "Dev Tools",
                description: "Integrated debugging and testing utilities",
                color: "bg-electric-orange"
              },
            ].map((feature, index) => (
              <StickerCard key={index} color={feature.color} className="p-8 text-center">
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-3xl font-black mb-4 text-black">{feature.title}</h3>
                <p className="text-lg text-black/80">{feature.description}</p>
              </StickerCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}