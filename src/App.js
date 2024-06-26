import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Error from "./Components/Error"
import Contact from "./Components/Contact";
import Menu from "./Components/Menu"
import About from "./Components/About";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/Redux/store";
import Cart from "./Components/Cart";
import SearchBar from "./Components/SearchBar";



const root = ReactDOM.createRoot(document.getElementById("root"));

const Layout = () =>{
    return (
        <Provider store={store}>
            <Header/>
            <Outlet/>
            <Footer/>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />            
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },        
            {
                path: "/restaurant/:resid",
                element: <Menu />
            },
            {
                path: "/search",
                element: <SearchBar />
            }
        ]
    },
])

root.render(<RouterProvider router={appRouter}/>);