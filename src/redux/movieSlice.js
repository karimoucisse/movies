import { createSlice } from "@reduxjs/toolkit"

export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
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
        },
        updateLike: (state, action) => {
            const index = state.movies.findIndex(movie => 
                movie.id === action.payload
            ); // finding the index of the array we want to update
            const newArray = [...state.movies]; //making a new array
            newArray[index].likes += 1 //changing value in the new array
            state.movies = newArray 
        },
        updateDislike: (state, action) => {
            const index = state.movies.findIndex(movie => 
                movie.id === action.payload
            ); // finding the index of the array we want to update
            const newArray = [...state.movies]; //making a new array
            newArray[index].dislikes += 1 //changing value in the new array
            state.movies = newArray 
        },
        deleteMovie: (state, action) => {
            const index = state.movies.findIndex(movie => 
                movie.id === action.payload
            ); // finding the index of the array we want to update
            const newArray = [...state.movies];
            newArray.splice(index, 1) // delete one movie
            state.movies = newArray 
        }
    }
})

export const { 
    fetchStart, 
    fetchSuccess, 
    fetchError, 
    updateLike,
    updateDislike,
    deleteMovie
} = movieSlice.actions

export default movieSlice.reducer