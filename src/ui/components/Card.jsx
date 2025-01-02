import { IMG_CDN_URL } from "../../Constant";
import StarIcon from "../icons/StarIcon";

const Card = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  sla,
  areaName,
  aggregatedDiscountInfoV3,
}) => {
  return (
    <div className="card  w-60 h-96 min-h-fit pb-4  cursor-pointer rounded-md flex flex-col gap-2 my-0 mx-auto transition-all duration-300 hover:scale-95 hover:shadow-none relative">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="Restaurant Image"
        className="w-[100%] h-48 aspect-square rounded-md object-cover "
      />
      {aggregatedDiscountInfoV3?.header &&
      aggregatedDiscountInfoV3?.subHeader ? (
        <h2 className="absolute top-40 left-4 z-20 text-white font-extrabold text-xl">
          <span>{aggregatedDiscountInfoV3?.header}</span>
          <span>{" " + aggregatedDiscountInfoV3?.subHeader}</span>
        </h2>
      ) : null}
      <div className="one-edge-shadow absolute top-16 h-8 w-full shadow-2xl z-10"></div>
      <h3 className="pl-2 font-bold text-lg">{name}</h3>
      <span className="flex items-center font-medium pl-2">
        <StarIcon />
        <h4 className="pl-1">{avgRating}</h4>
        <span className=" mx-1 font-extrabold">·</span>
        <h4> {sla?.slaString}</h4>
      </span>
      <p className="pl-2 opacity-80">{cuisines.join(", ")}</p>
      <p className="pl-2 opacity-80">{areaName}</p>
    </div>
  );
};

export default Card;
