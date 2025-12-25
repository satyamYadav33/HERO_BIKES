
import React from 'react';
import { ChevronDown, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1920" 
          alt="Hero Bike" 
          className="w-full h-full object-cover brightness-[0.4]"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <div className="inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-md border border-red-500/30 px-4 py-2 rounded-full text-red-500 font-bold text-sm mb-6 uppercase tracking-widest animate-bounce">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          Next-Gen Mobility
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tighter">
          EXCELLENCE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
            IN MOTION
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
          Experience the pinnacle of engineering and legendary performance. Join millions who trust Hero for their daily journeys.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#bikes" 
            className="group bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-2xl hover:shadow-red-500/50 flex items-center gap-3"
          >
            Explore Models
            <ChevronDown className="group-hover:translate-y-1 transition-transform" />
          </a>
          <button className="flex items-center gap-3 text-white font-bold hover:text-red-500 transition-colors px-6 py-4">
            <PlayCircle className="w-8 h-8" />
            Watch the Film
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center py-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
