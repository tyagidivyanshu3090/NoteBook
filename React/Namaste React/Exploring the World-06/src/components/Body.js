import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";

const Body = () => {
  // Initialize state with the full restaurant list
  const [restaurantList, setRestaurantList] = useState(resData);

  // Function to handle filtering top-rated restaurants
  function handleTopRated() {
    // Filter restaurants having avgRating > 4.5
    const topRatedRestaurants = resData.filter(
      (restaurant) => restaurant.info.avgRating > 4.3
    );
    // Update the state with filtered data
    setRestaurantList(topRatedRestaurants);
  }

  return (
    <div className="body">
      <div className="search-filter-container">
        <div className="search">
          <input type="text" placeholder="Search restaurants..." />
        </div>
        <div className="filter-btn">
          <button onClick={handleTopRated}>Top Rated Restaurants</button>
        </div>
      </div>

      <div className="restaurant-container">
        {/* Pass filtered data to RestaurantCard */}
        <RestaurantCard resData={restaurantList} />
      </div>
    </div>
  );
};

export default Body;
