import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';
import type { Review } from '../types';

export const useReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const query = `*[_type == "review"] {
          _id,
          name,
          rating,
          comment,
          image
        }`;
        const result = await client.fetch(query);
        setReviews(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch reviews'));
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, loading, error };
};
