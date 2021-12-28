import React from "react";
import HeroSlider from "react-slick";


const HeroCarousel = () => {
    const settings = {
        arrows:true,
        centerMode:true,
        centerPadding:"0px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    }

    const settingsLg = {
        outerEdgeLimit: false,
        arrows: true,
        centerMode:true,
        centerPadding: "150px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const images = ["https://images.unsplash.com/photo-1638913658828-afb88c3d4d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1640562051318-b849e5290551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1640590268965-add58b4844f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1640557434280-96024d8b3d69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1640547075007-5ef0af61e768?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    ];

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image)=>(
                        <div className=" h-48 md:w-full md:h-40">
                            <img src={image}alt="testing" className="w-full h-full" />
                        </div>
                    ))}
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingsLg} >
                    {images.map((image) => (
                        <div className="w-full h-80  ">
                            <img src={image} alt="testing" className="w-full h-full py-2 px-1 rounded-xl" />
                        </div>
                    ))}
                </HeroSlider>
            </div>




        </>
    );
};

export default HeroCarousel;