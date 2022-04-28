import React from "react";
import Footer from "../components/Footer/Footer";
import MobileFooter from "../components/Footer/Mobile.Footer";
import ExtendedNav from "../components/Navbar/Extended.Navbar";
import PlaysNavbar from "../components/Navbar/Plays.Navbar.component";


const PlaysLayout=(props)=>{
    return(
        <>
        <PlaysNavbar page="Plays" />
        <ExtendedNav />
        {props.children}
        <Footer />
        <MobileFooter />
        </>
    )
}

export default PlaysLayout;