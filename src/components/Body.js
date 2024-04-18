import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import ResCard, { FastDelivery } from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listRestaurants, setRestaurants] = useState([]);
  const [filteredListRestaurants, setfilteredListRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const FastDeliveryCard = FastDelivery(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const json = await response.json();
    
      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurants(restaurants);
      setfilteredListRestaurants(restaurants);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Unable to fetch data. Please install a CORS plugin to allow cross-origin requests. Link - https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf');
    }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h2>Sorry, you are not connected to the internet</h2>;
  }

  return listRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="border-4">
        <input
          className="border-2 border-black mx-4 my-2 rounded-m "
          value={searchText}
          style={{ marginLeft: "10px" }}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-gray-600 px-4 rounded-lg text-white"
          onClick={() => {
            const filteredList = listRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredListRestaurants(filteredList);
          }}
        >
          Search
        </button>

        <button
          className="bg-gray-600 px-4 rounded-lg mx-4 text-white"
          onClick={() => {
            const filteredList = listRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setfilteredListRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredListRestaurants.map((restaurant) => (
          <Link
            className="nav-link"
            key={restaurant.info.id}
            to={"./restaurants/" + restaurant.info.id}
          >
            {restaurant?.info?.sla?.deliveryTime <= 25 ? (
              <FastDeliveryCard resData={restaurant} />
            ) : (
              <ResCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
