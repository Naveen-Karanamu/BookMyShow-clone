import axios from "axios";
import React, {useEffect,useState}from "react";
import Filter from "../components/Filters/Filters.components";
import PlaysPoster from "../components/Poster/Plays.poster";

const SportsPage = () => {
    const [sports,setSports]=useState([]);
    useEffect(()=>{
        const requestSports=async()=>{
            const getSports=await axios.get("/trending/movie/day")
            setSports(getSports.data.results)
        }
        requestSports();
    },[])

    return (<>
        <div className='lg:container lg:mx-auto lg:px-32 '>
            <div className=' lg:flex lg:flex-row-reverse lg:pt-14 gap-5'>
                <div className=' lg:w-3/4 mt-3'>
                    <h1 className='hidden lg:flex text-2xl text-gray-800 font-bold pl-3 mb-6'>Sports In Vishakapatnam</h1>
                    <div className='flex flex-wrap gap-2 px-3 mb-4'>
                        <div>
                            <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                <p className='text-xs text-commonPink-200'>E Sports</p>
                            </button>
                        </div>
                        <div>
                            <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                <p className='text-xs text-commonPink-200'>Rugby</p>
                            </button>
                        </div>
                        <div>
                            <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                <p className='text-xs text-commonPink-200'>Runnning</p>
                            </button>
                        </div>
                        <div>
                            <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                <p className='text-xs text-commonPink-200'>Squash</p>
                            </button>
                        </div>
                        <div>
                            <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                <p className='text-xs text-commonPink-200'>Online Games</p>
                            </button>
                        </div>
                        <div>
                            <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                <p className='text-xs text-commonPink-200'>Cricket</p>
                            </button>
                        </div>
                        
                    </div>
                    <div className=''>
                        <div className='flex flex-wrap py-2 md:py-4 justify-center' >
                            {sports.map((image) => <PlaysPoster {...image} cat="Esports" />)}
                        </div>
                    </div>
                </div>

                <div className='w-1/4 hidden lg:block'>
                    <h1 className='hidden lg:flex text-2xl text-gray-800 font-bold pl-3 py-3'>Filters</h1>
                    <div className='w-full  px-3 py-2 my-2 bg-white rounded relative'>
                        <p className='absolute right-4 top-4 text-xs text-gray-500 font-medium'>Clear</p>
                        <Filter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} checkBox={true} />

                    </div>
                    
                    <div className='w-full  px-3 py-2 my-2 bg-white rounded relative'>
                        <p className='absolute right-4 top-4 text-xs text-gray-500 font-medium'>Clear</p>
                        <Filter title="Categories" tags={["E Sports", "Rugby","Running","Squash","Online Games"]} />
                    </div>
                    
                    <div className='w-full  px-3 py-2 my-2 bg-white rounded relative'>
                        <p className='absolute right-4 top-4 text-xs text-gray-500 font-medium'>Clear</p>
                        <Filter title="More Filters" tags={["Outdoor Events","Kids Allowed"]} />
                    </div>
                    <div className='w-full  px-3 py-2 my-2 bg-white rounded relative'>
                        <p className='absolute right-4 top-4 text-xs text-gray-500 font-medium'>Clear</p>
                        <Filter title="Price" tags={["Free", "0-500", "501-2000", "Above 2000"]} />
                    </div>
                    <div className='w-full py-1 my-2 border-commonPink-200  border rounded flex items-center justify-center'>
                        <p className='text-commonPink-200'>Browse by Venues</p>
                    </div>

                </div>
            </div>
        </div>
    </>)
}

export default SportsPage;
