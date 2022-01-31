import React from "react";
import { Route } from "react-router-dom";
import PlaysSubLayout from "../layouts/PlaysSub.layout";

const PlaysSubHOC = ({component:Component, ...rest}) => {
    return <>
        <Route {...rest} component={(props)=>(
            <PlaysSubLayout>
                <Component {...props}/>
            </PlaysSubLayout>
        )} />
    </>
}

export default PlaysSubHOC;