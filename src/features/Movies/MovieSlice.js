import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import apiKey from "../../common/api/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
        `?apiKey=${apiKey}&s=${movieText}&type=movie`
    );
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async () => {
    const seriesText = "Friends";
    const response = await movieApi.get(
        `?apiKey=${apiKey}&s=${seriesText}&type=series`
    );
    return response.data;
});

export const fetchAsyncMoviesorShows = createAsyncThunk("shows/fetchAsyncMoviesorShows", async (id) => {
    const response = await movieApi.get(
        `?apiKey=${apiKey}&i=${id}&Plot=full`
    );
    return response.data;
});

const initialState = {
    movies: {},
    shows:{},
    selectedMovieOrShow:{}
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected");

        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, shows: payload};
        },
        [fetchAsyncMoviesorShows.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, selectedMovieOrShow: payload};
        },
    }
});

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;