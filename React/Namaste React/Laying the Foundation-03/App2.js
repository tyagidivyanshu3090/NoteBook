import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return (
    <div>
      <h1> Name : Divyanshu Tyagi </h1>
      <h2> Occupation: Software Developers </h2>
    </div>
  );
};

const HeadingComponent2 = () => <div>{HeadingComponent()}</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
