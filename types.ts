
export interface Bike {
  id: string;
  name: string;
  category: 'Commuter' | 'Sports' | 'Adventure' | 'Scooter';
  engine: string;
  power: string;
  mileage: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export interface Dealer {
  id: number;
  name: string;
  address: string;
  phone: string;
  mapLink: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}
