import React from 'react';
import { Calendar, Users, Wifi, Coffee } from 'lucide-react';

const rooms = [
  {
    title: 'Deluxe Suite',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    price: 299,
    description: 'Spacious suite with ocean view',
    amenities: ['King Size Bed', 'Ocean View', 'Private Balcony', 'Mini Bar'],
    maxGuests: 2,
  },
  {
    title: 'Executive Room',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    price: 199,
    description: 'Modern comfort with city views',
    amenities: ['Queen Size Bed', 'City View', 'Work Desk', 'Rain Shower'],
    maxGuests: 2,
  },
  {
    title: 'Presidential Suite',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    price: 499,
    description: 'Ultimate luxury experience',
    amenities: ['2 King Size Beds', 'Panoramic View', 'Private Pool', 'Butler Service'],
    maxGuests: 4,
  },
];

export default function Rooms() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Luxurious Accommodations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full">
                  ${room.price}/night
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Users size={20} className="text-gray-400 mr-2" />
                    <span>Up to {room.maxGuests} guests</span>
                  </div>
                  <div className="flex items-center">
                    <Wifi size={20} className="text-gray-400 mr-2" />
                    <span>Free WiFi</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Room Amenities:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-center">
                        <Coffee size={16} className="text-blue-600 mr-2" />
                        <span className="text-sm">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <Calendar size={20} />
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}