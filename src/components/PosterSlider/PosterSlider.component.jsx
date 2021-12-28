import React from 'react'
import Slider from 'react-slick'
import Poster from "../Poster/Poster.component"
import PosterCarouselSettings from "../../config/PosterCarousel.config"


export const PosterSlider = (props) => {
    return (
        <>
            <div className="pl-3 pb-2">
                <h3 className="text-white text-2xl font-bold">{props.title}</h3>
                <p className="text-white text-sm ">{props.subtitle}</p>
            </div>
            <Slider {...PosterCarouselSettings}>
                {props.images.map((image) => <Poster {...image} isDark />)}
            </Slider>
        </>
    )
}

export default PosterSlider;