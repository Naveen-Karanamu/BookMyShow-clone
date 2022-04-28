import react from "react";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";

// Icons
import { BiCameraMovie, BiMoviePlay, BiCalendarEvent, BiFootball } from 'react-icons/bi'
import { FaPlayCircle } from 'react-icons/fa'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { FaRunning } from 'react-icons/fa'

const tabs = (props) => {
    return (
        <>
            <Link to={`/${props.route}`}>
                {
                    props.isActive ? props.icon : props.icon_in
                }
            </Link>
        </>
    )
}

const MobileFooter = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const tab = [
        {
            title: "movies",
            route: "movies",
            icon: <BiCameraMovie className="w-7 h-7 text-red-700" />,
            icon_in: <BiCameraMovie className="w-7 h-7" />,
            isActive: currentPath.includes("movies")
        },
        {
            title: "stream",
            route: "/",
            icon: <BiMoviePlay className="w-7 h-7 text-red-700" />,
            icon_in: <BiMoviePlay className="w-7 h-7" />,
            isActive: currentPath.includes("order-online")
        },
        {
            title: "events",
            route: "events",
            icon: <BiCalendarEvent className="w-7 h-7 text-red-700" />,
            icon_in: <BiCalendarEvent className="w-7 h-7" />,
            isActive: currentPath.includes("events")
        },
        {
            title: "plays",
            route: "plays",
            icon: <FaPlayCircle className="w-7 h-7 text-red-700" />,
            icon_in: <FaPlayCircle className="w-7 h-7" />,
            isActive: currentPath.includes("plays")
        },
        {
            title: "sports",
            route: "sports",
            icon: <BiFootball className="w-7 h-7 text-red-700" />,
            icon_in: <BiFootball className="w-7 h-7" />,
            isActive: currentPath.includes("sports")
        },
        {
            title: "activities",
            route: "activities",
            icon: <FaRunning className="w-7 h-7 text-red-700" />,
            icon_in: <FaRunning className="w-7 h-7" />,
            isActive: currentPath.includes("activities")
        },
        {
            title: "buzz",
            route: "buzz",
            icon: <HiOutlineSpeakerphone className="w-7 h-7 text-red-700" />,
            icon_in: <HiOutlineSpeakerphone className="w-7 h-7" />,
            isActive: currentPath.includes("buzz")
        }

    ]
    const { tabName } = useParams()
    console.log(tabName);

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
                        <FaRunning className="w-7 h-7 " />
                    </Link>
                    <Link to="/buzz">
                        <HiOutlineSpeakerphone className={tabs.isActive ? "w-7 h-7 text-red-600" : "w-7 h-7 "} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MobileFooter;