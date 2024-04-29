import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} productName={product.name} imageUrl={product.imageUrl} />
      ))}
    </div>
  );
}

export default ProductGrid;
