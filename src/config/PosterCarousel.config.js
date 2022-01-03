const settings = {
    infinit: false,
    autoplay: false,
    slidesToScroll: 5 ,
    slidesToShow: 5,
    initialSlide: 5,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinit: true,
        },
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinit: true,
            // initialSlide: 1
        },
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinit: true,
            // initialSlide: 1
        },
    },]

}

export default settings;