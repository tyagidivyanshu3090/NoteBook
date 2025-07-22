import { useState } from "react";
import { Logo_URL } from "../utils/constant";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../App";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // * Custom hook to check online status
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>{onlineStatus ? "✅" : "🔴"}</li>
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
