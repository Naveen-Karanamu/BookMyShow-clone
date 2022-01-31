import React from "react";
import Footer from "../components/Footer/Footer";
import HeroCarousel from "../components/Hero_Corousel/HeroCorousel.component";
import ExtendedNav from "../components/Navbar/Extended.Navbar";
import Navbar from "../components/Navbar/Navbar.component";


const DefaultLayout=(props)=>{
    return(
        <>
        <Navbar />
        <ExtendedNav />
        <HeroCarousel />
        {props.children}
        <Footer />
        </>
    )
}

export default DefaultLayout;