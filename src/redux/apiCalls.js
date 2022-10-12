import { fetchStart, fetchSuccess, fetchError } from "./movieSlice";
import {movies$} from "../movies"

export const getMovies = async (dispatch) => {
    dispatch(fetchStart())
    try {
        const data = await movies$
        dispatch(fetchSuccess(data))
    } catch (error) {
        dispatch(fetchError())
    }
}