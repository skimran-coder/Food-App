import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../../Constant";
import Buttons from "../components/Buttons";
import EmptyCart from "../components/EmptyCart";
import { useEffect, useState } from "react";
import NonVegIcon from "../icons/NonVegIcon";
import VegIcon from "../icons/VegIcon";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [price, setPrice] = useState(0);
  const deliveryFees = Math.floor(price * 0.1);
  const platformFee = 5;
  const gst = Math.floor((price + deliveryFees + platformFee) * 0.1);

  useEffect(() => {
    const priceData = cartItems?.map(
      (items) => items?.card?.info?.price || items?.card?.info?.defaultPrice
    );
    const price = priceData.reduce((acc, price) => acc + price / 100, 0);
    setPrice(price);
  }, [cartItems]);

  const dataToDisplay = cartItems.reduce((acc, curr) => {
    if (!acc.some((item) => item?.card?.info?.id === curr?.card?.info?.id)) {
      acc.push(curr);
    }
    return acc;
  }, []);

  return (
    <div className="md:w-4/5 sm:w-screen  m-auto h-fit min-h-screen flex flex-wrap ">
      <div className=" min-w-fit">
        {cartItems.length !== 0 &&
          dataToDisplay.map((item) => (
            <div className="flex justify-center items-center shadow-lg gap-4 px-5 py-4">
              <div className=" w-fit">
                {item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                  <NonVegIcon />
                ) : (
                  <VegIcon />
                )}
              </div>
              <img
                src={IMG_CDN_URL + item?.card?.info?.imageId}
                className="w-12 h-12 aspect-square object-cover rounded-lg  "
              />
              <h1 className="  w-60">{item?.card?.info?.name}</h1>
              <div className=" w-fit">
                <Buttons item={item} />
              </div>
              <h3 className=" leading-6  w-fit ">
                {item?.card?.info?.price / 100
                  ? "₹" + item?.card?.info?.price / 100
                  : "₹" + item?.card?.info?.defaultPrice / 100}
              </h3>
            </div>
          ))}
      </div>

      {cartItems.length !== 0 ? (
        <div className="w-96 mt-12 mx-8 px-8 py-4 flex flex-col h-fit shadow-lg gap-2">
          <h1 className="font-bold">Bill Details</h1>
          <div className="flex justify-between opacity-70">
            <h2>Item Total</h2>
            <h2>₹{price}</h2>
          </div>
          <div className="flex justify-between opacity-70">
            <h2>Delivery Fees</h2>
            <h2>₹{deliveryFees}</h2>
          </div>

          <hr></hr>

          <div className="flex justify-between opacity-70">
            <h2>Platform fee</h2>
            <h2>₹{platformFee}</h2>
          </div>
          <div className="flex justify-between opacity-70">
            <h2>GST and Restaurant Charges</h2>
            <h2>₹{gst}</h2>
          </div>

          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <div className="flex justify-between">
            <h2>To Pay</h2>
            <h2>₹{price + deliveryFees + platformFee + gst}</h2>
          </div>
        </div>
      ) : (
        <div className="w-full m-auto">
          <EmptyCart />
        </div>
      )}
    </div>
  );
};

export default Cart;
