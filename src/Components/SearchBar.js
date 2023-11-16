import { filterCards } from "../utils/helper"
import { useState } from "react"

const SearchBar = ({restaurants, setFilteredRestaurants}) => {
    const [searchInput, setSearchInput] = useState("")
    

    return(
        <form className="search-container">

            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="search" placeholder="Search for restaurant..." value={searchInput} className="search-bar" name="search-bar" onChange={(e) => {
                setSearchInput(e.target.value);
            }} />

            <button className="search-btn" type="button" onClick={() => {
                const data = filterCards(searchInput, restaurants)
                setFilteredRestaurants(data);
            }}>Search</button>
            
        </form>
    )

}

export default SearchBar;