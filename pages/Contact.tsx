
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Column */}
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">Pitch <span className="text-blue-600">Enquiries</span></h1>
            <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed">
              Have questions about the competition format, eligibility, or judging? Reach out to our organizing committee.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <div>
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Email Support</span>
                  <a href="mailto:pitch@qvwi-innovators.org" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">pitch@qvwi-innovators.org</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div>
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Direct Line</span>
                  <a href="tel:+15559876543" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">+1 (555) 987-6543</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-cyan-600 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  <MapPin size={28} />
                </div>
                <div>
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Competition Hub</span>
                  <span className="text-xl font-bold text-slate-900">Palo Alto, CA 94301, USA</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-900 rounded-3xl text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><MessageSquare className="text-blue-400" /> Pitch Deck Reviews</h3>
              <p className="text-slate-400 mb-6">Want feedback on your deck before the official submission? Join our pre-pitch workshops.</p>
              <button className="flex items-center gap-2 text-blue-400 font-bold hover:underline">
                Register for Workshop <ExternalLink size={16} />
              </button>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send Organizers a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
                <input
                  required
                  type="text"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                <input
                  required
                  type="email"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="name@startup.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none h-48 resize-none"
                  placeholder="How can we help your application?"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sent}
                className={`w-full py-5 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 ${
                  sent ? 'bg-green-600 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {sent ? 'Message Sent!' : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
