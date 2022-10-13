import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "./movieSlice"
import filterReducer from './filterSlice'
import currentPageReducer from "./currentPageSlice"

export default configureStore({
    reducer: {
        movies: movieReducer,
        filter: filterReducer,
        pageNumber: currentPageReducer,
    }
})