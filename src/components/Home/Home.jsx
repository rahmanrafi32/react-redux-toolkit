import React, {useEffect} from "react";
import MovieListing from "../MovieListnig/MovieListing";
import axios from "axios";

const Home = () => {
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?apikey=${"e03518bd"}&s=${"Harry"}&type=movie`)
            .then(res => console.log("response", res))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className={"banner-name"}>
            <MovieListing/>
        </div>
    );
};

export default Home;