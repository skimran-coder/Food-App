import { useSelector } from "react-redux";
import MenuItems from "./MenuItems"


const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems)

    return(
        <div className="w-3/5 m-auto min-h-screen flex flex-col gap-4"> 
            <h2 className="font-semibold text-3xl p-4">Cart</h2>
            {cartItems.map((restaurant) => {
                return <MenuItems restaurant={restaurant}/>
            })}
        </div>
    )
}

export default Cart;