import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl sm:text-2xl font-bold text-orange-500 flex-shrink-0">
            Alibaba Clone
          </Link>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-orange-500"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
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
                <span>Login</span>
              </Link>
              <button className="flex items-center text-gray-600 hover:text-orange-500">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="ml-1">Cart (0)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4`}>
          <div className="px-2 pt-2 pb-3 space-y-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2.5" />
            </div>
            
            <Link 
              to="/products" 
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/login" 
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <UserIcon className="h-6 w-6 mr-2" />
                Login
              </div>
            </Link>
            <button 
              className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <ShoppingCartIcon className="h-6 w-6 mr-2" />
                Cart (0)
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 