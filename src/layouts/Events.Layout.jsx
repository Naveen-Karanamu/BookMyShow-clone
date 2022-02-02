import React from "react";
import PlaysNavbar from "../components/Navbar/Plays.Navbar.component";
import ExtendedNav from "../components/Navbar/Extended.Navbar";
import Footer from "../components/Footer/Footer";
const EventsLayout=(props)=>{
    return (<>
    <PlaysNavbar page="Events"/>
    <ExtendedNav />
    {props.children}
    <Footer/>
    </>)
}

export default EventsLayout;