import react from "react";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";

// Icons
import { BiCameraMovie, BiMoviePlay, BiCalendarEvent, BiFootball } from 'react-icons/bi'
import { FaPlayCircle } from 'react-icons/fa'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { FaRunning } from 'react-icons/fa'


const MobileFooter = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    // console.log(currentPath);

    const tabs = [
        {
            title: "movies",
            route: "movies",
            isActive: currentPath.includes("movies")
        },
        {
            title: "Order Online",
            route: "order-online",
            isActive: currentPath.includes("order-online")
        },
        {
            title: "events",
            route: "events",
            isActive: currentPath.includes("events")
        },
        {
            title: "plays",
            route: "plays",
            isActive: currentPath.includes("plays")
        },
        {
            title: "sports",
            route: "sports",
            isActive: currentPath.includes("sports")
        },
        {
            title: "activities",
            route: "activities",
            isActive: currentPath.includes("activities")
        },
        {
            title: "buzz",
            route: "buzz",
            isActive: currentPath.includes("/buzz")
        }

    ]

    return (
        <>
            <div className="md:hidden bg-gray-100 w-full h-16 fixed -bottom-3 z-10 text-gray-600 pt-2 border-t border-gray-300">
                <div className="flex justify-evenly">
                    <Link to="/movies">
                        <BiCameraMovie className="w-7 h-7" />
                    </Link>
                    <Link to="/">
                        <BiMoviePlay className="w-7 h-7" />
                    </Link>
                    <Link to="/events">
                        <BiCalendarEvent className="w-7 h-7" />
                    </Link>
                    <Link to="/plays">
                        <FaPlayCircle className="w-7 h-7" />
                    </Link>
                    <Link to="/sports">
                        <BiFootball className="w-7 h-7" />
                    </Link>
                    <Link to="/activities">
                        <FaRunning className="w-7 h-7" />
                    </Link>
                    <Link to="/buzz">
                        <HiOutlineSpeakerphone className={tabs.isActive?"w-7 h-7 bg-red-600":"w-7 h-7"} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MobileFooter;