import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../data/products';

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235917,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Fashion Collection"
            />
          </div>
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32 lg:max-w-none lg:py-64">
            <div className="lg:pr-16">
              <h1 className="text-4xl font-playfair font-bold tracking-tight text-gray-800 sm:text-5xl xl:text-6xl">
                <span className="block">Elegance Redefined</span>
                <span className="block text-pink-500">Spring/Summer 2024</span>
              </h1>
              <p className="mt-4 text-xl text-gray-600 font-light">
                Discover timeless pieces that celebrate your unique style and confidence.
              </p>
              <div className="mt-8">
                <Link
                  to="/category/women"
                  className="inline-flex items-center rounded-full border-0 bg-pink-500 px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold tracking-tight text-gray-800 sm:text-4xl mb-2">
              Our Collections
            </h2>
            <div className="w-20 h-1 bg-pink-400 mx-auto"></div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-6 lg:gap-8">
            {[
              {
                name: 'New Arrivals',
                href: '/category/new-arrivals',
                imageSrc: 'https://images.unsplash.com/photo-1445205170230-053b83016042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
              },
              {
                name: 'Dresses',
                href: '/category/dresses',
                imageSrc: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80'
              },
              {
                name: 'Accessories',
                href: '/category/accessories',
                imageSrc: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
              },
              {
                name: 'Sale',
                href: '/sale',
                imageSrc: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
              }
            ].map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="group relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-3 sm:aspect-w-2 sm:h-64 lg:aspect-h-1 lg:aspect-w-1"
              >
                <img
                  src={category.imageSrc}
                  alt={category.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gradient-to-b from-white to-pink-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold tracking-tight text-gray-800 sm:text-4xl mb-4">
              Featured Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">Handpicked selection of our most loved pieces</p>
            <div className="w-20 h-1 bg-pink-400 mx-auto mb-10"></div>
            <Link to="/category/all" className="hidden md:inline-block border-b-2 border-pink-500 text-pink-600 font-medium hover:text-pink-700 transition-colors duration-300">
              View All Products
              <span aria-hidden="true" className="ml-1">→</span>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.slice(0, 8).map((product: any) => (
              <div key={product.id} className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative w-full h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button className="bg-white rounded-full p-3 text-pink-600 hover:bg-pink-50 transition-colors duration-200 transform hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </button>
                    <button className="bg-white rounded-full p-3 text-pink-600 hover:bg-pink-50 transition-colors duration-200 mx-2 transform hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <Link to={`/product/${product.id}`} className="bg-white rounded-full p-3 text-pink-600 hover:bg-pink-50 transition-colors duration-200 transform hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </Link>
                  </div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/300x400?text=Product+Image';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    <Link to={`/product/${product.id}`} className="hover:text-pink-600 transition-colors duration-200">
                      {product.title}
                    </Link>
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-lg font-bold text-pink-600">${product.price.toFixed(2)}</p>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating.rate) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-xs text-gray-500 ml-1">({product.rating.count})</span>
                      </div>
                    </div>
                  </div>
                  {product.inStock ? (
                    <div className="flex items-center mt-2">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                      <span className="text-xs text-gray-600">In Stock</span>
                    </div>
                  ) : (
                    <div className="flex items-center mt-2">
                      <span className="h-2 w-2 rounded-full bg-red-500 mr-1"></span>
                      <span className="text-xs text-gray-600">Out of Stock</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/category/all" className="inline-block border-b-2 border-pink-500 text-pink-600 font-medium hover:text-pink-700 transition-colors duration-300">
              View All Products
              <span aria-hidden="true" className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
