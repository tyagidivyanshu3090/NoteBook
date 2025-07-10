import { useState } from "react";
import { Logo_URL } from "../utils/constant";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  //  Checking what will be rendered component or button on click
  console.log(`header component rendered due to ${btnName}`);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <button
        className="login"
        onClick={() => {
          setBtnName((prev) => {
            return prev === "Login" ? "Logout" : "Login";
          });
        }}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Header;
