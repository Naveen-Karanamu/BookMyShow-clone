import React, { useState, useEffect } from "react";

// icons
import { HiOutlineBookmark } from "react-icons/hi"
import { VscHeart } from "react-icons/vsc"
import { BiShareAlt, BiUserCircle } from "react-icons/bi"

import axios from "axios";

const BuzzFeed = (props) => {
    // let user = props.id;
    // // console.log(user);
    // const [cast, setCast] = useState([]);
    // useEffect(() => {
    //     const reqCast = async () => {
    //         const getCast = await axios.get(`/movie/${props.id}/credits`)
    //         setCast(getCast.data.cast)
    //     }
    //     reqCast();
    //     // console.log(cast);
    // }, [])

    // const castImg = cast[4];

    return (<>
        <div className="flex items-top gap-3 md:gap-4">
            <div className="w-52 h-28 md:w-48 md:h-28 lg:w-56 lg:h-24">
                <img src={`http://image.tmdb.org/t/p/original${props.poster_path}`} className="w-full h-full rounded-lg" />
            </div>
            <div className="flex flex-col gap-2 pr-4">
                <div className="flex items-top justify-between">
                    <p className="md:hidden text-gray-700 font-medium text-md w-4/5">{props.overview.substr(0, 70)}...</p>
                    <p className="hidden md:flex lg:hidden text-gray-700 font-medium text-md w-4/5">{props.overview.substr(0, 120)}...</p>
                    <p className="hidden  lg:flex text-gray-700 font-medium text-md w-4/5">{props.overview.substr(0, 85)}...</p>
                    <HiOutlineBookmark className="text-gray-400 md:text-gray-500 font-bold w-4 h-4 md:w-8 md:h-8 lg:w-5 lg:h-5" />
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <div className=" w-6 h-6">
                            {/* <img src={`http://image.tmdb.org/t/p/original${cast.profile_path}`} className="w-full h-full rounded-full" /> */}
                            <BiUserCircle className="w-full h-full text-gray-600" />
                        </div>
                        <p className="text-gray-400 md:text-gray-500 text-xs">{((props.vote_average * 10) % 60)} Hours ago</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <VscHeart className="text-gray-400 md:text-gray-500  w-6 h-6 focus:text-commonPink-200 " />
                        <p className="text-gray-400 text-xs">{props.vote_count}</p>
                        <BiShareAlt className="text-gray-400 md:text-gray-500 w-6 h-6 font-extralight" />
                    </div>
                </div>

            </div>
        </div>
        <hr />
    </>)
}

export default BuzzFeed;