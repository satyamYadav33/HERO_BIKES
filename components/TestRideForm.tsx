
import React, { useState } from 'react';
import { Bike } from '../types';
import { Send, CheckCircle2 } from 'lucide-react';

interface TestRideFormProps {
  bikes: Bike[];
}

const TestRideForm: React.FC<TestRideFormProps> = ({ bikes }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    model: '',
    dealer: 'Mumbai Elite'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulation
  };

  if (submitted) {
    return (
      <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-black mb-4">Request Received!</h3>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto">
          Our dealership representative will contact you within 24 hours to confirm your slot.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-red-600 font-bold hover:underline"
        >
          Book another ride
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 uppercase mb-2">Full Name</label>
          <input 
            required
            type="text" 
            placeholder="John Doe"
            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 uppercase mb-2">Phone Number</label>
          <input 
            required
            type="tel" 
            placeholder="+91 00000 00000"
            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 uppercase mb-2">Select Model</label>
        <select 
          required
          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all appearance-none"
          value={formData.model}
          onChange={e => setFormData({...formData, model: e.target.value})}
        >
          <option value="">Choose a bike...</option>
          {bikes.map(bike => (
            <option key={bike.id} value={bike.id}>{bike.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 uppercase mb-2">Preferred Dealer</label>
        <select 
          required
          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all appearance-none"
          value={formData.dealer}
          onChange={e => setFormData({...formData, dealer: e.target.value})}
        >
          <option>Mumbai Elite</option>
          <option>Delhi Metro</option>
          <option>Bangalore South Side</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="w-full bg-red-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-red-700 transition-all shadow-xl hover:shadow-red-600/30 flex items-center justify-center gap-3"
      >
        Confirm Test Ride Request
        <Send size={20} />
      </button>

      <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        By clicking, you agree to our privacy policy & terms of service.
      </p>
    </form>
  );
};

export default TestRideForm;
