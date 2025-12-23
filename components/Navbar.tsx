
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { EthanolLogo } from './EthanolLogo';
import { BUY_ETHO_URL } from '../constants';

const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Mining", href: "#mining" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center glow-blue border border-white/10">
              <EthanolLogo className="w-8 h-8 text-blue-400" />
            </div>
            <span className="text-2xl font-bold font-display tracking-tight text-white uppercase">ETHANOL <span className="text-blue-400 text-sm align-top">ETHO</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <a 
              href={BUY_ETHO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              Buy ETHO
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/5 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-300 hover:text-white font-medium"
              >
                {item.label}
              </a>
            ))}
            <a 
              href={BUY_ETHO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold"
            >
              Buy ETHO
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
