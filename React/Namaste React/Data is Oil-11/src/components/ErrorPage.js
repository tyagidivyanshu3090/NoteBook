import React from "react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError(); // <-- This is the magic hook!

  // For debugging, it's good to log the error
  console.error("Caught a route error:", error);

  // Base styling for the error container
  const baseCardClasses =
    "flex flex-col items-center justify-center min-h-[70vh] p-8 mx-auto my-10 rounded-lg shadow-xl text-center max-w-lg";
  const headingClasses = "text-4xl font-extrabold mb-4";
  const subHeadingClasses = "text-2xl font-semibold mb-3";
  const paragraphClasses = "text-lg text-gray-700 mb-6";
  const linkClasses =
    "px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out shadow-md";

  // Check if the error is a route error response (e.g., from a loader/action)
  if (isRouteErrorResponse(error)) {
    return (
      <div className={`${baseCardClasses} border-4 border-red-500 bg-red-50`}>
        <h2 className={`${headingClasses} text-red-700`}>
          Oops! Something went wrong with the route.
        </h2>
        <h3 className={`${subHeadingClasses} text-red-600`}>
          Error Status: {error.status}
        </h3>
        <p className={paragraphClasses}>Status Text: {error.statusText}</p>
        {/* If the error has data (like from a Response thrown by loader) */}
        {error.data && (
          <p className={paragraphClasses}>Details: {error.data}</p>
        )}
        <p>
          <Link to="/" className={linkClasses}>
            Go to Home Page
          </Link>
        </p>
      </div>
    );
  }

  // Handle generic JavaScript errors (e.g., if a component itself throws)
  return (
    <div
      className={`${baseCardClasses} border-4 border-orange-500 bg-orange-50`}
    >
      <h2 className={`${headingClasses} text-orange-700`}>
        Oh no! An unexpected error occurred.
      </h2>
      <p className={paragraphClasses}>{error.message || "Unknown error"}</p>
      <p>
        <Link to="/" className={linkClasses}>
          Go to Home Page
        </Link>
      </p>
    </div>
  );
}

export default ErrorPage;
