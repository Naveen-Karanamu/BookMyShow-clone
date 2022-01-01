import React from 'react'
import StreamHero from '../components/StreamHero/StreamHero.component'
import { IoIosPaper } from "react-icons/io"
import Cast from '../components/Cast/Cast.component'
export const Stream = () => {
    return (
        <>
            <StreamHero />
            <div className='hidden lg:block w-3/5 mt-8 ml-36'>
                <h2 className='hidden lg:block text-2xl font-bold'>About the movie</h2>
                <p className='py-4 text-md'>When deranged serial killer Cletus Kasady becomes host to an alien symbiote, Eddie Brock and Venom must put aside their differences to stop his reign of terror. Available in 4k on BMS stream.</p>
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
                    <hr className='mt-6 mb-4 md:mb-0' />
                </div >
                <h1 className='lg:text-2xl lg:font-bold  mb-4 text-lg font-semibold md:pt-10 md:pl-1'>Cast</h1>
                <div className='flex flex-wrap gap-2 lg:gap-8'>
                    <Cast src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/tom-hardy-8994-24-03-2017-12-37-04.jpg"
                        castName="Tom Hardy"
                        role="Eddie Brock / Venom" />
                    <Cast src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-williams-1472-14-10-2016-05-24-50.jpg"
                        castName="Michelle Williams"
                        role="Anne Weying" />
                    <Cast src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/woody-harrelson-2536-24-03-2017-12-37-11.jpg"
                        castName="Woody Harrelson"
                        role="Cletus Kasady / Carnage" />
                    {/* <Cast src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/reid-scott-1095987-04-10-2018-12-39-35.jpg"
                        castName="Reid Scott"
                        role="Dan Lewis" /> */}
                </div>
            </div>


        </>
    )
}
