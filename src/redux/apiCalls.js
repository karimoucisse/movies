import { fetchStart, fetchSuccess, fetchError } from "./movieSlice";

export const getMovies = async (dispatch) => {
    dispatch(fetchStart())
    try {
        
    } catch (error) {
        dispatch(fetchError())
    }
}