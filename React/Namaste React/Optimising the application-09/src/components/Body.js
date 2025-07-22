import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurantCard from "../utils/customHook/useRestaurantCard";

const Body = () => {
  const [searchItem, setSearchItem] = useState("");

  // Importing custom hook to manage restaurant data
  // This hook fetches the restaurant data and provides state management for original and filtered lists
  const {
    originalRestaurantList,
    filteredRestaurantList,
    setFilteredRestaurantList,
    setOriginalRestaurantList,
  } = useRestaurantCard();

  function handleTopRated() {
    const topRatedRestaurants = originalRestaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4.3
    );
    setFilteredRestaurantList(topRatedRestaurants);
  }

  function handleSearch() {
    const lowerCaseSearchItem = searchItem.toLowerCase();
    const searchedRestaurants = originalRestaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(lowerCaseSearchItem)
    );
    setFilteredRestaurantList(searchedRestaurants);
  }

  if (originalRestaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-filter-container">
        <div className="search">
          <input
            type="text"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="Search restaurants..."
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="filter-btn">
          <button onClick={handleTopRated}>Top Rated Restaurants</button>
        </div>
      </div>

      <div className="restaurant-container">
        {filteredRestaurantList.length === 0 ? (
          <h1>No restaurants found for your search!</h1>
        ) : (
          <RestaurantCard resData={filteredRestaurantList} />
        )}
      </div>
    </div>
  );
};

export default Body;
