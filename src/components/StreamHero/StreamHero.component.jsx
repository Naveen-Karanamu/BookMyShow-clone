import React, { useContext } from 'react'
import StreamHeroInfo, { StreamHeroInfoMd, StreamHeroInfoSm } from './StreamHeroInfo.component';
import { IoShareSocialOutline } from "react-icons/io5"
import { MovieContext } from '../../context/movie.context';

const StreamHero = () => {
    const {movie}=useContext(MovieContext);

    return (
        <>
            <div>
                {/* small */}
                <div>
                    <div className='relative md:hidden' style={{ height: "calc(180vw)" }}>
                        <div className='absolute bottom-0 bg-black z-10 w-full h-52 bg-opacity-90' />
                        <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster image" />

                        <div className='absolute bottom-0 z-30 bg-black bg-opacity-70'>
                            <StreamHeroInfoSm />
                        </div>

                    </div>
                    {/* medium */}
                    <div className='relative hidden md:block lg:hidden' >

                        <div className='absolute bottom-0 bg-black z-1 w-full h-52 bg-opacity-80' />
                        <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}` } alt="poster image" style={{height:"calc(134vw)"}} className='w-full'/>

                        <div className='absolute bottom-0  z-30'>
                            <StreamHeroInfoMd />
                        </div>
                    </div>
                    
                </div>
                {/* large */}
                <div className=' relative hidden lg:block'>

                    <div className='absolute h-full w-full z-10' style={{
                        backgroundImage:
                            "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
                    }} />
                    <div className='absolute z-30 bottom-10 left-36 flex items-center gap-8'>
                        <div className=' w-64 ' style={{ height: "26rem" }}>
                            <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster image" className='w-full h-full rounded-2xl' />
                        </div>
                        <div className=' '>
                            <StreamHeroInfo />
                        </div>

                    </div>

                    <div className=' w-full' style={{ height: "31rem" }}>
                        <img src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="poster background" className='h-full w-full' />

                    </div>

                    <div className=' absolute flex items-center  top-10 right-32 bg-black w-32 h-12 rounded bg-opacity-40'>
                        <span className='flex items-center justify-center text-gray-200 z-1  gap-4 w-full h-full font-semibold  '><IoShareSocialOutline className='w-9 h-9' />Share</span>
                    </div>


                </div>
            </div>
        </>
    )
}

export default StreamHero;