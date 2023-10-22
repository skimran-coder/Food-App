import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Layout = () =>{
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}

root.render(<Layout />);