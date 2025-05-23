import React from 'react';

const Products: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product grid will be implemented here */}
        <div className="text-center">Products coming soon...</div>
      </div>
    </div>
  );
};

export default Products; 