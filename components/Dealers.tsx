
import React from 'react';
import { DEALERS } from '../constants';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

const Dealers: React.FC = () => {
  return (
    <section id="dealers" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Find Your Dealer</h2>
            <p className="text-slate-600">Locate the nearest Hero MotoCorp showroom in your city.</p>
          </div>
          <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm">
            View All Cities
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEALERS.map(dealer => (
            <div key={dealer.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all group">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">{dealer.name}</h4>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {dealer.address}
              </p>
              
              <div className="space-y-4">
                <a 
                  href={`tel:${dealer.phone}`} 
                  className="flex items-center gap-3 text-slate-800 font-bold hover:text-red-600 transition-colors"
                >
                  <Phone size={18} className="text-red-600" />
                  {dealer.phone}
                </a>
                <a 
                  href={dealer.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-800 font-bold hover:text-red-600 transition-colors"
                >
                  <ExternalLink size={18} className="text-red-600" />
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dealers;
