
import React, { useState, useEffect } from 'react';
import { Activity, Brain, Cpu, TrendingUp } from 'lucide-react';

export const MiningDashboard: React.FC = () => {
  const [hashrate, setHashrate] = useState(142.5);
  const [totalMined, setTotalMined] = useState(1204.22);
  const [efficiency, setEfficiency] = useState(98.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setHashrate(prev => +(prev + (Math.random() * 2 - 1)).toFixed(2));
      setTotalMined(prev => +(prev + 0.005).toFixed(4));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="mining" className="py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold font-display mb-6">Autonomous AI Mining</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Forget complex setups. Ethanol's proprietary AI layer connects to the global neural network 
              to optimize shard distributions and maximize your yield automatically.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold">Neural Optimization</h4>
                  <p className="text-gray-500 text-sm">Dynamic difficulty adjustment using real-time market data.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold">Predictive Rewards</h4>
                  <p className="text-gray-500 text-sm">Predictive analytics for upcoming reward halving events.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="glass rounded-3xl p-8 border border-blue-500/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 mining-animate opacity-50"></div>
              
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-tighter">System Active</span>
                </div>
                <div className="text-blue-400 font-mono">v4.2.0-stable</div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                  <div className="flex items-center space-x-2 text-gray-500 mb-2">
                    <Cpu className="w-4 h-4" />
                    <span className="text-xs uppercase font-bold">Hashrate</span>
                  </div>
                  <div className="text-3xl font-bold font-display">{hashrate} MH/s</div>
                </div>
                <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                  <div className="flex items-center space-x-2 text-gray-500 mb-2">
                    <Activity className="w-4 h-4" />
                    <span className="text-xs uppercase font-bold">Efficiency</span>
                  </div>
                  <div className="text-3xl font-bold font-display text-emerald-400">{efficiency}%</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-2xl shadow-xl shadow-blue-900/20">
                <div className="text-white/60 text-xs uppercase font-bold mb-1">Estimated ETHO Rewards</div>
                <div className="text-4xl font-extrabold text-white font-display mb-4">
                  {totalMined.toLocaleString()} ETHO
                </div>
                <div className="w-full bg-black/20 rounded-full h-2">
                  <div className="bg-white h-full rounded-full w-2/3"></div>
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-white/40 font-bold">
                  <span>SYNCING BLOCKS...</span>
                  <span>94.2% COMPLETE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
