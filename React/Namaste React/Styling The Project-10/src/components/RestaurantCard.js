import { CDN_URL } from "../utils/constant/constant";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  return (
    // Grid container to hold multiple restaurant cards
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {/* Map through resData to render individual restaurant cards */}
      {resData.map((item) => (
        <Link
          key={item?.info?.id}
          to={"/restaurant/" + item?.info?.id}
          className="block no-underline text-inherit" // Ensure link doesn't add default styling
        >
          {/* Individual restaurant card */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden transform hover:-translate-y-1">
            {/* Restaurant Image */}
            <img
              src={`${CDN_URL}${item?.info?.cloudinaryImageId}`}
              alt={item?.info?.name || "Restaurant Logo"} // Added alt text for accessibility
              className="w-full h-48 object-cover rounded-t-lg"
            />

            {/* Card Content */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-1 truncate">
                {item?.info?.name}
              </h2>
              <h3 className="text-sm text-gray-600 mb-2 line-clamp-1">
                {item?.info?.cuisines?.join(", ")}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <h4 className="flex items-center font-semibold text-green-600">
                  ⭐️ {item?.info?.avgRating}
                </h4>
                <h4>{item?.info?.costForTwo}</h4>
                <h4>{item?.info?.sla?.deliveryTime} mins</h4>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RestaurantCard;
