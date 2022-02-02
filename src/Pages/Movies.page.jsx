import React from "react";
import { BsChevronRight } from "react-icons/bs"
import { useState, useEffect } from "react";
import axios from "axios";
import PlaysPoster from "../components/Poster/Plays.poster";
import Filter from "../components/Filters/Filters.components";


const MoviesPage = () => {
    const [movies, setTrendingMovies] = useState([]);
    useEffect(() => {
        const requestTrendingMovies = async () => {
            const getTrendingMovies = await axios.get("/trending/movie/day");
            setTrendingMovies(getTrendingMovies.data.results);
        }
        requestTrendingMovies();
        console.log(movies);
    }, [])

    return (<>
        {/* <div className="  px-3 lg:container lg:mx-auto lg:px-32 ">
            <div className="lg:flex flex-row-reverse">
                <div className='lg:flex flex-col lg:pt-14 gap-5'>

                    <div className=' mt-3'>
                        <h1 className='hidden lg:flex text-2xl text-gray-800 font-bold  mb-6'>Plays In Rajahmundry</h1>
                        <div className='flex gap-2 pt-4 mb-4'>
                            <div className="">
                                <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                    <p className='text-xs text-commonPink-200'>Telugu</p>
                                </button>
                            </div>
                            <div>
                                <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                    <p className='text-xs text-commonPink-200'>Hindi</p>
                                </button>
                            </div>
                            <div>
                                <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                    <p className='text-xs text-commonPink-200'>English</p>
                                </button>
                            </div>
                            <div>
                                <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                    <p className='text-xs text-commonPink-200'>Tamil</p>
                                </button>
                            </div>
                            <div>
                                <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                    <p className='text-xs text-commonPink-200'>Kannada</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-240:w-600/coming-soon-collection-202011190624.png" />
                    </div>

                    <div className="pt-6">
                        <div className="flex flex-wrap w-1/2">
                            {movies.map((movie) => <PlaysPoster {...movie} />)}
                        </div>
                    </div>

                </div>

                <div className=' hidden lg:block'>
                    <h1 className='hidden lg:flex text-2xl text-gray-800 font-bold pl-3 py-3'>Filters</h1>
                    <div className='w-full  px-3 py-2 my-2 bg-white rounded relative'>
                        <p className='absolute right-4 top-4 text-xs text-gray-500 font-medium'>Clear</p>
                        <Filter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} checkBox={true} />

                    </div>
                </div>
            </div>

        </div> */}

        <div className='lg:container lg:mx-auto lg:px-32 '>
            <div className=' lg:flex lg:flex-row-reverse lg:pt-14 gap-5 '>
                <div className=' w-3/4 mt-3 lg:pl-2'>
                    <h1 className='hidden lg:flex text-2xl text-gray-800 font-bold pl-3 mb-6'>Movies In Rajahmundry</h1>
                    <div className='flex gap-2 pt-4 mb-4'>
                        <div className="">
                            <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                <p className='text-xs text-commonPink-200'>Telugu</p>
                            </button>
                        </div>
                        <div>
                            <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                <p className='text-xs text-commonPink-200'>Hindi</p>
                            </button>
                        </div>
                        <div>
                            <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                <p className='text-xs text-commonPink-200'>English</p>
                            </button>
                        </div>
                        <div>
                            <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                <p className='text-xs text-commonPink-200'>Tamil</p>
                            </button>
                        </div>
                        <div>
                            <button className='border py-2 bg-white px-3 rounded-3xl border-2 border-gray-300'>
                                <p className='text-xs text-commonPink-200'>Kannada</p>
                            </button>
                        </div>

                    </div>
                    <div className="w-full flex items-center justify-between bg-white p-6 my-8 rounded-lg">
                        <p className="font-bold text-xl">Coming Soon</p>
                        <div className="text-commonPink-200 text-md font-semibold flex gap-2 items-center">
                            <span>Explore Upcoming Movies</span>
                            <span><BsChevronRight /></span>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-wrap py-2 md:py-4 lg:w-56' >
                            {movies.map((image) => <PlaysPoster {...image} />)}
                        </div>
                    </div>
                </div>

                <div className='w-1/4 hidden lg:block'>
                    <h1 className='hidden lg:flex text-2xl text-gray-800 font-bold pl-3 py-3'>Filters</h1>

                    <div className='w-full  px-3 py-2 my-2 bg-white rounded relative '>
                        <p className='absolute right-4 top-4 text-xs text-gray-500 font-medium'>Clear</p>
                        <Filter title="Language" tags={["Kannada", "English", "Hindi", "Brajawali", "Bundelkhandi", "Marathi", "Urdu"]} />
                    </div>

                    <div className='w-full  px-3 py-2 my-2 bg-white rounded relative'>
                        <p className='absolute right-4 top-4 text-xs text-gray-500 font-medium'>Clear</p>
                        <Filter title="Genres" tags={["Drama", "Comedy", "Suspense", "Thriller", "Romantic", "Adventure", "Sci-Fi", "Sports", "Crime", "Fantasy"]} />
                    </div>
                    <div className='w-full  px-3 py-2 my-2 bg-white rounded relative'>
                        <p className='absolute right-4 top-4 text-xs text-gray-500 font-medium'>Clear</p>
                        <Filter title="Format" tags={["2D", "7D", "IMAX 3D", "3D", "4DX", "4DX 3D", "IMAX 2D"]} />
                    </div>

                    <div className='w-full py-1 my-2 border-commonPink-200  border rounded flex items-center justify-center'>
                        <p className='text-commonPink-200'>Browse by Cinemas</p>
                    </div>

                </div>
            </div>
        </div>
    </>)
}

export default MoviesPage;