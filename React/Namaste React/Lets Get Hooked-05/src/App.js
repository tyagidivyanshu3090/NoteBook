import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";





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
