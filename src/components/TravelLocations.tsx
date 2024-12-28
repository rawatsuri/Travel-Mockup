import React from 'react';
import { useEffect, useRef } from 'react';

const locations = [
  {
    name: 'Mountain Trek',
    distance: '15 mins away',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Crystal Beach',
    distance: '20 mins away',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Ancient Temple',
    distance: '25 mins away',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Waterfall Valley',
    distance: '30 mins away',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

export default function TravelLocations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scroll = () => {
      if (scrollElement.scrollLeft + scrollElement.clientWidth >= scrollElement.scrollWidth) {
        scrollElement.scrollLeft = 0;
      } else {
        scrollElement.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Nearby Attractions</h2>
        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-hidden"
        >
          {[...locations, ...locations].map((location, index) => (
            <div 
              key={index}
              className="flex-none w-80 group cursor-pointer"
            >
              <div className="relative h-96 overflow-hidden rounded-xl">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
                  <p className="text-gray-300">{location.distance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}