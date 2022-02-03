import axios from "axios";
import React,{useContext} from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import Footer from "../components/Footer/Footer";
import ExtendedNav from "../components/Navbar/Extended.Navbar";
import StreamNavbar from "../components/Navbar/StreamNavbar.component";
import { MovieContext } from "../context/movie.context";

const PlaysSubLayout = (props) => {
    const{id}=useParams();
    
    const {movie, setMovie}=useContext(MovieContext);
    useEffect(()=>{
        const reqMovie=async ()=>{
            const getMovie=await axios.get(`/movie/${id}`)
            setMovie(getMovie.data)
        }
        reqMovie();
        
        console.log(movie);
    },[id])

    
    return (<>
        <StreamNavbar />
        <ExtendedNav />
        {props.children}
        <Footer />
    </>
    )
}

export default PlaysSubLayout;