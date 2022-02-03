import React from "react";
import Footer from "../components/Footer/Footer";
import ExtendedNav from "../components/Navbar/Extended.Navbar";
import PlaysNavbar from "../components/Navbar/Plays.Navbar.component";

const MoviesLayout = (props) => {
    return (<>
        <PlaysNavbar page="Movies" />
        <ExtendedNav />
        {props.children}
        <Footer />
    </>)
}

export default MoviesLayout;