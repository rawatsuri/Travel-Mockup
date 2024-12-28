import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryItems = [
  {
    category: 'Rooms',
    images: [
      { url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Presidential Suite' },
      { url: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Ocean View Room' },
      { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Luxury Suite' }
    ]
  },
  {
    category: 'Dining',
    images: [
      { url: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Fine Dining Restaurant' },
      { url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Rooftop Bar' },
      { url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Beach Restaurant' }
    ]
  },
  {
    category: 'Amenities',
    images: [
      { url: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Infinity Pool' },
      { url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Luxury Spa' },
      { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Fitness Center' }
    ]
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryItems.flatMap(item => item.images)
    : galleryItems.find(item => item.category === activeCategory)?.images || [];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Gallery</h2>
          <p className="text-gray-600 text-lg">Take a visual journey through our luxurious resort</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === 'All' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-blue-50'
            }`}
          >
            All
          </button>
          {galleryItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(item.category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === item.category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.url)}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}