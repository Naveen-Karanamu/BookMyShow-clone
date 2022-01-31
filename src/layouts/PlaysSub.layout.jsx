import React from "react";
import Footer from "../components/Footer/Footer";
import ExtendedNav from "../components/Navbar/Extended.Navbar";
import StreamNavbar from "../components/Navbar/StreamNavbar.component";

const PlaysSubLayout = (props) => {
    return (<>
        <StreamNavbar />
        <ExtendedNav />
        {props.children}
        <Footer />
    </>
    )
}

export default PlaysSubLayout;