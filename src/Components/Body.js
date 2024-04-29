import Card from "./Card";
import { useState } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";
import NoInternet from "./NoInternet";
import Category from "./Category";

const Body = () =>{
    

    const [filteredRestaurants, setFilteredRestaurants] = useState(null)

    const data = useRestaurant()
    
    const categories = data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    const restaurants = data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const restaurantList = data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(restaurants)
    
    
    // const dataToRender = filteredRestaurants ? filteredRestaurants : restaurants;

    const isOnline = useOnline()

    if (isOnline) {
        return(
            <NoInternet />
        )
    } 

    

    return(
        
       <main className=" w-full ">
            
            
            <div className="w-10/12 mx-auto ">

            <h3 className=" pt-8 font-bold text-2xl font-Grotesk">Hungry for ideas?</h3>
            
            <div className="overflow-x-scroll flex pt-8">
            {categories ? (
                categories.map((category) => (
                    <Category {...category} key={category.id} />
                )) 
            ) : (
            <Shimmer/>
            )
            }
            </div>

            <h2 className=" font-Grotesk pt-8 font-bold text-2xl">
            Discover Kolkata's top restaurant chains!
            </h2>
        
            <div className="flex gap-8 overflow-x-auto pt-8 pb-16">
            {restaurantList?.map((restaurant) => (
                    <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id} className="card-link">
                        <Card {...restaurant?.info} />
                    </Link>
                    ))}
            </div>

            <h2 className="text-center font-Grotesk pt-8 font-bold text-2xl">
            Restaurants with online food delivery in Kolkata
            </h2>

            <div className="resCards  grid gap-y-20 pt-8 pb-16">
                
                {restaurants ? (
                    restaurants?.map((restaurant) => (
                    <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id} className="card-link">
                        <Card {...restaurant?.info} />
                    </Link>
                    ))
                ) : (
                    
                    <Shimmer count={12} />
                )}
            </div>

        </div>

       </main>

        
    )
}

export default Body;