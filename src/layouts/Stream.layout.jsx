import axios from 'axios';
import React,{useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom';
import StreamNavbar from '../components/Navbar/StreamNavbar.component';
import {MovieContext} from "../context/movie.context"

const StreamLayout = (props) => {
    const {id}=useParams();
    const {movie, setMovie} = useContext(MovieContext);

    useEffect(()=>{
        const requestMovie = async ()=>{
            const getMovieData=await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data); 
        };
        requestMovie();
    },[]);
    return (
        <div>
            <StreamNavbar />
        {props.children}
        </div>
    )
}

export default StreamLayout;