import React from 'react';
import { useReviews } from '../../hooks/useReviews';
import { ReviewCard } from './ReviewCard';

export const ReviewList = () => {
  const { reviews, loading, error } = useReviews();

  if (loading) return <div className="text-center">Loading reviews...</div>;
  if (error) return <div className="text-center text-red-500">Error loading reviews</div>;

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </div>
  );
};