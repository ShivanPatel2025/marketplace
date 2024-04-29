import React from 'react';
import './CategoryList.css';

function CategoryList() {
  // Placeholder categories, replace with actual data or props as needed
  const categories = ['Electronics', 'Books', 'Clothing', 'Home', 'Toys'];

  return (
    <div className="category-list">
      {categories.map((category) => (
        <button key={category} className="category-item">
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;
