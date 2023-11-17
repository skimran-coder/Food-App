import { IMG_CDN_URL } from "../constant";

const CardComponent = ({cloudinaryImageId, name, avgRating, cuisines}) => {

    
    return (
        
        <div className="card">
            <img src= {IMG_CDN_URL + cloudinaryImageId}
                alt="Restaurant Image"/> 
            <h3>{name}</h3>
            <h4>{avgRating} star</h4>
            <p>{cuisines.join(", ")}</p>
        </div>
        
    )
}

export default CardComponent;