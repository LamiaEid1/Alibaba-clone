import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-orange-500">About Alibaba Clone</Link></li>
              <li><Link to="/careers" className="hover:text-orange-500">Careers</Link></li>
              <li><Link to="/press" className="hover:text-orange-500">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-orange-500">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-orange-500">Shipping Info</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Trade Services</h3>
            <ul className="space-y-2">
              <li><Link to="/supplier" className="hover:text-orange-500">Supplier Membership</Link></li>
              <li><Link to="/learning" className="hover:text-orange-500">Learning Center</Link></li>
              <li><Link to="/trade" className="hover:text-orange-500">Trade Assurance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <p className="text-sm text-gray-400 mb-4">Get access to exclusive offers!</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Download Now
            </button>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alibaba Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 