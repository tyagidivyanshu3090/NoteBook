import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"; // Shimmer component is imported, but not used in this JSX currently.

const Body = () => {
  // State to hold the original, complete list of restaurants fetched from the API.
  // This list remains immutable (unchanged) after the initial data fetch,
  // serving as the source of truth for all filtering and searching.
  const [originalRestaurantList, setOriginalRestaurantList] = useState([]);

  // State to hold the list of restaurants that are currently displayed on the UI.
  // This list will be updated whenever a search, filter, or sort operation is performed.
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  // State to store the value typed into the search input box by the user.
  const [searchItem, setSearchItem] = useState("");

  // This console.log runs on every render of the Body component.
  // It's useful for debugging to see state changes but should be removed in production.
  console.log("Original List:", originalRestaurantList);
  console.log("Filtered List:", filteredRestaurantList);

  // useEffect hook to perform side effects (like data fetching) after the component mounts.
  // The empty dependency array `[]` ensures this effect runs only once after the initial render,
  // preventing unnecessary API calls on subsequent re-renders.
  useEffect(() => {
    getData();
  }, []);

  /**
   * Asynchronous function to fetch restaurant data from the Swiggy API.
   * This function populates both the original and filtered restaurant lists initially.
   */
  async function getData() {
    try {
      // Make an API call to the Swiggy endpoint.
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      // Check if the response was successful (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON response.
      const data = await response.json();

      // Safely access the restaurant data using optional chaining and provide a fallback empty array.
      const restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      // Initialize both the original and filtered lists with the fetched data.
      // This ensures that initially, all fetched restaurants are displayed.
      setOriginalRestaurantList(restaurants);
      setFilteredRestaurantList(restaurants);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      // Handle error, e.g., show an error message to the user
      // For now, we'll just log it.
    }
  }

  /**
   * Filters the restaurant list to show only restaurants with an average rating above 4.3.
   * This function operates on the `originalRestaurantList` and updates the `filteredRestaurantList`.
   */
  function handleTopRated() {
    // Filter from the immutable `originalRestaurantList` to ensure we always work with the full dataset.
    const topRatedRestaurants = originalRestaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4.3
    );
    // Update `filteredRestaurantList` to display only the top-rated restaurants.
    setFilteredRestaurantList(topRatedRestaurants);
  }

  /**
   * Filters the restaurant list based on the `searchItem` typed by the user.
   * This function operates on the `originalRestaurantList` and updates the `filteredRestaurantList`.
   */
  function handleSearch() {
    // Convert the `searchItem` to lowercase for case-insensitive comparison.
    const lowerCaseSearchItem = searchItem.toLowerCase();

    // Filter from the immutable `originalRestaurantList`.
    const searchedRestaurants = originalRestaurantList.filter((restaurant) =>
      // Convert the restaurant name to lowercase and check if it includes the search item.
      restaurant.info.name.toLowerCase().includes(lowerCaseSearchItem)
    );
    // Update `filteredRestaurantList` to display the search results.
    setFilteredRestaurantList(searchedRestaurants);
  }

  // If `originalRestaurantList` is empty (meaning data hasn't been fetched yet or there was an error),
  // display the Shimmer component for a loading effect.
  // This is a common practice for showing loading states in React.
  if (originalRestaurantList.length === 0) {
    return <Shimmer />;
  }

  // The component's JSX (UI structure).
  return (
    <div className="body">
      <div className="search-filter-container">
        <div className="search">
          {/* Input field for typing search queries. */}
          <input
            type="text"
            value={searchItem} // Binds the input's value to the `searchItem` state.
            // Updates the `searchItem` state whenever the input value changes.
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="Search restaurants..."
          />
          {/* Search button that triggers the `handleSearch` function on click. */}
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="filter-btn">
          {/* Button to filter for top-rated restaurants. */}
          <button onClick={handleTopRated}>Top Rated Restaurants</button>
          {/* Add a button to reset filters and show all restaurants */}
          <button
            onClick={() => setFilteredRestaurantList(originalRestaurantList)}
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="restaurant-container">
        {/* Conditional rendering: If no restaurants are found after filtering/searching,
            display a message. Otherwise, render the `filteredRestaurantList`. */}
        {filteredRestaurantList.length === 0 ? (
          <h1>No restaurants found for your search!</h1>
        ) : (
          // Render the list of restaurants using the RestaurantCard component.
          // IMPORTANT: Now we render `filteredRestaurantList` which holds the actively displayed data.
          <RestaurantCard resData={filteredRestaurantList} />
        )}
      </div>
    </div>
  );
};

export default Body; // Export the Body component to be used in other parts of the application.
