import React from "react";
import { Link } from "react-router-dom";
const Poster=(props)=>{
    return(
        <Link to={`/stream/${props.id}`}>
            <div className="flex flex-col items-start  lg:gap-2 px-3 ">
                <div h-80>
                    <img src={`http://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-lg"/>
                </div>
                <h3 className={`text-md font-medium lg:text-lg lg:font-bold ${props.isDark ?"text-white" :"text-gray-700"}`}>{props.title}</h3>
                <p className={` text-xs lg:text-sm  ${props.isDark ?"text-white" :"text-gray-700"}`}>{props.subtitle}</p>
            </div>

        </Link> 
    );
};

export default Poster; 