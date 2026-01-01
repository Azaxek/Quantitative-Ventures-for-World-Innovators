
import React, { useState } from 'react';
import { Search, Trophy, Star, Award, SearchCode } from 'lucide-react';
import { WINNERS_DATA } from '../constants';

const Winners: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWinners = WINNERS_DATA.filter(w =>
    w.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.firstPlace.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 min-h-screen pb-24 px-6 max-w-7xl mx-auto">
      <header className="mb-20">
        <div className="nm-raised rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/5">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-8xl font-tech font-black uppercase text-white tracking-tighter mb-8 leading-none">
              PITCH_ARCHIVE
            </h1>
            <div className="relative max-w-2xl">
              <input
                type="text"
                placeholder="EXECUTE_QUERY..."
                className="w-full nm-inset p-5 pl-14 rounded-2xl font-tech text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all border border-white/5"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchCode className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" size={24} />
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredWinners.map((winner) => (
          <div key={winner.year} className="nm-raised p-8 rounded-[2.5rem] flex flex-col group border border-white/5 hover:border-cyan-500/20 transition-colors">
            <div className="nm-inset text-cyan-400 inline-block px-4 py-1 font-tech font-bold text-[10px] mb-8 self-start rounded-full border border-cyan-400/10">
              COHORT_{winner.year}
            </div>
            
            <div className="space-y-8 flex-grow">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Star size={14} className="text-[#ff00ff] glow-magenta" fill="currentColor" />
                  <span className="font-tech text-[10px] font-black uppercase text-slate-500 tracking-widest">01_ALPHA</span>
                </div>
                <h3 className="text-2xl font-tech font-black text-white">{winner.firstPlace.name}</h3>
                <p className="font-tech font-bold text-xs text-cyan-400 mt-1 uppercase tracking-widest">{winner.firstPlace.funding} SEED_ALLOCATED</p>
              </div>

              <div className="nm-inset p-5 rounded-2xl border border-white/5">
                <span className="font-tech text-[9px] font-black uppercase text-slate-600 tracking-widest block mb-2">02_BETA</span>
                <h4 className="text-lg font-tech font-bold text-slate-300">{winner.secondPlace.name}</h4>
              </div>

              <div className="nm-inset p-5 rounded-2xl border border-white/5">
                <span className="font-tech text-[9px] font-black uppercase text-slate-600 tracking-widest block mb-2">03_GAMMA</span>
                <h4 className="text-lg font-tech font-bold text-slate-400">{winner.thirdPlace.name}</h4>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
              <Trophy className="text-slate-700 group-hover:text-cyan-500 transition-colors" size={24} />
              <button className="text-[10px] font-tech font-black text-slate-500 hover:text-white uppercase tracking-tighter underline">VIEW_DECK</button>
            </div>
          </div>
        ))}
      </div>

      {filteredWinners.length === 0 && (
        <div className="text-center py-24 nm-inset rounded-3xl border border-white/5">
          <h2 className="text-3xl font-tech font-black text-slate-600 uppercase italic tracking-tighter">DATA_STREAM_EMPTY</h2>
        </div>
      )}
    </div>
  );
};

export default Winners;
