import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  hoverColor: string;
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  bgColor, 
  iconColor, 
  hoverColor 
}: ServiceCardProps) {
  return (
    <div 
      className={`group ${bgColor} p-8 rounded-xl transform transition-all duration-300 hover:scale-105 ${hoverColor} hover:shadow-xl cursor-pointer`}
    >
      <div className="relative">
        <div className={`w-16 h-16 rounded-full ${bgColor} ${iconColor} flex items-center justify-center mb-6 group-hover:animate-bounce`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
        
        <div className={`absolute top-0 right-0 w-20 h-20 ${bgColor} rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2`}></div>
        <div className={`absolute bottom-0 left-0 w-16 h-16 ${bgColor} rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2`}></div>
      </div>
    </div>
  );
}