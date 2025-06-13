import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return (
    <div>
      <h1> Name : Divyanshu Tyagi </h1>
      <h2> Occupation: Software Developer </h2>
    </div>
  );
};

// * Creating the react element using JSX and injecting into the functional component. We can also inject the react element using the react.CreateElement. React element is nothing but js object
const reactElement = <p> This is the react element created using jsx </p>;
console.log(reactElement); // JavaScript Object

const HeadingComponent2 = () => (
  <div>
    <HeadingComponent />
    <h3> Office: National Data Center </h3>
    {/* Infusing the javaScript inside the jsx */}
    {console.log("Hello wolrd")}
    {reactElement}
    <h4> Unit: Namaste React Functional Component </h4>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
