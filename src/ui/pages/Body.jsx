import Card from "../components/Card";
import Shimmer from "../components/ShimmerUI";
import { Link } from "react-router-dom";
import useRestaurant from "../../utils/hooks/useRestaurant";
import useOnline from "../../utils/hooks/useOnline";
import NoInternet from "../components/NoInternet";
import Category from "../components/Category";
import { useState } from "react";
import { filterHandler } from "../../utils/helper";
import useFilterRestaurant from "../../utils/hooks/useFilterRestaurant";
import ScrollX from "../components/ScrollX";
import usePosition from "../../utils/hooks/usePosition";

const Body = () => {
  usePosition();
  const data = useRestaurant();

  const categories =
    data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
  const restaurants =
    data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const restaurantList =
    data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const [filterState, setFilterState] = useState("all");

  const filteredData = useFilterRestaurant(restaurants, filterState);

  const dataToRender = filteredData ? filteredData : restaurants;

  const isOnline = useOnline();

  if (isOnline) {
    return <NoInternet />;
  }

  return (
    <main className=" w-full ">
      <div className="w-10/12 mx-auto ">
        <div className="flex justify-between items-center">
          <h3 className=" pt-8 font-bold text-2xl font-Grotesk">
            Hungry for ideas?
          </h3>
          <ScrollX />
        </div>

        <div className="overflow-x-scroll flex gap-4 pt-8">
          {categories &&
            categories.map((category) => (
              <Category {...category} key={category.id} />
            ))}
        </div>

        <div className="flex justify-between items-center">
          <h2 className=" font-Grotesk pt-8 font-bold text-2xl">
            Discover Kolkata's top restaurant chains!
          </h2>
          <ScrollX />
        </div>

        <div className="flex gap-8 overflow-x-auto pt-8 pb-16">
          {restaurantList?.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
              className="card-link"
            >
              <Card {...restaurant?.info} />
            </Link>
          ))}
        </div>

        <h2 className="text-center font-Grotesk pt-8 font-bold text-2xl">
          Restaurants with online food delivery in Kolkata
        </h2>

        <div className="mt-4 ml-16 flex gap-4">
          <button
            className={`bg-transparent border py-1 px-6 rounded-full ${
              filterState === "all" && "bg-gray-200 border-black"
            }`}
            value={"all"}
            onClick={(e) => filterHandler(e, setFilterState)}
          >
            All
          </button>

          <button
            className={`bg-transparent border py-1 px-6 rounded-full ${
              filterState === "fast delivery" && "bg-gray-200 border-black"
            }`}
            value={"fast delivery"}
            onClick={(e) => filterHandler(e, setFilterState)}
          >
            Fast Delivery
          </button>

          <button
            className={`bg-transparent border py-1 px-6 rounded-full ${
              filterState === "ratings 4.0+" && "bg-gray-200 border-black"
            }`}
            value={"ratings 4.0+"}
            onClick={(e) => filterHandler(e, setFilterState)}
          >
            Ratings 4.0+
          </button>

          <button
            className={`bg-transparent border py-1 px-6 rounded-full ${
              filterState === "offers" && "bg-gray-200 border-black"
            }`}
            value={"offers"}
            onClick={(e) => filterHandler(e, setFilterState)}
          >
            Offers
          </button>
        </div>

        <div className="resCards  grid gap-y-20 pt-8 pb-16">
          {restaurants ? (
            dataToRender?.map((restaurant) => (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
                className="card-link"
              >
                <Card {...restaurant?.info} />
              </Link>
            ))
          ) : (
            <Shimmer count={12} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Body;
