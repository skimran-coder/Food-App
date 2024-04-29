import { IMG_CDN_URL, StarIcon, rupeeIcon, timeIcon } from '../Constant';
import MenuItems from './MenuItems';
import useMenu from '../utils/useMenu';
import Loader from './Loader';
import resMenu from '../../Public/asset/menuSvg.svg'
import { useState } from 'react';


const Menu = () => {
    const data = useMenu();
    const restaurant = data?.cards[2]?.card?.card?.info
    const restaurantMenu = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    

    console.log(restaurant)
    console.log(restaurantMenu);
    // console.log(restaurantCards[1]?.card?.card?.title);

    // data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards

    return (
        restaurantMenu ?
        
         (
        <div className=' restaurant-menu w-3/5 mx-auto my-0  p-2 flex flex-col gap-8 min-h-screen'>
            
            <h2 className='font-bold text-2xl mt-4'>{restaurant?.name}</h2>
            <div className='flex justify-between border-b-8 border-myYellow mt-2 pb-4 px-4 rounded-md shadow-2xl min-h-fit h-28'>
            
            <div className='top flex flex-col justify-around'>

                
            <span className="flex items-center font-bold pl-2">
                {StarIcon}
                <h4 className="pl-1 ">{restaurant?.avgRating}</h4>  
                <h4 className='pl-1'>({restaurant?.totalRatingsString})</h4>
            </span>
                <p className='pl-2 opacity-80'>{restaurant?.cuisines?.join(", ")}</p>
                <p>
                <span className='pl-2 opacity-80'>{restaurant?.locality + ","}</span>
                <span className='pl-2  opacity-80'>{restaurant?.areaName}</span>
                </p>
            </div>

            

            <div className='flex flex-col justify-between'>
            <div className='flex px-1 gap-1 items-center'>
                {rupeeIcon}
                <span>{restaurant?.costForTwoMessage}</span>
            </div>

                <div className='flex px-1 gap-1 items-center'>
                {timeIcon}
                <span>{restaurant?.sla?.slaString}</span>
                </div>
            
            <div>
            <img src={IMG_CDN_URL + "v1648635511/Delivery_fee_new_cjxumu"} className='w-6 inline px-1'></img>
            <span>{restaurant?.feeDetails?.message.replace(/<\/?b>/g, '')}</span>
            </div>


            </div>
            

            

            </div>
           
            <div className='flex justify-center items-center gap-2 mt-8'>
            <img src={resMenu} className='w-5 '></img>
            <h2 className='text-xl opacity-60 text-center  '> Menu</h2>
            <img src={resMenu} className='w-5 '></img>
            </div>
            <div className='bottom flex flex-col gap-4  p-4 shadow-sm' >
                
                
                    {
                    restaurantMenu?.map((restaurant) => (
                        <div key={restaurant?.card?.card?.title} className='cursor-pointer'>

                        {restaurant?.card?.card?.title ? (
                        <div className='flex justify-between pb-4 ' >
                        <span className='font-extrabold text-xl'>{restaurant?.card?.card?.title} ({restaurant?.card?.card?.itemCards?.length})</span>
                        <i className={`fa-solid fa-angle-down text-xl pr-4  transition-all duration-300`} ></i>
                        </div>
                        ) : (null)
                        }
                           <MenuItems restaurant={restaurant}/> 
                        
                            
                        </div>
                    ))
                    }
                
            </div>
        </div>
        ) : (
            <Loader/>
        )
    
)
}

export default Menu