
import React from 'react';
import { Shield, Zap, Wind, Droplets } from 'lucide-react';
import { Bike, Testimonial, Dealer, Feature } from './types';

export const BIKES: Bike[] = [
  {
    id: 'splendor-plus',
    name: 'Splendor Plus',
    category: 'Commuter',
    engine: '97.2 cc',
    power: '8.02 PS',
    mileage: '70 kmpl',
    price: '75,441',
    image: 'https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=800',
    description: 'The legendary commuter bike that redefined efficiency and reliability in the Indian market.',
    features: ['i3S Technology', 'Electric Start', 'Tubeless Tyres']
  },
  {
    id: 'xtreme-160r',
    name: 'Xtreme 160R 4V',
    category: 'Sports',
    engine: '163 cc',
    power: '16.9 PS',
    mileage: '45 kmpl',
    price: '1,27,300',
    image: 'https://images.unsplash.com/photo-1449495169669-7b118f960237?auto=format&fit=crop&q=80&w=800',
    description: 'Unleash the athlete within. Engineered for speed, stability, and street-commanding presence.',
    features: ['4V Oil Cooled Engine', 'Upside Down Forks', 'Sleek LED Headlamps']
  },
  {
    id: 'xpulse-200-4v',
    name: 'XPulse 200 4V',
    category: 'Adventure',
    engine: '199.6 cc',
    power: '19.1 PS',
    mileage: '40 kmpl',
    price: '1,44,776',
    image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=800',
    description: 'The ultimate adventure companion for those who seek to go where the road ends.',
    features: ['Long Travel Suspension', 'Rally Kit Compatible', 'Smartphone Connectivity']
  },
  {
    id: 'karizma-xmr',
    name: 'Karizma XMR',
    category: 'Sports',
    engine: '210 cc',
    power: '25.5 PS',
    mileage: '35 kmpl',
    price: '1,79,900',
    image: 'https://images.unsplash.com/photo-1614165933388-9b552e8b0d9c?auto=format&fit=crop&q=80&w=800',
    description: 'Return of the legend. Aerodynamic design meets high-performance liquid-cooled engine.',
    features: ['Liquid Cooled Engine', 'DOHC Engine', 'Segment-First Adjustable Windshield']
  },
  {
    id: 'destini-125',
    name: 'Destini 125',
    category: 'Scooter',
    engine: '124.6 cc',
    power: '9.1 PS',
    mileage: '50 kmpl',
    price: '80,000',
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=800',
    description: 'Classic elegance meets modern technology. Perfect for city commutes with premium styling.',
    features: ['Chrome Accents', 'Front Disc Brake', 'External Fuel Filling']
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Xsens Technology',
    description: 'Advanced fuel injection for better pickup and consistent mileage in all conditions.',
    icon: 'Zap'
  },
  {
    id: 2,
    title: 'i3S System',
    description: 'Smart Idle Stop-Start System saves fuel and reduces emissions at traffic lights.',
    icon: 'Shield'
  },
  {
    id: 3,
    title: 'Performance',
    description: 'Optimized torque delivery for effortless overtaking and city maneuvering.',
    icon: 'Wind'
  },
  {
    id: 4,
    title: 'Reliability',
    description: 'Built to last with high-grade components and Hero\'s legendary engineering legacy.',
    icon: 'Droplets'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Mumbai',
    text: "My Splendor Plus has never let me down in 5 years. Hero means trust for me.",
    rating: 5,
    image: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: 2,
    name: 'Ananya Verma',
    location: 'Delhi',
    text: "The Xpulse is a beast on trails! Finally an affordable adventure bike for everyone.",
    rating: 5,
    image: 'https://picsum.photos/id/65/100/100'
  },
  {
    id: 3,
    name: 'Vikram Singh',
    location: 'Bangalore',
    text: "Switched to Karizma XMR recently. The liquid-cooled engine is incredibly smooth.",
    rating: 4,
    image: 'https://picsum.photos/id/66/100/100'
  }
];

export const DEALERS: Dealer[] = [
  {
    id: 1,
    name: 'Elite Hero MotoCorp',
    address: 'Sakinaka, Andheri East, Mumbai - 400072',
    phone: '+91 98765 43210',
    mapLink: 'https://maps.google.com'
  },
  {
    id: 2,
    name: 'Metro Hero Motors',
    address: 'Connaught Place, New Delhi - 110001',
    phone: '+91 87654 32109',
    mapLink: 'https://maps.google.com'
  },
  {
    id: 3,
    name: 'South Side Hero',
    address: 'Jayanagar, Bengaluru - 560041',
    phone: '+91 76543 21098',
    mapLink: 'https://maps.google.com'
  }
];
