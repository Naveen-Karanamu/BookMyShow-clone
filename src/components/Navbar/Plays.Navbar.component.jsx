import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5"
import { VscMenu } from "react-icons/vsc"
import { FaChevronDown } from "react-icons/fa"
import Logo from "../../images/logo.image";
const NavSm = (props) => {
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex items-center pl-3">
                    <BsChevronLeft className="text-white w-6 h-6" />
                    <div className="px-4 py-2">
                        <h1 className="text-xl md:text-lg text-white">{props.page}</h1>
                        <span className="text-gray-200 text-xs flex items-center"> Vishakapatnam</span>
                    </div>
                </div>

                <div className="flex items-center gap-4 px-6 md:px-20">
                    <div className="text-white w-6 h-6 md:relative"><IoSearchOutline className="w-full h-full md:absolute md:left-96" /></div>
                </div>
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
                    <input type="search" placeholder="Search for Movies, Events, Plays, Sports and Activities" className="w-4/5 h-9 rounded-r border-0  border-none focus:outline-none" />
                </div>
                <div className="flex items-center w-full gap-6 justify-end">
                    <p className="text-white flex items-center gap-1"> Vishakapatnam <FaChevronDown className="w-3 h-3" /></p>
                    <button className="bg-red-500 text-white px-4 py-1.5  rounded-md text-xs font-semibold">Sign In</button>
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
                    <input type="search" placeholder="Search for Movies, Events, Plays, Sports and Activities" className="w-4/5 h-9 rounded-r border-0  border-none focus:outline-none" />
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

const PlaysNavbar = (props) => {
    return (
        <>
            <nav className="bg-navBarBMS-700 ">
                <div className="md:hidden"><NavSm page={props.page}/></div>

                <div className="hidden md:flex lg:hidden"><NavSm page={props.page}/></div>

                <div className="hidden lg:flex xl:hidden"><NavLg /></div>

                <div className="hidden  xl:flex"><NavXl /></div>
            </nav>
        </>
    )
}

export default PlaysNavbar;