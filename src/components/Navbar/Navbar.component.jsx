import React from "react";
import {BsChevronRight, BsSearch} from "react-icons/bs";
import {IoSearchOutline} from "react-icons/io5"

const NavSm=()=>{
    return(
        <>
            <div className="flex items-center justify-between">
                <div className="px-4 py-2">
                    <h1 className="text-2xl font-bold text-white">It All Starts Here!</h1>
                    <span className="text-gray-200 text-xs flex items-center">Rajamahendravaram (Rajahmundry) <BsChevronRight /></span>
                </div>
                <div className="flex items-center gap-4 px-4">
                    <button className="bg-red-500 text-white p-2 rounded-lg text-xs font-semibold">Use App</button>
                    <div className="text-white w-6 h-6"><IoSearchOutline className="w-full h-full"/></div>
                </div>
            </div>
        </>
    )
}

const NavMd=()=>{
    return (
        <>
            
        </>
    )
}

const NavLg=()=>{
    return(
        <>
            
        </>
    )
}

const Navbar=()=>{
    return (
        <>
         <nav className="bg-navBarBMS-700">
             <div className="md:hidden"><NavSm /></div>

             <div className="hidden md:flex lg:hidden"><NavMd /></div>

             <div className="hidden lg:flex"><NavLg /></div>
         </nav>
        </>
    )
}

export default Navbar;