import React, { useState } from 'react';
import BookingForm from './BookingForm';
import DiningForm from './DiningForm';

export default function Booking() {
  const [bookingType, setBookingType] = useState<'room' | 'dining'>('room');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

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
              <BookingForm onSubmit={handleSubmit} />
            ) : (
              <DiningForm onSubmit={handleSubmit} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}