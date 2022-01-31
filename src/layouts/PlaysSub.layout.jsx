import React from "react";
import StreamNavbar from "../components/Navbar/StreamNavbar.component";

const PlaysSubLayout = (props) => {
    return (<>
        <StreamNavbar />
        {props.children}
    </>
    )
}

export default PlaysSubLayout;