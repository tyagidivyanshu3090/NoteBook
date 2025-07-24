import React, { createContext, useState, useEffect, useContext } from "react";

// 1. Create the Context
const UserActivityContext = createContext();

// 2. Create the Provider Component
export const UserActivityProvider = ({ children }) => {
  const [lastActivity, setLastActivity] = useState(null); // Stores the last activity object

  const handleActivity = (event) => {
    const timeInMs = event.timeStamp;
    const date = new Date();
    const activityType =
      event.type === "click" ? "Mouse Click" : "Keyboard Press";
    const keyInfo = event.type === "keydown" ? ` (Key: ${event.key})` : "";

    setLastActivity({
      type: activityType,
      eventTimeStamp: timeInMs,
      actualTime: date.toLocaleString(),
      isoTime: date.toISOString(),
      additionalInfo: keyInfo,
      // You might want to store more details like clientX, clientY, etc.
      // x: event.clientX,
      // y: event.clientY,
    });
  };

  useEffect(() => {
    // Attach global event listeners
    document.addEventListener("click", handleActivity);
    document.addEventListener("keydown", handleActivity);

    // Cleanup: Remove event listeners when the component unmounts
    return () => {
      document.removeEventListener("click", handleActivity);
      document.removeEventListener("keydown", handleActivity);
    };
  }, []); // Empty dependency array ensures listeners are added/removed only once

  return (
    <UserActivityContext.Provider value={{ lastActivity }}>
      {children}
    </UserActivityContext.Provider>
  );
};

// Custom hook to easily consume the context
export const useUserActivity = () => {
  const context = useContext(UserActivityContext);
  if (context === undefined) {
    throw new Error(
      "useUserActivity must be used within a UserActivityProvider"
    );
  }
  return context;
};
