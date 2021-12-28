import React from 'react'
import Slider from 'react-slick'
import Poster from "../Poster/Poster.component"
import PosterCarouselSettings from "../../config/PosterCarousel.config"


export const PosterSlider = (props) => {
    return (
        <>
            <div className="pl-3 pb-2">
                <h3 className={` text-2xl font-bold ${props.isDark ?"text-white":"text-gray-800"}`}>{props.title}</h3>
                <p className={` text-sm ${props.isDark ?"text-white":"text-gray-700"}`}>{props.subtitle}</p>
            </div>
            <Slider {...PosterCarouselSettings}>
                {props.images.map((image) => <Poster {...image} isDark={props.isDark} />)}
            </Slider>
        </>
    )
}

export default PosterSlider;