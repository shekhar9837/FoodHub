import {  useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const [restaurantInfo, setRestuarantInfo] = useState(null);
  // const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=691733&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
      );
      const json = await response.json();
      console.log(json);
      setRestuarantInfo(json?.data?.cards[2]?.card?.card?.info);
      // Assuming menu items are available in the response
      // setMenuItems(json?.data?.cards?.menuItems);
    } catch (error) {
      console.error("Error fetching restaurant info:", error);
    }
  }
 

    return (
      
 <div className="flex flex-col justify-center align-center">
      <div className="w-9/12 h-60 p-5 rounded-xl bg-gray-300"> 
        <h1>Restaurant Menu: {resid}</h1> 
        {restaurantInfo && (
        <>
          <h1>Restaurant Name: {restaurantInfo.name}</h1>
          <h2>
            {restaurantInfo.avgRating} - {restaurantInfo.costForTwoMessage}
          </h2>
          <h3>{restaurantInfo.cuisines?.join(", ")}</h3>
          <h4>{restaurantInfo.areaName}</h4>
          <h4>{restaurantInfo.sla?.deliveryTime}</h4>
        </>
      )}
      </div> 

      <div>
        <h1>MENU</h1>
        {/* <ul>
           {Object.values(restaurantInfo?.menu?.items).map((item) => (
            <li key={item.resid}>
              {item.name} -{" "}
            </li>
          ))} 
        </ul> */}
      </div> 

      {/* <img  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resturantInfo.cloudinaryImageId}`}/> */}
    </div>
  
  )};
          

export default RestaurantMenu;
