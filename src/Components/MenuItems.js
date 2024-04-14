import { IMG_CDN_URL } from "../Constant";

const MenuItems = ({restaurant}) => {
    return(
        <div className="flex justify-between pb-6 p-4 border-b-2 border-myYellow relative">
            <div>
                <h2 className="text-base">{restaurant?.card?.info?.name}</h2>
                <h3 className="text-green-800 leading-6 text-sm">{"₹" + restaurant?.card?.info?.price /100}</h3>
                <h4 className="text-xs py-4 pr-8 text-justify opacity-75">{restaurant?.card?.info?.description}</h4>
            </div>
            <img src={IMG_CDN_URL + restaurant?.card?.info?.imageId} className="w-32 aspect-square object-cover rounded-lg"/>
            <div className="flex gap-1 bg-myGray items-center justify-center shadow-sm   absolute bottom-1 right-10
             py-1 px-2 rounded-sm text-[25px] text-[#344151]">
            <button className=" pr-2 place-content-center">-</button>
            <button className="border-l-2 pl-2 place-content-center border-[#bfbfbf]">+</button>
            </div>
        </div>
    )
}

export default MenuItems;