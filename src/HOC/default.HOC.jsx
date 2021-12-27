import React from "react";
import { BrowseRouter, Route } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC=({component:Component, ...rest})=>{
    return (
        <>
            <Route {...rest}
            component={(props)=>(
                <DefaultLayout>
                    <Component {...props} />
                </DefaultLayout>
            )}
            />
        </>
    )
}

export default DefaultHOC;








