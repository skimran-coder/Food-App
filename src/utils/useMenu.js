import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const useMenu = () => {
    const params = useParams()
    const {resid} = params

    const [restaurant, setRestaurant] = useState()

    async function getRestaurantMenu(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await data.json()
        setRestaurant(json?.data)
    }

    useEffect(() => {
        getRestaurantMenu();
    },[])

    return restaurant
}

export default useMenu;