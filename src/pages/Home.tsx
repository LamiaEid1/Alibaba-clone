import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredCategories = [
    { id: 1, name: 'Electronics', image: 'https://i0.wp.com/zilani-int.com/wp-content/uploads/2023/02/8ebb2cb57bdb71ac4f0aaadfd61911d5.jpeg?fit=680%2C408&ssl=1' },
    { id: 2, name: 'Fashion', image: 'https://publish.purewow.net/wp-content/uploads/sites/2/2023/04/summer-fashion-trends-butter-yellow.jpg?fit=1360%2C1600' },
    { id: 3, name: 'Home & Garden', image: 'https://plus.unsplash.com/premium_photo-1678836292816-fdf0ac484cf1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGFuZCUyMGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 4, name: 'Sports', image: 'https://rockytopsportsworld.com/wp-content/uploads/2019/07/sports-balls.jpg' },
  ];

  const featuredProducts = [
    { 
      id: 1, 
      name: 'AirPods Pro (2nd Generation)', 
      price: 49.99, 
      image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111851_sp880-airpods-Pro-2nd-gen.png' 
    },
    { id: 2, name: 'Smart Watch', price: 99.99, image: 'https://img.fruugo.com/product/3/45/203344453_max.jpg' },
    { id: 3, name: 'Laptop Stand', price: 24.99, image: 'https://www.ubuy.com.lb/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDEwRzZzVkZPSUwuX1NTNDAwXy5qcGc.jpg' },
    { id: 4, name: 'Phone Case', price: 14.99, image: 'https://acaso.uk/cdn/shop/files/bbaab50b-fcfd-4c39-a797-e969202b6811.jpg?v=1727208539' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full bg-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Alibaba Clone</h1>
            <p className="text-xl mb-8">Your One-Stop Shop for Global Trade</p>
            <Link
              to="/products"
              className="inline-block bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-orange-500 text-center">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <div
                key={category.id}

                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-w-1 aspect-h-1 bg-white">
                  <div className="p-4 flex items-center justify-center w-full h-full">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="max-w-full max-h-full object-contain" 
                    />
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-orange-500 font-bold">{category.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-orange-500 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-w-1 aspect-h-1 bg-white">
                  <div className="p-4 flex items-center justify-center w-full h-full">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-w-full max-h-full object-contain" 
                    />
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-orange-500 font-bold">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Selling?</h2>
          <p className="text-xl mb-8">Join millions of sellers worldwide</p>
          <Link
            to="/register"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600"
          >
            Open a Store
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 