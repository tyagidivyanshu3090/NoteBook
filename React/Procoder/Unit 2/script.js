// Creating the single react element

// const h2 = React.createElement(
//   "h2",
//   { className: "subHeading" },
//   "Hello React!"
// );

// * Creating the multiple parent-child react element -> Using the array Object
const h2 = React.createElement("h2", { className: "subHeading" }, [
  React.createElement(
    "div",
    { className: "subHeading" },
    "This is the child Element"
  ),
]);

console.log(h2);
// Selecting the root element of HTML to render it -> using JavaScript
const rootElement = document.getElementById("root");

// Render it using ReactDOM.createRoot()
const root = ReactDOM.createRoot(rootElement);
root.render(h2);
