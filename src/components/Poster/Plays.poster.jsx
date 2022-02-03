import React from "react";
import { Link } from "react-router-dom";
const PlaysPoster=(props)=>{
    return(
        <Link to={`/plays/sub/${props.id}`}>
            <div className="flex flex-col items-start  lg:gap-1 px-2 lg:w-56 lg:mb-12 w-48 mb-6">
                <div className="">
                    <img src={`http://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-lg"/>
                </div>
                <h3 className={`text-md font-medium lg:text-lg lg:font-semibold ${props.isDark ?"text-white" :"text-gray-700"}`}>{props.name}</h3>
                <h3 className={`text-md font-medium lg:text-lg lg:font-semibold ${props.isDark ?"text-white" :"text-gray-700 "}`}>{props.title}</h3>
                <p className={` text-xs lg:text-sm  ${props.isDark ?"text-white" :"text-gray-700"}`}>{props.cat}</p>
                <p className={` text-xs lg:text-sm  ${props.isDark ?"text-white" :"text-gray-700"}`}>₹ 200</p>
            </div>

        </Link> 
    );
};

export default PlaysPoster; 