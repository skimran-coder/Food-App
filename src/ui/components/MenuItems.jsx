import { IMG_CDN_URL } from "../../Constant";
import { useState } from "react";
import Buttons from "./Buttons";
import NonVegIcon from "../icons/NonVegIcon";
import VegIcon from "../icons/VegIcon";
import StarIcon2 from "../icons/StarIcon2";

const MenuItems = ({ restaurant }) => {
  const items = restaurant?.card?.card?.itemCards;

  const [showMore, setShowMore] = useState([]);

  const handleClickMore = (id) => {
    setShowMore(id);
  };

  return (
    items &&
    items.map((item) => (
      <div
        key={item?.card?.info?.id}
        className="flex justify-between pb-6 border-b-4 border-myYellow mb-4 pt-2 relative rounded-sm  h-60  bg-white shadow-sm"
      >
        <div>
          {item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
            <NonVegIcon />
          ) : (
            <VegIcon />
          )}
          <h2 className="text-lg">{item?.card?.info?.name}</h2>
          <h3 className=" leading-6 ">
            {item?.card?.info?.price / 100
              ? "₹" + item?.card?.info?.price / 100
              : "₹" + item?.card?.info?.defaultPrice / 100}
          </h3>
          {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
            <span className="flex items-center text-green-800 text-sm">
              <StarIcon2 />
              <h4 className="pl-1 ">
                {item?.card?.info?.ratings?.aggregatedRating?.rating}
              </h4>
              <h4 className="pl-1 ">
                ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
              </h4>
            </span>
          ) : null}
          <h4 className="text-base pb-4 pt-2 pr-8 text-justify opacity-75 overflow-y-hidden">
            {showMore === item?.card?.info?.id
              ? item?.card?.info?.description
              : item?.card?.info?.description?.substring(0, 169)}{" "}
            {showMore !== item?.card?.info?.id &&
            item?.card?.info?.description?.length > 169 ? (
              <span
                onClick={() => {
                  handleClickMore(item?.card?.info?.id);
                }}
              >
                ...more
              </span>
            ) : null}{" "}
          </h4>
        </div>
        <img
          src={IMG_CDN_URL + item?.card?.info?.imageId}
          className="w-48 h-48 aspect-square object-cover rounded-lg"
        />

        <div className=" absolute bottom-2 right-6">
          <Buttons item={item} />
        </div>
      </div>
    ))
  );
};

export default MenuItems;
