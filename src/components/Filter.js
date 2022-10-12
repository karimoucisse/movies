import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { updateFilter } from "../redux/filterSlice"

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
    const dispatch = useDispatch() 
    const [uniqueFilterArray, setUniqueFilterArray] = useState()
    const movies = useSelector(state => state.movies.movies)
    
    useEffect(() => {
        const categories = []
        for(let i= 0; i< movies.length; i++) {
            categories.push(movies[i].category)
        }
        const uniq = [...new Set(categories)]; // remove duplicates
        setUniqueFilterArray(uniq)
    }, [movies])

    const handleFiltersChange = (e) => {
        const value = e.target.value
        dispatch(updateFilter(value))
    }

    
  return (
    <Container>
        <div>
            <FilterTitle>Par categories: </FilterTitle>
            <Select onChange={handleFiltersChange}>
                <Option>Tout</Option>
                {uniqueFilterArray?.map((category, index) => {
                    return <Option key= {index} >{category}</Option>
                })}
            </Select> 
        </div>
    </Container>
  )
}

export default Filter