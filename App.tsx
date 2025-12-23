
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { MiningDashboard } from './components/MiningDashboard';
import { Tokenomics } from './components/Tokenomics';
import { Roadmap } from './components/Roadmap';
import { ChatBot } from './components/ChatBot';
import { MatrixBackground } from './components/MatrixBackground';
import { EthanolLogo } from './components/EthanolLogo';
import { ScrollReveal } from './components/ScrollReveal';
import { Twitter, MessageCircle, Github, Mail } from 'lucide-react';
import { CONTRACT_ADDRESS } from './constants';

const Footer = () => (
  <footer className="bg-slate-950/80 backdrop-blur-md pt-20 pb-10 border-t border-white/5 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center glow-blue">
              <EthanolLogo className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold font-display tracking-tight text-white">ETHANOL</span>
          </div>
          <p className="text-gray-500 max-w-sm mb-6">
            The future of decentralized computing, powered by adaptive AI logic and community governance.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-white/5 hover:bg-blue-600/20 rounded-xl transition-all"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="p-3 bg-white/5 hover:bg-blue-600/20 rounded-xl transition-all"><MessageCircle className="w-5 h-5" /></a>
            <a href="#" className="p-3 bg-white/5 hover:bg-blue-600/20 rounded-xl transition-all"><Github className="w-5 h-5" /></a>
            <a href="#" className="p-3 bg-white/5 hover:bg-blue-600/20 rounded-xl transition-all"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Resources</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Whitepaper</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">AI Mining Guide</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Media Kit</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Legal</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Risk Warning</a></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
        <p>&copy; 2024 Ethanol (ETHO) Protocol. All rights reserved.</p>
        <p className="mt-4 md:mt-0 font-mono">Contract: {CONTRACT_ADDRESS}</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen relative bg-[#020617]">
      {/* Background Layer (z-0) */}
      <MatrixBackground />
      
      {/* Content Layer (z-10) */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          
          <ScrollReveal>
            <Features />
          </ScrollReveal>
          
          <ScrollReveal>
            <MiningDashboard />
          </ScrollReveal>
          
          <ScrollReveal>
            <Tokenomics />
          </ScrollReveal>
          
          <ScrollReveal>
            <Roadmap />
          </ScrollReveal>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </div>
  );
}
