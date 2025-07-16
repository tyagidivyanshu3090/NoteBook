import { useState } from "react";
import { Logo_URL } from "../utils/constant";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

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
