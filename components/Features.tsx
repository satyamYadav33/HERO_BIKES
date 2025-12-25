
import React from 'react';
import { FEATURES } from '../constants';
import * as Icons from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800" 
              alt="Technology" 
              className="relative rounded-[40px] shadow-2xl z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl z-20 hidden md:block border border-slate-100">
              <div className="text-4xl font-black text-red-600 mb-1">100M+</div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Global Customers</div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              ENGINEERED FOR <br />
              <span className="text-red-600">THE INDIAN ROAD</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Hero MotoCorp combines decades of expertise with cutting-edge innovations to deliver motorcycles that are powerful, efficient, and exceptionally reliable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FEATURES.map(feature => {
                const IconComponent = (Icons as any)[feature.icon];
                return (
                  <div key={feature.id} className="group hover:bg-white p-6 rounded-3xl transition-all duration-300 border border-transparent hover:border-slate-100 hover:shadow-xl">
                    <div className="w-14 h-14 bg-red-600/10 text-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-all">
                      {IconComponent && <IconComponent size={28} />}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
