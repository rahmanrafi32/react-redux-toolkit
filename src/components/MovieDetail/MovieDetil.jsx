import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncMoviesorShows, getSelectedMovieOrShow, removeSelectedMovieOrShow} from "../../features/Movies/MovieSlice";
import './MovieDetail.scss'
const MovieDetil = () => {

    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow)

    useEffect(()=>{
        dispatch(fetchAsyncMoviesorShows(imdbID))
        return ()=>{
            dispatch(removeSelectedMovieOrShow())
        }
    },[dispatch, imdbID])
    return (
        <div className={"movie-section"}>
            {Object.keys(data).length === 0 ? <div>...loading</div>:<>
                <div className="section-left">
                    <div className="movie-title">
                        {data.Title}
                    </div>
                    <div className="movie-rating">
                        <span>IMDB Rating:{data.imdbRating} </span>
                        <span>IMDB Rating:{data.imdbVotes} </span>
                        <span>IMDB Rating:{data.Runtime} </span>
                        <span>IMDB Rating:{data.Year} </span>
                    </div>
                    <div className="movie-plot">
                        {data.Plot}
                    </div>
                    <div className="movie-info">
                        <span>Director</span>
                        <span>{data.Director}</span>
                    </div>
                    <div className="movie-info">
                        <span>Stars</span>
                        <span>{data.Actor}</span>
                    </div>
                    <div className="movie-info">
                        <span>Genres</span>
                        <span>{data.Genre}</span>
                    </div>
                    <div className="movie-info">
                        <span>Languages</span>
                        <span>{data.Language}</span>
                    </div>
                    <div className="movie-info">
                        <span>Awards</span>
                        <span>{data.Award}</span>
                    </div>
                </div>
                <div className="section-right">
                    <img src={data.Poster} alt={data.Title}/>
                </div>
            </>}

        </div>
    );
};

export default MovieDetil;