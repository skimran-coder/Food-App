import ReactDOM from "react-dom/client";
import Body from "./ui/pages/Body";
import Error from "./ui/components/Error";
import Menu from "./ui/pages/Menu";
import About from "./ui/pages/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./ui/pages/Cart";
import SearchBar from "./ui/pages/SearchBar";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resid",
        element: <Menu />,
      },
      {
        path: "/search",
        element: <SearchBar />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
