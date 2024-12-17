import React from 'react';
import { DestinationList } from './DestinationList';
import { DestinationFilters } from './DestinationFilters';
import { SearchBar } from '../../components/SearchBar';

export const Destinations = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Explore Destinations</h1>
      <div className="mb-8">
        <SearchBar />
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64">
          <DestinationFilters />
        </aside>
        <main className="flex-1">
          <DestinationList />
        </main>
      </div>
    </div>
  );
};