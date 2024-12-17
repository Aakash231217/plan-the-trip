import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TravelJoy</h3>
            <p className="text-gray-400">Making your travel dreams come true with unforgettable experiences.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@traveljoy.com</p>
              <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +1 234 567 890</p>
              <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> 123 Travel Street, World</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/destinations" className="hover:text-blue-400">Destinations</a></li>
              <li><a href="/gallery" className="hover:text-blue-400">Gallery</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Instagram /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} TravelJoy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};