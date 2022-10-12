import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "./movieSlice"
import filterReducer from './filterSlice'

export default configureStore({
    reducer: {
        movies: movieReducer,
        filter: filterReducer,
    }
})