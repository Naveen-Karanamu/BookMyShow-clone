import React, { Component } from "react";
import { Route } from "react-router-dom";
import EventsLayout from "../layouts/Events.Layout";

const EventsHOC=({component:Component,...rest})=>{
    return (<Route {...rest} component={(props)=>(
       <EventsLayout>
            <Component {...props} />
       </EventsLayout>
    )}>

    </Route>)
}

export default EventsHOC