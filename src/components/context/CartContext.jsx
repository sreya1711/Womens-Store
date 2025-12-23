import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Check if item already exists in cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id && item.size === action.payload.size && item.color === action.payload.color
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.size === action.payload.size && item.color === action.payload.color
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload }],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item, index) =>
          index === action.payload.index ? { ...item, quantity: action.payload.quantity } : item
        ),
      };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] }, () => {
    // Initialize cart from localStorage if available
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : { items: [] };
    }
    return { items: [] };
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1, size, color) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity,
        size,
        color,
      },
    });
  };

  const removeFromCart = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  };

  const updateQuantity = (index, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { index, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const cartTotal = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
  const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
