import React from 'react';
import { GalleryItem } from './GalleryItem';
import { useMemories } from '../../hooks/useMemories';

export const GalleryGrid = () => {
  const { memories, loading, error } = useMemories();

  if (loading) return <div className="text-center">Loading gallery...</div>;
  if (error) return <div className="text-center text-red-500">Error loading gallery</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {memories.map((memory) => (
        <GalleryItem key={memory._id} memory={memory} />
      ))}
    </div>
  );
};