
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Zap } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 p-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        <Link 
          to="/" 
          className="nm-raised p-3 rounded-2xl flex items-center gap-3 group transition-all hover:scale-105"
        >
          <div className="bg-cyan-500/10 p-2 rounded-xl border border-cyan-500/30">
            <Rocket className="text-[#00f3ff] glow-cyan" size={20} />
          </div>
          <span className="font-tech font-bold text-lg tracking-widest text-[#00f3ff] hidden sm:block">QVWI_PITCH</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="nm-inset p-2 rounded-2xl flex gap-2 px-4 border border-white/5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-xl font-tech text-xs uppercase tracking-tighter transition-all ${
                  location.pathname === link.href 
                    ? 'nm-raised text-[#00f3ff] text-glow-cyan' 
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            to="/register"
            className="nm-raised border border-cyan-500/20 px-8 py-3 rounded-2xl font-tech font-bold text-xs uppercase text-[#00f3ff] hover:border-cyan-500/50 transition-all flex items-center gap-2"
          >
            <Zap size={14} fill="currentColor" /> Apply_Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden nm-raised p-3 rounded-2xl text-cyan-400"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 nm-raised p-6 rounded-3xl space-y-4 pointer-events-auto border border-white/5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-tech font-bold text-lg uppercase tracking-widest text-slate-400 hover:text-[#00f3ff]"
            >
              > {link.label}
            </Link>
          ))}
          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center nm-inset p-4 rounded-2xl text-[#00f3ff] font-tech font-black"
          >
            INITIATE_APPLICATION
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
