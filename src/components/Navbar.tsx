import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-orange-500">
            Alibaba Clone
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2.5" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/products" className="text-gray-600 hover:text-orange-500">
              Products
            </Link>
            <Link to="/login" className="flex items-center text-gray-600 hover:text-orange-500">
              <UserIcon className="h-6 w-6 mr-1" />
              Login
            </Link>
            <button className="flex items-center text-gray-600 hover:text-orange-500">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="ml-1">Cart (0)</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 