import React from "react";
import PlaysNav from "../components/Navbar/Plays.Navbar.component"
import ExtendedNav from "../components/Navbar/Extended.Navbar"
import Footer from "../components/Footer/Footer"
import MobileFooter from "../components/Footer/Mobile.Footer";

const ActivitiesLayout = (props) => {
    return (
        <>
            <PlaysNav page="Activities"/>
            <ExtendedNav />
            {props.children}
            <Footer />
            <MobileFooter />
        </>
    )
}

export default ActivitiesLayout;