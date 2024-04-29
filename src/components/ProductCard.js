import React from 'react';
import './ProductCard.css';

function ProductCard({ productName, imageUrl }) {
  return (
    <div className="product-card">
      <img className="product-image" src={imageUrl} alt={productName} />
      <div className="product-info">
        <h3 className="product-name">{productName}</h3>
        {/* You can add more details such as price, rating, etc. */}
      </div>
    </div>
  );
}

export default ProductCard;
