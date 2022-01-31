import React from "react";
import { AiOutlineCalendar, AiFillLike } from "react-icons/ai"
import { IoLocationOutline } from "react-icons/io5"
import { FaLanguage } from "react-icons/fa"
import { BiTime } from "react-icons/bi"

const PlaysSubPage = () => {
    return (<>
        <div className="lg:container lg:mx-auto lg:px-48">
            <div className="w-full h-52 lg:h-full">
                <img src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-free-fire-solo-and-squad-bermuda-0-2020-12-8-t-13-48-37.jpg" className="w-full h-full" />
            </div>
            <div>
                <div className="container mx-auto px-6 py-4">
                    <button className="text-white text-sm bg-navBarBMS-600 rounded-sm px-1">E SPORTS</button>

                    <h1 className="text-2xl font-bold text-navBarBMS-700 py-2">Free Fire Solo And Squad (Bermuda)</h1>

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
                    <div className="flex items-center">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <AiFillLike className="text-lime-600 w-6 h-6" />
                                <span>486</span>
                            </div >
                            <p className="text-navBarBMS-400 pt-1 w-3/4">People have shown interest recently</p>
                        </div>
                        <button className="border-2 px-10 h-10 text-md text-commonPink-200 border-commonPink-200 rounded">Intersted?</button>
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
                    <div className="pt-7">
                        <h2 className="text-xl font-medium text-navBarBMS-700 ">About</h2>
                        <h4 className="text-navBarBMS-800 text-md py-2">Succession of previous tournament offering a fair opportunity to earn Rs.</h4>
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

export default PlaysSubPage