
import React from 'react';
import { Bike } from '../types';
import { ArrowRight, Share2, Plus, Check, Eye } from 'lucide-react';

interface BikeCardProps {
  bike: Bike;
  onToggleComparison: () => void;
  isSelected: boolean;
  onViewDetails?: () => void;
}

const BikeCard: React.FC<BikeCardProps> = ({ bike, onToggleComparison, isSelected, onViewDetails }) => {
  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: `Hero ${bike.name}`,
        text: bike.description,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert(`Check out the Hero ${bike.name}! Starts at ₹${bike.price}.`);
    }
  };

  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden shrink-0">
        <img 
          src={bike.image} 
          alt={bike.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="bg-red-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
            {bike.category}
          </div>
        </div>
        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
          <button 
            onClick={onToggleComparison}
            title="Compare"
            className={`p-2.5 rounded-xl shadow-lg transition-all ${isSelected ? 'bg-green-500 text-white' : 'bg-white text-slate-900 hover:bg-slate-900 hover:text-white'}`}
          >
            {isSelected ? <Check size={18} /> : <Plus size={18} />}
          </button>
          <button 
            onClick={handleShare}
            title="Share"
            className="p-2.5 bg-white text-slate-900 rounded-xl shadow-lg hover:bg-slate-900 hover:text-white transition-all"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="mb-6 flex-1">
          <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight">{bike.name}</h3>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{bike.description}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: 'Engine', val: bike.engine },
            { label: 'Mileage', val: bike.mileage },
            { label: 'Power', val: bike.power },
          ].map(stat => (
            <div key={stat.label} className="bg-slate-50 p-2.5 rounded-2xl text-center border border-slate-100">
              <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-0.5">{stat.label}</p>
              <p className="text-[11px] font-black text-slate-800">{stat.val}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto">
          <div>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-0.5">Starting At</p>
            <p className="text-2xl font-black text-slate-900">₹{bike.price}*</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={onViewDetails}
              className="bg-slate-100 text-slate-900 px-4 py-3 rounded-2xl font-bold hover:bg-slate-200 transition-colors flex items-center gap-2"
            >
              <Eye size={18} />
              Details
            </button>
            <button className="bg-red-600 text-white p-3.5 rounded-2xl hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/20">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
