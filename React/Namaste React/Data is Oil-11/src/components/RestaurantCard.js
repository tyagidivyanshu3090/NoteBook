import { CDN_URL } from "../utils/constant/constant";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  // Destructure for cleaner access to the info property
  const { info } = resData;

  // The component now returns the JSX for a single card
  return (
    <Link 
      to={"/restaurant/" + info?.id}
      className="block no-underline text-inherit" // Ensure link doesn't add default styling
    >
      {/* Individual restaurant card */}
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden transform hover:-translate-y-1 h-full">
        {/* Restaurant Image */}
        <img
          src={`${CDN_URL}${info?.cloudinaryImageId}`}
          alt={info?.name || "Restaurant Logo"} // Added alt text for accessibility
          className="w-full h-48 object-cover" // Removed rounded-t-lg as the parent div handles overflow
        />

        {/* Card Content */}
        <div className="p-4 flex flex-col">
          <h2 className="text-xl font-bold text-gray-800 mb-1 truncate">
            {info?.name}
          </h2>
          <h3 className="text-sm text-gray-600 mb-2 line-clamp-1">
            {info?.cuisines?.join(", ")}
          </h3>
          <div className="flex items-center justify-between text-sm text-gray-700 mt-auto pt-2">
            <h4 className="flex items-center font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
              ⭐️ {info?.avgRating}
            </h4>
            <h4>{info?.costForTwo}</h4>
            <h4>{info?.sla?.deliveryTime} mins</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;

// This Higher-Order Component is correct and does not need to be changed.
export const withPromotedLabel = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-orange-500 text-white px-2 py-1 text-xs font-bold z-10 rounded-br-lg">
          Promoted
        </label>
        <WrappedComponent {...props} />
      </div>
    );
  };
};