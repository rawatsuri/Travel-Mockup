import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export default function FeatureCard({ icon: Icon, title, description, color, bgColor }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl p-8 transition-all duration-300 hover:shadow-lg">
      <div className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative z-10">
        <div className={`w-16 h-16 rounded-full ${bgColor} ${color} flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
          <Icon size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className={`absolute -bottom-2 -right-2 w-24 h-24 ${bgColor} rounded-full opacity-20 transform scale-0 group-hover:scale-100 transition-transform duration-500`} />
    </div>
  );
}