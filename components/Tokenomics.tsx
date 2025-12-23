
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { TOKENOMICS } from '../constants';

export const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4">Transparent Tokenomics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ethanol is designed for long-term sustainability with a focus on community miners and ecosystem growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={TOKENOMICS}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={5}
                  dataKey="percentage"
                >
                  {TOKENOMICS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid gap-4">
            {TOKENOMICS.map((item, index) => (
              <div key={index} className="glass p-5 rounded-2xl flex items-center justify-between hover:bg-white/5 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <div>
                    <h4 className="font-bold text-gray-200">{item.label}</h4>
                    <p className="text-xs text-gray-500 font-mono uppercase">{item.value}</p>
                  </div>
                </div>
                <div className="text-xl font-bold text-white">{item.percentage}%</div>
              </div>
            ))}
            
            <div className="mt-8 p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">Total Supply</span>
                <span className="text-xl font-bold text-white font-display">1,000,000,000 ETHO</span>
              </div>
              <div className="text-sm text-blue-400 font-medium">Burning mechanism active: 2% per tx</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
