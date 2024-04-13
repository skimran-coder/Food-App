import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { IMG_CDN_URL } from '../Constant';
import Shimmer from './ShimmerUI';
import MenuItems from './MenuItems';
import star from '../../public/asset/star.png'

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
        setRestaurant(json?.data?.cards[2]?.card?.card?.info)
        setRestaurantMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }

    return (
        restaurantMenu ?
        
         (
        <div className=' restaurant-menu w-3/5 mx-auto my-0  p-2 flex flex-col gap-8'>
            
            <div className='flex justify-between'>
            <div className='top py-4'>
                
                <h2 className='pl-2 font-serif text-xl'>{restaurant?.name}</h2>
                <span className="flex items-center font-medium">
            <img src={star} className="w-8"></img>
            <h4 className="pl-1">{restaurant?.avgRating}</h4>  
            </span>
                <p className='pl-2 font-sans opacity-80'>{restaurant?.cuisines?.join(", ")}</p>
                <span className='pl-2 font-sans opacity-80'>{restaurant?.locality}</span>
                <span className='pl-2 font-sans opacity-80'>{", " + restaurant?.areaName}</span>
            </div>

            <div>
            <img src= {IMG_CDN_URL + restaurant?.cloudinaryImageId}
                alt="Restaurant Image" className="w-40 aspect-square object-cover rounded-lg"/> 
            </div>
            

            

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