// Creating the react element

const h2 = React.createElement(
  "h2",
  { className: "subHeading" },
  "Hello React!"
);

// Selecting the root element of HTML to render it -> using JavaScript
const rootElement = document.getElementById("root");

// Render it using ReactDOM.createRoot()
const root = ReactDOM.createRoot(rootElement);
root.render(h2);
