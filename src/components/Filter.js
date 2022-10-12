import styled from "styled-components"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const Container = styled.div`
    width: 100%;
    height: 60px;
    padding: 20px 7rem;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 8px;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    border: 0.5px solid ;
`
const Option = styled.option`
    font-size: 18px;
`
const Filter = () => {
    const [filter, setFilter] = useState([])
    const movies = useSelector(state => state.movies.movies)
    
    useEffect(() => {
        const categories = []
        movies.map(movie => {
            categories.push(movie.category)
            //push all category in the array categories
        })
        const uniq = [...new Set(categories)]; // remove duplicates
        setFilter(uniq)
    }, [movies])
    const handleFiltersChange = () => {

    }

    
  return (
    <Container>
        <div>
            <FilterTitle>Par categories: </FilterTitle>
            <Select onChange={handleFiltersChange}>
                <Option>Tout</Option>
                {filter.map(category => {
                    return <Option>{category}</Option>
                })}
            </Select> 
        </div>
    </Container>
  )
}

export default Filter