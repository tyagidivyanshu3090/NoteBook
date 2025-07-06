import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";

console.log(resData);
const Body = () => {
  const [filteredData, setFiltedData] = useState(resData);

  function handleRated() {
    const data = resData.filter((item) => item.info.avgRating > 4.5);
    setFiltedData(data);
  }

  return (
    <div className="body">
      <div className="search-filter-container">
        <div className="search">
          <input type="text" placeholder="Search restaurants..." />
        </div>
        <div className="filter-btn">
          <button onClick={handleRated}>Top rated Restaurant</button>
        </div>
      </div>

      <div className="restaurant-container">
        {/*  Restaurant Card -> Reused */}
        <RestaurantCard resData={filteredData} />
      </div>
    </div>
  );
};

export default Body;
