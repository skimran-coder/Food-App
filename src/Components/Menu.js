import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import Shimmer from './ShimmerUI';
import MenuItems from './MenuItems';

const Menu = () => {
    const params = useParams()
    const {resid} = params

    const [restaurant, setRestaurant] = useState({})
    const [restaurantMenu, setRestaurantMenu] = useState(null)

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
        <div className='restaurant-menu w-3/5 mx-auto my-0  p-2 flex flex-col gap-8'>
            <div className='top py-4'>
                {/* <h1>Menu ID:{resid}</h1> */}
                <h2 className='font-bold text-xl'>{restaurant?.name}</h2>
                <p className='opacity-80 text-sm'>{restaurant?.cuisines?.join(", ")}</p>
                <span className='opacity-80 text-sm'>{restaurant?.locality}</span>
                <span className='opacity-80 text-sm'>{", " + restaurant?.areaName}</span>
                <p className='text-green-500 font-semibold text-base leading-3 pt-1'><i class="fa-solid fa-star pr-1"></i>{restaurant?.avgRating}</p>
            </div>

            <div className='bottom flex flex-col gap-4' >
                <h2 className='font-semibold my-2'>Menu</h2>
                
                    {
                    restaurantMenu?.map((restaurant) => (
                        <div key={restaurant?.card?.info?.id} className='cursor-pointer'>
                            <MenuItems restaurant={restaurant}/>
                        </div>
                    ))
                    }
                
            </div>
        </div>
        ) : (
            <Shimmer count={12}/>
        )
    
    )
}

export default Menu