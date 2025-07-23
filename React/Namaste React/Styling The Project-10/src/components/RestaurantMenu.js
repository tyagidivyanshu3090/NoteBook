import React, { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constant/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/customHook/useRestaurantMenu";
import Shimmer from "./Shimmer"; // Assuming you have your Shimmer component for loading state

const RestaurantMenu = () => {
  const { resId } = useParams(); // Destructure directly

  // Using your custom hook to fetch restaurant info and menu items
  const { resInfo, restData } = useRestaurantMenu(resId);

  // Destructure properties from resInfo, providing default empty object if resInfo is null/undefined
  const { name, city, cuisines, avgRating } = resInfo || {};

  // Show Shimmer while data is loading
  if (!resInfo || !Object.keys(resInfo).length) {
    return <Shimmer />;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/*
      ---
      Restaurant Header Section
      ---
      */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 text-center max-w-2xl mx-auto">
        {name ? (
          <>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
              {name}
            </h1>
            <h3 className="text-xl text-gray-600 mb-1">📍 {city}</h3>
            <h4 className="text-md text-gray-500 mb-1">
              Cuisines:{" "}
              <span className="font-semibold">
                {cuisines?.join(", ") || "N/A"}
              </span>
            </h4>
            <h4 className="text-md text-green-600 font-bold">
              ⭐ {avgRating} Average Rating
            </h4>
          </>
        ) : (
          <h2 className="text-2xl font-semibold text-gray-700">Loading...</h2>
        )}
      </div>

      {/*
      ---
      Menu Items Section
      ---
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restData.map((restaurant) => (
          <div
            key={restaurant?.card?.info?.id}
            className="flex flex-col md:flex-row bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
          >
            {/* Left side: Item info */}
            <div className="p-4 flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {restaurant?.card?.info?.name}
              </h3>
              <p className="text-green-700 font-semibold mb-2">
                ₹{restaurant?.card?.info?.price / 100 || "N/A"}
              </p>
              <p className="text-sm text-gray-600 line-clamp-3">
                {restaurant?.card?.info?.description || "No description available."}
              </p>
            </div>

            {/* Right side: Image */}
            <div className="w-full md:w-36 flex-shrink-0 relative">
              {restaurant?.card?.info?.imageId && (
                <img
                  src={CDN_URL + restaurant?.card?.info?.imageId}
                  alt={restaurant?.card?.info?.name || "Menu Item"}
                  className="w-full h-full object-cover rounded-b-lg md:rounded-l-none md:rounded-r-lg"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;