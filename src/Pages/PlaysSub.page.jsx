import React, { useContext } from "react";
import { AiOutlineCalendar, AiFillLike } from "react-icons/ai"
import { IoLocationOutline } from "react-icons/io5"
import { FaLanguage, FaFacebookF, FaTwitter } from "react-icons/fa"
import { BiTime } from "react-icons/bi"
import { MovieContext } from "../context/movie.context"
import { GrNotes } from "react-icons/gr"
import { CgNotes } from "react-icons/cg"
import { BsChevronRight,BsChevronUp } from "react-icons/bs"

const PlaysSubPageMd = () => {
    const { movie } = useContext(MovieContext)
    return (<>
        <div >
            <div className="w-full h-56 lg:h-full md:h-96 pt-14 md:pt-20 lg:pt-0">
                <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} className="w-full h-full" />
            </div>
            <div>
                <div className="container mx-auto px-6 py-4">
                    <button className="text-white text-sm bg-navBarBMS-600 rounded-sm px-1">E SPORTS</button>

                    <h1 className="text-2xl font-bold text-navBarBMS-700 py-2">{movie.title}</h1>

                    <div className="flex gap-3 item-center">
                        <AiOutlineCalendar className="w-5 h-5 text-navBarBMS-400 " />
                        <h3 className="text-navBarBMS-800">Sat 05 Feb 2022 - Sum 27 Feb 2022</h3>
                    </div>
                    <div className="flex gap-3 item-center">
                        <IoLocationOutline className="w-5 h-5 text-navBarBMS-400 " />
                        <h3 className="text-navBarBMS-800">Online (Play From Home)</h3>
                    </div>

                    <div className="py-4">
                        <hr />
                    </div>

                    <div className="flex flex-col gap-1">
                        <h1 className="text-lg font-medium pb-1">More Information</h1>
                        <div className=" text-navBarBMS-400 flex gap-3 ">
                            <FaLanguage className="w-5 h-5" />
                            <h1>English</h1>
                        </div>
                        <div className=" text-navBarBMS-400 flex gap-3 ">
                            <BiTime className="w-5 h-5" />
                            <h1>16yrs+</h1>
                        </div>
                    </div>

                    <div className="py-4">
                        <hr />
                    </div>

                    <h1 className="text-lg font-medium pb-3">Click on Interested to stay updated about this event.</h1>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <AiFillLike className="text-lime-600 w-6 h-6" />
                                <span>486</span>
                            </div >
                            <p className="text-navBarBMS-400 pt-1 w-3/4">People have shown interest recently</p>
                        </div>
                        <div >
                            <button className="border-2 px-10 h-10 text-md text-commonPink-200 border-commonPink-200 rounded">Interested?</button>
                        </div>
                    </div>

                    <div className="py-4">
                        <hr />
                    </div>

                    <div className="bg-commonPink-300 flex flex-col gap-3 p-5 rounded-lg">
                        <h3 className="text-lg font-medium pb-1">NOTE</h3>
                        <h2 className="text-xl font-bold text-navBarBMS-900 ">PRIZE MONEY UPTO 8 Lakhs</h2>
                        <p className="text-navBarBMS-900 text-sm">Provide immediate relied and support to underserved comminitied affected by COVID-19.</p>
                        <span className="text-sm font-semibold text-commonPink-200">To Donate Now, Click Here.</span>
                    </div>
                    <div className="pt-7 ">
                        <h2 className="text-xl font-medium text-navBarBMS-700 ">About</h2>
                        <h4 className="text-navBarBMS-800 text-md py-2">{movie.overview}</h4>
                        <h4 className="text-navBarBMS-800 text-md py-2">Prized offered:-</h4>
                        <span className="text-sm font-normal text-commonPink-200">Read More</span>
                    </div>

                    <div className="py-4">
                        <hr />
                    </div>

                    {/* <PosterSlider images={} title="Explore Fun Activities" isDark={false} /> */}

                </div>
            </div>
        </div>
    </>)
}

