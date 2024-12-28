import React from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
}

export default function Lightbox({ imageUrl, onClose }: LightboxProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X size={32} />
      </button>
      <img
        src={imageUrl}
        alt="Gallery preview"
        className="max-w-full max-h-[90vh] object-contain"
      />
    </div>
  );
}