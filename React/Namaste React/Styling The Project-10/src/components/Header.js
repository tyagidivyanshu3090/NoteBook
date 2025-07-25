import { useState } from "react";
import { Logo_URL } from "../utils/constant/constant";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/customHook/useOnlineStatus"; // Custom hook to check online status

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // Custom hook to check online status
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-white shadow-md px-4 py-2 sm:px-6 lg:px-8">
      {/* Logo Container */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img src={Logo_URL} alt="Company Logo" className="w-24 sm:w-32" />
        </Link>
      </div>

      {/* Navigation Items */}
      <div className="hidden md:block">
        {" "}
        {/* Hide on small screens, show on medium and up */}
        <ul className="flex items-center space-x-6 text-gray-700 font-bold">
          <li>
            Online Status:{" "}
            <span className={onlineStatus ? "text-green-500" : "text-red-500"}>
              {onlineStatus ? "✅" : "🔴"}
            </span>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-orange-500 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-orange-500 transition duration-300 ${
                  isActive ? "text-orange-500 font-bold" : ""
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/grocery"
              className={({ isActive }) =>
                `hover:text-orange-500 transition duration-300 ${
                  isActive ? "text-orange-500 font-bold" : ""
                }`
              }
            >
              Grocery
            </NavLink>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-orange-500 transition duration-300"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-orange-500 transition duration-300"
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>

      {/* Login/Logout Button */}
      <button
        className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300 text-sm sm:text-base"
        onClick={() => {
          setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"));
        }}
      >
        {btnName}
      </button>

      {/* This is a placeholder for a mobile menu button, if you want to add one later */}
      {/* <div className="md:hidden">
        <button className="text-gray-700 text-2xl">☰</button>
      </div> */}
    </div>
  );
};

export default Header;
