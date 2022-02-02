import React, { Component } from "react";
import { Route } from "react-router-dom";
import BuzzLayout from "../layouts/Buzz.Layout";

const BuzzHOC = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => (
            <BuzzLayout>
                <Component {...props} />
            </BuzzLayout>
        )} />
    )
}

export default BuzzHOC;