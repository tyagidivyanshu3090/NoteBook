/*
        <div id = "parent">
            <div id = "child">
                <h1> This is child component </h1>
            </div>
        </div>


*/
const heading = React.createElement(
  "div", // First argument: HTML tag ('div')
  { id: "parent" }, // Second argument: Props (Attributes, e.g., id="parent")
  React.createElement(
    // Third argument: Child element (Another div)
    "div",
    { id: "child" },
    React.createElement(
      // Inner-most child element
      "h1", // h1 tag
      {}, // No attributes
      "This is child component" // Text content inside h1
    )
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
