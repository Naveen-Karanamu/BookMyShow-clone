import React from "react";
import ExtendedNav from "../components/Navbar/Extended.Navbar";
import PlaysNavbar from "../components/Navbar/Plays.Navbar.component";


const PlaysLayout=(props)=>{
    return(
        <>
        <PlaysNavbar />
        <ExtendedNav />
        {props.children}
        </>
    )
}

export default PlaysLayout;