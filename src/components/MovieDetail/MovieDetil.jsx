import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncMoviesorShows, getSelectedMovieOrShow} from "../../features/Movies/MovieSlice";

const MovieDetil = () => {
    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow)
    console.log(data);
    useEffect(()=>{
        dispatch(fetchAsyncMoviesorShows(imdbID))
    },[dispatch, imdbID])
    return (
        <div>
            <h1>Movie details</h1>
        </div>
    );
};

export default MovieDetil;