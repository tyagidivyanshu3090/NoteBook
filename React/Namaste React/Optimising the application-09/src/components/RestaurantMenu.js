import React, { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constant";
import "./RestaurantMenu.css"; // Import the CSS file
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const param = useParams();
  const { resId } = param;

  const { resInfo, restData } = useRestaurantMenu(resId);

  const { name, city, cuisines, avgRating } = resInfo;

  return (
    <>
      {/* Top component (heading) centered */}
      <div className="restaurant-header">
        {name ? (
          <>
            <h1>{name}</h1>
            <h3>📍 {city}</h3>
            <h4>Cuisines: {cuisines?.join(", ")}</h4>
            <h4>⭐ Average Rating: {avgRating}</h4>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>

      {/* Items rendered in the map with flex property */}
      <div className="menu-items-container">
        {restData.map((restaurant) => (
          <div key={restaurant?.card?.info?.id} className="menu-item">
            {/* Left side: Item info */}
            <div className="menu-item-info">
              <h3>{restaurant?.card?.info?.name}</h3>
              <p>₹{restaurant?.card?.info?.price / 100}</p>
              <p>{restaurant?.card?.info?.description}</p>
            </div>

            {/* Right side: Image */}
            <div className="menu-item-image">
              {restaurant?.card?.info?.imageId && (
                <img
                  src={CDN_URL + restaurant?.card?.info?.imageId}
                  alt={restaurant?.card?.info?.name}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
