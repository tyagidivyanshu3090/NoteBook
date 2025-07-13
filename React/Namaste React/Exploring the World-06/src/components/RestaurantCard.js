import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const resList = resData;

 

  return (
    <div className="restaurant-container">
      {resData.map((item) => {
        return (
          <div className="rest-card" key={item?.info?.id}>
            <img
              src={`${CDN_URL}${item?.info?.cloudinaryImageId}`}
              alt="res-logo"
              className="res-logo"
            />
            <h2>{item?.info?.name}</h2>
            <h3>{item?.info?.cuisines?.join(", ")}</h3>
            <h4>{item?.info?.avgRating} ⭐️</h4>
            <h4>{item?.info?.costForTwo}</h4>
            <h4>{item?.info?.sla?.deliveryTime} minutes</h4>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantCard;
