
import React from 'react';
import { ChevronRight, Copy, ExternalLink, ShieldCheck, Download } from 'lucide-react';
import { CONTRACT_ADDRESS } from '../constants';
import { AnimatedCursiveText } from './AnimatedCursiveText';

export const Hero: React.FC = () => {
  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    alert('Contract Address Copied!');
  };

  const handleLaunchDashboard = () => {
    const miningSection = document.getElementById('mining');
    if (miningSection) {
      miningSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadWhitepaper = () => {
    const whitepaperContent = `
ETHANOL (ETHO) PROTOCOL WHITEPAPER
==================================
Version: 1.0.2 - Official Release
Contract: ${CONTRACT_ADDRESS}

1. EXECUTIVE SUMMARY
Ethanol (ETHO) represents the first evolution in autonomous cryptocurrency mining. By integrating a neural substrate directly into the sharding process, ETHO eliminates the static barriers of traditional Proof-of-Work.

2. AI MINING OPTIMIZATION
The Ethanol AI Engine (v4.2.0) dynamically recalibrates hashing algorithms based on global node density and thermal efficiency. This ensures that miners receive optimized yields regardless of hardware specifications.

3. ECOSYSTEM UTILITY
- Decentralized GPU Rental: Use ETHO to power neural training tasks.
- Governance Staking: Vote on AI parameter weights.
- Deflationary Burn: 2% of every transaction is permanently removed from supply.

4. TOKENOMICS
- 50% Community Mining
- 20% Initial Liquidity
- 15% Ecosystem Development
- 10% Team (Locked)
- 5% Airdrops

5. SECURITY
Audited by Ethanol Neural Guard. Real-time threat detection active on the mainnet.

(c) 2024 Ethanol Protocol Foundation.
    `;
    const blob = new Blob([whitepaperContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ethanol_ETHO_Whitepaper_v1.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold font-display leading-tight mb-2 mt-12 flex flex-col items-center">
            <span>Fuel the Future with</span>
            <AnimatedCursiveText />
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Ethanol (ETHO) is the world's first decentralized token optimized by neural networks. 
            Mine smarter, not harder, with our autonomous AI substrate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={handleLaunchDashboard}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-50 transition-all flex items-center justify-center group active:scale-95"
            >
              Launch AI Dashboard <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleDownloadWhitepaper}
              className="w-full sm:w-auto px-8 py-4 bg-gray-800/50 text-white font-bold rounded-full border border-white/10 hover:bg-gray-800 transition-all flex items-center justify-center backdrop-blur-sm group active:scale-95"
            >
              Read Whitepaper <Download className="ml-2 w-4 h-4 text-gray-400 group-hover:text-white" />
            </button>
          </div>

          {/* Contract Address Section */}
          <div className="max-w-2xl mx-auto glass rounded-2xl p-6 border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Official Contract Address</span>
              <div className="flex items-center text-emerald-400 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 mr-1" /> Verified
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <code className="bg-black/50 px-4 py-3 rounded-lg text-blue-400 font-mono text-sm break-all w-full text-left border border-white/5">
                {CONTRACT_ADDRESS}
              </code>
              <div className="flex gap-2">
                <button 
                  onClick={copyAddress}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
                  title="Copy Address"
                >
                  <Copy className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </button>
                <a 
                  href={`https://etherscan.io/token/${CONTRACT_ADDRESS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
                  title="View on Etherscan"
                >
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
