import { useState } from "react";
import { restaurantList } from "./Config";


function filterCards(searchInput, restaurants){
    const filteredData = restaurants.filter((restaurant) => {
       return restaurant.data.name.includes(searchInput)
    })

    return filteredData;
}

const AppLogo = () =>{
    return(
        <img src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/aksi8creapsgodytrmay"></img>
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

const SearchBar = () =>{
    const [searchInput, setSearchInput] = useState("")
    const [restaurants, setRestaurants] = useState(restaurantList)

    return (
        <div className="search-container">

            <input type="search" placeholder="Search..." value={searchInput} className="search-bar" onChange={(e) => {
                setSearchInput(e.target.value);
            }}/>

            <button className="search-btn" type="button" onClick={() => {
                const data = filterCards(searchInput, restaurants)
                setRestaurants(data);
            }}>Search</button>
        </div>
    )
}

const Header = () =>{
    return(
        <div className="header">

            <div className="header-left">
                <AppLogo />
            </div>

            
            <div className="header-right">
                <SearchBar />
                <NavComponent/>
            </div>
            
        </div>
    )
}

export default Header;