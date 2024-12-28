import React from 'react';
import { Calendar, Users } from 'lucide-react';

interface BookingFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

export default function BookingForm({ onSubmit }: BookingFormProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
          <div className="relative">
            <input
              type="date"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
          <div className="relative">
            <input
              type="date"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
          <div className="relative">
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>
            <Users className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
          <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            <option>Deluxe Suite</option>
            <option>Executive Room</option>
            <option>Presidential Suite</option>
          </select>
        </div>
      </div>
      <button 
        onClick={(e) => onSubmit(e)}
        className="w-full mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        Book Room
      </button>
    </div>
  );
}