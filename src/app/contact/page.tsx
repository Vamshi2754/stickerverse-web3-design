import { Mail, MessageSquare, MapPin, Phone, Send, Globe } from "lucide-react";
import StickerCard from "@/components/StickerCard";
import FloatingShape from "@/components/FloatingShape";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-mint via-pastel-peach to-pastel-blue relative overflow-hidden">
      {/* Floating Shapes */}
      <FloatingShape shape="polygon" color="bg-neon-purple" size={100} top="8%" right="10%" delay={0} />
      <FloatingShape shape="circle" color="bg-neon-yellow" size={85} top="45%" left="8%" delay={0.5} />
      <FloatingShape shape="triangle" color="bg-neon-pink" size={95} bottom="12%" right="15%" delay={1} />

      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-black">
            Get in <span className="bg-neon-green px-4 inline-block -rotate-2">Touch</span>
          </h1>
          <p className="text-2xl text-black/80 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Contact Form */}
          <StickerCard color="bg-neon-cyan" className="p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-black text-neon-cyan p-4 rounded-2xl">
                <MessageSquare size={40} />
              </div>
              <h2 className="text-4xl font-black text-black">Send Message</h2>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="text-lg font-bold text-black block mb-3">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full p-5 rounded-2xl border-4 border-black text-lg focus:outline-none focus:ring-4 focus:ring-neon-yellow"
                />
              </div>
              
              <div>
                <label className="text-lg font-bold text-black block mb-3">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full p-5 rounded-2xl border-4 border-black text-lg focus:outline-none focus:ring-4 focus:ring-neon-yellow"
                />
              </div>
              
              <div>
                <label className="text-lg font-bold text-black block mb-3">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?" 
                  className="w-full p-5 rounded-2xl border-4 border-black text-lg focus:outline-none focus:ring-4 focus:ring-neon-yellow"
                />
              </div>
              
              <div>
                <label className="text-lg font-bold text-black block mb-3">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Tell us more about your inquiry..." 
                  className="w-full p-5 rounded-2xl border-4 border-black text-lg focus:outline-none focus:ring-4 focus:ring-neon-yellow resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-black text-white p-5 rounded-2xl text-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3"
              >
                <Send size={24} />
                Send Message
              </button>
            </form>
          </StickerCard>

          {/* Contact Info */}
          <div className="space-y-6">
            <StickerCard color="bg-neon-yellow" className="p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-black text-neon-yellow p-4 rounded-2xl">
                  <Mail size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black">Email Us</h3>
                  <p className="text-lg text-black/80">We'll respond within 24 hours</p>
                </div>
              </div>
              <a href="mailto:hello@web3hub.io" className="text-2xl font-bold text-black hover:text-black/70 transition-colors">
                hello@web3hub.io
              </a>
            </StickerCard>

            <StickerCard color="bg-neon-pink" className="p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-black text-neon-pink p-4 rounded-2xl">
                  <MessageSquare size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black">Live Chat</h3>
                  <p className="text-lg text-black/80">Available 24/7</p>
                </div>
              </div>
              <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
                Start Chat
              </button>
            </StickerCard>

            <StickerCard color="bg-neon-purple" className="p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-black text-neon-purple p-4 rounded-2xl">
                  <Phone size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black">Call Us</h3>
                  <p className="text-lg text-black/80">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>
              <a href="tel:+1234567890" className="text-2xl font-bold text-black hover:text-black/70 transition-colors">
                +1 (234) 567-890
              </a>
            </StickerCard>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-center mb-12 text-black">
            Our <span className="bg-neon-blue px-4 inline-block rotate-1">Locations</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: "San Francisco",
                address: "123 Market Street, Suite 400",
                country: "United States",
                color: "bg-neon-green"
              },
              {
                city: "London",
                address: "456 Oxford Street, Floor 5",
                country: "United Kingdom",
                color: "bg-electric-orange"
              },
              {
                city: "Singapore",
                address: "789 Marina Bay, Tower A",
                country: "Singapore",
                color: "bg-neon-blue"
              },
            ].map((office, index) => (
              <StickerCard key={index} color={office.color} className="p-8">
                <div className="bg-black text-white p-4 rounded-2xl inline-block mb-6">
                  <MapPin size={40} />
                </div>
                <h3 className="text-3xl font-black mb-4 text-black">{office.city}</h3>
                <p className="text-lg text-black/80 mb-2">{office.address}</p>
                <p className="text-lg font-bold text-black">{office.country}</p>
              </StickerCard>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-5xl font-black text-center mb-12 text-black">
            Connect on <span className="bg-neon-cyan px-4 inline-block -rotate-1">Social</span>
          </h2>
          
          <StickerCard color="bg-pastel-lavender" className="p-12">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Twitter", handle: "@web3hub", color: "bg-neon-cyan" },
                { name: "Discord", handle: "Join Server", color: "bg-neon-purple" },
                { name: "Telegram", handle: "t.me/web3hub", color: "bg-neon-blue" },
                { name: "GitHub", handle: "github.com/web3hub", color: "bg-neon-green" },
              ].map((social, index) => (
                <div key={index} className={`${social.color} p-8 rounded-3xl border-4 border-black shadow-lg text-center hover:scale-105 transition-transform cursor-pointer`}>
                  <Globe size={48} className="text-black mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-black mb-2">{social.name}</h3>
                  <p className="text-lg text-black/80">{social.handle}</p>
                </div>
              ))}
            </div>
          </StickerCard>
        </div>
      </div>
    </div>
  );
}