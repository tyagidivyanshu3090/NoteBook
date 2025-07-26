import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/customHook/useRestaurantMenu";
import Shimmer from "./Shimmer"; // Assuming you have your Shimmer component for loading state
import Accordion from "./Accordion";

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
      Accordian Building
      ---
      */}

      {restData.map((accordian) => {
        return (
          <div key={accordian?.card?.card?.categoryId}>
            <Accordion accordian={accordian} />
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
