import React from "react";
import { Route } from "react-router-dom";
import MoviesLayout from "../layouts/Movies.Layout";

const MoviesHOC =  ({component:Component ,...rest})=>{
    return(
        <Route {...rest} component={(props)=>(
            <MoviesLayout>
                <Component {...props}/>
            </MoviesLayout>
        )}>

        </Route>
    )
}

export default MoviesHOC;