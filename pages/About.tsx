
import React from 'react';
import { Target, Users, Shield, History } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <header className="py-20 bg-slate-900 text-white relative overflow-hidden" aria-labelledby="about-heading">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 id="about-heading" className="text-4xl md:text-6xl font-black mb-6">The Competition</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The Quantitative Ventures World Innovators (QVWI) Startup Pitch Competition is the global stage for the next generation of space and business technology founders.
          </p>
        </div>
      </header>

      <section className="py-24 -mt-12" aria-label="Core values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Founder Focused</h2>
              <p className="text-slate-600 leading-relaxed">
                We prioritize entrepreneurs with deep technical domain expertise in space and business logistics who are ready to scale for maximum impact.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8">
                <Users size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Global Stage</h2>
              <p className="text-slate-600 leading-relaxed">
                Innovation transcends borders. We provide a platform for founders globally to pitch to top-tier VC firms and industry leaders.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-cyan-600 rounded-2xl flex items-center justify-center text-white mb-8">
                <Shield size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Capital Injection</h2>
              <p className="text-slate-600 leading-relaxed">
                Top pitches receive immediate seed funding, ensuring that high-potential projects like <strong>Orbitonimics</strong> have the capital needed to start.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" aria-labelledby="history-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <History size={40} className="text-blue-600" />
            <h2 id="history-heading" className="text-3xl md:text-5xl font-black text-slate-900">Our Pitch Legacy</h2>
          </div>

          <div className="space-y-12">
            <div className="relative pl-12 border-l-4 border-blue-600 pb-12">
              <div className="absolute -left-3 top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="text-blue-600 font-black text-3xl mb-4">2009</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The First Pitch</h3>
              <p className="text-slate-600 text-lg max-w-4xl leading-relaxed">
                QVWI began as a niche pitch event in Silicon Valley, connecting innovators with technical founders to solve complex logistics problems.
              </p>
            </div>

            <div className="relative pl-12 border-l-4 border-slate-200">
              <div className="absolute -left-3 top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="text-blue-600 font-black text-3xl mb-4">Today</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">A Global Benchmark</h3>
              <p className="text-slate-600 text-lg max-w-4xl leading-relaxed">
                The Quantitative Ventures World Innovators Startup Pitch Competition is now a premiere global event, with alumni like Aryav Agrawal setting standards in the orbital business sector.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
