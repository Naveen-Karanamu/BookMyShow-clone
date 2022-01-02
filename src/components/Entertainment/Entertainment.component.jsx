import React from "react";

import Slider from "react-slick";

import sliderSettings from "../../config/PosterCarousel.config";

const EntertainmentCard = (props) => {
    return (
        <>
            <div className="w-full h-52 px-2 ">
                <img src={props.src} alt="entertainment image" className="w-full h-full rounded-lg" />
            </div>
        </>
    )
}

const EntertainmentCardSlider = () => {

    const EntertainmentCardImages = [
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTEwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png"
    ]

    // const settings = {
    //     infinit: false,
    //     autoplay: false,
    //     slidesToScroll: 4,
    //     slidesToShow: 5,
    //     initialSlide: 0,
    //     responsive: [{
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 2,
    //             infinit: true,
    //         },
    //     },
    //     {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //             infinit: true,
    //             initialSlide: 1
    //         },
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 2,
    //             infinit: true,
    //             initialSlide: 1
    //         },
    //     },]

    // }

    return (        
            <Slider {...sliderSettings} className="">
                {EntertainmentCardImages.map((image) => (
                    <EntertainmentCard src={image} />
                ))

                }
            </Slider>
    )
}

export default EntertainmentCardSlider;