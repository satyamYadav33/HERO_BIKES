
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              A LEGACY OF <br />
              <span className="text-red-600">TRUST & INNOVATION</span>
            </h2>
            <div className="h-1.5 w-24 bg-red-600 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              For over three decades, Hero MotoCorp has been at the forefront of the motorcycle industry, providing millions of people with reliable and efficient transportation. 
            </p>
            <p className="text-slate-600">
              Our journey is defined by a commitment to engineering excellence, environmental sustainability, and a deep understanding of the diverse needs of our riders. From the iconic Splendor to the innovative Karizma, we continue to push the boundaries of what's possible on two wheels.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-6">
              <div>
                <div className="text-3xl font-black text-slate-900">35+</div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">Years of Legacy</div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900">100M+</div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">Global Sales</div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900">40+</div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">Countries</div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=600" 
                alt="Production" 
                className="rounded-3xl shadow-lg mt-12 hover:scale-105 transition-transform"
              />
              <img 
                src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&q=80&w=600" 
                alt="Ride" 
                className="rounded-3xl shadow-lg hover:scale-105 transition-transform"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl border-4 border-white">
              HERO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
