import React from "react";
import Footer from "../components/Footer/Footer";
import HeroCarousel from "../components/Hero_Corousel/HeroCorousel.component";
import ExtendedNav from "../components/Navbar/Extended.Navbar";
import Navbar from "../components/Navbar/Navbar.component";
import MobileFooter from "../components/Footer/Mobile.Footer";

const DefaultLayout=(props)=>{
    return(
        <>
        <Navbar />
        <ExtendedNav />
        <HeroCarousel />
        {props.children}
        <Footer />
        <MobileFooter />

        </>
    )
}

export default DefaultLayout;