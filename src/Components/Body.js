import CardComponent from "./Card";
import { useState } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import SearchBar from "./SearchBar";
import useOnline from "../utils/useOnline";
import NoInternet from "./NoInternet";

const Body = () =>{
    
    const [filteredRestaurants, setFilteredRestaurants] = useState(null)
    const restaurants = useRestaurant()

    const dataToRender = filteredRestaurants ? filteredRestaurants : restaurants;

    const isOnline = useOnline()

    if (isOnline) {
        return(
            <NoInternet />
        )
    } 

    return(
        
       <div className="bg-myGray w-full">
             <div className=" max-w-[1200px] w-[90%] mx-auto ">
            
            
            <SearchBar restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants}/>

            

            <div className="cards  flex flex-wrap justify-between py-16 gap-x-8 gap-y-16 mx-auto w-[90%]">
                {restaurants ? (
                    dataToRender?.map((restaurant) => (
                    <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id} className="card-link">
                        <CardComponent {...restaurant?.info} />
                    </Link>
                    ))
                ) : (
                    
                    <Shimmer count={12}/>
                )}
            </div>

        </div>
       </div>

        
    )
}

export default Body;