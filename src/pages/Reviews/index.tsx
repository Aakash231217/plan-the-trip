import React from 'react';
import { ReviewList } from './ReviewList';
import { ReviewForm } from './ReviewForm';

export const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Traveler Reviews</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ReviewList />
        </div>
        <div>
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};