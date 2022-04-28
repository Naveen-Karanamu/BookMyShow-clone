import axios from "axios";
import React, { useEffect, useState } from "react";
import BuzzFeed from "../components/Buzz Feed/BuzzFeed.component";
import { FaFacebookF } from "react-icons/fa"
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"

const BuzzPage = () => {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        const reqPopular = async () => {
            const getPopular = await axios.get("/movie/popular")
            setPopular(getPopular.data.results)
        }
        reqPopular();
        console.log(popular);
    }, [])

    const [top, setTop] = useState([]);
    useEffect(() => {
        const reqTop = async () => {
            const getTop = await axios.get("/movie/top_rated")
            setTop(getTop.data.results)
        }
        reqTop();
    })

    return (
        <>
            <div className="px-3 md:px-8 lg:continer lg:mx-auto lg:px-96 relative pt-14 md:pt-20 lg:pt-0">
                <div className="lg:flex lg:bg-white ">
                    <div className=" lg:p-8 lg:w-2/3 flex flex-col">
                        <div className="flex justify-evenly md:justify-around py-3 lg:py-0 gap-2 lg:gap-9 lg:pr-5 lg:pb-2">
                            <div className="flex flex-col items-center gap-2 w-24 h-24 md:w-28 md:h-28  lg:w lg:h ">
                                <div className="border-commonPink-100 border-2 rounded-full">
                                    <img src="https://in.bmscdn.com/content-buzz/2022/01/inventing-anna-thumbnail.jpg" className="w-full h-full rounded-full border-2 border-solid border-white" />
                                </div>
                                <p className="text-xs text-gray-500 md:text-gray-600">Web Series</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 w-24 h-24 md:w-28 md:h-28 lg:w lg:h">
                                <div className="border-commonPink-100 border-2 rounded-full ">
                                    <img src="https://in.bmscdn.com/content-buzz/2021/12/untitled-design-21.jpg" className="w-full h-full rounded-full border-2 border-solid border-white" />
                                </div>
                                <p className="text-xs text-gray-500 md:text-gray-600">Disney Films</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 w-24 h-24 md:w-28 md:h-28  lg:w lg:h">
                                <div className="border-commonPink-100 border-2 rounded-full ">
                                    <img src="https://in.bmscdn.com/content-buzz/2021/07/upcomingnetflix.jpg" className="w-full h-full rounded-full border-2 border-solid border-white" />
                                </div>
                                <p className="text-xs text-gray-500 md:text-gray-600">Netflix Movies</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 w-24 h-24  md:w-28 md:h-28 lg:w lg:h">
                                <div className="border-commonPink-100 border-2 rounded-full ">
                                    <img src="https://in.bmscdn.com/content-buzz/2021/07/upcomingprimevideo.jpg" className="w-full h-full rounded-full border-2 border-solid border-white" />
                                </div>
                                <p className="text-xs text-gray-500 md:text-gray-600">Prime Movies</p>
                            </div>
                        </div>
                        <div className="pt-5 md:pt-0 lg">
                            <hr className=" lg:pb-4" />
                        </div>
                        <div className="flex flex-wrap gap-2 py-5 lg:pt-0 ">
                            <div>
                                <button className='border py-2 bg-white px-3 lg:px-2 lg:py-1  rounded-3xl border-2 border-gray-300 md:border-gray-400 focus:border-commonPink-100 focus:bg-commonPink-100  focus:text-red'>
                                    <p className='text-xs text-gray-400 md:text-gray-500 font-medium '>Trending</p>
                                </button>
                            </div>
                            <div>
                                <button className='border py-2 bg-white px-3 rounded-3xl border-2 lg:px-2 lg:py-1  border-gray-300 md:border-gray-400 focus:border-commonPink-100 focus:bg-commonPink-100'>
                                    <p className='text-xs text-gray-400 md:text-gray-500 font-medium'>Movies</p>
                                </button>
                            </div>
                            <div>
                                <button className='border py-2 bg-white px-3 rounded-3xl border-2 lg:px-2 lg:py-1  border-gray-300 md:border-gray-400 focus:border-commonPink-100 focus:bg-commonPink-100'>
                                    <p className='text-xs text-gray-400 md:text-gray-500 font-medium'>Events</p>
                                </button>
                            </div>
                            <div>
                                <button className='border py-2 bg-white px-3 rounded-3xl border-2 lg:px-2 lg:py-1  border-gray-300 md:border-gray-400 focus:border-commonPink-100 focus:bg-commonPink-100'>
                                    <p className='text-xs text-gray-400 md:text-gray-500 font-medium'>Sports</p>
                                </button>
                            </div>
                            <div>
                                <button className='border py-2 bg-white px-3 rounded-3xl border-2 lg:px-2 lg:py-1  border-gray-300 md:border-gray-400 focus:border-commonPink-100 focus:bg-commonPink-100'>
                                    <p className='text-xs text-gray-400 md:text-gray-500 font-medium'>Streaming</p>
                                </button>
                            </div>
                            <div>
                                <button className='border py-2 bg-white px-3 rounded-3xl border-2 lg:px-2 lg:py-1  border-gray-300 md:border-gray-400 focus:border-commonPink-100 focus:bg-commonPink-100'>
                                    <p className='text-xs text-gray-400 md:text-gray-500 font-medium'>Video</p>
                                </button>
                            </div>
                        </div>
                        <div className="pb-5 md:pb-0 ">
                            <hr className=" lg:pb-6" />
                        </div>

                        <div className="flex flex-col gap-8">
                            {popular.map((data) => <BuzzFeed {...data} />)}
                        </div>
                        <div className="flex flex-col gap-8">
                            {top.map((data) => <BuzzFeed {...data} />)}
                        </div>
                    </div>


                    <div className="w-1/3">
                        <div className="hidden  lg:block sticky top-0">
                            <div className="border-2 p-4 m-7 -ml-7">
                                <div className="border-b-2 pb-3 flex flex-col gap-2">
                                    <h3 className="font-semibold text-md">BookMyShow Buzz</h3>
                                    <p className="text-sm">Get the latest updates on movies, series, online events to stream and more with curated recommendtions.</p>
                                </div>
                                <div className="border-b-2 flex flex-col gap-2 pb-3">
                                    <h3 className="font-semibold text-md">Popular categories</h3>
                                    <p className="text-sm">Movies</p>
                                    <hr />
                                    <p className="text-sm">Events</p>
                                    <hr />
                                    <p className="text-sm">City Guide</p>
                                    <hr />
                                    <p className="text-sm">Sports</p>
                                    <hr />
                                    <p className="text-sm">Streaming</p>
                                    <hr />
                                    <p className="text-sm">Music</p>

                                </div>
                                <div className="border-b-2 pb-4 flex flex-col gap-2">
                                    <h3 className="font-semibold text-md">Get the app experience</h3>
                                    <div>
                                        <img src="https://in.bmscdn.com/webin/common/google-play-badge.jpg" />
                                    </div>
                                    <div>
                                        <img src="https://in.bmscdn.com/static/2020/05/app-store-badge-1.jpg" />
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center justify-evenly pt-3">
                                    <FaFacebookF className="w-5 h-5" />
                                    <AiFillInstagram className="w-6 h-6" />
                                    <AiFillYoutube className="w-6 h-6" />
                                    <AiOutlineTwitter className="w-6 h-6" />
                                    <BsLinkedin className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuzzPage;