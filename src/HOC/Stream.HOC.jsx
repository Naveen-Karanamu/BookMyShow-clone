import React from "react";
import { Route } from "react-router-dom";
import StreamLayout from "../layouts/Stream.layout";

const StreamHOC=({component:Component, ...rest})=>{
    return (
        <>
            <Route {...rest}
            component={(props)=>(
                <StreamLayout>
                    <Component {...props} />
                </StreamLayout>
            )}
            />
        </>
    )
}

export default StreamHOC;








