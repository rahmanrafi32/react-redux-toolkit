import React, {useEffect} from "react";
import MovieListing from "../MovieListnig/MovieListing";
import {useDispatch} from "react-redux";
import {fetchAsyncMovies,fetchAsyncShows} from "../../features/Movies/MovieSlice";

const Home = () => {

    const dispatch = useDispatch();

    const movieText = 'Harry';
    const showText = 'Friends';
    useEffect(() => {
       dispatch(fetchAsyncMovies(movieText))
       dispatch(fetchAsyncShows(showText))
    }, [dispatch]);
    return (
        <div className={"banner-name"}>
            <MovieListing/>
        </div>
    );
};

export default Home;