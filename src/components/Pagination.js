import { useEffect, useState } from "react";
import styled from 'styled-components'
import Card from './Card'
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../redux/apiCalls";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px 7rem;
    gap:40px;
`
const Pagination = () => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies.movies)
    const filter = useSelector(state => state.filter.filter)
    const [filteredMovies, setFilteredMovies] = useState()

    useEffect(() => {
        getMovies(dispatch)
    }, [])

    useEffect(() => {
        // if the filter is == "Touts les films", then print all movies,
        // else print movies that correspond to the filter
        if(filter === "Touts les films") {
            setFilteredMovies(
                movies
            ) 
        } else {
            setFilteredMovies(
                movies.filter((movie) => 
                    movie.category.includes(filter)
                )
            ) 
        }
    }, [movies, filter])

  return (
    <Container>
        {filteredMovies?.map(movie => {
            return  <div key= {movie.id}><Card movie= {movie}/></div>
        })}  
    </Container>
  )
}

export default Pagination