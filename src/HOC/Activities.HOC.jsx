import React from "react";
import { Route } from "react-router-dom";
import ActivitiesLayout from "../layouts/Activites.Layout";

const ActivitiesHOC = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => (
            <ActivitiesLayout >
                <Component {...props} />
            </ActivitiesLayout>
        )} />
    )
}

export default ActivitiesHOC;