import { Link } from "react-router-dom"
import logo from '../../Public/asset/logo.png'
import { useState } from "react";


const AppLogo = () =>{

    {console.log(process.env.PUBLIC_URL);
    }
    return(
        
            <a href="/" className="app-info flex items-center gap-4">
            <img src={logo} alt="logo" className="app-logo w-20 rounded-full"></img>
            
            <h1 className="app-name font-semibold text-white cursor-pointer text-3xl"><span className="name-F text-myGray text-5xl">F</span>ood<span className="name-S text-myYellow text-5xl">S</span>tore</h1>
            </a>

            
        
        
    )
}



const NavComponent = () =>{
    
    const [currentTab, setCurrentTab] = useState(localStorage ? localStorage.getItem("currentTab") : "home")

    return(
        <div className="navbar flex gap-8 text-xl items-center">
            <div className="nav-items">
                <ul className="items flex gap-8 text-white font-bold">
                    <Link key={"home"} to="/" >
                        <li className={`bg-gradient-to-r from-transparent to-myYellow border-b-0 bg-[length:0_3px] bg-[0_100%] bg-no-repeat transition-all duration-500 ease-in-out hover:bg-[length:100%_3px] opacity-80 hover:opacity-100 ${currentTab === "home"? "text-myYellow bg-[length:100%_3px] opacity-100" : "text-white "}`} onClick={() =>{
                                currentTab === "home" ? null :
                                localStorage.setItem("currentTab", "home")
                                setCurrentTab(localStorage.getItem("currentTab"))
                            
                        }}>Home</li>
                        
                    </Link>

                    <Link key={"about"} to="/about">
                        <li className={`bg-gradient-to-r from-transparent to-myYellow border-b-0 bg-[length:0_3px] bg-[0_100%] bg-no-repeat transition-all duration-500 ease-in-out hover:bg-[length:100%_3px]  opacity-80 hover:opacity-100  ${currentTab === "about" ? "text-myYellow bg-[length:100%_3px] opacity-100": " text-white "}`} onClick={() =>{
                                currentTab === "about" ? null :
                                localStorage.setItem("currentTab", "about")
                                setCurrentTab(localStorage.getItem("currentTab"))
                            
                        }}>About</li>
                        

                    </Link>

                    <Link key={"contact"} to="/contact">
                        <li className={`bg-gradient-to-r from-transparent to-myYellow border-b-0 bg-[length:0_3px] bg-[0_100%] bg-no-repeat transition-all duration-500 ease-in-out hover:bg-[length:100%_3px]  opacity-80 hover:opacity-100   ${currentTab === "contact" ? "text-myYellow bg-[length:100%_3px] opacity-100": "text-white "} `} onClick={() =>{
                                currentTab === "contact" ? null :
                                localStorage.setItem("currentTab", "contact")
                                setCurrentTab(localStorage.getItem("currentTab"))
                            
                        }}>Contact</li>
                        

                    </Link>
                </ul>
            </div>

            <div className="cart">
                 <i className="fa-solid fa-cart-shopping transition-all ease-in-out duration-500 text-white cursor-pointer hover:text-myYellow"></i>
            </div>

            <div>
            <button className="search-btn py-2 px-5  rounded-md bg-myYellow text-white hover:bg-myGray hover:text-myBlack transition-all ease-in-out duration-500 cursor-pointer font-bold text-sm tracking-widest" type="button" >Login</button>
            </div>

        </div>
    )
}

const Header = () =>{
    return(
        <div className="header w-full h-24 flex justify-between flex-wrap px-20  items-center bg-myBlack">

                <AppLogo />
                <NavComponent/>
            
            
        </div>
    )
}

export default Header;