const PlaysSubPageLg = () => {
    const { movie } = useContext(MovieContext)

    return (<>
        <div className="">
            <div className="w-full h-52 lg:h-96 md:h-96 lg:container lg:mx-auto lg:px-48 relative">
                <img src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="w-full " style={{ height: "calc(29vw)" }} />

                <div className="bg-white p-4">
                    <div className="flex  items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-navBarBMS-800 ">{movie.title}</h1>
                            <div className="flex flex-col gap-1">
                                <h1>E Sports | English | 16yrs +</h1>
                            </div>
                        </div>
                        <div>
                            <button className="text-white bg-commonPink-200 text-lg py-4 px-12 rounded">Register</button>
                        </div>
                    </div>
                    <div className="p-4">
                        <hr ></hr>
                    </div>
                    <div className="flex gap-8 text-navBarBMS-900">
                        <div className="flex gap-3 item-center">
                            <AiOutlineCalendar className="w-5 h-5 text-navBarBMS-400 " />
                            <h3 className="text-navBarBMS-800">Sat 05 Feb 2022 - Sum 27 Feb 2022</h3>
                        </div>
                        <div className="flex gap-3 item-center">
                            <IoLocationOutline className="w-6 h-6 text-amber-400 " />
                            <h3 className="text-navBarBMS-800">Online (Play From Home)    |    <span className="font-medium">₹ 100</span> <span className="text-xs">Onwards</span></h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-5 absolute mt-6 w-64">
                    <h2 className="text-xl font-semibold text-navBarBMS-900 ">Share this event</h2>
                    <div className="flex gap-4 mt-3">
                        <FaFacebookF className="w-5 h-5  text-navBarBMS-600" />
                        <FaTwitter className="w-5 h-5  text-navBarBMS-600" />
                    </div>
                </div>

                <div className="bg-white p-4 absolute mt-6 w-64 right-48 ">
                    <div className="bg-commonPink-300 flex gap-2 p-3 rounded items-center">
                        <div className="text-commonPink-100">
                            <CgNotes className="w-5 h-5" />
                        </div>
                        <p className="text-sm font-semibold text-navBarBMS-900">Contactless Ticketing & Fast-track Entry with M-ticket.
                            <div className="text-commonPink-100 flex items-center">
                                <span className="text-md font-semibold ">Learn How
                                </span>
                                <span ><BsChevronRight /></span>
                            </div>
                        </p>
                    </div>
                    <p className="text-md pt-12 font-semibold text-navBarBMS-900">Vishkapatnam</p>
                    <div className="flex text-sm text-gray-700 items-center gap-2 pt-2">
                        <p>Vuda Park: Vishakapatnam </p>
                        <BsChevronUp/>
                    </div>
                    <p className="text-xs text-gray-500 pt-1">36/2, 8th Cross Road, R K Colony, 2nd Phase, J. P. Nagar, Vishakapatnam, Andra Pradesh, 560078, India</p>

                    <div className="pt-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MbRrwlP4MtsSXkIG-XBxvCnAQi5NuzQpqQ&usqp=CAU" />
                </div>
                </div>
                
            </div>
            <div className="">
                <div className="container mx-auto  py-6 " style={{ width: "calc(38vw" }}>

                    <div className="bg-white p-4 mb-6 mt-52">
                        <h1 className="text-lg font-medium pb-3">Click on Interested to stay updated about this event.</h1>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <AiFillLike className="text-lime-600 w-6 h-6" />
                                    <span>486</span>
                                </div >
                                <p className="text-navBarBMS-700 pt-1 w-4/5 text-xs">People have shown interest recently</p>
                            </div>
                            <div >
                                <button className="border-2 px-10 h-10 text-md text-commonPink-200 border-commonPink-200 rounded">Interested?</button>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white p-5">
                        <div className="bg-commonPink-300 flex flex-col gap-3 p-5 rounded-lg">
                            <h3 className="text-lg font-medium pb-1">NOTE</h3>
                            <h2 className="text-xl font-bold text-navBarBMS-900 ">PRIZE MONEY UPTO 8 Lakhs</h2>
                            <p className="text-navBarBMS-900 text-sm">Provide immediate relied and support to underserved comminitied affected by COVID-19.</p>
                            <span className="text-sm font-semibold text-commonPink-200">To Donate Now, Click Here.</span>
                        </div>
                        <div className="pt-7 md:block">
                            <h2 className="text-xl font-medium text-navBarBMS-700 ">About</h2>
                            <h4 className="text-navBarBMS-800 text-md py-2">{movie.overview}</h4>
                            <h4 className="text-navBarBMS-800 text-md py-2">Prized offered:-</h4>
                            <span className="text-sm font-normal text-commonPink-200">Read More</span>
                        </div>

                    </div>

                    {/* <PosterSlider images={} title="Explore Fun Activities" isDark={false} /> */}

                </div>
            </div>
        </div>
    </>)
}

const PlaysSubPage = () => {
    return (<>
        <div className="lg:hidden"><PlaysSubPageMd /></div>
        <div className=" hidden lg:block">< PlaysSubPageLg /></div>
    </>)
}

export default PlaysSubPage