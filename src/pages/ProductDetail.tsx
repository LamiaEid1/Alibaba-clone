import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { ShieldCheckIcon, TruckIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

// Define the Product type
interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  sales: number;
  image: string;
  description?: string;
  features?: string[];
  images?: string[];
  reviews?: number;
  seller?: {
    name: string;
    rating: number;
    products: number;
    responseRate: number;
  };
}

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock products data (in a real app, this would come from an API)
  const products: Product[] = [
    { 
      id: 1, 
      name: 'Wireless Earbuds', 
      price: 29.99, 
      rating: 4.5, 
      sales: 1200,
      image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111851_sp880-airpods-Pro-2nd-gen.png',
      description: 'High-quality wireless earbuds with noise cancellation and long battery life. Perfect for music lovers and professionals alike.',
      features: [
        'Active Noise Cancellation',
        'Up to 24 hours battery life',
        'Bluetooth 5.0',
        'Water resistant',
        'Touch controls',
      ],
      images: [
        'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111851_sp880-airpods-Pro-2nd-gen.png',
        'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111851_sp880-airpods-Pro-2nd-gen.png',
        'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111851_sp880-airpods-Pro-2nd-gen.png',
      ],
      reviews: 1200,
      seller: {
        name: 'Tech Gadgets Store',
        rating: 4.8,
        products: 1500,
        responseRate: 98,
      },
    },
    { 
      id: 2, 
      name: 'Smart Watch', 
      price: 99.99, 
      rating: 4.3, 
      sales: 800,
      image: 'https://img.fruugo.com/product/3/45/203344453_max.jpg',
      description: 'Feature-rich smartwatch with health tracking, notifications, and long battery life.',
      features: [
        'Heart rate monitoring',
        'Sleep tracking',
        'Water resistant',
        'Notifications',
        'Exercise tracking',
      ],
      images: [
        'https://img.fruugo.com/product/3/45/203344453_max.jpg',
        'https://img.fruugo.com/product/3/45/203344453_max.jpg',
        'https://img.fruugo.com/product/3/45/203344453_max.jpg',
      ],
      reviews: 800,
      seller: {
        name: 'Smart Gear Shop',
        rating: 4.6,
        products: 1200,
        responseRate: 95,
      },
    },
    { 
      id: 3, 
      name: 'Laptop Stand', 
      price: 24.99, 
      rating: 4.7, 
      sales: 2000,
      image: 'https://www.ubuy.com.lb/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDEwRzZzVkZPSUwuX1NTNDAwXy5qcGc.jpg',
      description: 'Ergonomic laptop stand for improved posture and comfort while working.',
      features: [
        'Adjustable height',
        'Portable design',
        'Anti-slip surface',
        'Heat dissipation',
        'Universal compatibility',
      ],
      images: [
        'https://www.ubuy.com.lb/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDEwRzZzVkZPSUwuX1NTNDAwXy5qcGc.jpg',
        'https://www.ubuy.com.lb/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDEwRzZzVkZPSUwuX1NTNDAwXy5qcGc.jpg',
        'https://www.ubuy.com.lb/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDEwRzZzVkZPSUwuX1NTNDAwXy5qcGc.jpg',
      ],
      reviews: 2000,
      seller: {
        name: 'Office Essentials',
        rating: 4.9,
        products: 800,
        responseRate: 99,
      },
    },
    { 
      id: 4, 
      name: 'Phone Case', 
      price: 14.99, 
      rating: 4.5, 
      sales: 1200,
      image: 'https://acaso.uk/cdn/shop/files/bbaab50b-fcfd-4c39-a797-e969202b6811.jpg?v=1727208539',
      description: 'Protect your device in style with our Premium Shockproof Silicone Phone Case, designed for maximum protection and a sleek look.',
      features: [
        'Shockproof',
        'Silicone',
        'Shockproof & Anti-Scratch',
        'Slim & Lightweight',
      ],
      images: [
        'https://acaso.uk/cdn/shop/files/bbaab50b-fcfd-4c39-a797-e969202b6811.jpg?v=1727208539',
        'https://acaso.uk/cdn/shop/files/bbaab50b-fcfd-4c39-a797-e969202b6811.jpg?v=1727208539',
        'https://acaso.uk/cdn/shop/files/bbaab50b-fcfd-4c39-a797-e969202b6811.jpg?v=1727208539',
      ],
      reviews: 1200,
      seller: {
        name: 'Tech Gadgets Store',
        rating: 4.8,
        products: 1500,
        responseRate: 98,
      },
    },
  ];

  const product = products.find(p => p.id === parseInt(id || '1'));

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <img
            src={product.images?.[0] || product.image}
            alt={product.name}
            className="w-full rounded-lg"
          />
          <div className="grid grid-cols-3 gap-4">
            {(product.images || [product.image, product.image]).slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 2}`}
                className="w-full rounded-lg cursor-pointer hover:opacity-75"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="ml-1">{product.rating}</span>
              </div>
              <span className="text-gray-600">{product.reviews || product.sales} reviews</span>
            </div>
          </div>

          <div className="text-3xl font-bold text-orange-500">
            ${product.price}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {product.features && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Key Features</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center space-x-4">
            <label className="font-medium">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-20 px-3 py-2 border rounded-lg"
            />
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 flex items-center justify-center">
              <ShoppingCartIcon className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button className="flex-1 border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50">
              Buy Now
            </button>
          </div>

          <div className="border-t pt-6 space-y-4">
            <div className="flex items-start space-x-3">
              <ShieldCheckIcon className="h-6 w-6 text-green-500" />
              <div>
                <h3 className="font-medium">Trade Assurance</h3>
                <p className="text-sm text-gray-600">Protected payment and shipping</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <TruckIcon className="h-6 w-6 text-blue-500" />
              <div>
                <h3 className="font-medium">Fast Shipping</h3>
                <p className="text-sm text-gray-600">Delivery in 3-7 business days</p>
              </div>
            </div>
          </div>

          {/* Seller Info */}
          {product.seller && (
            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{product.seller.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>★ {product.seller.rating}</span>
                    <span>{product.seller.products} products</span>
                    <span>{product.seller.responseRate}% response rate</span>
                  </div>
                </div>
                <button className="flex items-center text-orange-500 hover:text-orange-600">
                  <ChatBubbleLeftIcon className="h-5 w-5 mr-1" />
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 