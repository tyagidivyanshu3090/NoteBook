import React, { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({});
  const [restData, setResData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=697263&catalog_qa=undefined&submitAction=ENTER"
    );
    //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=201862&catalog_qa=undefined&submitAction=ENTER
    const data = await response.json();

    // ~ Checking the API
    // console.log(
    //   data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards
    // );

    setResInfo(data?.data?.cards[2]?.card?.card?.info);
    setResData(
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }

  const { name, city, cloudinaryImageId, cuisines, avgRating } = resInfo;

  return (
    <>
      <div style={{ padding: "20px" }}>
        {name ? (
          <>
            <h1>{name}</h1>
            {/* <img
              src={CDN_URL + cloudinaryImageId}
              alt={name}
              style={{ width: "300px", borderRadius: "10px" }}
            /> */}
            <h3>📍 {city}</h3>
            <h4>Cuisines: {cuisines?.join(", ")}</h4>
            <h4>⭐ Average Rating: {avgRating}</h4>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <div>
        {restData.map((restuarant) => {
          return (
            <div key={restuarant?.card?.info?.id}>
              <h3>{restuarant?.card?.info?.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
