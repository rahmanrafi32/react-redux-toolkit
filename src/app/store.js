import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "../features/Movies/MovieSlice";

export const store = configureStore({
    reducer: {movies: movieReducer}
});
