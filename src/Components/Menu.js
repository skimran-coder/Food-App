import { IMG_CDN_URL } from '../Constant';
import MenuItems from './MenuItems';
import star from '../../Public/asset/star.png'
import useMenu from '../utils/useMenu';
import Loader from './Loader';

const Menu = () => {
    const data = useMenu();
    const restaurant = data?.cards[2]?.card?.card?.info
    const restaurantMenu = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards

    // data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards

    return (
        restaurantMenu ?
        
         (
        <div className=' restaurant-menu w-3/5 mx-auto my-0  p-2 flex flex-col gap-8 min-h-screen'>
            
            <div className='flex justify-between border-b-8 border-myYellow mt-2 p-4 rounded-md shadow-lg bg-stone-200'>
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
            <h2 className='font-bold font-serif text-xl p-4 '>Menu</h2>

            <div className='bottom flex flex-col gap-4  p-4 shadow-sm' >
                
                
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
            <Loader/>
        )
    
)
}

export default Menu