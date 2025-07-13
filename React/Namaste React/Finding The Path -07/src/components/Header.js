import { useState } from "react";
import { Logo_URL } from "../utils/constant";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

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
