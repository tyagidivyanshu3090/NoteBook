import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [originalRestaurantList, setOriginalRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setOriginalRestaurantList(restaurants);
      setFilteredRestaurantList(restaurants);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

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
          {/* <button
            onClick={() => setFilteredRestaurantList(originalRestaurantList)}
          >
            Clear Filters
          </button> */}
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
