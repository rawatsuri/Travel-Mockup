import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex justify-center space-x-4 mb-12">
      <button
        onClick={() => onCategoryChange('All')}
        className={`px-6 py-2 rounded-full transition-all duration-300 ${
          activeCategory === 'All' 
            ? 'bg-blue-600 text-white' 
            : 'bg-white text-gray-600 hover:bg-blue-50'
        }`}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            activeCategory === category 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-600 hover:bg-blue-50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}