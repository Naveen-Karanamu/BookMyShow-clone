import React, { useContext, useEffect, useState } from 'react'
import StreamHero from '../components/StreamHero/StreamHero.component'
import { IoIosPaper } from "react-icons/io"
import Cast from '../components/Cast/Cast.component'
import PosterSlider from '../components/PosterSlider/PosterSlider.component'
import tempImages from '../config/TempImages.config'
import { MovieContext } from '../context/movie.context'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
export const Stream = () => {
    const{movie}=useContext(MovieContext)
    const[cast,setCast]=useState([]);
    const{id}=useParams();
    useEffect(()=>{
        const requestCast=async()=>{
            const getCast=await axios.get(`/movie/${id}/credits`)
            setCast(getCast.data.cast);
        }
        requestCast();
    },[id])

    const[crew,setCrew]=useState([]);
    useEffect(()=>{
        const requestCrew=async()=>{
            const getCrew=await axios.get(`/movie/${id}/credits`)
            setCrew(getCrew.data.crew);
        }
        requestCrew();
    },[id])

    const[simailarMovies,setSimilarMovies]=useState([]);
    useEffect(()=>{
        const requestSimilarMovies=async()=>{
            const getSimilarMovies=await axios.get(`/movie/${id}/similar`)
            setSimilarMovies(getSimilarMovies.data.results);
        }
        requestSimilarMovies();
    },[id])

    const[recommended,setRecommended]=useState([]);
    useEffect(()=>{
        const requestRecommended=async()=>{
            const getRecommended=await axios.get(`/movie/${id}/recommendations`)
            setRecommended(getRecommended.data.results);
        }
        requestRecommended();
    },[id])

    const settings = {
        infinit: false,
        autoplay: false,
        slidesToScroll: 5,
        slidesToShow: 4,
        initialSlide: 0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
                infinit: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinit: true,
                initialSlide: 1
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinit: true,
                initialSlide: 1
            },
        },]

    }

    const settingsCast = {
        infinit: false,
        autoplay: false,
        slidesToScroll: 3,
        slidesToShow: 5,
        initialSlide: 0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
                infinit: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 4,
                infinit: true,
                initialSlide: 1
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinit: true,
                initialSlide: 1
            },
        },]

    }

    return (
        <>
            <StreamHero />
            <div className='hidden lg:block w-3/5 mt-8 ml-36'>
                <h2 className='hidden lg:block text-2xl font-bold'>About the movie</h2>
                <p className='py-4 text-md'>{movie.overview}</p>
                <hr className='mt-4' />

            </div>
            <div className='lg:w-3/5 lg:ml-36 px-4 lg:px-0'>
                <div className='lg:hidden flex items-center justify-between bg-gray-100 p-2 rounded-lg my-3 ' >
                    <div >
                        <h2 className='text-md font-semibold text-gray-900'>Add your rating & review</h2>
                        <p className='text-xs text-gray-700'>Your ratings matter</p>
                    </div>
                    <button className='bg-commonPink-100 text-white font-semibold px-2 py-1 rounded-lg text-xs'>Rate now</button>

                </div>
                <hr className='my-4 md:my-0' />
                <div className='lg:my-8  md:px-0 lg:px-0 md:w-full md:-my-6 lg:-my-2'>
                    <h1 className='lg:text-2xl lg:font-bold  mb-4 text-lg font-semibold md:pt-10 md:pl-1'>Applicable offers</h1>
                    <div className='flex gap-2 items-start bg-yellow-100 border-dashed border-2 border-yellow-300 lg:w-1/2 lg:py-3 lg:px-3 px-1 py-1 rounded-lg'>
                        <div className='w-7 h-7'>
                            <IoIosPaper className='w-full h-full' /></div>
                        <div>
                            <h5 className='text-md font-medium'>Offer Of The Week</h5>
                            <p className='text-gray-700 text-sm'>Experience diverse cinema at 50% off!</p>
                        </div>

                    </div>
                    <hr className='lg:mt-10 mt-8 mb-4 md:mb-0' />
                </div >
                <div >
                    <h1 className='lg:text-2xl lg:font-bold  mb-4 text-lg font-semibold md:pt-10 md:pl-1'>Cast</h1>
                    <div className=''>
                        <Slider {...settingsCast} >
                        {cast.map((castData)=>
                        <Cast src={`http://image.tmdb.org/t/p/original${castData.profile_path}`}
                        castName={castData.original_name}
                        role={castData.character}/>
                        )}
                        </Slider>
                    
                    </div>
                </div>
                <hr className='lg:mt-10 md:mt-3 mt-8  mb-5 md:-mb-4 lg:mb-0' />
                <div >
                    <h1 className='lg:text-2xl lg:font-bold  mb-4 text-lg font-semibold md:pt-10 md:pl-1'>Crew</h1>
                    <div className=''>
                        <Slider {...settingsCast} >
                        {crew.map((crewData)=>
                        <Cast src={`http://image.tmdb.org/t/p/original${crewData.profile_path}`}
                        castName={crewData.original_name}
                        role={crewData.known_for_department}/>
                        )}
                        </Slider>
                    
                    </div>
                </div>
                <hr className='lg:mt-28 mt-32 mb-5 md:mb-6 lg:mb-8' />
                <div className='hidden lg:block w-1/2'>
                    <h1 className='lg:text-2xl lg:font-bold  mb-4 text-lg font-semibold md:pl-1'>Reviews</h1>
                    <div className='flex items-center justify-between bg-gray-100 py-3 px-6 rounded-lg my-3 ' >
                        <div >
                            <h2 className='text-lg font-semibold text-gray-900'>Watched? Add your rating & review</h2>
                            <p className='text-md text-gray-700'>Your ratings matter</p>
                        </div>
                        <button className='bg-commonPink-100 text-white font-semibold px-3 py-2 rounded-lg text-lg'>Rate now</button>

                    </div>
                </div>
                <hr className=' hidden lg:block my-9' />
                <div className='lg:-mt-2'>
                    <h1 className='lg:text-2xl lg:font-bold -mb-4 md:mb-4 lg:-mb-2 text-lg font-semibold md:pl-1'>Buzz</h1>
                    <div className='lg:flex lg:gap-8'>
                        <div className='flex items-center gap-4 lg:gap-4 md:gap-16 my-6 lg:w-1/2 lg:border-solid lg:border-2 lg:rounded-lg '>
                            <div className='w-32 h-20 md:w-16 md:h-16 lg:w-48 lg:h-32'>
                                <img src="https://in.bmscdn.com/content-buzz/2021/05/hollywood-sequels-in-2021-300x300-40-1.jpg" alt="buzz image" className='w-full h-full rounded lg:rounded-l-lg lg:rounded-r-none' />
                            </div>
                            <div>
                                <p className='text-md text-gray-700'>After ‘The Conjuring 3’, Watch Out For These Hollywood Sequels</p>
                                <span className='flex items-center gap-2'>
                                    <div className='w-7 h-7 '>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHiqAKGo9SxTL58tfSynlaWSpv9BViDvTXfxbirRrTgnQiQqXfujXtPY2On0hGNipGKA&usqp=CAU" alt="person" className='w-full h-full rounded-full' />
                                    </div>
                                    <p className='text-xs text-gray-500 font-medium'>Delnaz Divecha</p>
                                    <p className='text-xs text-gray-300'>138 Days ago</p>
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 lg:gap-4 md:gap-16 my-6 lg:w-1/2 lg:border-solid lg:border-2 lg:rounded-lg '>
                            <div className='w-32 h-20 md:w-16 md:h-16 lg:w-48 lg:h-32'>
                                <img src="https://in.bmscdn.com/content-buzz/2021/04/superheromoviessquare.jpg" alt="buzz image" className='w-full h-full rounded lg:rounded-l-lg lg:rounded-r-none' />
                            </div>
                            <div>
                                <p className='text-md text-gray-700'>The Super List Of All The Superhero Movies Coming Out In 2021</p>
                                <span className='flex items-center gap-2'>
                                    <div className='w-7 h-7 '>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbW1NzZ6pbyYHK3mRFtCzYRFL_dK6Kv7rAFw&usqp=CAU" alt="person" className='w-full h-full rounded-full' />
                                    </div>
                                    <p className='text-xs text-gray-500 font-medium'>Mansi Bengali
                                    </p>
                                    <p className='text-xs text-gray-300'>122 Days ago</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr className='lg:mt-4 mb-5 md:mb-6 lg:mb-8' />
                    <div>
                     <PosterSlider config={settings} images={simailarMovies} title="You might also like" isDark={false} />
                    </div>
                    <hr className='lg:mt-4 mb-5 md:mb-6 lg:mb-8' />
                    <div>
                        <PosterSlider config={settings} images={recommended} title="BMS XCLUSIV" isDark={false} />
                    </div>
                </div>
            </div>

        </>
    )
}
