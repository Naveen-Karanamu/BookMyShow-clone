import axios from 'axios';
import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import MobileFooter from '../components/Footer/Mobile.Footer';
import ExtendedNav from '../components/Navbar/Extended.Navbar';
import StreamNavbar from '../components/Navbar/StreamNavbar.component';
import { MovieContext } from "../context/movie.context"

const StreamLayout = (props) => {
    const { id } = useParams();
    const { movie, setMovie } = useContext(MovieContext);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);
        };
        requestMovie();
        console.log(movie);
    }, [id]);
    return (
        <div>
            <StreamNavbar />
            <ExtendedNav />
            {props.children}
            <Footer />
            <MobileFooter />
        </div>
    )
}

export default StreamLayout;