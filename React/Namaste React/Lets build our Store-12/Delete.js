// 2. Create the Provider component

// Provide the new state object and its setter function
<StateContext.Provider value={{ globalState, setGlobalState }}>
  {children}
</StateContext.Provider>;

import React, { Children } from "react";

const App = () => {
  const [globalState, setGlobalState] = useState();
  return (
    <StateContext.Provider value={{ globalState, setGlobalState }}>
      <Children />
    </StateContext.Provider>
  );
};

export default App;
