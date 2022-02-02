import { logDOM } from "@testing-library/react";
import React, { useContext } from "react";
import { BsChevronRight, BsSearch, BsChevronLeft } from "react-icons/bs";
import { IoSearchOutline, IoShareSocialOutline } from "react-icons/io5"
import { FiChevronLeft } from "react-icons/fi"
import { VscMenu } from "react-icons/vsc"
import { FaChevronDown } from "react-icons/fa"
import Logo from "../../images/logo.image";
import { MovieContext } from "../../context/movie.context";
const NavSm = () => {
    const {movie}=useContext(MovieContext)
    return (
        <>
            <div className="flex items-center justify-between h-14">
                <div className="px-4 py-2 flex items-center gap-6">
                    <span className="text-white "><BsChevronLeft className="w-4 h-4" /></span>
                    <h1 className="text-md font-semibold text-white">{movie.original_title}</h1>
                </div>
                <div className="flex items-center gap-4 px-4">
                    <div className="text-white w-6 h-6"><IoShareSocialOutline className="w-full h-full" /></div>
                </div>
            </div>
        </>
    )
}

const NavMd = () => {
    return (
        <>
            <div className="w-full h-14 px-4 pb-0 pt-5 flex items-center ">
                <div className="text-gray-500 bg-white h-9 rounded-l border-0 flex items-center px-3"><IoSearchOutline className="w-4 h-4 border-0 bg-transparent" /></div>
                <input type="search" placeholder="Search for Streams, Events, Plays, Sports and Activities" className="w-full h-9 rounded-r border-0  border-none focus:outline-none" />
            </div>
        </>
    )
}

const NavLg = () => {
    return (
        <>
            <div className="h-16 flex items-center container mx-auto px-10 ">
                <div className=" flex items-center w-full">
                    <img className="bg-transparent h-12 pr-5" src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" />
                    <div className="text-gray-500 bg-white h-9 rounded-l border-0 flex items-center px-3"><IoSearchOutline className="w-4 h-4 border-0 bg-transparent" /></div>
                    <input type="search" placeholder="Search for Streams, Events, Plays, Sports and Activities" className="w-4/5 h-9 rounded-r border-0  border-none focus:outline-none" />
                </div>
                <div className="flex items-center w-full gap-6 justify-end">
                    <p className="text-white flex items-center gap-1"> Vishakapatnam <FaChevronDown className="w-3 h-3" /></p>
                    <button className="bg-commonPink-100 text-white px-4 py-1.5  rounded-md text-xs font-semibold">Sign In</button>
                    <VscMenu className="text-white w-5 h-5" />
                </div>
            </div>
        </>
    )
}

const NavXl = () => {
    return (
        <>
            <div className="h-16 flex items-center container mx-auto px-32 ">
                <div className=" flex items-center w-full">
                    {/* <img className="bg-transparent h-12 pr-5" src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" /> */}
                    <Logo />
                    <div className="text-gray-500 bg-white h-9 rounded-l border-0 flex items-center px-3"><IoSearchOutline className="w-4 h-4 border-0 bg-transparent" /></div>
                    <input type="search" placeholder="Search for Streams, Events, Plays, Sports and Activities" className="w-4/5 h-9 rounded-r border-0  border-none focus:outline-none" />
                </div>
                <div className="flex items-center w-full gap-6 justify-end">
                    <p className="text-white flex items-center gap-1"> Vishakapatnam <FaChevronDown className="w-3 h-3" /></p>
                    <button className="bg-commonPink-100  text-white px-4 py-1.5  rounded-md text-xs font-semibold">Sign In</button>
                    <VscMenu className="text-white w-5 h-5" />
                </div>
            </div>
        </>
    )
}

const StreamNavbar = () => {
    return (
        <>
            <nav className="absolute inset-x-0 z-30  bg-opacity-10 backdrop-blur-lg lg:relative lg:bg-navBarBMS-700 ">
                <div className="md:hidden"><NavSm /></div>

                <div className="hidden md:block lg:hidden"><NavSm /></div>

                <div className="hidden lg:flex xl:hidden"><NavLg /></div>

                <div className="hidden  xl:flex"><NavXl /></div>
            </nav>
        </>
    )
}

export default StreamNavbar;