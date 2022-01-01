import React from 'react'

const Cast = (props) => {
    return (
        <>
            <div>
                
                <div className='w-24 h-24 flex flex-col  items-center lg:w-28 lg:h-28'>
                    <img src={props.src} alt="cast image" className='w-full h-full rounded-full' />
                    <h1 className=' text-md text-center'>{props.castName}</h1>
                    
                    <h1 className=' text-sm text-gray-500 text-center'>as {props.role}</h1>
                    
                </div>
            </div>
        </>
    )
}

export default Cast;