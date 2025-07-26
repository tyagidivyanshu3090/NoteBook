import React, { useState } from "react";
import { CDN_URL } from "../utils/constant/constant";

const Accordion = ({ accordian }) => {
  // State to manage if the accordion is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Safely destructure props with a fallback
  const { title, itemCards } = accordian?.card?.card || {};

  // Function to toggle the accordion's visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // If there are no items to display, don't render the component
  if (!itemCards || itemCards.length === 0) {
    return null;
  }

  return (
    <div className="border border-gray-200 bg-white rounded-lg shadow-sm mb-3 overflow-hidden transition-all duration-300">
      {/* Accordion Header - This is the clickable part */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
        onClick={handleToggle}
        // aria-expanded={isOpen}
        //aria-controls={`accordion-content-${title}`}
      >
        <h2 className="text-lg font-bold text-gray-800">
          {title} ({itemCards.length})
        </h2>
        <span className="text-xl font-bold text-gray-600 transform transition-transform duration-300">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>

      {/* Accordion Body - This part is shown or hidden */}
      {isOpen && (
        <div
          id={`accordion-content-${title}`}
          className="p-4 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {console.log(itemCards)}
            {itemCards.map((item) => (
              <div
                key={item?.card?.info?.id}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
              >
                {/* Left side: Item info */}
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {item?.card?.info?.name}
                  </h3>
                  <p className="text-green-700 font-semibold mb-2">
                    ₹
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {item?.card?.info?.description ||
                      "No description available."}
                  </p>
                </div>

                {/* Right side: Image */}
                <div className="w-full md:w-36 flex-shrink-0 relative">
                  {item?.card?.info?.imageId && (
                    <img
                      src={CDN_URL + item?.card?.info?.imageId}
                      alt={item?.card?.info?.name || "Menu Item"}
                      className="w-full h-full object-cover rounded-b-lg md:rounded-l-none md:rounded-r-lg"
                    />
                  )}
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
