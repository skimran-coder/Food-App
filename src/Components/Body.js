import CardComponent from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";


function filterCards(searchInput, restaurants){
        const filteredData = restaurants.filter((restaurant) => {
           return restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
        })
        return filteredData;
    }





const Body = () =>{
    
    const [searchInput, setSearchInput] = useState("")
    const [restaurants, setRestaurants] = useState(null)
    const [filteredRestaurants, setFilteredRestaurants] = useState(null)

    useEffect(() => {
        getRestaurant();
    },[])

    async function getRestaurant(){
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        // console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]);
        setRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }

    const dataToRender = filteredRestaurants ? filteredRestaurants : restaurants;
    return(
        
        <>
            
            <div className="search-container">
    
            <input type="search" placeholder="Search..." value={searchInput} className="search-bar" onChange={(e) => {
                setSearchInput(e.target.value);
            }}/>

            <button className="search-btn" type="button" onClick={() => {
                const data = filterCards(searchInput, restaurants)
                setFilteredRestaurants(data);
            }}>Search</button>
            
            </div>

            

            <div className="cards">
                {restaurants ? (
                    dataToRender.map((restaurant) => (
                    <CardComponent {...restaurant?.info} key={restaurant?.info?.id} />
                    ))
                ) : (
                    <Shimmer count={12}/>
                )}
            </div>

        </>

        
    )
}

export default Body;