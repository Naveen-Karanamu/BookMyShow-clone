import React from "react";
import EntertainmentCardSlider from "../../components/Entertainment/Entertainment.component";
import Premiers from "../../components/Premier/Premiers.component";

const Homepage = () => {
    return (
        <>
            <div className="container mx-auto px-36 my-14">
                <h1 className="text-2xl font-bold text-gray-800 pb-2">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
                <Premiers />
            </div>
        </>
    )
}

export default Homepage;