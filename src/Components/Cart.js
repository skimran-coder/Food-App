import { useSelector } from "react-redux";
import MenuItems from "./MenuItems";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="w-3/5 m-auto min-h-screen flex flex-col gap-4">
            <h2 className="font-semibold text-3xl p-4">Cart</h2>
            {cartItems.length !== 0 ? (
                cartItems.map((restaurant) => (
                    <MenuItems key={restaurant.id} restaurant={restaurant} />
                ))
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
};

export default Cart;
