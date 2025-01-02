import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function LocationBar({ isLocationBarVisible, toggleLocationBar }) {
  return (
    <div
      className={`${
        !isLocationBarVisible ? "-left-[100%] " : "  left-0 "
      } bg-white text-myGray top-0 fixed h-full w-1/4 z-50 transition-all duration-150 ease-in-out`}
    >
      <div>
        <i
          className="fa-solid fa-xmark text-myBlack text-3xl p-4"
          onClick={toggleLocationBar}
        ></i>
      </div>
    </div>
  );
}

function AppLogo({ toggleLocationBar }) {
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
        className=" text-white cursor-pointer text-base"
        onClick={toggleLocationBar}
      >
        Kolkata
        <span className="pl-2 text-myGray text-sm opacity-80">India</span>
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

  function toggleLocationBar() {
    setIsLocationBarVisible((prev) => !prev);
  }

  return (
    <header className="header w-full h-24 flex justify-between flex-wrap px-20  items-center bg-myBlack relative">
      <LocationBar
        isLocationBarVisible={isLocationBarVisible}
        toggleLocationBar={toggleLocationBar}
      />
      <AppLogo toggleLocationBar={toggleLocationBar} />
      <NavComponent />
    </header>
  );
};

export default Header;
