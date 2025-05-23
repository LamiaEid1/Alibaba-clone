import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
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
              <li><Link to="/trade-assurance" className="hover:text-orange-500">Trade Assurance</Link></li>
              <li><Link to="/business-identity" className="hover:text-orange-500">Business Identity</Link></li>
              <li><Link to="/logistics" className="hover:text-orange-500">Logistics Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500">Facebook</a>
              <a href="#" className="hover:text-orange-500">Twitter</a>
              <a href="#" className="hover:text-orange-500">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Alibaba Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 