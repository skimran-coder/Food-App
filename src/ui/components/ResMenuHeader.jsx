import { IMG_CDN_URL } from "../../Constant";
import RupeeIcon from "../icons/RupeeIcon";
import StarIcon from "../icons/StarIcon";
import TimeIcon from "../icons/TimeIcon";

const ResMenuHeader = ({ restaurant }) => {
  return (
    <div className="flex justify-between border-b-8 border-myYellow mt-2 pb-4 px-4 rounded-md shadow-2xl h-fit">
      <div className="top flex flex-col justify-around ">
        <span className="flex items-center font-bold pl-2">
          <StarIcon />
          <h4 className="pl-1 ">{restaurant?.avgRating}</h4>
          <h4 className="pl-1">({restaurant?.totalRatingsString})</h4>
        </span>
        <p className="pl-2 opacity-80">{restaurant?.cuisines?.join(", ")}</p>
        <p>
          <span className="pl-2 opacity-80">{restaurant?.locality + ","}</span>
          <span className="pl-2  opacity-80">{restaurant?.areaName}</span>
        </p>
      </div>

      <div className="flex flex-col justify-between">
        <div className="flex px-1 gap-1 items-center">
          <RupeeIcon />
          <span>{restaurant?.costForTwoMessage}</span>
        </div>

        <div className="flex px-1 gap-1 items-center">
          <TimeIcon />
          <span>{restaurant?.sla?.slaString}</span>
        </div>

        <div>
          <img
            src={IMG_CDN_URL + "v1648635511/Delivery_fee_new_cjxumu"}
            className="w-6 inline px-1"
          ></img>
          <span>{restaurant?.feeDetails?.message?.replace(/<\/?b>/g, "")}</span>
        </div>
      </div>
    </div>
  );
};

export default ResMenuHeader;
