import React from "react";
import EntertainmentCardSlider from "../../components/Entertainment/Entertainment.component";

const Homepage = () => {
    return (
        <>
            <div className="container mx-auto px-36">
                <h1 className="text-2xl font-bold text-gray-800">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
        </>
    )
}

export default Homepage;