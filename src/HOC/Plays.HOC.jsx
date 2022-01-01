import React from "react";
import { BrowseRouter, Route } from "react-router-dom";
import PlaysLayout from "../layouts/Plays.layout";

const PlaysHOC=({component:Component, ...rest})=>{
    return (
        <>
            <Route {...rest}
            component={(props)=>(
                <PlaysLayout>
                    <Component {...props} />
                </PlaysLayout>
            )}
            />
        </>
    )
}

export default PlaysHOC;








