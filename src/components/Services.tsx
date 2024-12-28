import React from 'react';
import { Utensils, Wifi, Car, Sparkles, Wine, Coffee, Pool, Dumbbell, Spa } from 'lucide-react';

const services = [
  { 
    icon: Utensils, 
    title: 'Fine Dining', 
    description: 'Experience culinary excellence with our world-class chefs',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    hoverColor: 'hover:bg-amber-100'
  },
  { 
    icon: Pool, 
    title: 'Infinity Pool', 
    description: 'Swim with panoramic ocean views',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    hoverColor: 'hover:bg-blue-100'
  },
  { 
    icon: Spa, 
    title: 'Luxury Spa', 
    description: 'Rejuvenating treatments and massages',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
    hoverColor: 'hover:bg-rose-100'
  },
  { 
    icon: Dumbbell, 
    title: 'Fitness Center', 
    description: 'State-of-the-art equipment with personal trainers',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    hoverColor: 'hover:bg-purple-100'
  },
  { 
    icon: Wine, 
    title: 'Premium Bar', 
    description: 'Curated selection of fine wines and spirits',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    hoverColor: 'hover:bg-emerald-100'
  },
  { 
    icon: Coffee, 
    title: '24/7 Room Service', 
    description: 'Personalized service at your convenience',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    hoverColor: 'hover:bg-orange-100'
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience Luxury</h2>
          <p className="text-gray-600 text-lg">Indulge in our premium amenities and services designed for your ultimate comfort</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group ${service.bgColor} p-8 rounded-xl transform transition-all duration-300 hover:scale-105 ${service.hoverColor} hover:shadow-xl cursor-pointer`}
            >
              <div className="relative">
                <div className={`w-16 h-16 rounded-full ${service.bgColor} ${service.iconColor} flex items-center justify-center mb-6 group-hover:animate-bounce`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                
                {/* Decorative elements */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${service.bgColor} rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2`}></div>
                <div className={`absolute bottom-0 left-0 w-16 h-16 ${service.bgColor} rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}