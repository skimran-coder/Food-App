import { TOP_PICKS_CDN_URL } from "../../Constant";
import Buttons from "./Buttons";

const ResMenuCarousel = ({ carousel }) => {
  const { bannerId, dish, creativeId } = carousel;
  return (
    <div key={bannerId} className="flex-shrink-0 w-72 relative">
      <img src={TOP_PICKS_CDN_URL + creativeId} className="w-full h-auto"></img>
      <p className="text-white absolute bottom-5 left-3">
        {dish?.info?.price
          ? "₹" + dish?.info?.price / 100
          : "₹" + dish?.info?.defaultPrice / 100}
      </p>
      <div className="absolute bottom-2 right-2">
        <Buttons item={carousel} />
      </div>
    </div>
  );
};

export default ResMenuCarousel;
