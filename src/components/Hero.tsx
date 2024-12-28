import React, { useEffect, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          transform: `translateY(${offset * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
          Luxury Redefined
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-center max-w-2xl">
          Experience unparalleled comfort and elegance at our exclusive resort
        </p>
        
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="date"
                className="w-full px-4 py-3 bg-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Check-in Date"
              />
            </div>
            <div className="relative">
              <input
                type="date"
                className="w-full px-4 py-3 bg-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Check-out Date"
              />
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2">
              <Search size={20} />
              <span>Search Rooms</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </div>
  );
}