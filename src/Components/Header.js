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
    const [currentTab, setCurrentTab] = useState({
        home : true,
        about : false,
        contact : false
    })
    const [About, setAbout] = useState(false)
    const [Contact, setContact] = useState(false)

    return(
        <div className="navbar flex gap-8 text-xl items-center">
            <div className="nav-items">
                <ul className="items flex gap-8 text-white font-bold">
                    <Link key={"home"} to="/" >
                        <li className={`transition-all duration-300 hover:text-myYellow underline-offset-8 decoration-2 ${currentTab.home? "text-myYellow underline" : "text-white no-underline"}`} onClick={() =>{
                            
                                setCurrentTab({
                                    home : true,
                                    about : false,
                                    contact : false 
                                })
                            
                        }}>Home</li>
                        
                    </Link>

                    <Link key={"about"} to="/about">
                        <li className={`transition-all duration-300 hover:text-myYellow underline-offset-8 decoration-2 ${currentTab.about? "text-myYellow underline": " text-white no-underline"}`} onClick={() =>{
                           
                            setCurrentTab({
                                home : false,
                                about : true,
                                contact : false 
                            })
                        
                        }}>About</li>
                        

                    </Link>

                    <Link key={"contact"} to="/contact">
                        <li className={`transition-all duration-300 hover:text-myYellow underline-offset-8 decoration-2  ${currentTab.contact? "text-myYellow underline": "text-white no-underline"} `} onClick={() =>{
                          
                            setCurrentTab({
                                home : false,
                                about : false,
                                contact : true 
                            })
                        
                        }}>Contact</li>
                        

                    </Link>
                </ul>
            </div>

            <div className="cart">
                 <i className="fa-solid fa-cart-shopping transition-all duration-300 text-white cursor-pointer hover:text-myYellow"></i>
            </div>

            <div>
            <button className="search-btn py-2 px-5  rounded-md bg-myYellow text-white hover:bg-myGray hover:text-myBlack transition-all duration-300 cursor-pointer font-bold text-sm tracking-widest" type="button" >Login</button>
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