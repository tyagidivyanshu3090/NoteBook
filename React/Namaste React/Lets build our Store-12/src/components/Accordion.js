import React from "react";
import { CDN_URL } from "../utils/constant/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux_Store/slice/cartSlice";
const Accordion = ({ accordian, isOpen, setShowIndex }) => {
  // Safely destructure props with a fallback
  const { title, itemCards } = accordian?.card?.card || {};

  const dispatch = useDispatch();
  console.log(dispatch);
  // In a real app, you would dispatch an action to a store (like Redux)
  // or lift the state up to a parent component.
  const handleAddItem = (item) => {
    // const payload = item?.card?.info?.name;
    dispatch(addItem(item));
  };

  // If there are no items to display, don't render the component
  if (!itemCards || itemCards.length === 0) {
    return null;
  }

  return (
    <div className="border border-gray-200 bg-white rounded-lg shadow-sm mb-3 overflow-hidden transition-all duration-300">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
        onClick={setShowIndex}
      >
        <h2 className="text-lg font-bold text-gray-800">
          {title} ({itemCards.length})
        </h2>
        <span className="text-xl font-bold text-gray-600 transform transition-transform duration-300">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <div id={`accordion-content-${title}`} className="p-2 md:p-4">
          <div>
            {itemCards.map((item) => (
              <div
                key={item?.card?.info?.id}
                className="flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0"
              >
                {/* Left side: Item info */}
                <div className="flex-1 pr-4">
                  <h3 className="text-base font-bold text-gray-800 mb-1">
                    {item?.card?.info?.name}
                  </h3>
                  <p className="text-green-700 font-semibold text-sm mb-2">
                    ₹
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </p>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {item?.card?.info?.description ||
                      "No description available."}
                  </p>
                </div>

                {/* Right side: Image and Add Button */}
                <div className="w-28 h-24 md:w-36 md:h-32 flex-shrink-0 relative">
                  {item?.card?.info?.imageId && (
                    <img
                      src={CDN_URL + item?.card?.info?.imageId}
                      alt={item?.card?.info?.name || "Menu Item"}
                      className="w-full h-full object-cover rounded-md"
                    />
                  )}
                  {/* Add Button Container */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                    <button
                      className="px-6 py-2 bg-white text-green-600 font-bold rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition-colors duration-200 text-sm"
                      onClick={() => handleAddItem(item)}
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
