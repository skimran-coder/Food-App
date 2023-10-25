import { restaurantList } from "../Constant";
import CardComponent from "./Card";

import { useState } from "react";


function filterCards(searchInput, restaurants){
        const filteredData = restaurants.filter((restaurant) => {
           return restaurant?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
        })
    
        return filteredData;
    }





const Body = () =>{
    
    const [searchInput, setSearchInput] = useState("")
    const [restaurants, setRestaurants] = useState(restaurantList)

    return(
        
        <>
            
            <div className="search-container">
    
            <input type="search" placeholder="Search..." value={searchInput} className="search-bar" onChange={(e) => {
                setSearchInput(e.target.value);
            }}/>

            <button className="search-btn" type="button" onClick={() => {
                const data = filterCards(searchInput, restaurants)
                setRestaurants(data);
            }}>Search</button>
            
            </div>
            
            <div className="cards">

            {
                restaurants.map((restaurant) => {
                    return(
                        <CardComponent {...restaurant?.data} key={restaurant?.data?.id}/>
                    )
                })
            }


            </div>
        </>

        
    )
}

export default Body;