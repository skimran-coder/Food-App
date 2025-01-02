import { useState } from "react";
import useLanding from "../../utils/hooks/useLanding";
import { IMG_CDN_URL } from "../../Constant";
import useSearch from "../../utils/hooks/useSearch";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const data = useLanding();
  const cards = data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info;
  const title = data?.cards[1]?.card?.card?.header?.title;

  const searchResult = useSearch(searchInput);
  const suggestedItems = searchResult?.data?.suggestions;

  return (
    <div className="h-fit min-h-full w-3/5 m-auto">
      <form className="search-container flex gap-4 pt-6 w-[100%] justify-center relative">
        <input
          type="search"
          placeholder="Search for restaurants and food"
          value={searchInput}
          className="search-bar outline-0 border border-solid border-gray-400 w-full h-10 rounded-md py-4 px-10 text-base placeholder:text-base focus:border-myYellow  transition-all duration-300"
          name="search-bar"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        {!searchInput ? (
          <i
            className="fa fa-search absolute opacity-50 right-8 top-9"
            aria-hidden="true"
          ></i>
        ) : (
          <i
            className="fa-solid fa-x absolute opacity-50 right-8 top-9 cursor-pointer"
            onClick={() => setSearchInput("")}
          ></i>
        )}
      </form>

      {!suggestedItems ? (
        <div>
          <h1 className="mt-12 ml-8 text-xl font-bold">{title}</h1>
          <div className="flex overflow-x-auto mt-6 w-11/12 m-auto">
            {cards &&
              cards.map((card) => {
                return (
                  <div className="flex-shrink-0 w-24 " key={card.id}>
                    <img
                      src={IMG_CDN_URL + card?.imageId}
                      className="w-full h-auto"
                    ></img>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div className="my-4">
          {suggestedItems &&
            suggestedItems.map((item) => {
              return (
                <div
                  className=" flex gap-4 items-center p-3"
                  key={item?.cloudinaryId}
                >
                  <div>
                    <img
                      src={IMG_CDN_URL + item?.cloudinaryId}
                      className="w-16 h-16 rounded-sm object-cover aspect-square"
                    ></img>
                  </div>
                  <div>
                    <h4>{item?.text}</h4>
                    <h4 className="opacity-60 text-sm">{item?.type}</h4>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
