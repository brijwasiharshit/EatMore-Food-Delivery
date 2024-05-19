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
      throw new Error('Unable to fetch data. Please install a CORS plugin to allow cross-origin requests.' );
    }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h2>Sorry, you are not connected to the internet</h2>;
  }

  return listRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-yellow-50">
      <div className="border-2 flex justify-between items-center">
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
          className="bg-gray-300 px-4 rounded-lg text-gray-700 py-1 hover:bg-gray-100 border-black border-2 sm:flex-row mx-16 mb-1 sm:mb-0 sm:mx-0"
          onClick={() => {
            const filteredList = listRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredListRestaurants(filteredList);
          }}
        >
        <span className="hover:scale-110 ">🔍 <span className="hidden sm:inline-block">Search</span></span>
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
        🔀<span className="hidden sm:inline-block">Top Restaurants</span> 
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
