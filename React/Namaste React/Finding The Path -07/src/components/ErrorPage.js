import React from "react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError(); // <-- This is the magic hook!

  // For debugging, it's good to log the error
  console.error("Caught a route error:", error);

  // Check if the error is a route error response (e.g., from a loader/action)
  if (isRouteErrorResponse(error)) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "50px",
          border: "2px solid red",
          margin: "20px",
        }}
      >
        <h2>Oops! Something went wrong with the route.</h2>
        <h3>Error Status: {error.status}</h3>
        <p>Status Text: {error.statusText}</p>
        {/* If the error has data (like from a Response thrown by loader) */}
        {error.data && <p>Details: {error.data}</p>}
        <p>
          <Link to="/">Go to Home Page</Link>
        </p>
      </div>
    );
  }

  // Handle generic JavaScript errors (e.g., if a component itself throws)
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        border: "2px solid orange",
        margin: "20px",
      }}
    >
      <h2>Oh no! An unexpected error occurred.</h2>
      <p>{error.message || "Unknown error"}</p>
      <p>
        <Link to="/">Go to Home Page</Link>
      </p>
    </div>
  );
}

export default ErrorPage;



