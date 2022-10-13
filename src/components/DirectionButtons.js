import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux"
import { incrementPageNumber, decrementPageNumber } from '../redux/currentPageSlice';

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 10rem;
`
const Direction = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: ${props => props.allow === "true" ? "pointer" : "auto"};
    font-size: 19px;
    transition: all 0.2s ease;
    color: ${props => props.allow === "true" ? "black" : "darkgray"};
    &:hover {
        color: darkgray;
    }
`
const DirectionButtons = () => {

  const dispatch = useDispatch()
  const page = useSelector(state => state.pageNumber.page)
  const moviePerPage = useSelector(state => state.pageNumber.moviePerPage)
  const movies = useSelector(state => state.movies.movies)
  const finalPage = Math.ceil(movies.length / moviePerPage)

  const handleDirection = (direction) => {
    if(direction === "left" && page !== 1) {
      dispatch(decrementPageNumber())
    } else if (direction === "right" && page !== finalPage) {
      dispatch(incrementPageNumber())
    }
  }
  return (
    <Container>
        <Direction 
          onClick={() => handleDirection("left")} 
          allow= {page !== 1 ? "true" : "false"}
        >
          <KeyboardDoubleArrowLeftIcon/> précédent
        </Direction>
        <Direction 
          onClick={() => handleDirection("right")} 
          allow= {page !== finalPage ? "true" : "false"}
        >
          suivant <KeyboardDoubleArrowRightIcon/>
        </Direction>
    </Container>
  )
}

export default DirectionButtons