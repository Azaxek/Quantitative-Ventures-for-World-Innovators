
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Zap, Globe, Cpu, ChevronRight, Activity } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full nm-inset text-cyan-400 text-[10px] font-tech font-bold mb-8 border border-cyan-400/10">
            <Activity size={14} className="animate-pulse" /> SYSTEM_ACTIVE: COHORT_2026
          </div>
          <h1 className="text-5xl md:text-8xl font-tech font-extrabold leading-none mb-8 tracking-tighter text-white">
            QUANTUM <br/>
            <span className="text-[#00f3ff] text-glow-cyan italic">VENTURES</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-slate-400 mb-12 leading-relaxed border-l-4 border-[#ff00ff]/30 pl-8 max-w-2xl">
            A high-fidelity stage for tech founders navigating space-logistics and business intelligence. Deploying seed capital to the 0.1% of world innovators.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              to="/register"
              className="nm-btn border border-cyan-500/30 p-6 px-12 rounded-3xl font-tech font-black text-xl text-[#00f3ff] uppercase flex items-center gap-3"
            >
              Launch_Pitch <ArrowRight />
            </Link>
            <Link
              to="/about"
              className="nm-raised border border-white/5 p-6 px-12 rounded-3xl font-tech font-black text-xl text-slate-300 uppercase flex items-center gap-3 hover:text-white"
            >
              Arch_Data
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="nm-raised rounded-[3rem] p-4 border border-white/10 rotate-3">
             <div className="relative overflow-hidden rounded-[2.5rem] h-80 md:h-[500px] border-2 border-cyan-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 scale-110"
                  alt="Cyber Earth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 nm-inset p-4 rounded-2xl backdrop-blur-md border border-cyan-400/20">
                   <p className="font-tech text-xs text-cyan-400 mb-1 font-bold">LATEST_DEPLOYMENT</p>
                   <p className="font-tech text-xl text-white font-black">ORBITONIMICS_MAPS</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Metric Dashboard */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { label: 'SEED_CAPITAL', val: '$500K+', icon: <Globe className="text-cyan-400" />, col: 'cyan' },
          { label: 'FOUNDER_NODES', val: '150+', icon: <Cpu className="text-magenta-400" />, col: 'magenta' },
          { label: 'VC_NETWORK', val: '50+', icon: <Zap className="text-yellow-400" />, col: 'yellow' }
        ].map((item) => (
          <div key={item.label} className="nm-raised rounded-3xl p-10 flex flex-col items-center border border-white/5">
            <div className="nm-inset p-4 rounded-2xl mb-6">
               {item.icon}
            </div>
            <h2 className="text-5xl font-tech font-black text-white mb-2">{item.val}</h2>
            <p className="font-tech text-xs tracking-widest text-slate-500 font-bold uppercase">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Featured Founder Spotlight */}
      <section className="mb-24">
        <div className="nm-raised rounded-[4rem] overflow-hidden flex flex-col lg:flex-row border border-white/5">
          <div className="lg:w-2/5 h-[400px] lg:h-auto relative">
            <img 
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover opacity-50 contrast-125"
              alt="Orbital View"
            />
            <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay"></div>
          </div>
          <div className="lg:w-3/5 p-10 md:p-20 relative">
            <div className="inline-block px-4 py-1 rounded-full nm-inset border border-magenta-500/20 text-[#ff00ff] font-tech text-[10px] font-bold mb-6">
              CASE_STUDY: ARYAV_AGRAWAL
            </div>
            <h3 className="text-4xl md:text-6xl font-tech font-black text-white mb-8 leading-tight">
              ORBITO<span className="text-cyan-400">NIMICS</span>
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 font-light">
              Founded by <strong>Aryav Agrawal</strong>, Orbitonimics is redefining global safety through orbital data. By mapping 3,000+ disaster regions and establishing 640 safety routes, they are the gold standard for space-integrated business logistics.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="nm-inset p-6 rounded-3xl border border-white/5">
                <p className="font-tech text-[10px] text-slate-500 mb-2 font-bold uppercase tracking-widest">Regions_Mapped</p>
                <p className="text-3xl font-tech font-black text-[#00f3ff]">3,000+</p>
              </div>
              <div className="nm-inset p-6 rounded-3xl border border-white/5">
                <p className="font-tech text-[10px] text-slate-500 mb-2 font-bold uppercase tracking-widest">Active_Routes</p>
                <p className="text-3xl font-tech font-black text-[#ff00ff]">640</p>
              </div>
            </div>
            <Link to="/winners" className="nm-btn inline-flex items-center gap-2 p-4 px-8 rounded-2xl font-tech font-bold text-xs text-white">
              VIEW_ALL_NODES <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="nm-inset rounded-[3rem] p-12 text-center border border-cyan-500/10 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-tech font-black text-white mb-8 tracking-tighter">
            SYNC YOUR <span className="text-[#00f3ff]">VISION</span>
          </h2>
          <p className="text-slate-400 font-tech text-lg mb-12 max-w-xl mx-auto opacity-70">
            Accepting data-driven pitches for the upcoming Q1 evaluation cycle.
          </p>
          <Link to="/register" className="nm-btn border border-cyan-500/20 bg-[#00f3ff]/5 p-6 px-16 rounded-3xl font-tech font-black text-2xl text-[#00f3ff] uppercase tracking-tighter hover:text-white transition-all">
            Execute_Upload
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
