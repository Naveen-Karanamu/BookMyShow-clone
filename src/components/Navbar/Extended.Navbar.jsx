import React from "react";

const ExtendedNav = () => {
    return (<>
        <div className="hidden lg:flex justify-around bg-commonPink-400 h-10 items-center">
            <div className="flex gap-4 text-gray-300 text-sm font-medium">
                <p>Movies</p>
                <p>Stream</p>
                <p>Events</p>
                <p>Plays</p>
                <p>Sports</p>
                <p>Activities</p>
                <p>Buzz</p>
            </div>
            <div className="flex gap-4 text-gray-300 text-sm font-medium">
            <p>ListYourShow</p>
            <p>Corporates</p>
            <p>Offers</p>
            <p>Gift Cards</p>
            </div>
        </div>
    </>)
}

export default ExtendedNav;