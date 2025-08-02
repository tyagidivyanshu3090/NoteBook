import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  removeItem,
  clearCart,
} from "../utils/redux_Store/slice/cartSlice";
import { CDN_URL } from "../utils/constant/constant";

// Renamed component to "Cart" for clarity
const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  // --- Event Handlers ---
  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // --- Data Processing ---
  // Group items to handle quantity and avoid duplicates in the UI
  const groupedItems = cartItems.reduce((acc, item) => {
    const itemId = item.card.info.id;
    if (acc[itemId]) {
      acc[itemId].quantity += 1;
    } else {
      acc[itemId] = { ...item, quantity: 1 };
    }
    return acc;
  }, {});
  const itemsToRender = Object.values(groupedItems);

  // Calculate total amount
  const totalAmount = itemsToRender.reduce((total, item) => {
    const price = (item.card.info.price || item.card.info.defaultPrice) / 100;
    return total + price * item.quantity;
  }, 0);

  // --- Render Logic ---
  // Show a message if the cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-[80vh]">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-700">
          Your Cart is Empty 🛒
        </h1>
        <p className="mt-2 text-gray-500">
          Looks like you haven't added anything to your cart yet.
        </p>
      </div>
    );
  }

  // Render the cart with items and a summary
  return (
    <div className="container mx-auto mt-10 p-4 min-h-[80vh]">
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="font-bold text-3xl">Shopping Cart</h1>
        <button
          onClick={handleClearCart}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Clear Cart
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Item List */}
        <div className="lg:w-2/3">
          {itemsToRender.map((item) => (
            <div
              key={item.card.info.id}
              className="flex items-center p-4 mb-4 bg-white rounded-lg shadow"
            >
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-grow mx-4">
                <h3 className="font-bold text-gray-800">
                  {item.card.info.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Unit Price: ₹
                  {(item.card.info.price || item.card.info.defaultPrice) / 100}
                </p>
                <p className="font-semibold text-blue-600">
                  Quantity: {item.quantity}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">
                  ₹
                  {((item.card.info.price || item.card.info.defaultPrice) /
                    100) *
                    item.quantity}
                </p>
                <button
                  onClick={() => handleRemoveItem(item?.card?.info?.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-semibold mt-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow p-6 sticky top-28">
            <h2 className="text-xl font-bold border-b pb-3 mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">₹{totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-semibold">₹40.00</span>
            </div>
            <div className="border-t my-4"></div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span>₹{(totalAmount + 40).toFixed(2)}</span>
            </div>
            <button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors duration-200">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
