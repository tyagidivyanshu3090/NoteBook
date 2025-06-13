import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./assets/logo.png";

const Header = () => {
  return (
    <div>
      <img src={Logo} alt="" />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      Layout
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
