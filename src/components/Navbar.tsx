
import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">TravelJoy</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/destinations" className="nav-link">Destinations</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/reviews" className="nav-link">Reviews</Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};