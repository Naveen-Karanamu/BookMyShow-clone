import React from "react";
import PlaysNav from "../components/Navbar/Plays.Navbar.component"
import ExtendedNav from "../components/Navbar/Extended.Navbar"
import Footer from "../components/Footer/Footer"
import MobileFooter from "../components/Footer/Mobile.Footer";

const SportsLayout = (props) => {
    return (
        <>
            <PlaysNav page="Sports" />
            <ExtendedNav />
            {props.children}
            <Footer />
            <MobileFooter />
        </>
    )
}

export default SportsLayout;