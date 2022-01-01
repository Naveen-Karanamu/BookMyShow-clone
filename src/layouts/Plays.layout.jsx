import React from "react";
import PlaysNavbar from "../components/Navbar/Plays.Navbar";


const PlaysLayout=(props)=>{
    return(
        <>
        <PlaysNavbar />
        {props.children}
        </>
    )
}

export default PlaysLayout;