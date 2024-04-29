import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../Constant";
import { addItem, removeItem } from "../utils/Redux/cartSlice";
import { useState } from "react";
import { starIcon2 } from "../Constant";

const MenuItems = ({restaurant}) => {

    const restaurantId = restaurant?.card?.info?.id;
    const [count, setCount] = useState(0);
    const items = restaurant?.card?.card?.itemCards;
    console.log(items)

    const dispatch = useDispatch()

    const handleAddItem = (restaurant) =>{
        dispatch(addItem(restaurant))
        setCount(count + 1)
    }

    const handleRemoveItem = (restaurantId) => {
        dispatch(removeItem(restaurantId) )
        if(count !== 0) {
            setCount(count - 1)
        }
    }

    

    

    return(
        items && items.map((restaurant) =>(
            <div key={restaurant?.card?.info?.id} className="flex justify-between pb-6 border-b-4 border-myYellow mb-1 relative bg-white shadow-sm">
            <div>

                <h2 className="text-lg">{restaurant?.card?.info?.name}</h2>
                <h3 className=" leading-6 ">{"₹" + restaurant?.card?.info?.price /100}</h3>
                <span className="flex items-center text-green-800 text-sm">
                {starIcon2}
                <h4 className="pl-1 ">{restaurant?.card?.info?.ratings?.aggregatedRating?.rating}</h4>
                <h4 className="pl-1 ">({restaurant?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</h4>
            </span>
                <h4 className="text-sm pb-4 pt-2 pr-8 text-justify opacity-75">{restaurant?.card?.info?.description}</h4>
            </div>
            <img src={IMG_CDN_URL + restaurant?.card?.info?.imageId} className="w-32 aspect-square object-cover rounded-lg"/>

           
                <div className="flex items-center bg-stone-200 gap-3 px-1  rounded-sm text-lg text-[#344151] absolute bottom-2 right-6">

                    <button className="border-r-2 pr-3 border-[#bfbfbf]" onClick={() => handleRemoveItem(restaurantId)}>
                        <i className="fa-solid fa-minus"></i>
                    </button>

                    <div className="font-bold" id="count">
                        {count}
                    </div>

                    <button className="border-l-2 pl-3 border-[#bfbfbf]" onClick={() => handleAddItem(restaurant)}>
                        <i className="fa-solid fa-plus"></i>
                    </button>

                </div>
           
        </div>
        ) )
    )
}

export default MenuItems;