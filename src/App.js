import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error"
import Contact from "./Components/Contact";
import Menu from "./Components/Menu"
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Profile from "./Components/Profile";


const root = ReactDOM.createRoot(document.getElementById("root"));

const Layout = () =>{
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
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
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resid",
                element: <Menu />
            }
        ]
    },
])

root.render(<RouterProvider router={appRouter}/>);