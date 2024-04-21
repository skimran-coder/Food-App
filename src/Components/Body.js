import Card from "./Card";
import { useState } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import SearchBar from "./SearchBar";
import useOnline from "../utils/useOnline";
import NoInternet from "./NoInternet";
import Category from "./Category";

const Body = () =>{
    

    const [filteredRestaurants, setFilteredRestaurants] = useState(null)

    const data = useRestaurant()
    
    const restaurants = data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const categories = data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    
    
    const dataToRender = filteredRestaurants ? filteredRestaurants : restaurants;

    const isOnline = useOnline()

    if (isOnline) {
        return(
            <NoInternet />
        )
    } 

    

    return(
        
       <main className=" w-full ">
             <div className="  w-[90%] mx-auto ">
            
            
            <SearchBar restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants}/>

            <h3 className="mx-auto w-[90%] pt-8 font-bold text-2xl ">Hungry for ideas?</h3>
            
            <div className="overflow-x-scroll flex mx-auto max-w-[90%] pt-8">
            {categories ? (
                categories.map((category) => (
                    <Category {...category} key={category.id} />
                )) 
            ) :
            <Shimmer/>
            }
            </div>

            <h2 className="mx-auto w-[90%] pt-8 font-bold text-center text-2xl">
            Discover Kolkata's top restaurant chains!
            </h2>

            <div className="cards  flex flex-wrap justify-between py-8 gap-x-8 gap-y-16 mx-auto w-[90%]">
                
                {restaurants ? (
                    dataToRender?.map((restaurant) => (
                    <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id} className="card-link">
                        <Card {...restaurant?.info} />
                    </Link>
                    ))
                ) : (
                    
                    <Shimmer count={12}/>
                )}
            </div>

        </div>
       </main>

        
    )
}

export default Body;