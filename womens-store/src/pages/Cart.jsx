import { Link } from 'react-router-dom';

// Sample cart items (will be replaced with state management later)
const cartItems = [
  {
    id: 1,
    name: 'Floral Summer Dress',
    price: 49.99,
    size: 'M',
    quantity: 1,
    image: 'https://via.placeholder.com/100x100/f5e6e6/555',
  },
  {
    id: 2,
    name: 'Silk Saree',
    price: 79.99,
    size: 'Free Size',
    quantity: 1,
    image: 'https://via.placeholder.com/100x100/f5e6e6/555',
  },
];

const Cart = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 5.99 : 0; // Example shipping cost
  const total = subtotal + shipping;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
            <Link
              to="/clothes"
              className="mt-4 inline-block bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            {/* Cart Items */}
            <div className="lg:col-span-8">
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-6 flex">
                    <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">${item.price.toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <div className="flex items-center">
                          <button
                            type="button"
                            className="font-medium text-pink-500 hover:text-pink-600"
                            onClick={() => console.log('Remove item', item.id)}
                          >
                            Remove
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            className="px-2 py-1 border rounded-l-md"
                            onClick={() => console.log('Decrease quantity', item.id)}
                          >
                            -
                          </button>
                          <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                          <button
                            type="button"
                            className="px-2 py-1 border rounded-r-md"
                            onClick={() => console.log('Increase quantity', item.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="mt-8 lg:mt-0 lg:col-span-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="text-base font-medium text-gray-900">Total</span>
                    <span className="text-base font-medium text-gray-900">${total.toFixed(2)}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    to="/order"
                    className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors block text-center"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
                <div className="mt-4 text-center text-sm text-gray-500">
                  <p>or{' '}
                    <Link to="/clothes" className="text-pink-500 hover:text-pink-600 font-medium">
                      Continue Shopping
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
