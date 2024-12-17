import { Search } from 'lucide-react';

export const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search destinations..."
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>
  );
};