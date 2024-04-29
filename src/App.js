import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import CategoryList from './components/CategoryList';
import ProductGrid from './components/ProductGrid';
import './App.css';

// Dummy data for product, replace with real data
const products = [
  { id: 1, name: 'Product 1', imageUrl: 'path/to/image' },
  // ... more products
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <SearchBar />
        <CategoryList />
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

export default App;
