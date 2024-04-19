import { IMG_CDN_URL } from "../Constant";
import star from '../../Public/asset/star.png'

const CardComponent = ({cloudinaryImageId, name, avgRating, cuisines}) => {

    
    return (
        
        <div className="card  w-60 h-96 min-h-fit pb-4 shadow-md cursor-pointer rounded-md flex flex-col gap-2 my-0 mx-auto transition-all duration-300 hover:scale-95 hover:shadow-none ">
            <img src= {IMG_CDN_URL + cloudinaryImageId}
                alt="Restaurant Image" className="w-[100%] h-48 aspect-square rounded-t-md object-cover"/> 
            <h3 className="pl-2 font-serif text-lg">{name}</h3>
            <span className="flex items-center font-medium">
            <img src={star} className="w-8"></img>
            <h4 className="pl-1">{avgRating}</h4>  
            </span>
            <p className="pl-2 font-sans opacity-80">{cuisines.join(", ")}</p>

        </div>
        
    )
}

export default CardComponent;