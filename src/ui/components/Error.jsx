import { Link } from "react-router-dom";
import { Not_Found_IMG } from "../../Constant";

const Error = () => {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <img src={Not_Found_IMG} className="w-96 pb-4"></img>
      <h3 className="text-lg font-bold ">Oops! Page not found</h3>
      <p className="pb-4 opacity-70 text-sm">
        The page you're looking for doesn't exist. You can return to the home
        page.
      </p>

      <Link to="/">
        <button
          className="search-btn py-3 px-5  bg-myYellow text-white hover:bg-myGray hover:text-myBlack transition-all ease-in-out duration-500 cursor-pointer font-bold text-sm tracking-widest uppercase"
          type="button"
        >
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default Error;
