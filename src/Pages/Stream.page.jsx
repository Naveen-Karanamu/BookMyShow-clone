import React from 'react'
import StreamHero from '../components/StreamHero/StreamHero.component'

export const Stream = () => {
    return (
        <>
            <StreamHero />
            <div className='hidden lg:block lg:w-3/5 lg:mt-8 lg:ml-36'>
                <h2 className='hidden lg:block text-2xl font-bold'>About the movie</h2>
                <p className='py-4 text-md'>When deranged serial killer Cletus Kasady becomes host to an alien symbiote, Eddie Brock and Venom must put aside their differences to stop his reign of terror. Available in 4k on BMS stream.</p>
                <hr className='mt-4'/>
            </div>
        </>
    )
}
