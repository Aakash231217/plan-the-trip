import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import type { Memory } from '../../types';

interface GalleryItemProps {
  memory: Memory;
}

export const GalleryItem = ({ memory }: GalleryItemProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img
        src={memory.image}
        alt={memory.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {memory.title}
        </h3>
        <div className="space-y-2">
          <p className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            {memory.location}
          </p>
          <p className="flex items-center text-gray-600 dark:text-gray-300">
            <Calendar className="w-4 h-4 mr-2" />
            {memory.date}
          </p>
        </div>
      </div>
    </div>
  );
};