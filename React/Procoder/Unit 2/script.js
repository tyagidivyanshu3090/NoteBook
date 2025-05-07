// Creating the single react element

// const h2 = React.createElement(
//   "h2",
//   { className: "subHeading" },
//   "Hello React!"
// );

// * Creating the multiple parent-child react element -> Using the array Object
const h2 = React.createElement("div", { className: "parent" }, [
  React.createElement(
    "div",
    { className: "child1", key: 2 },
    "This is the child Element"
  ),
  React.createElement("img", {
    className: "child2",
    key: 3,
    src: "/1.png",
    style: { width: "200px" },
  }),
]);

console.log(h2);
// Selecting the root element of HTML to render it -> using JavaScript
const rootElement = document.getElementById("root");

// Render it using ReactDOM.createRoot()
const root = ReactDOM.createRoot(rootElement);
root.render(h2);
