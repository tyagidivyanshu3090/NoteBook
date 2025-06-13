import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./asset/Food_Logo.jpeg";
console.log(Logo); // This should print a blob or asset path

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        {/* <img src={Logo} alt="Food Logo" width="200" /> */}
        <img
          src={require("./asset/Food_Logo.jpeg")}
          alt="Food Logo"
          width="200"
        />
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
      {console.log("Logo:", Logo)}
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
