import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';
import type { Destination } from '../types';

export const useDestinations = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const query = `*[_type == "destination"] {
          _id,
          title,
          description,
          image,
          price,
          duration,
          location
        }`;
        const result = await client.fetch(query);
        setDestinations(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch destinations'));
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  return { destinations, loading, error };
};