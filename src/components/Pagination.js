import { useEffect, useState } from "react";
import styled from 'styled-components'
import Card from './Card'
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../redux/apiCalls";
import DirectionButtons from "./DirectionButtons";

const Container = styled.div`
    padding: 20px 7rem;
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const MoviesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: repeat(3, 1fr); */
    grid-column-gap: 30px;
    /* grid-row-gap: 30px; */
    @media (max-width: 1144px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
    @media (max-width: 870px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
    @media (max-width: 597px) {
        grid-template-columns: repeat(1, 1fr);
        /* grid-template-rows: repeat(2, 1fr); */
    }
    gap:40px; 
`
const Pagination = () => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies.movies)
    const filter = useSelector(state => state.filter.filter)
    const [filteredMovies, setFilteredMovies] = useState()
    const page = useSelector(state => state.pageNumber.page)
    const moviePerPage = useSelector(state => state.pageNumber.moviePerPage)

    
    useEffect(() => {
        getMovies(dispatch)
    }, [])

    useEffect(() => {
        const lastMovieIndex = page * moviePerPage
        const firstMovieIndex = lastMovieIndex - moviePerPage
        console.log(page, moviePerPage);
        // if the filter is == "Touts les films", then print all movies,
        // else print movies that correspond to the filter
        if(movies) {
            if(filter === "Touts les films") {
                const newMovies = movies
                setFilteredMovies(
                    newMovies.slice(firstMovieIndex, lastMovieIndex)
                ) 
            } else {
                const newMovies = movies.filter((movie) => {
                    return movie.category.includes(filter)
                })
                setFilteredMovies(
                    newMovies.slice(firstMovieIndex, lastMovieIndex)
                ) 
            }
        }
    }, [movies, filter, page, moviePerPage])

  return (
    <Container>
        <MoviesContainer>
            {filteredMovies?.map(movie => {
                return  <div key= {movie.id}><Card movie= {movie}/></div>
            })}  
        </MoviesContainer>
        <DirectionButtons/>
    </Container>
  )
}

export default Pagination