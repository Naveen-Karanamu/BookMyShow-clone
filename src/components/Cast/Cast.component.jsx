import React from 'react'

const Cast = (props) => {
    return (
        <>
            <div >
                <div className='flex flex-col items-center'>
                    <div className='w-24 h-24 p-1 lg:w-36 lg:h-36 lg:p-3'>
                        <img src={props.src} alt="cast image" className='w-full h-full rounded-full' />
                    </div>
                    <h1 className='text-sm lg:text-md text-center'>{props.castName}</h1>
                    <h1 className='text-xs lg:text-sm text-gray-500 text-center'>as {props.role}</h1>


                </div>
            </div>
        </>
    )
}

export default Cast;
// import React from "react";

// const Cast = (props) => {
//     return (
//         <div>
//             <div className="flex flex-col items-center">
//                 <div className="w-32 h-32">
//                     <img
//                         src={props.src}
//                         alt="crew man"
//                         className="w-full h-full rounded-full"
//                     />
//                 </div>
//                 <h1 className="text-xl  text-gray-800">{props.castName}</h1>
//                 <h5 className="text-sm text-gray-500">as {props.role}</h5>
//             </div>
//         </div>
//     );
// };

// export default Cast;