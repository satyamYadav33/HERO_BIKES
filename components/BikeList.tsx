
import React, { useState } from 'react';
import { Bike } from '../types';
import BikeCard from './BikeCard';
import { Search, Filter } from 'lucide-react';

interface BikeListProps {
  bikes: Bike[];
  onToggleComparison: (bike: Bike) => void;
  selectedBikeIds: string[];
  onViewDetails?: (bike: Bike) => void;
}

const BikeList: React.FC<BikeListProps> = ({ bikes, onToggleComparison, selectedBikeIds, onViewDetails }) => {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Commuter', 'Sports', 'Adventure', 'Scooter'];

  const filteredBikes = bikes.filter(bike => {
    const matchesFilter = filter === 'All' || bike.category === filter;
    const matchesSearch = bike.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${filter === cat ? 'bg-red-600 text-white shadow-lg shadow-red-500/30' : 'bg-white text-slate-600 border border-slate-200 hover:border-red-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search models..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBikes.length > 0 ? (
          filteredBikes.map(bike => (
            <BikeCard 
              key={bike.id} 
              bike={bike} 
              onToggleComparison={() => onToggleComparison(bike)}
              isSelected={selectedBikeIds.includes(bike.id)}
              onViewDetails={() => onViewDetails?.(bike)}
            />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-slate-500 text-lg">No models found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BikeList;
