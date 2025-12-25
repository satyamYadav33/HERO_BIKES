
import React, { useState, useEffect } from 'react';
import { Menu, X, Bike as BikeIcon, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenEditor?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenEditor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Models', href: '#bikes' },
    { name: 'Features', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Dealers', href: '#dealers' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-red-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <BikeIcon className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            HERO<span className="text-red-600">BIKES</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-semibold hover:text-red-600 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={onOpenEditor}
            className={`flex items-center gap-2 font-bold px-4 py-2 rounded-full border transition-all ${scrolled ? 'border-slate-200 text-slate-700 hover:border-red-600 hover:text-red-600' : 'border-white/20 text-white hover:bg-white/10'}`}
          >
            <Sparkles size={16} className="text-red-600" />
            AI Studio
          </button>

          <a 
            href="#book" 
            className="bg-red-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30"
          >
            Book Test Ride
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-8 flex flex-col items-center gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-slate-800 hover:text-red-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { onOpenEditor?.(); setIsOpen(false); }}
            className="flex items-center gap-2 font-bold text-slate-800"
          >
            <Sparkles size={18} className="text-red-600" />
            AI Studio
          </button>
          <a 
            href="#book" 
            onClick={() => setIsOpen(false)}
            className="bg-red-600 text-white px-10 py-3 rounded-full font-bold shadow-lg"
          >
            Book Test Ride
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
