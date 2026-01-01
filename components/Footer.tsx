
import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6" aria-label="Quantitative Ventures World Innovators Home">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Rocket size={24} />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight leading-none uppercase">
                QVWI <br/>
                <span className="text-[10px] font-medium text-blue-400 block mt-1">Startup Pitch Competition</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              The Quantitative Ventures World Innovators (QVWI) Startup Pitch Competition is a global stage for tech-driven solutions tackling humanity's toughest challenges from space to business logistics.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter profile"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn profile"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="GitHub repository"><Github size={20} /></a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-blue-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Competitors</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pitch Deck Guide</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Judging Rubric</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Seed Terms</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Startup Mentors</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Inquiries</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-500 mt-0.5" />
                <span>pitch@qvwi-innovators.org</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-500 mt-0.5" />
                <span>+1 (555) 987-6543</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-500 mt-0.5" />
                <span>Silicon Valley Innovation Hub,<br />Palo Alto, CA 94301</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2025 Quantitative Ventures World Innovators Startup Pitch Competition. Focused on global business and space tech.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Contest Rules</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
