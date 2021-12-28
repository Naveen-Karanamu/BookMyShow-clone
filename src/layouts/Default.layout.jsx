import React from "react";
import HeroCarousel from "../components/Hero_Corousel/HeroCorouse.component";
import Navbar from "../components/Navbar/Navbar.component";
import DefaultHOC from "../HOC/Default.HOC";

const DefaultLayout=(props)=>{
    return(
        <>
        <Navbar />
        <HeroCarousel />
        {props.children}
        </>
    )
}

export default DefaultLayout;