import React, { useState } from "react";
import Profile from "./Profile"; // Import the base component
import { withPromotedLabel } from "./withPromotedLabel"; // Import the HOC

// Create the enhanced component OUTSIDE of App, using the imported HOC and component
const PromotedProfile = withPromotedLabel(Profile);

// The main App component now just focuses on logic and layout
const App = () => {
  const [data, setData] = useState([
    { name: "Alice", marks: 95 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 91 },
  ]);

  return (
    <div>
      <h1>Student List</h1>
      {data.map((item) => {
        // The logic remains the same
        return item.marks > 90 ? (
          <PromotedProfile key={item.name} name={item.name} />
        ) : (
          <Profile key={item.name} name={item.name} />
        );
      })}
    </div>
  );
};

export default App;




