import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const Products = () => {
  const [sortBy, setSortBy] = useState('popular');
  
  const products = [
    { id: 1, name: 'Wireless Earbuds', price: 29.99, rating: 4.5, sales: 1200, image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111851_sp880-airpods-Pro-2nd-gen.png' },
    { id: 2, name: 'Smart Watch', price: 99.99, rating: 4.3, sales: 800, image: 'https://img.fruugo.com/product/3/45/203344453_max.jpg' },
    { id: 3, name: 'Laptop Stand', price: 24.99, rating: 4.7, sales: 2000, image: 'https://www.ubuy.com.lb/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDEwRzZzVkZPSUwuX1NTNDAwXy5qcGc.jpg' },
    { id: 4, name: 'Phone Case', price: 14.99, rating: 4.2, sales: 3000, image: 'https://acaso.uk/cdn/shop/files/bbaab50b-fcfd-4c39-a797-e969202b6811.jpg?v=1727208539' },
    { id: 5, name: 'Bluetooth Speaker', price: 49.99, rating: 4.6, sales: 1500, image: 'https://www.sencor.com/getmedia/6770caad-d0be-4d0d-b5f0-01bbc4c1c555/35059169.jpg.aspx?width=2100&height=2100&ext=.jpg' },
    { id: 6, name: 'Wireless Mouse', price: 19.99, rating: 4.4, sales: 2500, image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/PV/EV/WE/117485675/seenda-wireless-silent-mouse-with-usb-nano-receiver-1600-dpi-ambidextrous-pc-mac-laptop-black-500x500.jpg' },
  ];

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Garden',
    'Sports',
    'Beauty',
    'Automotive',
    'Health',
    'Toys',
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 space-y-6">
          <div>
            <h1 className="text-lg font-semibold mb-4 flex items-center text-orange-500 font-bold" style={{'marginTop': '25px'}}>
              <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
              Filters
            </h1>
            <div className="space-y-4">
              <div>
                
                <div className=" element-categories space-y-2 ">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input type="checkbox" className="rounded text-orange-500 mr-2" />
                      {category}
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="min-and-max-price">
                <h4 className="font-medium mb-2 text-center md:text-left" style={{'color': 'black', 'marginBottom': '20px'}}>Price Range</h4>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-20 px-2 py-1 border rounded"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-20 px-2 py-1 border rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Controls */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{products.length} products found</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-lg px-3 py-1"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{'marginBottom': '25px'}}>
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-64 p-4 flex items-center justify-center bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-full w-auto object-contain" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-orange-500 font-bold mb-2">${product.price}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>★ {product.rating}</span>
                    <span>{product.sales} sold</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 