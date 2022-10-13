import { createSlice } from "@reduxjs/toolkit"

export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        filteredMovies: [],
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
        },
        filterMovies: (state, action) => {
            const newArray = [...state.movies]
            if(action.payload.filter === "Touts les films") {
                newArray.slice(action.payload.firstIndex, action.payload.lastIndex)
                state.filteredMovies = newArray
            } else {
                const filteredArray = newArray.filter((movie) => {
                    return movie.category.includes(action.payload.filter)
                })
                filteredArray.slice(action.payload.firstIndex, action.payload.lastIndex)
                state.filteredMovies = filteredArray
            }
        }
    }
})

export const { 
    fetchStart, 
    fetchSuccess, 
    fetchError, 
    updateLike,
    updateDislike,
    deleteMovie,
    filterMovies
} = movieSlice.actions

export default movieSlice.reducer