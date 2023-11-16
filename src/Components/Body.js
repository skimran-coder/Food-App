import CardComponent from "./Card";
import { useState } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import SearchBar from "./SearchBar";

const Body = () =>{
    
    const [filteredRestaurants, setFilteredRestaurants] = useState(null)
    const restaurants = useRestaurant()

    const dataToRender = filteredRestaurants ? filteredRestaurants : restaurants;

    return(
        
        <>
            
            
            <SearchBar restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants}/>
            

            <div className="cards">
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

        </>

        
    )
}

export default Body;