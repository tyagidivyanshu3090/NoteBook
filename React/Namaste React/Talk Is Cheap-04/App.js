import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./asset/AppLogo.jpg";

const RestaurantCard = () => {
  return (
    <div className="rest-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jo9pdipf4elcuch8g55q"
        alt="res-logo"
        className="res-logo"
      />
      <h2> Meghna Foods </h2>
      <h3> Briyani, North Indian, Asian</h3>
      <h4> 4.3 ⭐️</h4>
      <h4> 38 minutes</h4>
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
        <RestaurantCard />
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
