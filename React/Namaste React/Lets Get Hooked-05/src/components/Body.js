import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" />
      </div>
      <div className="restaurant-container">
        {/*  Restaurant Card -> Reused */}
        <RestaurantCard resData={resData} />
        {/* <RestaurantCard resName="KFC" cuisine="FastFood" /> */}
      </div>
    </div>
  );
};

export default Body;
