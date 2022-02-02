import React from "react";
import { Link } from "react-router-dom";
const PlaysPoster=(props)=>{
    return(
        <Link to={`/plays/sub`}>
            {/* <div className="flex flex-col items-start  lg:gap-2 px-3 "> */}
            <span className="">
                <div className="w-1/2">
                    <img src={`http://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-lg"/>
                </div>
                <h3 className={`text-md w-3/4 font-medium lg:text-lg lg:font-bold ${props.isDark ?"text-white" :"text-gray-700"}`}>{props.title}</h3>
                <p className={` text-xs lg:text-sm  ${props.isDark ?"text-white" :"text-gray-700"}`}>Telugu</p>
                <p className={` text-xs lg:text-sm  ${props.isDark ?"text-white" :"text-gray-700"}`}>₹ 200</p>
            </span>

        </Link> 
    );
};

export default PlaysPoster; 