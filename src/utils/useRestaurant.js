import { useState, useEffect } from "react"
import { FETCH_CARD_URL } from "../constant"

const useRestaurant = () => {
    const [restaurants, setRestaurants] = useState(null)

    async function getRestaurant(){
        try {
            const data = await fetch (FETCH_CARD_URL)
            const json = await data.json()
            setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getRestaurant();
    },[])

    return restaurants
}

export default useRestaurant;