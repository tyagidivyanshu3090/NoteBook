import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let data = await response.json();
    setRestaurantList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  }

  function handleTopRated() {
    const topRatedRestaurants = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4.3
    );
    setRestaurantList(topRatedRestaurants);
  }

  // Show shimmer while data is loading
  if (restaurantList.length === 0) {
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

        <div className="shimmer-container">
          {Array(12)
            .fill("")
            .map((_, index) => (
              <Shimmer key={index} />
            ))}
        </div>
      </div>
    );
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
        <RestaurantCard resData={restaurantList} />
      </div>
    </div>
  );
};

export default Body;
