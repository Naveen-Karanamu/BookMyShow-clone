import React from "react";
import HeroCarousel from "../components/Hero_Corousel/HeroCorousel.component";
import Navbar from "../components/Navbar/Navbar.component";


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