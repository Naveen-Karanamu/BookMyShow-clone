import React from "react";
import EntertainmentCardSlider from "../../components/Entertainment/Entertainment.component";
import tempImages from "../../config/TempImages.config";
import PosterSlider from "../../components/PosterSlider/PosterSlider.component";

const Homepage = () => {
    return (
        <>
            <div className="container mx-auto px-32 my-14">
                <h1 className="text-2xl font-bold text-gray-800 pb-2">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>

            <div className="bg-premierBMS-800 hidden md:flex flex-col items-start ">
                <div className="container mx-auto px-32 pb-12">
                    <div>
                        <img className="pt-6 pb-10" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="premier description "/>
                    </div>
                    
                    <PosterSlider images={tempImages} title="Premieres" subtitle="Brand new releases every friday"/>
                </div>
            </div>


        </>
    )
}

export default Homepage;