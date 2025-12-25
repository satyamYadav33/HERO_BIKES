
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Sparkles, RefreshCcw } from 'lucide-react';

const IMAGES = [
  'https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1614165933388-9b552e8b0d9c?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=1200'
];

interface GalleryProps {
  onEditWithAi?: (img: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onEditWithAi }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const next = () => setActiveIndex((activeIndex + 1) % IMAGES.length);
  const prev = () => setActiveIndex((activeIndex - 1 + IMAGES.length) % IMAGES.length);

  useEffect(() => {
    let interval: any;
    if (isRotating) {
      interval = setInterval(next, 3000);
    }
    return () => clearInterval(interval);
  }, [isRotating, activeIndex]);

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black mb-4">Visual Studio</h2>
            <p className="text-slate-600">Every angle refined. Every detail perfected. Experience the Hero craft.</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsRotating(!isRotating)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all border ${isRotating ? 'bg-red-600 text-white border-red-600' : 'bg-white text-slate-900 border-slate-200 hover:bg-slate-50'}`}
            >
              <RefreshCcw size={18} className={isRotating ? 'animate-spin' : ''} />
              Auto Rotation
            </button>
            <div className="flex gap-2">
              <button onClick={prev} className="w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                <ChevronLeft size={24} />
              </button>
              <button onClick={next} className="w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden group shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
          <img 
            src={IMAGES[activeIndex]} 
            alt="Bike detail" 
            className="w-full h-full object-cover transition-all duration-1000 transform scale-100 group-hover:scale-[1.03]"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-10 left-10 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                  <Maximize2 size={24} />
                </div>
                <span className="font-black tracking-widest uppercase text-sm">Ultra-HD 360° Vision</span>
              </div>
              <p className="text-white/70 max-w-md text-sm">Experience our bikes in stunning detail with our virtual visualizer technology.</p>
            </div>

            <div className="absolute bottom-10 right-10">
              <button 
                onClick={() => onEditWithAi?.(IMAGES[activeIndex])}
                className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-[2rem] font-black hover:bg-red-600 hover:text-white transition-all shadow-2xl scale-95 group-hover:scale-100 transform"
              >
                <Sparkles size={20} className="text-red-600 group-hover:text-white transition-colors" />
                Edit with AI Studio
              </button>
            </div>
          </div>

          <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
            <button onClick={prev} className="w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900">
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
            <button onClick={next} className="w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-8">
          {IMAGES.map((img, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative aspect-video rounded-3xl overflow-hidden border-4 transition-all duration-300 ${idx === activeIndex ? 'border-red-600 scale-[0.98] shadow-lg shadow-red-500/20' : 'border-transparent opacity-40 hover:opacity-100'}`}
            >
              <img src={img} alt="Thumb" className="w-full h-full object-cover" />
              {idx === activeIndex && (
                <div className="absolute inset-0 bg-red-600/10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
