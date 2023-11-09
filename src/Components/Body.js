import CardComponent from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";


function filterCards(searchInput, restaurants){
        const filteredData = restaurants?.filter((restaurant) => {
           return restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
        })
        return filteredData;
    }





const Body = () =>{
    
    const [searchInput, setSearchInput] = useState("")
    const [restaurants, setRestaurants] = useState(null)
    const [filteredRestaurants, setFilteredRestaurants] = useState(null)

    async function getRestaurant(){
        try {
            const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
            const json = await data.json()
            // console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]);
            setRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            console.log("API call done");
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRestaurant();
    },[])

    // *******************************************
    useEffect(() => {
        // This will log the data when restaurants state changes
        console.log("restaurants:", restaurants);
        const dataToRender = filteredRestaurants ? filteredRestaurants : restaurants;
        console.log("dataToRender:", dataToRender);
      }, [restaurants, filteredRestaurants]);
    // *******************************************


    const dataToRender = filteredRestaurants ? filteredRestaurants : restaurants;
    console.log(restaurants);
    console.log(dataToRender);
    return(
        
        <>
            
            <form className="search-container">

            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="search" placeholder="Search for restaurant..." value={searchInput} className="search-bar" name="search-bar" onChange={(e) => {
                setSearchInput(e.target.value);
            }} />

            <button className="search-btn" type="button" onClick={() => {
                const data = filterCards(searchInput, restaurants)
                setFilteredRestaurants(data);
            }}>Search</button>
            
            </form>

            

            <div className="cards">
                {restaurants ? (
                    dataToRender?.map((restaurant) => (
                    <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
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