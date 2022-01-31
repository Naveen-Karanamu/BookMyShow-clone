import React from "react";
import ExtendedNav from "../components/Navbar/Extended.Navbar";
import StreamNavbar from "../components/Navbar/StreamNavbar.component";

const PlaysSubLayout = (props) => {
    return (<>
        <StreamNavbar />
        <ExtendedNav />
        {props.children}
    </>
    )
}

export default PlaysSubLayout;