import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchItem, setSearchItem] = useState("");

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

  function handleSearch() {
    const searched = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setRestaurantList(searched);
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
          {/* Add a class to the search button */}
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
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
