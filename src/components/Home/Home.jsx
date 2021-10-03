import React, {useEffect} from "react";
import MovieListing from "../MovieListnig/MovieListing";
import {useDispatch} from "react-redux";
import {fetchAsyncMovies} from "../../features/Movies/MovieSlice";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(fetchAsyncMovies())
    }, [dispatch]);
    return (
        <div className={"banner-name"}>
            <MovieListing/>
        </div>
    );
};

export default Home;