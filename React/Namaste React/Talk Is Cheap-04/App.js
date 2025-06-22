import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./asset/AppLogo.jpg";

const resData = {
  id: "618037",
  name: "Jai Ganesh Bhojnalaya",
  cloudinaryImageId: "yzgqriufpzmloogcn2vl",
  locality: "Railway Colony",
  areaName: "Bus stand",
  costForTwo: "₹200 for two",
  cuisines: ["North Indian", "South Indian", "Indian", "Chinese"],
  avgRating: 4.1,
  veg: true,
  parentId: "368432",
  avgRatingString: "4.1",
  totalRatingsString: "403",
  sla: {
    deliveryTime: 48,
    lastMileTravel: 12.1,
    serviceability: "SERVICEABLE",
    slaString: "45-50 mins",
    lastMileTravelString: "12.1 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2025-06-17 23:00:00",
    opened: true,
  },
  badges: {
    imageBadges: [
      {
        imageId: "v1695133679/badges/Pure_Veg111.png",
        description: "pureveg",
      },
    ],
  },
  isOpen: true,
  aggregatedDiscountInfoV2: {},
  type: "F",
};

const RestaurantCard = (resData) => {
  console.log(resData.resData);
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.resData;

  const ImgUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const cuisine = cuisines.join(", ");
  const { deliveryTime } = sla;
  return (
    <div className="rest-card">
      <img
        src={`${ImgUrl}${cloudinaryImageId}`}
        // src={
        //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        //   cloudinaryImageId
        // }
        alt="res-logo"
        className="res-logo"
      />
      <h2> {name} </h2>
      <h3> {cuisine} </h3>
      <h4> {avgRating} ⭐️</h4>
      <h4> {costForTwo}</h4>
      <h4> {deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" />
      </div>
      <div className="restaurant-container">
        {/*  Restaurant Card -> Reused */}
        <RestaurantCard resData={resData} />
        {/* <RestaurantCard resName="KFC" cuisine="FastFood" /> */}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://i.pinimg.com/736x/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  let x = 10;
  return (
    <div className="app">
      <Header />
      <div className="">
        <Body />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
