import { createSlice } from "@reduxjs/toolkit"

export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: null,
        pending: false,
        error: false
    },
    reducers: {
        fetchStart: (state) => {
            state.pending = true;
        },
        fetchSuccess: (state, action) => {
            state.pending = false;
            state.movies = action.payload;
        },
        fetchError: (state) => {
            state.pending = false;
            state.error = true;
        }
    }
})

export const { 
    fetchStart, 
    fetchSuccess, 
    fetchError 
} = movieSlice.actions

export default movieSlice.reducer