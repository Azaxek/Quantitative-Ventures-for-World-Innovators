
import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Github, Mail, MapPin } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="nm-inset border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="nm-raised p-2 rounded-xl border border-white/5 group-hover:scale-110 transition-transform">
                <Rocket className="text-cyan-400" size={24} />
              </div>
              <span className="font-tech font-black text-xl text-white tracking-widest uppercase">
                QVWI_TERMINAL
              </span>
            </Link>
            <p className="font-tech font-bold text-[10px] uppercase text-slate-500 leading-relaxed max-w-xs border-l-2 border-magenta-500 pl-4">
              World-class stages for high-fidelity innovation. Quantitative intelligence for global leaders.
            </p>
            <div className="flex gap-4 mt-10">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="nm-raised p-3 rounded-xl border border-white/5 text-slate-500 hover:text-cyan-400 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-tech font-black text-xs uppercase tracking-widest text-[#00f3ff] mb-8 underline decoration-2 underline-offset-8">DIRECT_LINKS</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="font-tech text-xs uppercase text-slate-500 hover:text-white transition-colors tracking-tighter">> {link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-tech font-black text-xs uppercase tracking-widest text-[#ff00ff] mb-8 underline decoration-2 underline-offset-8">DOC_NODES</h3>
            <ul className="space-y-4">
              {['Manifesto', 'Evaluation_API', 'Seed_Terms', 'Global_Mentors'].map(item => (
                <li key={item}>
                  <a href="#" className="font-tech text-xs uppercase text-slate-500 hover:text-white transition-colors tracking-tighter">> {item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-tech font-black text-xs uppercase tracking-widest text-white mb-8 underline decoration-2 underline-offset-8">COMMS_INPUT</h3>
            <ul className="space-y-6 text-[10px] font-tech font-bold uppercase text-slate-500 tracking-widest">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-400" />
                <span>PITCH@QVWI.IO</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[#ff00ff]" />
                <span>SILICON_VALLEY_GRID</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center font-tech text-[9px] font-black uppercase tracking-widest text-slate-600">
          <p>© 2025 QVWI STARTUP PITCH COMPETITION // SYSTEM_SECURE</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition-colors">PRIVACY_PROTOCOL</a>
            <a href="#" className="hover:text-[#ff00ff] transition-colors">TERMS_OF_SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
