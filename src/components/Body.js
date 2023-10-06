import { RESTAURANT_LIST } from "./utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-containtor">
        {RESTAURANT_LIST.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
