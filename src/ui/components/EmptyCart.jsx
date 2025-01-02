import { Empty_Cart_IMG } from "../../Constant";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={Empty_Cart_IMG} className="w-96 pb-4"></img>
      <h3 className="text-lg font-bold ">Your cart is empty</h3>
      <p className="pb-4 opacity-70 text-sm">
        You can go to home page to view more restaurants
      </p>

      <Link to="/">
        <button
          className="search-btn py-3 px-5  bg-myYellow text-white hover:bg-myGray hover:text-myBlack transition-all ease-in-out duration-500 cursor-pointer font-bold text-sm tracking-widest uppercase"
          type="button"
        >
          See restaurants near you
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
