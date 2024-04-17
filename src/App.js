import React, { lazy, Suspense } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Error from "./Components/Error"
import Contact from "./Components/Contact";
import Menu from "./Components/Menu"
import About from "./Components/About";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";



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
                element: <About />            
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