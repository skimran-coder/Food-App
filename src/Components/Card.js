import { IMG_CDN_URL } from "../Constant";

const CardComponent = ({cloudinaryImageId, name, avgRating, cuisines}) => {

    
    return (
        
        <div className="card w-60 h-fit bg-transparent cursor-pointer rounded-t-md flex flex-col gap-2 my-0 mx-auto bg-white transition-all duration-300 hover:scale-95">
            <img src= {IMG_CDN_URL + cloudinaryImageId}
                alt="Restaurant Image" className="w-[100%] aspect-square rounded-md object-cover"/> 
            <h3 className="pl-2">{name}</h3>
            <h4 className="pl-2">{avgRating} star</h4>
            <p className="pl-2">{cuisines.join(", ")}</p>
        </div>
        
    )
}

export default CardComponent;