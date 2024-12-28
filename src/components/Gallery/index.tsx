import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import GalleryImage from './GalleryImage';
import Lightbox from './Lightbox';
import { galleryItems } from './galleryData';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = galleryItems.map(item => item.category);
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

        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <GalleryImage
              key={index}
              {...image}
              onClick={() => setSelectedImage(image.url)}
            />
          ))}
        </div>

        {selectedImage && (
          <Lightbox
            imageUrl={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </section>
  );
}