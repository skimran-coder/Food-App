import { useState, useEffect } from "react"
import { API_URL } from "../Constant"

const useRestaurant = () => {
    const [restaurants, setRestaurants] = useState(null)

    async function getRestaurant(){
        try {
            const data = await fetch (API_URL)
            const json = await data.json()
            setRestaurants(json?.data)
            
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