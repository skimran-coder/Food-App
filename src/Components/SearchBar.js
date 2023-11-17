import { filterCards } from "../utils/helper"
import { useState } from "react"

const SearchBar = ({restaurants, setFilteredRestaurants}) => {
    const [searchInput, setSearchInput] = useState("")
    

    return(
        <form className="search-container flex gap-4 mt-6 w-[100%] justify-center">

            {/* <i className="fa fa-search absolute " aria-hidden="true"></i> */}
            <input type="search" placeholder="Search for restaurant..." value={searchInput} className="search-bar outline-0 border border-solid border-gray-400 w-[60%] h-10 rounded-md py-4 px-10 text-base placeholder:text-base focus:border-[#001f48]" name="search-bar" onChange={(e) => {
                setSearchInput(e.target.value);
            }} />

            <button className="search-btn py-2 px-5 border border-solid border-gray-400 rounded-md bg-white text-black cursor-pointer font-medium text-sm uppercase transition-all duration-300 hover:bg-orange-400 hover:border-[#001f48] hover:text-white" type="button" onClick={() => {
                const data = filterCards(searchInput, restaurants)
                setFilteredRestaurants(data);
            }}>Search</button>
            
        </form>
    )

}

export default SearchBar;