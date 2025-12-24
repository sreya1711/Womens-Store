import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// ... other imports
import Home from './pages/Home';
import Clothes from './pages/Clothes';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Payment from './pages/Payment';
import Receipt from './pages/Receipt';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;