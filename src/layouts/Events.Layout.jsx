import React from "react";
import PlaysNavbar from "../components/Navbar/Plays.Navbar.component";
import ExtendedNav from "../components/Navbar/Extended.Navbar";
import Footer from "../components/Footer/Footer";
import MobileFooter from "../components/Footer/Mobile.Footer";
const EventsLayout=(props)=>{
    return (<>
    <PlaysNavbar page="Events"/>
    <ExtendedNav />
    {props.children}
    <Footer/>
    <MobileFooter />
    </>)
}

export default EventsLayout;