
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BikeList from './components/BikeList';
import ComparisonTool from './components/ComparisonTool';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import About from './components/About';
import TestRideForm from './components/TestRideForm';
import Dealers from './components/Dealers';
import Footer from './components/Footer';
import ImageEditor from './components/ImageEditor';
import BikeDetail from './components/BikeDetail';
import { BIKES } from './constants';
import { Bike } from './types';

const App: React.FC = () => {
  const [selectedBikes, setSelectedBikes] = useState<Bike[]>([]);
  const [editingImage, setEditingImage] = useState<string | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [selectedDetailBike, setSelectedDetailBike] = useState<Bike | null>(null);

  const handleToggleComparison = (bike: Bike) => {
    setSelectedBikes(prev => {
      const isSelected = prev.find(b => b.id === bike.id);
      if (isSelected) {
        return prev.filter(b => b.id !== bike.id);
      }
      if (prev.length >= 2) {
        return [prev[0], bike];
      }
      return [...prev, bike];
    });
  };

  const openEditor = (img?: string) => {
    setEditingImage(img || null);
    setShowEditor(true);
  };

  const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar onOpenEditor={() => openEditor()} />
      <main>
        <Hero />
        
        <section id="bikes" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Models</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Discover the perfect ride that matches your spirit, from legendary commuters to high-performance adventurers.</p>
          </div>
          <BikeList 
            bikes={BIKES} 
            onToggleComparison={handleToggleComparison}
            selectedBikeIds={selectedBikes.map(b => b.id)}
            onViewDetails={(bike) => setSelectedDetailBike(bike)}
          />
        </section>

        {selectedBikes.length > 0 && (
          <section id="compare" className="py-20 bg-white px-4 md:px-8 border-y border-slate-100">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Compare Bikes</h2>
                <p className="text-slate-600">Select up to two models to see how they stack up against each other.</p>
              </div>
              <ComparisonTool 
                selectedBikes={selectedBikes} 
                onRemove={(id) => setSelectedBikes(prev => prev.filter(b => b.id !== id))}
              />
            </div>
          </section>
        )}

        <Features />
        <Gallery onEditWithAi={openEditor} />
        <Testimonials />
        <About />
        
        <section id="book" className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Experience the Ride?</h2>
              <p className="text-slate-400 text-lg mb-8">
                Book a test ride at your nearest dealership today. Feel the power, comfort, and engineering excellence of Hero first-hand.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold">1</div>
                  <p>Choose your favorite model</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold">2</div>
                  <p>Select your nearest dealer</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold">3</div>
                  <p>Pick a convenient time slot</p>
                </div>
              </div>
            </div>
            <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl">
              <TestRideForm bikes={BIKES} />
            </div>
          </div>
        </section>

        <Dealers />
      </main>
      <Footer />

      {/* Modals */}
      {showEditor && (
        <ImageEditor 
          initialImage={editingImage || undefined} 
          onClose={() => setShowEditor(false)} 
        />
      )}
      {selectedDetailBike && (
        <BikeDetail 
          bike={selectedDetailBike} 
          onClose={() => setSelectedDetailBike(null)} 
          onTestRide={scrollToBook}
        />
      )}
    </div>
  );
};

export default App;
