// Building the contract for the custom hook -> by contract we mean the function signature and the return value
// This hook will be used to fetch the restaurant menu data

import { useEffect, useState } from "react";

// It takes resId and returns the restaurant Information
function useRestaurantMenu(resId) {
  const [resInfo, setResInfo] = useState({}); // for the restaurant Name
  const [restData, setResData] = useState([]);

  // Fetching the restaurant menu data
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await response.json();

    setResInfo(data?.data?.cards[2]?.card?.card?.info);

    const categories =
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) => {
          return (
            item?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        }
      );
    setResData(categories);
  }
  return { resInfo, restData };
}

export default useRestaurantMenu;
