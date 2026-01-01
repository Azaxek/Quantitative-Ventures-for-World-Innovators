
import React, { useState } from 'react';
import { Upload, Send, ShieldCheck, FileText, Info, Database } from 'lucide-react';

const Register: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="pt-32 min-h-screen px-6 flex items-center justify-center">
        <div className="nm-raised border border-cyan-500/20 p-16 rounded-[4rem] max-w-xl w-full text-center">
          <div className="nm-inset p-8 rounded-full inline-block mb-8 border border-cyan-400/10">
            <ShieldCheck size={64} className="text-cyan-400 glow-cyan" />
          </div>
          <h2 className="text-5xl font-tech font-black text-white mb-4 leading-none">UPLOAD_SUCCESS</h2>
          <p className="font-tech text-slate-400 mb-12 font-bold uppercase text-xs tracking-widest">Selection committee will report status via encrypted link.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full nm-btn border border-white/5 p-6 rounded-3xl font-tech font-black text-xl text-white uppercase"
          >
            RETURN_TO_TERMINAL
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-4">
        <div className="nm-raised p-10 rounded-[3rem] border border-white/5 h-full">
          <h1 className="text-6xl font-tech font-black uppercase leading-none mb-10 text-white tracking-tighter">
            SYNC <br/><span className="text-[#ff00ff]">STARTUP</span>
          </h1>
          <p className="text-xl font-light text-slate-400 mb-12 leading-relaxed">
            Searching for disruptive founders with high-fidelity quantitative edges.
          </p>
          
          <div className="space-y-6">
            {[
              { id: '01', txt: 'Pitch_Deck (PDF_MAX_15)' },
              { id: '02', txt: 'Founder_Video_Stream_Link' },
              { id: '03', txt: 'Market_Proof_of_Traction' }
            ].map(step => (
              <div key={step.id} className="nm-inset p-5 rounded-2xl flex gap-5 items-center border border-white/5">
                <span className="font-tech font-black text-[#00f3ff] text-xl">{step.id}</span>
                <p className="font-tech font-bold text-[10px] uppercase text-slate-400 tracking-widest">{step.txt}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 nm-raised border border-cyan-500/20 p-8 rounded-3xl flex gap-4 items-start bg-cyan-500/5">
            <Database size={32} className="text-cyan-400 flex-shrink-0" />
            <p className="font-tech font-bold italic text-[10px] text-cyan-200 uppercase leading-relaxed">
              Global founders (Americas, South Asia, Middle East) are encouraged to sync their repositories.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-8">
        <form onSubmit={handleSubmit} className="nm-raised rounded-[4rem] p-10 md:p-16 border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div>
              <label className="block font-tech font-bold uppercase text-[10px] mb-3 text-slate-500 tracking-widest">Founder_Identity</label>
              <input required type="text" className="w-full nm-inset p-5 rounded-2xl font-tech text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 border border-white/5" placeholder="REALNAME_ALPHA" />
            </div>
            <div>
              <label className="block font-tech font-bold uppercase text-[10px] mb-3 text-slate-500 tracking-widest">Comms_Channel</label>
              <input required type="email" className="w-full nm-inset p-5 rounded-2xl font-tech text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 border border-white/5" placeholder="ENCRYPTED_EMAIL" />
            </div>
          </div>

          <div className="mb-10">
            <label className="block font-tech font-bold uppercase text-[10px] mb-3 text-slate-500 tracking-widest">Venture_Label</label>
            <input required type="text" className="w-full nm-inset p-5 rounded-2xl font-tech text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 border border-white/5" placeholder="STARTUP_BRAND" />
          </div>

          <div className="mb-10">
            <label className="block font-tech font-bold uppercase text-[10px] mb-3 text-slate-500 tracking-widest">The_Elevator_Manifesto</label>
            <textarea required className="w-full nm-inset p-5 rounded-2xl font-tech text-white h-48 resize-none focus:outline-none focus:ring-1 focus:ring-cyan-500 border border-white/5" placeholder="SUMMARIZE_IMPACT_DATA..."></textarea>
          </div>

          <div className="mb-12">
            <label className="block font-tech font-bold uppercase text-[10px] mb-3 text-slate-500 tracking-widest">Deck_Upload (PDF)</label>
            <div className="nm-inset rounded-3xl p-16 text-center border border-dashed border-slate-800 hover:border-cyan-500 cursor-pointer relative transition-all group">
              <Upload size={48} className="mx-auto mb-6 text-slate-700 group-hover:text-cyan-400 transition-colors" />
              <p className="font-tech font-black uppercase text-xs text-slate-600 group-hover:text-white transition-colors">Select_Asset_Package</p>
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
            </div>
          </div>

          <button type="submit" className="w-full nm-btn border border-cyan-500/40 p-8 rounded-[2.5rem] font-tech font-black uppercase text-2xl text-[#00f3ff] tracking-tighter hover:text-white transition-all flex items-center justify-center gap-4">
            INITIATE_SYNC_PROCEDURE <Send size={24} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
