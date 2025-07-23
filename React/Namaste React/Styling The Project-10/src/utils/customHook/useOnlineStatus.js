// Import necessary hooks from React.
import React, { useEffect } from "react";

// Define a custom hook named useOnlineStatus.
const useOnlineStatus = () => {
  // 1. Create a state variable to track the online status.
  // It defaults to 'true', assuming the user is online initially.
  const [onlineStatus, setOnlineStatus] = React.useState(true);

  // 2. Use the useEffect hook to set up event listeners when the component mounts.
  // The empty dependency array [] ensures this runs only once.
  useEffect(() => {
    checkStatus();
  }, []);

  // Function to add the actual event listeners.
  function checkStatus() {
    // 3. Add an event listener for the 'online' event.
    // When the browser detects a connection, it updates the state to true.
    window.addEventListener("online", () => {
      console.log("You are online");
      setOnlineStatus(true);
    });

    // 4. Add an event listener for the 'offline' event.
    // When the browser loses its connection, it updates the state to false.
    window.addEventListener("offline", () => {
      console.log("You are offline");
      setOnlineStatus(false);
    });
  }

  // 5. Return the current online status (true or false).
  // Components using this hook will receive this value.
  return onlineStatus;
};

// Export the custom hook to be used in other parts of the application.
export default useOnlineStatus;
