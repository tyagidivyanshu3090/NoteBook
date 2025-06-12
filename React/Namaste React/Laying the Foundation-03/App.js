import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return (
    <div>
      <h1> Namaste React Functional Component </h1>
      <h2> Namaste React Functional Component </h2>
    </div>
  );
};

const HeadingComponent2 = () => (
  <div>
    <h1> Namaste React Functional Component </h1>
    <h2> Namaste React Functional Component </h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
