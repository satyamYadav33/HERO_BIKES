
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const next = () => {
    setDirection('right');
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setDirection('left');
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-24 bg-red-600 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-700 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center text-white">
        <div className="inline-flex p-5 bg-white/10 backdrop-blur-xl rounded-[2rem] mb-10 border border-white/20 shadow-2xl">
          <Quote size={40} className="text-white fill-white/10" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter">Voices of the Road</h2>

        <div className="max-w-4xl mx-auto relative px-12">
          {/* Nav Buttons */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-red-600 transition-all flex items-center justify-center z-20 backdrop-blur-md"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-red-600 transition-all flex items-center justify-center z-20 backdrop-blur-md"
          >
            <ChevronRight size={24} />
          </button>

          <div className="relative overflow-visible min-h-[400px]">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={t.id}
                className={`transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center transform 
                  ${idx === active 
                    ? 'opacity-100 translate-x-0 scale-100 rotate-0' 
                    : direction === 'right' 
                      ? 'opacity-0 translate-x-20 scale-95 rotate-2 pointer-events-none' 
                      : 'opacity-0 -translate-x-20 scale-95 -rotate-2 pointer-events-none'
                  }`}
              >
                <div className="flex gap-1.5 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={24} 
                      fill={i < t.rating ? "currentColor" : "none"} 
                      className={i < t.rating ? "text-yellow-400" : "text-white/20"} 
                    />
                  ))}
                </div>
                <p className="text-2xl md:text-4xl font-bold mb-12 leading-tight italic tracking-tight">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-5 p-2 pr-6 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-xl">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-4 border-white/20" />
                  <div className="text-left">
                    <h4 className="font-black text-xl leading-none mb-1">{t.name}</h4>
                    <p className="text-white/50 text-xs font-black uppercase tracking-widest">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-10">
            {TESTIMONIALS.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => {
                  setDirection(idx > active ? 'right' : 'left');
                  setActive(idx);
                }}
                className={`h-2 rounded-full transition-all duration-500 ${idx === active ? 'w-12 bg-white' : 'w-3 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
