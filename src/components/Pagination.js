import { useEffect } from "react";
import styled from 'styled-components'
import Card from './Card'
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../redux/apiCalls";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px 7rem;
`
const Pagination = () => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies.movies)
    const filter = useSelector(state => state.filter.filter)

    useEffect(() => {
        getMovies(dispatch)
    }, [])

  return (
    <Container>
        {movies?.map(movie => {
            return  <div key= {movie.id}><Card movie= {movie}/></div>
        })}  
    </Container>
  )
}

export default Pagination