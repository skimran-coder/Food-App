import { IMG_CDN_URL } from '../constant';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import Shimmer from './ShimmerUI';

const Menu = () => {
    const params = useParams()
    const {resid} = params

    const [restaurant, setRestaurant] = useState({})
    const [restaurantMenu, setRestaurantMenu] = useState([])

    useEffect(() => {
        getRestaurantMenu();
    },[])

    async function getRestaurantMenu(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5327517&lng=88.376133&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await data.json()
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)
        setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }

    return (
        restaurantMenu ? (
        <div className='restaurant-menu flex gap-20'>
            <div className='left'>
                <h1>Menu ID:{resid}</h1>
                <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}/>
                <h2>Name: {restaurant?.name}</h2>
                <p>{`City: ${restaurant?.slugs?.city.toUpperCase()}`}</p>
                <p>Locality: {restaurant?.locality}</p>
                <p>Area Name: {restaurant?.areaName}</p>
                <p>Cuisines: {restaurant?.cuisines?.join(", ")}</p>
                <p>{restaurant?.costForTwoMessage}</p>
            </div>

            <div className='right'>
                <h2>Menu</h2>
                <ul>
                    {
                    restaurantMenu?.map((restaurant) => (
                        <li key={restaurant?.card?.info?.id}>{restaurant?.card?.info?.name}</li>
                    ))
                    }
                </ul>
            </div>
        </div>
        ) : (
            <Shimmer count={12}/>
        )
    
    )
}

export default Menu