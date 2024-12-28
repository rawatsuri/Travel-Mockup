import React from 'react';
import { Shield, Award, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Advanced security systems and 24/7 surveillance for your peace of mind',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized globally for exceptional hospitality and service excellence',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Clock,
    title: 'Always Available',
    description: 'Round-the-clock concierge service at your disposal',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Tailored experiences designed around your preferences',
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-lg">Experience excellence in every detail</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className={`absolute inset-0 ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-full ${feature.bgColor} ${feature.color} flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className={`absolute -bottom-2 -right-2 w-24 h-24 ${feature.bgColor} rounded-full opacity-20 transform scale-0 group-hover:scale-100 transition-transform duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}