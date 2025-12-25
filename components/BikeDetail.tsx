
import React from 'react';
import { Bike } from '../types';
import { X, CheckCircle2, ShieldCheck, Zap, Fuel, Activity } from 'lucide-react';

interface BikeDetailProps {
  bike: Bike;
  onClose: () => void;
  onTestRide: () => void;
}

const BikeDetail: React.FC<BikeDetailProps> = ({ bike, onClose, onTestRide }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
      <div className="bg-white w-full max-w-6xl rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[85vh]">
        <div className="flex-1 relative overflow-hidden bg-slate-100">
          <img src={bike.image} alt={bike.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-6 left-6 w-12 h-12 bg-white/20 backdrop-blur text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all border border-white/30"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="w-full md:w-[450px] p-8 md:p-12 overflow-y-auto custom-scrollbar">
          <div className="mb-8">
            <span className="text-red-600 font-black uppercase tracking-widest text-xs">{bike.category}</span>
            <h2 className="text-4xl font-black text-slate-900 mb-4">{bike.name}</h2>
            <p className="text-slate-500 leading-relaxed text-lg">{bike.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="p-4 bg-slate-50 rounded-3xl border border-slate-100">
              <Zap className="text-red-600 mb-2" size={20} />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Engine</p>
              <p className="text-lg font-black text-slate-900">{bike.engine}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-3xl border border-slate-100">
              <Activity className="text-red-600 mb-2" size={20} />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Power</p>
              <p className="text-lg font-black text-slate-900">{bike.power}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-3xl border border-slate-100">
              <Fuel className="text-red-600 mb-2" size={20} />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Mileage</p>
              <p className="text-lg font-black text-slate-900">{bike.mileage}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-3xl border border-slate-100">
              <ShieldCheck className="text-red-600 mb-2" size={20} />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Warranty</p>
              <p className="text-lg font-black text-slate-900">5 Years*</p>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              Top Features
            </h4>
            <div className="flex flex-wrap gap-2">
              {bike.features.map(f => (
                <span key={f} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold border border-slate-200">
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={() => { onTestRide(); onClose(); }}
              className="w-full bg-red-600 text-white py-5 rounded-3xl font-black text-lg hover:bg-red-700 transition-all shadow-xl hover:shadow-red-500/30"
            >
              Book Test Ride
            </button>
            <div className="text-center">
              <span className="text-slate-400 text-sm font-medium">Starting at </span>
              <span className="text-2xl font-black text-slate-900">₹{bike.price}*</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetail;
