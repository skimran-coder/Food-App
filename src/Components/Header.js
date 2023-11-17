import { Link } from "react-router-dom"
import { LOGO_CDN_URL } from "../constant"

const AppLogo = () =>{
    return(
        
            <a href="/" className="app-info flex items-center gap-4">
            <img src={LOGO_CDN_URL} className="app-logo w-12"></img>
            
            <h1 className="app-name text-white cursor-pointer text-3xl"><span className="name-F text-orange-400 text-5xl">F</span>ood<span className="name-S text-green-400 text-5xl">S</span>tore</h1>
            </a>
        
        
    )
}

const NavComponent = () =>{
    return(
        <div className="navbar flex gap-16 text-xl">
            <div className="nav-items">
                <ul className="items flex gap-8 text-white">
                    <Link key={"home"} to="/" >
                        <li className="transition-all duration-300 hover:text-[#adff2f]">Home</li>
                    </Link>

                    <Link key={"about"} to="/about">
                        <li className="transition-all duration-300 hover:text-[#adff2f]">About</li>
                    </Link>

                    <Link key={"contact"} to="/contact">
                        <li className="transition-all duration-300 hover:text-[#adff2f]">Contact</li>
                    </Link>
                </ul>
            </div>

            <div className="cart">
                 <i className="fa-solid fa-cart-shopping transition-all duration-300 text-white cursor-pointer hover:text-orange-400"></i>
            </div>

        </div>
    )
}

const Header = () =>{
    return(
        <div className="header flex justify-between px-20 py-6 items-center bg-blue-950">

                <AppLogo />
                <NavComponent/>
            
            
        </div>
    )
}

export default Header;