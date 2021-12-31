import React from 'react'
import MovieHeroInfo, { MovieHeroInfoMd, MovieHeroInfoSm } from './MovieHeroInfo.component';

const MovieHero = () => {
    return (
        <>
            <div>
                {/* small */}
                <div className='relative md:hidden' style={{ height: "calc(180vw)" }}>
                    <div className='absolute bottom-0 bg-black z-1 w-full h-52 bg-opacity-70' />
                    <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/venom-let-there-be-carnage-et00122532-25-12-2021-10-10-53.jpg" alt="poster image" />

                    <div className='absolute bottom-2 z-30 bg-black'>
                        <MovieHeroInfoSm />
                    </div>
                </div>
                {/* medium */}
                <div className='relative hidden md:block lg:hidden'>

                    <div className='absolute bottom-0 bg-black z-1 w-full h-52 bg-opacity-50' />
                    <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/venom-let-there-be-carnage-et00122532-25-12-2021-10-10-53.jpg" alt="poster image" />

                    <div className='absolute bottom-0  z-30'>
                        <MovieHeroInfoMd />
                        <p>hi</p>
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
                            <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/venom-let-there-be-carnage-et00122532-25-12-2021-10-10-53.jpg" alt="poster image" className='w-full h-full rounded-2xl' />
                        </div>
                        <div className=' '>
                            <MovieHeroInfo />
                        </div>
                        
                    </div>

                    <div className=' w-full' style={{ height: "31rem" }}>
                        <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/venom-let-there-be-carnage-et00122532-25-12-2021-10-10-53.jpg" alt="poster background" className='h-full w-full' />

                    </div>


                </div>
            </div>
        </>
    )
}

export default MovieHero;