import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredCategories = [
    { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/300x200' },
    { id: 2, name: 'Fashion', image: 'https://via.placeholder.com/300x200' },
    { id: 3, name: 'Home & Garden', image: 'https://via.placeholder.com/300x200' },
    { id: 4, name: 'Sports', image: 'https://via.placeholder.com/300x200' },
  ];

  const featuredProducts = [
    { id: 1, name: 'Wireless Earbuds', price: 29.99, image: 'https://via.placeholder.com/200x200' },
    { id: 2, name: 'Smart Watch', price: 99.99, image: 'https://via.placeholder.com/200x200' },
    { id: 3, name: 'Laptop Stand', price: 24.99, image: 'https://via.placeholder.com/200x200' },
    { id: 4, name: 'Phone Case', price: 14.99, image: 'https://via.placeholder.com/200x200' },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Alibaba Clone</h1>
          <p className="text-xl mb-8">Your One-Stop Shop for Global Trade</p>
          <Link
            to="/products"
            className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Start Shopping
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-orange-500 font-bold">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Selling?</h2>
          <p className="text-xl mb-8">Join millions of sellers worldwide</p>
          <Link
            to="/register"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600"
          >
            Open a Store
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 