import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';
import type { Memory } from '../types';

export const useMemories = () => {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMemories = async () => {
      try {
        const query = `*[_type == "memory"] {
          _id,
          title,
          image,
          location,
          date
        }`;
        const result = await client.fetch(query);
        setMemories(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch memories'));
      } finally {
        setLoading(false);
      }
    };

    fetchMemories();
  }, []);

  return { memories, loading, error };
};