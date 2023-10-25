const AppLogo = () =>{
    return(
        <img src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/aksi8creapsgodytrmay" className="app-logo"></img>
    )
}

const NavComponent = () =>{
    return(
        <div className="navbar">
            <div className="nav-items">
                <ul className="items">
                    <a key={"home"} href="#home">
                        <li>Home</li>
                    </a>

                    <a key={"about"} href="#about">
                        <li>About</li>
                    </a>

                    <a key={"contact"} href="#contact">
                        <li>Contact</li>
                    </a>
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