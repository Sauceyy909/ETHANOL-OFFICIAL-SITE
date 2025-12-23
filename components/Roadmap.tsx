
import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { ROADMAP } from '../constants';

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold font-display mb-4">Development Roadmap</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tracking our mission to democratize AI mining and build the future of decentralized finance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ROADMAP.map((phase, idx) => (
            <div key={idx} className={`relative glass p-8 rounded-3xl border ${phase.status === 'in-progress' ? 'border-blue-500/50 scale-105' : 'border-white/5'}`}>
              {phase.status === 'in-progress' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Current
                </div>
              )}
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">{phase.phase}</span>
                {phase.status === 'completed' && <CheckCircle2 className="text-emerald-500 w-6 h-6" />}
                {phase.status === 'in-progress' && <Clock className="text-blue-500 w-6 h-6 animate-pulse" />}
                {phase.status === 'upcoming' && <Circle className="text-gray-600 w-6 h-6" />}
              </div>

              <h3 className="text-2xl font-bold mb-6 font-display">{phase.title}</h3>
              
              <ul className="space-y-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-gray-400 text-sm">
                    <div className="mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
