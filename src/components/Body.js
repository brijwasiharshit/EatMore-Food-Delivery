import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import ResCard, { FastDelivery } from "./ResCard";
import Shimmer from "./Shimmer";
import SearchIcon from "../utils/SVG/SearchIcon";

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
    <div >
      <div className="border-4 flex justify-between bg-yellow-50 items-center">
        <div>
        <input
          placeholder="Search restaurants...."
          className="border-2 border-black mx-4 my-2 rounded-m px-4 py-1 rounded-md"
          value={searchText}
          style={{ marginLeft: "10px" }}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-gray-300 px-4 rounded-lg text-gray-700 py-1 hover:bg-gray-100 border-black border-2 "
          onClick={() => {
            const filteredList = listRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredListRestaurants(filteredList);
          }}
        >
        <span className="hover:scale-110">🔍 Search</span>
        </button>
        </div>

        <button
          className=" px-4 rounded-lg mx-4 text-red bg-gray-100 border-black border-2 my-2"
          onClick={() => {
            const filteredList = listRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setfilteredListRestaurants(filteredList);
          }}
        >
        🔀Top Restaurants 
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
