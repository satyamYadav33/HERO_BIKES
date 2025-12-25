
import React from 'react';
import { Bike } from '../types';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';

interface ComparisonToolProps {
  selectedBikes: Bike[];
  onRemove: (id: string) => void;
}

const ComparisonTool: React.FC<ComparisonToolProps> = ({ selectedBikes, onRemove }) => {
  const comparisonFields = [
    { label: 'Category', key: 'category' },
    { label: 'Engine Capacity', key: 'engine' },
    { label: 'Max Power', key: 'power' },
    { label: 'Fuel Mileage', key: 'mileage' },
    { label: 'Starting Price', key: 'price', prefix: '₹' },
  ];

  if (selectedBikes.length === 0) return null;

  return (
    <div className="bg-white rounded-[3rem] p-6 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-x-auto">
      {selectedBikes.length === 1 ? (
        <div className="flex flex-col md:flex-row items-center gap-12 py-12 px-6">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <img 
                src={selectedBikes[0].image} 
                alt={selectedBikes[0].name} 
                className="w-full h-80 object-cover rounded-[2.5rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <button 
                onClick={() => onRemove(selectedBikes[0].id)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur text-red-600 p-2 rounded-2xl hover:bg-red-600 hover:text-white transition-all shadow-xl"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full font-black text-xs uppercase tracking-widest border border-red-100">
              <Sparkles size={14} />
              Next Step
            </div>
            <h3 className="text-4xl font-black text-slate-900 leading-tight">One more step to <br/><span className="text-red-600">Perfect Choice</span></h3>
            <p className="text-slate-500 text-lg leading-relaxed">
              You've selected the <strong>{selectedBikes[0].name}</strong>. Add another model from our collection above to see a detailed side-by-side spec comparison.
            </p>
            <a 
              href="#bikes" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-red-600 transition-all shadow-xl group"
            >
              Choose Second Bike
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      ) : (
        <table className="w-full min-w-[700px] border-collapse">
          <thead>
            <tr>
              <th className="w-1/4 py-6 px-4"></th>
              {selectedBikes.map(bike => (
                <th key={bike.id} className="w-1/3 py-6 px-4">
                  <div className="relative group">
                    <img 
                      src={bike.image} 
                      alt={bike.name} 
                      className="w-full h-48 object-cover rounded-3xl mb-6 shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <button 
                      onClick={() => onRemove(bike.id)}
                      className="absolute top-2 right-2 bg-white/90 backdrop-blur text-red-600 p-2 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-lg"
                    >
                      <X size={18} />
                    </button>
                    <h3 className="text-2xl font-black text-slate-900">{bike.name}</h3>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {comparisonFields.map(field => (
              <tr key={field.key} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-8 px-6 text-sm font-black text-slate-400 uppercase tracking-widest">{field.label}</td>
                {selectedBikes.map(bike => (
                  <td key={`${bike.id}-${field.key}`} className="py-8 px-6 text-center">
                    <span className="text-xl font-black text-slate-800">
                      {field.prefix}{bike[field.key as keyof Bike]}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="py-8 px-6 text-sm font-black text-slate-400 uppercase tracking-widest">Premium Features</td>
              {selectedBikes.map(bike => (
                <td key={`${bike.id}-features`} className="py-8 px-6">
                  <div className="flex flex-col gap-3 items-center">
                    {bike.features.map(feat => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 shadow-sm whitespace-nowrap">
                        <Check size={14} className="text-green-500" />
                        {feat}
                      </div>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ComparisonTool;
