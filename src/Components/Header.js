import { Link } from "react-router-dom"

const AppLogo = () =>{
    return(
        
            <a href="/" className="app-info">
            <img src="https://cdn.pixabay.com/photo/2017/02/17/17/33/food-2074638_1280.png" className="app-logo"></img>
            
            <h1 className="app-name"><span className="name-F">F</span>ood<span className="name-S">S</span>tore</h1>
            </a>
        
        
    )
}

const NavComponent = () =>{
    return(
        <div className="navbar">
            <div className="nav-items">
                <ul className="items">
                    <Link key={"home"} to="/">
                        <li>Home</li>
                    </Link>

                    <Link key={"about"} to="/about">
                        <li>About</li>
                    </Link>

                    <Link key={"contact"} to="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>

            <div className="cart">
                 <i className="fa-solid fa-cart-shopping"></i>
            </div>

        </div>
    )
}

const Header = () =>{
    return(
        <div className="header">

                <AppLogo />
                <NavComponent/>
            
            
        </div>
    )
}

export default Header;