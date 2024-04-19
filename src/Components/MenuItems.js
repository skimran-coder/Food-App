import { IMG_CDN_URL } from "../Constant";

const MenuItems = ({restaurant}) => {
    return(
        <div className="flex justify-between pb-6 p-4 border-b-4  rounded-md border-myYellow mb-1 relative bg-stone-100 shadow-sm">
            <div>
                <h2 className="text-base">{restaurant?.card?.info?.name}</h2>
                <h3 className="text-green-800 leading-6 text-sm">{"₹" + restaurant?.card?.info?.price /100}</h3>
                <h4 className="text-xs py-4 pr-8 text-justify opacity-75">{restaurant?.card?.info?.description}</h4>
            </div>
            <img src={IMG_CDN_URL + restaurant?.card?.info?.imageId} className="w-32 aspect-square object-cover rounded-lg"/>

           
                <div class="flex items-center bg-stone-200 gap-3 px-1  rounded-sm text-lg text-[#344151] absolute bottom-2 right-6">

                    <button class="border-r-2 pr-3 border-[#bfbfbf]">
                        <i class="fa-solid fa-minus"></i>
                    </button>

                    <div class="font-bold" id="count">
                        0
                    </div>

                    <button class="border-l-2 pl-3 border-[#bfbfbf]">
                        <i class="fa-solid fa-plus"></i>
                    </button>

                </div>
           
        </div>
    )
}

export default MenuItems;