import React, { useEffect, useState } from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.component";
import tempImages from "../config/TempImages.config";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import axios from "axios";

const Homepage = () => {
    const [nowPlayingMovies, setNowPlayingMovies]=useState([]);
    useEffect(()=>{
        const requestNowPlayingMovies=async ()=>{
                const getNowPlayingMovies=await axios.get("/movie/now_playing");
                setNowPlayingMovies(getNowPlayingMovies.data.results)

        };
        requestNowPlayingMovies();
    },[])

    const [topRatedMovies, setTopRatedMovies]=useState([]);
    useEffect(()=>{
        const requestTopRatedMovies=async ()=>{
            const getTopRatedMovies=await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);
        }
        requestTopRatedMovies();
        
        console.log(topRatedMovies);
    },[])

    const [popularMovies, setPopularMovies]=useState([]);
    useEffect(()=>{
        const requestPopularMovies=async ()=>{
            const getPopularMovies=await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        }
        requestPopularMovies();
    },[])
    
    const [upcomingMovies, setUpcomingMovies]=useState([]);
    useEffect(()=>{
        const requestUpcomingMovies=async ()=>{
            const getUpcomingMovies=await axios.get("/movie/upcoming");
            setUpcomingMovies(getUpcomingMovies.data.results);
        }
        requestUpcomingMovies();
    },[])

    const [trending, setTrending]=useState([]);
    useEffect(()=>{
        const requestTrending=async ()=>{
            const getTrending=await axios.get("/trending/tv/week");
            setTrending(getTrending.data.results);
        }
        requestTrending();
    },[])

    const [trendingAll, setTrendingAll]=useState([]);
    useEffect(()=>{
        const requestTrendingAll=async ()=>{
            const getTrendingAll=await axios.get("/trending/all/week");
            setTrendingAll(getTrendingAll.data.results);
        }
        requestTrendingAll();
    },[])
    const [trendingMovie, setTrendingMovie]=useState([]);
    useEffect(()=>{
        const requestTrendingMovie=async ()=>{
            const getTrendingMovie=await axios.get("/trending/movie/day");
            setTrendingMovie(getTrendingMovie.data.results);
        }
        requestTrendingMovie();
    },[])
    const [trendingTvDay, setTrendingTvDay]=useState([]);
    useEffect(()=>{
        const requestTrendingTvDay=async ()=>{
            const getTrendingTvDay=await axios.get("/trending/tv/day");
            setTrendingTvDay(getTrendingTvDay.data.results);
        }
        requestTrendingTvDay();
    },[])
    

   
    return (
        <>
            <div className="lg:container lg:mx-auto lg:px-32 pt-7 lg:pt-0">
                <PosterSlider images={nowPlayingMovies} title="Recommended Movies" isDark={false} />
            </div>
            <div className="container mx-auto lg:px-32 my-14">
                <h1 className="text-2xl font-bold text-gray-800 pb-2">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>

            <div className="bg-premierBMS-800  md:flex flex-col items-start ">
                <div className="container mx-auto lg:px-32 pb-12">
                    <div>
                        <img className="pt-6 pb-10" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="premier description " />
                    </div>

                    <PosterSlider images={topRatedMovies} title="Premieres" subtitle="Brand new releases every friday" isDark />
                </div>

            </div>
            <div className="lg:container lg:mx-auto lg:px-32 pt-7">
                <PosterSlider images={popularMovies} title="Online Streaming Events" isDark={false} />
            </div>
            <div className="lg:container lg:mx-auto lg:px-32 pt-7">
                <PosterSlider images={upcomingMovies } title="Outodoor Events" isDark={false} />
            </div>
            <div className="lg:container lg:mx-auto lg:px-32 pt-7">
                <PosterSlider images={trendingAll} title="Laughter Therapy" isDark={false} />
            </div>
            <div className="lg:container lg:mx-auto lg:px-32 pt-7">
                <PosterSlider images={trending} title="Popular Events" isDark={false} />
            </div>
            <div className="lg:container lg:mx-auto lg:px-32 pt-7">
                <PosterSlider images={trendingMovie} title="Top Games & Sport Events" isDark={false} />
            </div>
            <div className="lg:container lg:mx-auto lg:px-32 pt-7">
                <PosterSlider images={trendingTvDay} title="Explore Fun Activities" isDark={false} />
            </div>
        </>
    )
}

export default Homepage;