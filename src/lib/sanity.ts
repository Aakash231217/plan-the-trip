import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 't0l4pt1i', // Replace with your Sanity project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-13',
});