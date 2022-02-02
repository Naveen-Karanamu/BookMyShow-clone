import React, { Component } from "react";
import { Route } from "react-router-dom";
import SportsLayout from "../layouts/Sports.Layout";

const SportsHOC=({component:Component, ...rest})=>{
    return (
        <Route {...rest} component={(props)=>
        (
            <SportsLayout>
                <Component {...props}/>
            </SportsLayout>
        )}>

        </Route>
    )
}

export default SportsHOC;