import React from 'react';
import { Calendar, Users, Utensils, Clock } from 'lucide-react';

interface DiningFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

export default function DiningForm({ onSubmit }: DiningFormProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
          <div className="relative">
            <input
              type="date"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
          <div className="relative">
            <input
              type="time"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <Clock className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Number of People</label>
          <div className="relative">
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none">
              <option>2 People</option>
              <option>4 People</option>
              <option>6 People</option>
              <option>8+ People</option>
            </select>
            <Users className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Dining Area</label>
          <div className="relative">
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none">
              <option>Main Restaurant</option>
              <option>Rooftop Lounge</option>
              <option>Beach Restaurant</option>
              <option>Private Dining</option>
            </select>
            <Utensils className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>
        </div>
      </div>
      <button 
        onClick={(e) => onSubmit(e)}
        className="w-full mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        Reserve Table
      </button>
    </div>
  );
}