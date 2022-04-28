import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaLaptopHouse } from "react-icons/fa";
import HeroSlider from "react-slick";

import { NextArrow, PrevArrow } from "./Arrows.component";



const HeroCarousel = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const requestPopularMovies = async () => {
            const getImages = await axios.get("/movie/popular");
            
            setImages(getImages.data.results);
        };
        requestPopularMovies();
    }, [])
    // console.log(images);


    const settings = {
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
        dots: FaLaptopHouse,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // nextArrow=<NextArrow />,
        // prevArrow=<PrevArrow />
    }

    const settingsLg = {
        outerEdgeLimit: false,
        arrows: true,
        centerMode: true,
        centerPadding: "150px",
        dots: FaLaptopHouse,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // nextArrow=<NextArrow />,
        // prevArrow=<PrevArrow />
    };


    return (
        <>
            <div className="lg:hidden lg:pt-0 pt-16">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className=" h-48 md:w-full md:h-40">
                            <img src={`http://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full" />
                        </div>
                    ))}
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingsLg} >
                    {images.map((image) => (
                        <div className="w-full h-96 -mb-16">
                            <img src={`http://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full  py-2 px-1 rounded-xl" style={{ height: "85%" }} />
                        </div>
                    ))}
                </HeroSlider>
            </div>




        </>
    );
};

export default HeroCarousel;