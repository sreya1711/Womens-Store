import { Link } from 'react-router-dom';
import { PrinterIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const Receipt = () => {
  // In a real app, this data would come from your order context or API
  const orderDetails = {
    orderId: `#${Math.floor(100000 + Math.random() * 900000)}`,
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    customer: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      address: '123 Fashion Street, Apt 4B',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001',
      country: 'India',
    },
    items: [
      { id: 1, name: 'Floral Summer Dress', price: 49.99, quantity: 1, size: 'M' },
      { id: 2, name: 'Silk Saree', price: 79.99, quantity: 1, size: 'Free Size' },
    ],
    subtotal: 129.98,
    shipping: 5.99,
    total: 135.97,
    paymentMethod: 'Cash on Delivery',
    status: 'Confirmed',
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-pink-500 hover:text-pink-600"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-1" />
            Back to Home
          </Link>
          <button
            onClick={handlePrint}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            <PrinterIcon className="h-5 w-5 mr-2 text-gray-500" />
            Print Receipt
          </button>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-pink-50 to-pink-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Order Confirmed</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Thank you for your order! We've received it and we're getting it ready.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                  {orderDetails.status}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Order Information</h2>
                <dl className="space-y-3">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Order number</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {orderDetails.orderId}
                    </dd>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Date placed</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {orderDetails.date}
                    </dd>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Payment method</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {orderDetails.paymentMethod}
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping Address</h2>
                <address className="not-italic text-sm text-gray-700">
                  {orderDetails.customer.name}<br />
                  {orderDetails.customer.address}<br />
                  {orderDetails.customer.city}, {orderDetails.customer.state} {orderDetails.customer.zipCode}<br />
                  {orderDetails.customer.country}<br />
                  {orderDetails.customer.phone}
                </address>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200">
                {orderDetails.items.map((item) => (
                  <li key={item.id} className="py-4 flex">
                    <div className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-md overflow-hidden">
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <span className="text-xs">Image</span>
                      </div>
                    </div>

                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <h3 className="text-base font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Size: {item.size} | Qty: {item.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${orderDetails.subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <p>Shipping</p>
              <p>${orderDetails.shipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900 mt-4 pt-4 border-t border-gray-200">
              <p>Total</p>
              <p>${orderDetails.total.toFixed(2)}</p>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-4 sm:px-6 flex justify-end">
            <Link
              to="/"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Need help? <a href="#" className="text-pink-500 hover:text-pink-600 font-medium">Contact our support</a></p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
