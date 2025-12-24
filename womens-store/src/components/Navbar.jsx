import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="text-xl font-semibold text-pink-500">
              Elegance
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/clothes" className="text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium">
              Clothes
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium">
              Cart
            </Link>
            <Link to="/orders" className="text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium">
              Orders
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
