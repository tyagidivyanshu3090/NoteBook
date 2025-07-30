import React, { useEffect, useState } from "react";

const useRestaurantCard = () => {
  const [originalRestaurantList, setOriginalRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

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
  return {
    originalRestaurantList,
    filteredRestaurantList,
    setFilteredRestaurantList,
    setOriginalRestaurantList,
  };
};

export default useRestaurantCard;
