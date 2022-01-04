import React, { useContext, useState } from 'react'
import { MovieContext } from '../../context/movie.context'
import PaymentModal from '../PaymentModel/PaymentModel.component';

const StreamHeroInfo = () => {
    const {movie}=useContext(MovieContext);
    const genres= movie.genres?.map(({name})=>name).join(", ");
    const [isopen, setOpen] =useState(false);
    const [price, setPrice ]=useState(0);
    const [title,setTitle]=useState();
    const [subtitle,setSubtitle]=useState();

    const rentMovie=()=>{
        setOpen(true);
        setPrice(199);
        setTitle("Rent")
        setSubtitle("You can rent this movie for 30 days but will have 2 days to watch it once you start playback (available for download)");
    }
    const buyMovie=()=>{
        setOpen(true);
        setPrice(499);
        setTitle("Buy")
        setSubtitle("Watch the movie any time after purchasing it (available for download)");
    }
    return (        
        <>
        <PaymentModal setIsOpen={setOpen} isOpen={isopen} price={price} title={title} subtitle={subtitle} />
            <div className='flex flex-col lg:gap-6 items-start md:w-full sm:w-full lg:w-full'>
                <span className=' text-white text-xs py-1 px-2 lg:-mb-3 md:-mb-2 rounded-xl md:ml-4 lg:ml-0' style={{ background: "#1f253a" }}>Streaming Now</span>
                <h2 className='hidden lg:flex  text-4xl text-white font-bold '>{movie.original_title}</h2>
                <div className='flex sm:flex-col sm:p-3 md:flex-col md:flex-col-reverse lg:flex-col lg:gap-6 w-full md:w-full md:py-4 md:pl-4 md:gap-3 lg:py-0 lg:pl-0 '>

                    <div className='lg:flex flex-col gap-4'>
                        <p className=' text-gray-300 md:text-xs lg:text-base'>4K  &bull;  {movie.original_language}  &bull;  Languages: <span style={{ color: "#f84464" }}>Audio(4), Subtitles(1)</span></p>
                        <p className=' lg:text-white md:text-gray-300'>{(movie.runtime/60).toFixed(0)}h {(movie.runtime%60)}m  &bull;  {genres}   &bull;   UA  &bull;  14 Oct, 2021</p>
                    </div>

                    <div className='text-white flex gap-4 lg:w-11/12 pt-2 md:w-screen '>
                        <button onClick={rentMovie} className='bg-commonPink-100 w-full h-full lg:py-3 md:py-2 rounded-lg font-semibold'>Rent ₹199</button>
                        <button onClick={buyMovie} className='bg-commonPink-100 w-full h-full lg:py-3 md:py-2 rounded-lg font-semibold'>Buy ₹499</button>
                    </div>
                </div>




            </div>
        </>
    )
}

export const StreamHeroInfoMd = () => {
    const {movie}=useContext(MovieContext);
    const genres= movie.genres?.map(({name})=>name).join(", ");
    return (
        <>
            <div className='flex flex-col lg:gap-6 items-start md:w-full sm:w-full lg:w-full ' style={{ width: "100vw" }}>
                <span className=' text-white text-xs py-1 px-2 lg:-mb-3 md:-mb-2 rounded-xl md:ml-4 lg:ml-0' style={{ background: "#1f253a" }}>Streaming Now</span>
                <h2 className='hidden lg:flex  text-4xl text-white font-bold '>{movie.original_title}</h2>
                <div className='flex sm:flex-col sm:p-3 md:flex-col md:flex-col-reverse lg:flex-col lg:gap-6 w-full md:w-full md:py-4 md:pl-4 md:gap-3 lg:py-0 lg:pl-0 '>

                    <div className='lg:flex flex-col gap-4'>
                        <p className=' text-gray-300 md:text-xs lg:text-base'>4K  &bull;  {movie.original_language}  &bull;  Languages: <span style={{ color: "#f84464" }}>Audio(4), Subtitles(1)</span></p>
                        <p className=' lg:text-white md:text-gray-300'>{(movie.runtime/60).toFixed(0)}h {(movie.runtime%60)}m &bull;  {genres}   &bull;   UA  &bull;  14 Oct, 2021</p>
                    </div>

                    <div className='text-white flex gap-4 lg:w-11/12 pt-2 md:w-full '>
                        <button className='bg-commonPink-100 w-full h-full lg:py-3 md:py-2 rounded-lg font-semibold'>Rent ₹149</button>
                        <button className='bg-commonPink-100 w-full h-full lg:py-3 md:py-2 rounded-lg font-semibold'>Buy ₹589</button>
                    </div>
                </div>
                <div className='-mt-6 px-4'>
                    <p className='py-4 text-xs text-gray-300'>{movie.overview}</p>
                </div>               

            </div>
        </>
    )
}


export const StreamHeroInfoSm = () => {
    const {movie}=useContext(MovieContext);
    const genres= movie.genres?.map(({name})=>name).join(", ");


    return (
        <>
            <div className='flex flex-col w-full p-4 gap-4' style={{ width: "100vw" }}>
                <div>
                    <span className=' text-white text-xs py-1 px-2 rounded-xl' style={{ background: "#1f253a" }}>Streaming Now</span>
                </div>

                <div className='text-white flex  w-full gap-2'>
                    <button className='bg-commonPink-100 w-full h-full py-2 rounded-lg font-semibold'>Rent ₹149</button>
                    <button className='bg-commonPink-100 w-full h-full py-2 rounded-lg font-semibold'>Buy ₹589</button>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className=' text-gray-300 text-xs '>4K  &bull;  {movie.original_language}  &bull;  Languages: <span style={{ color: "#f84464" }}>Audio(4), Subtitles(1)</span></p>
                    <p className=' text-gray-300 text-xs'>{(movie.runtime/60).toFixed(0)}h {(movie.runtime%60)}m  &bull;  {genres}   &bull;   UA  &bull;  14 Oct, 2021</p>
                </div>
                <div className='-mt-5 -mb-3'>
                    <p className='py-4 text-xs text-gray-300'>{movie.overview}</p>
                </div>

            </div>
        </>
    )
}

export default StreamHeroInfo;