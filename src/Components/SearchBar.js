import { filterCards } from "../utils/helper"
import { useState } from "react"

const SearchBar = ({restaurants, setFilteredRestaurants}) => {
    const [searchInput, setSearchInput] = useState("")
    

    return(
        <div className="">
        <form className="search-container flex gap-4 pt-6 w-[100%] justify-center">

            {/* <i className="fa fa-search absolute " aria-hidden="true"></i> */}
            <input type="search" placeholder="Search for restaurant..." value={searchInput} className="search-bar outline-0 border border-solid border-gray-400 w-[60%] h-10 rounded-md py-4 px-10 text-base placeholder:text-base focus:border-myBlack bg-stone-100 transition-all duration-300" name="search-bar" onChange={(e) => {
                setSearchInput(e.target.value);
            }} onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const data = filterCards(searchInput, restaurants)
                    setFilteredRestaurants(data);
                }
            }} />

            <button className="search-btn py-2 px-5 border border-solid border-gray-400 rounded-md bg-stone-100 text-myBlack cursor-pointer font-medium text-sm tracking-widest transition-all ease-in-out duration-500 hover:bg-myYellow hover:border-myGray hover:text-white " type="button" onClick={() => {
                const data = filterCards(searchInput, restaurants)
                setFilteredRestaurants(data);
            }}>Search</button>
            
        </form>
        </div>
    )

}

export default SearchBar;