import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurantCard from "../utils/customHook/useRestaurantCard"; // Custom hook to manage restaurant data

const Body = () => {
  const [searchItem, setSearchItem] = useState("");

  // Importing custom hook to manage restaurant data
  const {
    originalRestaurantList,
    filteredRestaurantList,
    setFilteredRestaurantList,
    setOriginalRestaurantList, // You might not need to set original list directly here
  } = useRestaurantCard();

  // Function to filter by top-rated restaurants
  function handleTopRated() {
    const topRatedRestaurants = originalRestaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4.3
    );
    setFilteredRestaurantList(topRatedRestaurants);
  }

  // Function to handle search
  function handleSearch() {
    const lowerCaseSearchItem = searchItem.toLowerCase();
    const searchedRestaurants = originalRestaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(lowerCaseSearchItem)
    );
    setFilteredRestaurantList(searchedRestaurants);
  }

  // Show Shimmer while data is loading
  if (originalRestaurantList.length === 0) {
    // Render multiple shimmer cards for a better loading experience
    return (
      <div className="flex flex-wrap justify-center p-6 bg-gray-50 min-h-screen">
        {Array(10) // Render 10 shimmer cards
          .fill("")
          .map((_, index) => (
            <Shimmer key={index} />
          ))}
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-6 min-h-screen">
      {/* Search and Filter Container */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        {/* Search Bar */}
        <div className="flex items-center w-full sm:w-auto max-w-md">
          <input
            type="text"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="Search restaurants..."
            className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 shadow-sm"
          />
          <button
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-r-md hover:bg-orange-600 transition duration-300 shadow-sm"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Filter Button */}
        <div className="w-full sm:w-auto">
          <button
            className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 shadow-sm"
            onClick={handleTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant Cards Container */}
      {filteredRestaurantList.length === 0 ? (
        <div className="text-center p-10">
          <h1 className="text-2xl font-semibold text-gray-700">
            No restaurants found for your search!
          </h1>
          <p className="text-gray-500 mt-2">
            Please try a different search term or filter.
          </p>
        </div>
      ) : (
        <RestaurantCard resData={filteredRestaurantList} />
      )}
    </div>
  );
};

export default Body;
