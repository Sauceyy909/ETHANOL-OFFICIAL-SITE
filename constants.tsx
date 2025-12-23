
import React from 'react';
import { Cpu, Zap, Shield, Rocket, Activity, Database, Globe, Users } from 'lucide-react';
import { Feature, RoadmapItem, TokenomicsData } from './types';

export const CONTRACT_ADDRESS = "0x63937e84cd4b7a2a97d1a3950f3dc6f9bb814bae";
export const BUY_ETHO_URL = "https://app.uniswap.org/explore/pools/polygon/0xd3cc478798c6628ea9097c6d24085328ba7fa9b9f889dd96aa5c5763d7813317?utm_source=share-pool&utm_medium=web";

export const FEATURES: Feature[] = [
  {
    title: "AI-Powered Optimization",
    description: "The core engine automatically adjusts mining algorithms based on network difficulty and hardware efficiency.",
    icon: <Cpu className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Instant Liquidity",
    description: "Built-in automated market making protocols ensure high liquidity for ETHO holders.",
    icon: <Zap className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Enhanced Security",
    description: "Multi-layered cryptographic audits and AI-driven threat detection safeguard the network.",
    icon: <Shield className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Next-Gen Mining",
    description: "Mining ETHO is as simple as running a web browser, powered by distributed neural networks.",
    icon: <Rocket className="w-6 h-6 text-orange-400" />
  }
];

export const ROADMAP: RoadmapItem[] = [
  {
    phase: "Phase 1",
    title: "Genesis & AI Training",
    items: ["AI Algorithm Deployment", "Token Fair Launch", "Initial DEX Offering (IDO)", "Mining Software Beta"],
    status: 'completed'
  },
  {
    phase: "Phase 2",
    title: "Expansion & Listings",
    items: ["MEXC Exchange Listing", "Gate.io Listing", "v2 Mining Engine Release", "Strategic AI Partnerships"],
    status: 'in-progress'
  },
  {
    phase: "Phase 3",
    title: "Ethanol Ecosystem",
    items: ["ETHO Wallet Launch", "Governance DAO Implementation", "NFT AI Generator Integration"],
    status: 'upcoming'
  }
];

export const TOKENOMICS: TokenomicsData[] = [
  { label: "Community Mining", percentage: 50, value: "500,000,000 ETHO", color: "#3b82f6" },
  { label: "Liquidity Pool", percentage: 20, value: "200,000,000 ETHO", color: "#8b5cf6" },
  { label: "Ecosystem Development", percentage: 15, value: "150,000,000 ETHO", color: "#ec4899" },
  { label: "Team & Advisory", percentage: 10, value: "100,000,000 ETHO", color: "#10b981" },
  { label: "Public Airdrop", percentage: 5, value: "50,000,000 ETHO", color: "#f59e0b" }
];
