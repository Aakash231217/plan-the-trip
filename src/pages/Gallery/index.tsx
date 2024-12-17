import React from 'react';
import { GalleryGrid } from './GalleryGrid';

export const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Travel Memories</h1>
      <GalleryGrid />
    </div>
  );
};