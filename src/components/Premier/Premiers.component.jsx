import React from 'react'
import Slider from 'react-slick';
import Poster from "../Poster/Poster.component"
export const Premiers = () => {

    const settings = {
        infinit: false,
        autoplay: false,
        slidesToScroll: 5,
        slidesToShow: 5,
        initialSlide: 0,
        responsive: [{
            breakpoints: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinit: true,
            },
        },
        {
            breakpoints: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinit: true,
                initialSlide: 1
            },
        },
        {
            breakpoints: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinit: true,
                initialSlide: 1
            },
        },]

    }

    const premierImages=[
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00020507-hvddmzbcer-portrait.jpg",
            alt:"premier image",
            title:"Son of God",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00314637-yrkzrqyeee-portrait.jpg",
            alt:"premier image",
            title:"Long Weekend",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-yecplrayap-portrait.jpg",
            alt:"premier image",
            title:"Venon: Let There Be The Carnage",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00056556-zftjbeevvq-portrait.jpg",
            alt:"premier image",
            title:"Fast and  Furious 9",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301465-sgxdqbdnaf-portrait.jpg",
            alt:"premier image",
            title:"Fear of Rain",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00319467-cxfazlcfkg-portrait.jpg",
            alt:"premier image",
            title:"Let Then All Talk",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00319464-pbswgdphmw-portrait.jpg",
            alt:"premier image",
            title:"8-Bit Christmas",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00314669-dwsmcgtrzb-portrait.jpg",
            alt:"premier image",
            title:"Riders of Justice",
            subtitle:"Danish"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00316067-zntjqvmxuf-portrait.jpg",
            alt:"premier image",
            title:"The Investigation",
            subtitle:"Danish"
        },


    ];

    return (
        <>
            <Slider {...settings}>
                {premierImages.map((image)=><Poster {...image} />)}
            </Slider>
        </>
    );
};

export default Premiers;