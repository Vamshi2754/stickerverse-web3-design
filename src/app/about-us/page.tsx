import { Rocket, Users, Globe, Target } from "lucide-react";
import StickerCard from "@/components/StickerCard";
import FloatingShape from "@/components/FloatingShape";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-blue via-pastel-mint to-pastel-peach relative overflow-hidden">
      {/* Floating Shapes */}
      <FloatingShape shape="circle" color="bg-neon-purple" size={100} top="10%" left="5%" delay={0} />
      <FloatingShape shape="square" color="bg-neon-yellow" size={80} top="60%" right="8%" delay={0.5} />
      <FloatingShape shape="polygon" color="bg-neon-cyan" size={120} bottom="15%" left="10%" delay={1} />

      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-black">
            About <span className="bg-neon-pink px-4 inline-block -rotate-2">Us</span>
          </h1>
          <p className="text-2xl text-black/80 max-w-3xl mx-auto">
            Building the future of decentralized technology, one block at a time.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <StickerCard color="bg-neon-cyan" className="p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-black text-neon-cyan p-8 rounded-3xl">
                <Rocket size={80} />
              </div>
              <div>
                <h2 className="text-4xl font-black mb-4 text-black">Our Mission</h2>
                <p className="text-xl text-black/90 leading-relaxed">
                  We're on a mission to democratize blockchain technology and make Web3 accessible to everyone. 
                  Our platform empowers developers and users to build and interact with decentralized applications 
                  seamlessly, securely, and efficiently.
                </p>
              </div>
            </div>
          </StickerCard>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-center mb-12 text-black">
            Our Core <span className="bg-neon-green px-4 inline-block rotate-2">Values</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StickerCard color="bg-neon-yellow" className="p-8 text-center">
              <div className="bg-black text-neon-yellow p-6 rounded-3xl inline-block mb-6">
                <Users size={60} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-black">Community First</h3>
              <p className="text-lg text-black/80">
                We believe in the power of community-driven development and governance.
              </p>
            </StickerCard>

            <StickerCard color="bg-neon-purple" className="p-8 text-center">
              <div className="bg-black text-neon-purple p-6 rounded-3xl inline-block mb-6">
                <Globe size={60} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-black">Global Access</h3>
              <p className="text-lg text-black/80">
                Decentralization means everyone, everywhere can participate and benefit.
              </p>
            </StickerCard>

            <StickerCard color="bg-neon-pink" className="p-8 text-center">
              <div className="bg-black text-neon-pink p-6 rounded-3xl inline-block mb-6">
                <Target size={60} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-black">Innovation</h3>
              <p className="text-lg text-black/80">
                We're constantly pushing boundaries to create the next generation of Web3 solutions.
              </p>
            </StickerCard>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <StickerCard color="bg-pastel-lavender" className="p-12">
            <h2 className="text-5xl font-black mb-8 text-black text-center">
              Our <span className="bg-neon-blue px-4 inline-block -rotate-1">Team</span>
            </h2>
            <p className="text-xl text-black/80 text-center max-w-4xl mx-auto mb-12">
              A diverse group of blockchain enthusiasts, developers, and innovators from around the globe, 
              united by a shared vision of a decentralized future.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { role: "Founders", count: "8", color: "bg-neon-cyan" },
                { role: "Developers", count: "45+", color: "bg-neon-green" },
                { role: "Designers", count: "12", color: "bg-neon-pink" },
                { role: "Community", count: "10K+", color: "bg-neon-yellow" },
              ].map((stat, index) => (
                <div key={index} className={`${stat.color} p-8 rounded-3xl border-4 border-black shadow-lg text-center`}>
                  <div className="text-5xl font-black text-black mb-2">{stat.count}</div>
                  <div className="text-xl font-bold text-black">{stat.role}</div>
                </div>
              ))}
            </div>
          </StickerCard>
        </div>

        {/* History Timeline */}
        <div>
          <h2 className="text-5xl font-black text-center mb-12 text-black">
            Our <span className="bg-electric-orange px-4 inline-block rotate-1">Journey</span>
          </h2>
          
          <div className="space-y-6">
            {[
              { year: "2020", title: "Foundation", desc: "Started with a vision to revolutionize blockchain" },
              { year: "2021", title: "First Product", desc: "Launched our flagship decentralized platform" },
              { year: "2022", title: "Global Expansion", desc: "Expanded to 50+ countries with 1M+ users" },
              { year: "2023", title: "Major Partnerships", desc: "Partnered with leading Web3 organizations" },
              { year: "2024", title: "Innovation Hub", desc: "Opened our global innovation and research center" },
            ].map((milestone, index) => (
              <StickerCard 
                key={index} 
                color={index % 2 === 0 ? "bg-neon-blue" : "bg-neon-green"}
                className="p-8"
              >
                <div className="flex items-center gap-6">
                  <div className="bg-black text-white p-6 rounded-3xl min-w-[120px] text-center">
                    <div className="text-4xl font-black">{milestone.year}</div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black mb-2 text-black">{milestone.title}</h3>
                    <p className="text-xl text-black/80">{milestone.desc}</p>
                  </div>
                </div>
              </StickerCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}