import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePlaceSuggestion from "../../utils/hooks/usePlaceSuggestion";
import { addAddress, addCoords } from "../../utils/Redux/locationSlice";
import usePosition from "../../utils/hooks/usePosition";

function LocationBar({
  isLocationBarVisible,
  toggleLocationBar,
  dispatch,
  setIsLocateBtnClicked,
}) {
  const [searchInput, setSearchInput] = useState();

  const searchResult = usePlaceSuggestion(searchInput);

  async function getLocation(id) {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}address/?id=${id}`
    );

    const data = await response.json();
    const lat = data.data[0].geometry.location.lat;
    const lng = data.data[0].geometry.location.lng;

    localStorage.setItem("lat", lat);
    localStorage.setItem("lng", lng);
    localStorage.setItem("address", data.data[0].formatted_address);
    dispatch(addCoords({ latitude: lat, longitude: lng }));
    dispatch(addAddress(data.data[0].formatted_address));
    toggleLocationBar();
  }

  return (
    <div className={`${isLocationBarVisible ? "fixed" : "hidden"} z-40`}>
      <div
        className={`fixed bg-black bg-opacity-20 top-0 bottom-0 left-0 right-0 z-30`}
      ></div>

      <div
        className={`${
          !isLocationBarVisible ? "-left-[100%] " : "  left-0 "
        } bg-white text-myGray top-0 fixed h-full w-full sm:w-3/4 md:w-1/2 lg:w-1/4  transition-all duration-150 ease-in-out pl-8 z-40`}
      >
        <div className="z-40">
          <i
            className="fa-solid fa-xmark  text-black opacity-70 text-2xl p-4 cursor-pointer"
            onClick={toggleLocationBar}
          ></i>

          <div className="mx-4 mt-4 flex flex-col gap-8">
            <input
              className="p-4 focus:shadow-lg text-black outline-none border w-full"
              placeholder="Search for area, street name.."
              onChange={(e) => setSearchInput(e.target.value)}
            ></input>

            {!searchInput && (
              <div
                className="text-gray-700 flex flex-col border p-4 cursor-pointer"
                onClick={() => {
                  setIsLocateBtnClicked(true);
                  toggleLocationBar();
                }}
              >
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-location-crosshairs text-2xl opacity-70"></i>
                  <h4 className="font-bold hover:text-myYellow transition-colors">
                    Get current location
                  </h4>
                </div>
                <p className="text-gray-700 text-sm pl-8">Using GPS</p>
              </div>
            )}

            {searchResult &&
              searchInput &&
              searchResult.map((result) => (
                <div
                  key={result.place_id}
                  className="text-black border-b-2 pb-2 flex cursor-pointer gap-4"
                  onClick={() => getLocation(result.place_id)}
                >
                  <i className="fa-solid fa-location-dot pt-4 text-gray-700"></i>
                  <div>
                    <h5 className="hover:text-myYellow transition-colors">
                      {result.structured_formatting.main_text}
                    </h5>
                    <p className="text-sm opacity-60">
                      {result.structured_formatting.secondary_text}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AppLogo({ toggleLocationBar }) {
  const location = useSelector((store) => store.location);
  const addressArr = location.addressStr.split(",");

  return (
    <div className="app-info flex items-center gap-4">
      <a href="/" className="">
        <img
          src={logo}
          alt="logo"
          className="app-logo size-16 rounded-full"
        ></img>

        {/* will add location sidebar */}
      </a>
      <h1
        className=" text-white cursor-pointer text-base hover:text-myYellow transition-colors group flex items-center"
        onClick={toggleLocationBar}
      >
        {addressArr[0]}
        <span className="pl-2 text-myGray text-sm opacity-80 group-hover:opacity-100 transition-colors">
          {addressArr[1]}
          {addressArr[2] && ", " + addressArr[2]}
          {addressArr[3] && ", " + addressArr[3]}
        </span>
        <i className="fa-solid fa-chevron-down text-myYellow pl-2 text-sm"></i>
      </h1>
    </div>
  );
}

function NavComponent() {
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState("");

  useEffect(() => {
    setCurrentTab(location.pathname.substr(1) || "home");
  }, [location]);

  const cartItems = useSelector((store) => store?.cart.items);

  return (
    <nav className="navbar  gap-8 text-xl items-center flex ">
      <div className="nav-items">
        <ul className="items flex gap-8 text-white">
          <Link key={"search"} to="/search">
            <li
              className={`bg-gradient-to-r from-transparent to-myYellow border-b-0 bg-[length:0_3px] bg-[0_100%] bg-no-repeat transition-all duration-500 ease-in-out hover:bg-[length:100%_3px]  hover:opacity-100 ${
                currentTab === "search"
                  ? "text-myYellow bg-[length:100%_3px] opacity-100 "
                  : "text-white opacity-80"
              }`}
            >
              {" "}
              Search{" "}
            </li>
          </Link>
          <Link key={"home"} to="/">
            <li
              className={`bg-gradient-to-r from-transparent to-myYellow border-b-0 bg-[length:0_3px] bg-[0_100%] bg-no-repeat transition-all duration-500 ease-in-out hover:bg-[length:100%_3px]  hover:opacity-100 ${
                currentTab === "home"
                  ? "text-myYellow bg-[length:100%_3px] opacity-100 "
                  : "text-white opacity-80"
              }`}
            >
              Home
            </li>
          </Link>
        </ul>
      </div>

      <Link key={"cart"} to="/cart" className="cart relative">
        <i
          className={`fa-solid fa-cart-shopping transition-all ease-in-out duration-500 cursor-pointer hover:opacity-100 ${
            currentTab === "cart"
              ? "text-myYellow opacity-100"
              : "text-white opacity-80"
          } `}
        ></i>
        <span className="text-white absolute text-center w-4 h-4 bottom-4 left-5  font-mono text-xs bg-myYellow rounded-full ">
          {cartItems.length}
        </span>
      </Link>
    </nav>
  );
}

const Header = () => {
  const [isLocationBarVisible, setIsLocationBarVisible] = useState(false);
  const [isLocateBtnClicked, setIsLocateBtnClicked] = useState(false);
  const dispatch = useDispatch();
  usePosition({ isLocateBtnClicked });

  function toggleLocationBar() {
    setIsLocationBarVisible((prev) => !prev);
  }

  return (
    <header className="header w-full h-24 flex justify-between flex-wrap px-20  items-center bg-myBlack relative">
      <LocationBar
        isLocationBarVisible={isLocationBarVisible}
        toggleLocationBar={toggleLocationBar}
        dispatch={dispatch}
        setIsLocateBtnClicked={setIsLocateBtnClicked}
      />
      <AppLogo toggleLocationBar={toggleLocationBar} />
      <NavComponent />
    </header>
  );
};

export default Header;
