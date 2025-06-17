import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./asset/AppLogo.jpg";

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
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
