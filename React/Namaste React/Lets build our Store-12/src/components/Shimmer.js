// Shimmer.js
const Shimmer = () => {
  return (
    // Main container for the shimmer card
    <div className="flex flex-col items-center p-4 m-4 bg-gray-100 rounded-lg shadow-md w-64 animate-pulse">
      {/* Shimmer image placeholder */}
      <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>

      {/* Shimmer text line placeholders */}
      <div className="w-3/4 h-4 bg-gray-300 rounded-sm mb-2"></div>
      <div className="w-full h-4 bg-gray-300 rounded-sm mb-2"></div>
      <div className="w-1/2 h-4 bg-gray-300 rounded-sm"></div>
    </div>
  );
};

export default Shimmer;
