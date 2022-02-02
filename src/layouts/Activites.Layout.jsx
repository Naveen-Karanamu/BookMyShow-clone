import React from "react";
import PlaysNav from "../components/Navbar/Plays.Navbar.component"
import ExtendedNav from "../components/Navbar/Extended.Navbar"
import Footer from "../components/Footer/Footer"

const ActivitiesLayout = (props) => {
    return (
        <>
            <PlaysNav />
            <ExtendedNav />
            {props.children}
            <Footer />
        </>
    )
}

export default ActivitiesLayout;