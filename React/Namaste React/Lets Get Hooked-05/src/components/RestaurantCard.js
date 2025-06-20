import { CDN_URL } from "../utils/constant";

const RestaurantCard = (resData) => {
  console.log(resData.resData);
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.resData;

  const cuisine = cuisines.join(", ");
  const { deliveryTime } = sla;
  return (
    <div className="rest-card">
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-logo"
        className="res-logo"
      />
      <h2> {name} </h2>
      <h3> {cuisine} </h3>
      <h4> {avgRating} ⭐️</h4>
      <h4>{costForTwo}</h4>
      <h4> {deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
