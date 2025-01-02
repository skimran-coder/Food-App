import MenuItems from "../components/MenuItems";
import useMenu from "../../utils/hooks/useMenu";
import Loader from "../components/Loader";
import resMenu from "../../assets/menuSvg.svg";
import { useEffect, useState } from "react";
import ResMenuHeader from "../components/ResMenuHeader";
import ResMenuTitle from "../components/ResMenuTitle";
import ResMenuCarousel from "../components/ResMenuCarousel";
import ScrollX from "../components/ScrollX";

const Menu = () => {
  const data = useMenu();
  const restaurant = data?.cards[2]?.card?.card?.info;
  const restaurantMenu =
    data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const carousels = restaurantMenu[1]?.card?.card?.carousel;

  console.log(carousels);

  const categoryTitle =
    restaurantMenu?.map((restaurant) => restaurant?.card?.card?.title) ?? [];

  const initCategory = Object.fromEntries(
    categoryTitle?.map((title) => [title, title === "Recommended"])
  );

  const [categoryVisibility, setCategoryVisibility] = useState(initCategory);

  useEffect(() => {
    // Check if categoryVisibility is empty
    if (Object.keys(categoryVisibility).length === 0) {
      setCategoryVisibility(initCategory);
    }
  }, [initCategory, categoryVisibility]);

  // Toggle category visibility based on its title
  const toggleCategoryVisibility = (title) => {
    setCategoryVisibility((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return restaurantMenu && restaurant ? (
    <div className=" restaurant-menu w-3/5 mx-auto my-0  p-2 flex flex-col gap-8 min-h-screen">
      <h2 className="font-bold text-2xl mt-4">{restaurant?.name}</h2>

      <ResMenuHeader restaurant={restaurant} />

      {carousels && (
        <div className="flex justify-between items-center">
          <h2 className="font-extrabold text-xl pt-8">
            {restaurantMenu[1]?.card?.card?.title}
          </h2>
          <ScrollX />
        </div>
      )}

      <div className="carousels-container flex overflow-x-auto gap-6">
        {carousels &&
          carousels.map((carousel) => (
            <ResMenuCarousel carousel={carousel} key={carousel.bannerId} />
          ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-8">
        <img src={resMenu} className="w-5 "></img>
        <h2 className="text-xl opacity-60 text-center  "> Menu</h2>
        <img src={resMenu} className="w-5 "></img>
      </div>

      <div className="bottom flex flex-col gap-4  p-4 shadow-sm">
        {restaurantMenu?.map((restaurant, index) => (
          <div key={restaurant?.card?.card?.title || index}>
            {restaurant?.card?.card?.itemCards && (
              <ResMenuTitle
                restaurant={restaurant}
                categoryVisibility={categoryVisibility}
                toggleCategoryVisibility={toggleCategoryVisibility}
              />
            )}

            {restaurant?.card?.card?.title &&
              categoryVisibility[restaurant?.card?.card?.title] && (
                <MenuItems restaurant={restaurant} />
              )}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Menu;
