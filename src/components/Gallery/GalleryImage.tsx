import React from 'react';

interface GalleryImageProps {
  url: string;
  title: string;
  onClick: () => void;
}

export default function GalleryImage({ url, title, onClick }: GalleryImageProps) {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl cursor-pointer"
    >
      <img
        src={url}
        alt={title}
        className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}