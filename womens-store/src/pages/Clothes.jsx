import { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

const categories = ['All', 'Sarees', 'Kurtis', 'Tops', 'Dresses', 'Leggings'];

const Clothes = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSizes, setSelectedSizes] = useState({});

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  const addToCart = (productId) => {
    const size = selectedSizes[productId];
    if (!size) {
      alert('Please select a size');
      return;
    }
    // TODO: Implement cart functionality
    alert(`Added to cart: Product ${productId}, Size: ${size}`);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Our Collection</h1>
        
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="w-full min-h-60 bg-gray-100 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                <p className="mt-2 text-lg font-medium text-pink-600">
                  ${product.price.toFixed(2)}
                </p>
                
                {/* Size Selector */}
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700 mb-1">Size</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeSelect(product.id, size)}
                        className={`w-10 h-10 flex items-center justify-center rounded-md border ${
                          selectedSizes[product.id] === size
                            ? 'bg-pink-500 text-white border-pink-500'
                            : 'border-gray-300 hover:border-pink-500'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product.id)}
                  className="mt-4 w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clothes;
