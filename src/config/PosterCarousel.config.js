const settings = {
    infinit: false,
    autoplay: false,
    slidesToScroll: 5 ,
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

export default settings;