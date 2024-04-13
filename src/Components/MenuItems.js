import { IMG_CDN_URL } from "../Constant";

const MenuItems = ({restaurant}) => {
    return(
        <div className="flex justify-between p-4">
            <div>
                <h2 className="text-base">{restaurant?.card?.info?.name}</h2>
                <h3 className="text-green-800 leading-6 text-sm">{"₹" + restaurant?.card?.info?.price /100}</h3>
                <h4 className="text-xs py-4 pr-8 text-justify opacity-75">{restaurant?.card?.info?.description}</h4>
            </div>
            <img src={IMG_CDN_URL + restaurant?.card?.info?.imageId} className="w-32 aspect-square object-cover rounded-lg"/>
        </div>
    )
}

export default MenuItems;