import React from "react";
import { Link } from "react-router-dom";

const ExtendedNav = () => {
    return (<>
        <div className="hidden lg:flex justify-around bg-commonPink-400 h-10 items-center">
            <div className="flex gap-4 text-gray-300 text-sm font-medium">
                <p className="cursor-pointer hover:text-white">Movies</p>
                <p className="cursor-pointer hover:text-white">Stream</p>
                <p className="cursor-pointer hover:text-white">Events</p>
                <p className="cursor-pointer hover:text-white" >Plays</p>
                <p className="cursor-pointer hover:text-white">Sports</p>
                <p className="cursor-pointer hover:text-white">Activities</p>
                <p className="cursor-pointer hover:text-white">Buzz</p>
            </div>
            <div className="flex gap-4 text-gray-300 text-sm font-medium">
                <p className="cursor-pointer hover:text-white">ListYourShow</p>
                <p className="cursor-pointer hover:text-white">Corporates</p>
                <p className="cursor-pointer hover:text-white">Offers</p>
                <p className="cursor-pointer hover:text-white">Gift Cards</p>
            </div>
        </div>
    </>)
}

export default ExtendedNav;