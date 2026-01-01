
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent py-5' : 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-100'}`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group" aria-label="QVWI Home">
            <div className={`p-2 rounded-lg transition-colors ${isTransparent ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'} group-hover:rotate-12 transition-transform`}>
              <Rocket size={20} />
            </div>
            <span className={`font-extrabold text-xl tracking-tight transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-slate-900'}`}>
              QVWI <span className="hidden sm:inline">Pitch</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-bold transition-colors duration-200 ${
                  location.pathname === link.href
                    ? 'text-blue-600 underline underline-offset-8'
                    : isTransparent
                    ? 'text-slate-200 hover:text-white'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/register"
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 ${
                isTransparent 
                ? 'bg-white text-blue-600 hover:bg-blue-50' 
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
              }`}
            >
              Apply to Pitch
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${isTransparent ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-slate-100'}`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden absolute w-full bg-white shadow-2xl transition-all duration-300 border-t border-slate-100 overflow-hidden ${isOpen ? 'max-h-screen border-b' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-8 space-y-2 bg-white">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block px-4 py-4 text-lg font-bold rounded-xl transition-colors ${
                location.pathname === link.href ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-6 px-4">
            <Link
              to="/register"
              className="block w-full text-center bg-blue-600 text-white py-4 rounded-2xl font-black shadow-xl shadow-blue-200 text-lg"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
