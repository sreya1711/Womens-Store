import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFoundPage';

// Temporary placeholders for missing components
const ProductListPage = () => <div>Product List Page - Coming Soon</div>;
const ProductDetailPage = () => <div>Product Detail Page - Coming Soon</div>;
const CartPage = () => <div>Cart Page - Coming Soon</div>;

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:category" element={<ProductListPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
