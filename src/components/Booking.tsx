import React, { useState } from 'react';
import { Calendar, Users, Utensils, Clock } from 'lucide-react';

export default function Booking() {
  const [bookingType, setBookingType] = useState<'room' | 'dining'>('room');

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Make a Reservation</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 text-center font-semibold ${
                bookingType === 'room' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setBookingType('room')}
            >
              Room Booking
            </button>
            <button
              className={`flex-1 py-4 text-center font-semibold ${
                bookingType === 'dining' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setBookingType('dining')}
            >
              Restaurant Reservation
            </button>
          </div>

          <div className="p-8">
            {bookingType === 'room' ? (
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
              </div>
            ) : (
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
              </div>
            )}

            <button className="w-full mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              {bookingType === 'room' ? 'Book Room' : 'Reserve Table'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}