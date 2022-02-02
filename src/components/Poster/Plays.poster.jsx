import React from "react";
import { Link } from "react-router-dom";
const PlaysPoster=(props)=>{
    return(
        <Link to={`/plays/sub`}>
            <div className="flex flex-col items-start  lg:gap-1 px-3 ">
                <div>
                    <img src={`http://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-lg"/>
                </div>
                <h3 className={`text-md font-medium lg:text-lg lg:font-bold ${props.isDark ?"text-white" :"text-gray-700"}`}>{props.name}</h3>
                <h3 className={`text-md font-medium lg:text-lg lg:font-bold ${props.isDark ?"text-white" :"text-gray-700"}`}>{props.title}</h3>
                <p className={` text-xs lg:text-sm  ${props.isDark ?"text-white" :"text-gray-700"}`}>Telugu</p>
                <p className={` text-xs lg:text-sm  ${props.isDark ?"text-white" :"text-gray-700"}`}>₹ 200</p>
            </div>

        </Link> 
    );
};

export default PlaysPoster; 