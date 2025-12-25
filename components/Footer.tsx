
import React from 'react';
import { Bike, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <div className="bg-red-600 p-2 rounded-lg">
                <Bike className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                HERO<span className="text-red-600">BIKES</span>
              </span>
            </a>
            <p className="text-slate-500 leading-relaxed">
              Global leader in two-wheelers, providing sustainable and innovative mobility solutions for the future.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Models', 'Test Ride', 'Locate Dealer', 'Media Center'].map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-red-600 font-medium transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4">
              {['Contact Us', 'Owner Manual', 'Service Centers', 'Spare Parts', 'Safety Tips'].map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-red-600 font-medium transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-6">Stay updated with the latest launches and offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600/20"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-red-600 text-white px-4 rounded-lg font-bold hover:bg-red-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © 2024 Hero MotoCorp Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-slate-400 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
