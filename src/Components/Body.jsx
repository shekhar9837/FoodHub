import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  if (!cloudinaryImageId || !name || !cuisines || !avgRating) {
    return null; // or render a placeholder or an error message
  }
  return (
    <div className="w-64 h-80  m-5 p-5 border border-gray-300 rounded-lg overflow-hidden">
      <img
        className="w-full h-32 object-cover rounded-lg"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="image"
      />
      <h2>{name}</h2>
      <h4>{avgRating}stars</h4>
      <h3 className="flex">{cuisines + ", "}</h3>
    </div>
  );
};

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json)

      setAllRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // setFilteredRestaurants(
      //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants?.info
      // );

      // Check if the expected data is available before setting state
      const cards =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      if (Array.isArray(cards)) {
        setFilteredRestaurants(cards);
      } else {
        console.error("API response does not contain expected data:", json);
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  if (!allRestaurant) return null;

  // if(filteredRestaurants?.length === 0) return <h1>No restaurant found </h1>;

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-between items-center bg-gray-100 px-4 py-2 border-b border-gray-300">
        <input
          className="flex-1 bg-white border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search Food"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={() => {
            setFilteredRestaurants(filterData(searchText, allRestaurant));
            console.log("chala");
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
