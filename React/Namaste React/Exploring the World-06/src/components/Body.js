import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";

const Body = () => {
  // Initialize state with the full restaurant list
  const [restaurantList, setRestaurantList] = useState(resData);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let data = await response.json();
    console.log(data);
  }

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
      {console.log("This is component")}
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
