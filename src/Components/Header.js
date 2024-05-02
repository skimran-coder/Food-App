import { Link, useLocation } from "react-router-dom"
import logo from '../../Public/asset/logo.png'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AppLogo = () =>{

    return(
        
            <a href="/" className="app-info flex items-center gap-4">
            <img src={logo} alt="logo" className="app-logo w-20 rounded-full"></img>
            
            <h1 className="app-name font-semibold text-white cursor-pointer text-3xl"><span className="name-F text-myGray text-5xl">F</span>ood<span className="name-S text-myYellow text-5xl">S</span>tore</h1>
            </a>

            
        
        
    )
}



const NavComponent = () =>{
    
    const location = useLocation();
    const [currentTab, setCurrentTab] = useState("");

    // console.log(location)

    useEffect(() => {
        setCurrentTab(location.pathname.substr(1) || "home");
    }, [location])

    const cartItems = useSelector(store => store.cart.items)

    // console.log(cartItems)

    return(
        <nav className="navbar flex gap-8 text-xl items-center">
            <div className="nav-items">
                <ul className="items flex gap-8 text-white font-bold">
                   

                    <Link key={"search"} to="/search" >
                        <li className={`bg-gradient-to-r from-transparent to-myYellow border-b-0 bg-[length:0_3px] bg-[0_100%] bg-no-repeat transition-all duration-500 ease-in-out hover:bg-[length:100%_3px]  hover:opacity-100 ${currentTab === "search"? "text-myYellow bg-[length:100%_3px] opacity-100 " : "text-white opacity-80"}`} > Search </li>
                        
                    </Link>


                    <Link key={"home"} to="/" >
                        <li className={`bg-gradient-to-r from-transparent to-myYellow border-b-0 bg-[length:0_3px] bg-[0_100%] bg-no-repeat transition-all duration-500 ease-in-out hover:bg-[length:100%_3px]  hover:opacity-100 ${currentTab === "home"? "text-myYellow bg-[length:100%_3px] opacity-100 " : "text-white opacity-80"}`} >Home</li>
                        
                    </Link>

                    <Link key={"about"} to="/about">
                        <li className={`bg-gradient-to-r from-transparent to-myYellow border-b-0 bg-[length:0_3px] bg-[0_100%] bg-no-repeat transition-all duration-500 ease-in-out hover:bg-[length:100%_3px]   hover:opacity-100  ${currentTab === "about" ? "text-myYellow bg-[length:100%_3px] opacity-100": " text-white opacity-80"}`} >About</li>
                        

                    </Link>

                    <Link key={"contact"} to="/contact">
                        <li className={`bg-gradient-to-r from-transparent to-myYellow border-b-0 bg-[length:0_3px] bg-[0_100%] bg-no-repeat transition-all duration-500 ease-in-out hover:bg-[length:100%_3px]   hover:opacity-100   ${currentTab === "contact" ? "text-myYellow bg-[length:100%_3px] opacity-100": "text-white opacity-80"} `} >Contact</li>
                        

                    </Link>
                </ul>
            </div>

            <Link key={"cart"} to="/cart" className="cart relative">
                 <i className={`fa-solid fa-cart-shopping transition-all ease-in-out duration-500 cursor-pointer hover:opacity-100 ${currentTab === "cart" ? "text-myYellow opacity-100": "text-white opacity-80"} `} ></i>
                 <span className="text-white absolute text-center w-4 h-4 bottom-4 left-5  font-mono text-xs bg-myYellow rounded-full ">{cartItems.length}</span>
            </Link>

            <div>
            <button className="search-btn py-2 px-5  rounded-md bg-myYellow text-white hover:bg-myGray hover:text-myBlack transition-all ease-in-out duration-500 cursor-pointer font-bold text-sm tracking-widest" type="button" >Login</button>
            </div>

        </nav>
    )
}

const Header = () =>{
    return(
        <header className="header w-full h-24 flex justify-between flex-wrap px-20  items-center bg-myBlack">

                <AppLogo />
                <NavComponent/>
            
            
        </header>
    )
}

export default Header;