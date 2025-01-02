import { useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/Redux/cartSlice";
import { useDispatch } from "react-redux";

const Buttons = ({ item }) => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="flex items-center bg-stone-200 gap-3 px-2 w-fit rounded-sm text-lg text-[#344151]">
      <button
        className="border-r-2 pr-3 border-[#bfbfbf]"
        onClick={() => handleRemoveItem(item?.card?.info?.id)}
      >
        <i className="fa-solid fa-minus"></i>
      </button>

      <div className="font-bold" id="count">
        {
          cartItems.filter(
            (cartItem) => cartItem?.card?.info?.id === item?.card?.info?.id
          ).length
        }
      </div>

      <button
        className="border-l-2 pl-3 border-[#bfbfbf]"
        onClick={() => handleAddItem(item)}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default Buttons;
