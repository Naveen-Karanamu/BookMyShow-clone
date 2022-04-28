import React from "react";
import { Link } from "react-router-dom";
import Plays from "../../Pages/Plays.page";


const playsFunc = () => {
    return (<Link to={`/plays/`}>
        <Plays />
    </Link>)
}

const ExtendedNav = () => {
    return (<>
        <div className="hidden lg:flex bg-commonPink-400 h-10 items-center relative">
            <div className="flex  gap-4 text-gray-300 text-sm font-medium absolute left-36 ">
                <Link to="/movies">
                    <p className="cursor-pointer hover:text-white focus:text-black">Movies</p>
                </Link>
                <Link to="/">
                    <p className="cursor-pointer hover:text-white">Stream</p></Link>
                <Link to="/events">
                    <p className="cursor-pointer hover:text-white">Events</p>
                </Link>
                <Link to="/plays">
                    <p className="cursor-pointer hover:text-white">Plays</p>
                </Link>
                <Link to="/sports">
                    <p className="cursor-pointer hover:text-white">Sports</p>
                </Link>
                <Link to="/activities">
                    <p className="cursor-pointer hover:text-white">Activities</p></Link>
                <Link to="/buzz">
                    <p className="cursor-pointer hover:text-white">Buzz</p>
                </Link>
            </div>
            <div className="flex  gap-4 text-gray-300 text-sm font-medium absolute right-36">
                <p className="cursor-pointer hover:text-white">ListYourShow</p>
                <p className="cursor-pointer hover:text-white">Corporates</p>
                <p className="cursor-pointer hover:text-white">Offers</p>
                <p className="cursor-pointer hover:text-white">Gift Cards</p>
            </div>
        </div>

        <div className="hidden md:flex lg:hidden bg-commonPink-400 h-10 items-center md:h-8 md:fixed md:top-14 md:w-full md:z-10">
            <div className="flex gap-4 text-gray-300 text-sm font-medium px-8">
                <Link to="/movies">
                    <p className="cursor-pointer hover:text-white focus:text-black">Movies</p>
                </Link>
                <Link to="/">
                    <p className="cursor-pointer hover:text-white">Stream</p></Link>
                <Link to="/events">
                    <p className="cursor-pointer hover:text-white">Events</p>
                </Link>
                <Link to="/plays">
                    <p className="cursor-pointer hover:text-white">Plays</p>
                </Link>
                <Link to="/sports">
                    <p className="cursor-pointer hover:text-white">Sports</p>
                </Link>
                <Link to="/activities">
                    <p className="cursor-pointer hover:text-white">Activities</p></Link>
                <Link to="/buzz">
                    <p className="cursor-pointer hover:text-white">Buzz</p>
                </Link>
            </div>
        </div>
    </>)
}

export default ExtendedNav;