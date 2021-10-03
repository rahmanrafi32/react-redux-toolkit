import React, {useEffect} from "react";
import MovieListing from "../MovieListnig/MovieListing";
import axios from "axios";
import {useDispatch} from "react-redux";
import {addMovies} from "../../features/Movies/MovieSlice";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?apikey=${"e03518bd"}&s=${"Harry"}&type=movie`)
            .then(res => dispatch(addMovies(res.data)))
            .catch(err => console.log(err));
    }, [dispatch]);
    return (
        <div className={"banner-name"}>
            <MovieListing/>
        </div>
    );
};

export default Home;