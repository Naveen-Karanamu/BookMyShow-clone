import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import DefaultHOC from "../HOC/Default.HOC";

const DefaultLayout=(props)=>{
    return(
        <>
        <Navbar />
        {props.children}
        </>
    )
}

export default DefaultLayout;