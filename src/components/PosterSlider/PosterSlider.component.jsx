import React from 'react'
import Slider from 'react-slick'
import Poster from "../Poster/Poster.component"
import PosterCarouselSettings from "../../config/PosterCarousel.config"


export const PosterSlider = (props) => {
    const sliderSettings= props.config?props.config:PosterCarouselSettings;
    return (
        <>
            <div className="pl-3 pb-2">
                <h3 className={`text-lg font-semibold lg:text-2xl lg:font-bold ${props.isDark ?"text-white":"text-gray-800"}`}>{props.title}</h3>
                <p className={` text-sm ${props.isDark ?"text-white":"text-gray-700"}`}>{props.subtitle}</p>
            </div>
            <Slider {...sliderSettings}>
                {props.images.map((image) => <Poster {...image} isDark={props.isDark} />)}
            </Slider>
        </>
    )
}

export default PosterSlider;