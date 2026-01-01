
import React, { useState } from 'react';
import { Upload, Send, ShieldCheck, FileText, Info } from 'lucide-react';

const Register: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Pitch Application Received!</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Thank you for applying to the 2026 Startup Pitch Competition. Our selection committee will review your pitch deck and get back to you within 14 business days.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all"
          >
            Submit Another Entry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 py-12">
          {/* Instructions Column */}
          <div className="lg:w-1/3">
            <h1 className="text-4xl font-black text-slate-900 mb-6">Enter the Pitch</h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We're looking for disruptive startups with a quantitative edge. Join the competition that launched <strong>Orbitonimics</strong>.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Pitch Deck</h3>
                  <p className="text-sm text-slate-500">Upload your current pitch deck (PDF, max 15 slides).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Founder Video</h3>
                  <p className="text-sm text-slate-500">Be prepared to submit a 60-second intro video if shortlisted.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Market Readiness</h3>
                  <p className="text-sm text-slate-500">Clearly define your target market and current traction or MVP status.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
              <Info className="text-blue-600 flex-shrink-0" size={24} />
              <p className="text-xs text-blue-800 leading-relaxed italic">
                Winners receive $5,000 seed funding, plus access to the QVWI mentor network and investor demo days.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Founder Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Work Email</label>
                  <input
                    required
                    type="email"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="name@startup.com"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Startup Name</label>
                <input
                  required
                  type="text"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="e.g. Orbitonimics"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">The Elevator Pitch (Max 500 chars)</label>
                <textarea
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none h-32 resize-none"
                  placeholder="Describe your solution and its impact..."
                ></textarea>
              </div>

              <div className="mb-10">
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Pitch Deck (PDF Only)</label>
                <div className="relative group">
                  <input
                    required
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="w-full border-2 border-dashed border-slate-200 rounded-2xl py-12 px-8 text-center group-hover:border-blue-500 transition-colors">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Upload size={28} />
                    </div>
                    {fileName ? (
                      <div className="flex items-center justify-center gap-2 text-blue-600 font-bold">
                        <FileText size={20} />
                        {fileName}
                      </div>
                    ) : (
                      <>
                        <p className="text-slate-900 font-bold mb-1">Click to upload or drag & drop</p>
                        <p className="text-slate-500 text-sm">PDF format only, max 10MB</p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30"
              >
                Submit Pitch Application <Send size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
