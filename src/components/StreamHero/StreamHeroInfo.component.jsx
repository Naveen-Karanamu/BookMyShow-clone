import React from 'react'

const StreamHeroInfo = () => {
    return (
        <>
            <div className='flex flex-col lg:gap-6 items-start md:w-full sm:w-full lg:w-full'>
                <span className=' text-white text-xs py-1 px-2 lg:-mb-3 md:-mb-2 rounded-xl md:ml-4 lg:ml-0' style={{ background: "#1f253a" }}>Streaming Now</span>
                <h2 className='hidden lg:flex  text-4xl text-white font-bold '>Venom: Let There Be Carnage</h2>
                <div className='flex sm:flex-col sm:p-3 md:flex-col md:flex-col-reverse lg:flex-col lg:gap-6 w-full md:w-full md:py-4 md:pl-4 md:gap-3 lg:py-0 lg:pl-0 '>

                    <div className='lg:flex flex-col gap-4'>
                        <p className=' text-gray-300 md:text-xs lg:text-base'>4K  &bull;  English  &bull;  Languages: <span style={{ color: "#f84464" }}>Audio(4), Subtitles(1)</span></p>
                        <p className=' lg:text-white md:text-gray-300'>1h37m  &bull;  Action, Horror, Sci-Fi, Thriller   &bull;   UA  &bull;  14 Oct, 2021</p>
                    </div>

                    <div className='text-white flex gap-4 lg:w-11/12 pt-2 md:w-screen '>
                        <button className='bg-commonPink-100 w-full h-full lg:py-3 md:py-2 rounded-lg font-semibold'>Rent ₹149</button>
                        <button className='bg-commonPink-100 w-full h-full lg:py-3 md:py-2 rounded-lg font-semibold'>Buy ₹589</button>
                    </div>
                </div>




            </div>
        </>
    )
}

export const StreamHeroInfoMd = () => {
    return (
        <>
            <div className='flex flex-col lg:gap-6 items-start md:w-full sm:w-full lg:w-full'style={{width:"100vw"}}>
                <span className=' text-white text-xs py-1 px-2 lg:-mb-3 md:-mb-2 rounded-xl md:ml-4 lg:ml-0' style={{ background: "#1f253a" }}>Streaming Now</span>
                <h2 className='hidden lg:flex  text-4xl text-white font-bold '>Venom: Let There Be Carnage</h2>
                <div className='flex sm:flex-col sm:p-3 md:flex-col md:flex-col-reverse lg:flex-col lg:gap-6 w-full md:w-full md:py-4 md:pl-4 md:gap-3 lg:py-0 lg:pl-0 '>

                    <div className='lg:flex flex-col gap-4'>
                        <p className=' text-gray-300 md:text-xs lg:text-base'>4K  &bull;  English  &bull;  Languages: <span style={{ color: "#f84464" }}>Audio(4), Subtitles(1)</span></p>
                        <p className=' lg:text-white md:text-gray-300'>1h37m  &bull;  Action, Horror, Sci-Fi, Thriller   &bull;   UA  &bull;  14 Oct, 2021</p>
                    </div>

                    <div className='text-white flex gap-4 lg:w-11/12 pt-2 md:w-full '>
                        <button className='bg-commonPink-100 w-full h-full lg:py-3 md:py-2 rounded-lg font-semibold'>Rent ₹149</button>
                        <button className='bg-commonPink-100 w-full h-full lg:py-3 md:py-2 rounded-lg font-semibold'>Buy ₹589</button>
                    </div>
                </div>




            </div>
        </>
    )
}


export const StreamHeroInfoSm = () => {
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
                    <p className=' text-gray-300 text-xs '>4K  &bull;  English  &bull;  Languages: <span style={{ color: "#f84464" }}>Audio(4), Subtitles(1)</span></p>
                    <p className=' text-gray-300 text-xs'>1h37m  &bull;  Action, Horror, Sci-Fi, Thriller   &bull;   UA  &bull;  14 Oct, 2021</p>
                </div>

            </div>
        </>
    )
}

export default StreamHeroInfo;