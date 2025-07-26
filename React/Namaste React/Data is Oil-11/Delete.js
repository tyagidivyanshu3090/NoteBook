<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {restData.map((restaurant) => (
    <div
      key={restaurant?.card?.info?.id}
      className="flex flex-col md:flex-row bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
    >
      {/* Left side: Item info */}
      <div className="p-4 flex-1">
        <h3 className="text-lg font-bold text-gray-800 mb-1">
          {restaurant?.card?.info?.name}
        </h3>
        <p className="text-green-700 font-semibold mb-2">
          ₹
          {restaurant?.card?.info?.price / 100 ||
            restaurant?.card?.info?.finalPrice / 100 ||
            restaurant?.card?.info?.defaultPrice / 100}
        </p>
        <p className="text-sm text-gray-600 line-clamp-3">
          {restaurant?.card?.info?.description || "No description available."}
        </p>
      </div>

      {/* Right side: Image */}
      <div className="w-full md:w-36 flex-shrink-0 relative">
        {restaurant?.card?.info?.imageId && (
          <img
            src={CDN_URL + restaurant?.card?.info?.imageId}
            alt={restaurant?.card?.info?.name || "Menu Item"}
            className="w-full h-full object-cover rounded-b-lg md:rounded-l-none md:rounded-r-lg"
          />
        )}
      </div>
    </div>
  ))}
</div>;
