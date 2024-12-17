import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
            alt="Travel Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">Discover Your Next Adventure</h1>
            <p className="text-xl md:text-2xl max-w-2xl">Experience unforgettable journeys to the world's most breathtaking destinations.</p>
            <Link
              to="/destinations"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors"
            >
              Explore Destinations <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add featured destinations here */}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add features here */}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">What Our Travelers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add reviews here */}
        </div>
      </section>
    </div>
  );
};