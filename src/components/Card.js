import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { updateLike, updateDislike, deleteMovie } from "../redux/movieSlice"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Container = styled.div`
    position: relative;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 220px;
    height: 320px;
    border: 1px solid darkblue;
    margin: 10px 0;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
`
const Title = styled.p`
    font-weight: bold;
    text-align: center;
`
const Image = styled.img`
    width: 100%;
    height: 210px;
    object-fit: cover;
    border-radius: 10px;
`
const Category = styled.p`
    margin: 0px 0 10px 0;
    color: grey;
    text-align: center;
`
const LikeContainer = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
`
const ThumbContainer = styled.div`
    color: ${props => props.color};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
`

const RatingContainer = styled.div`
    position: absolute;
    top: -10px;
    left: -5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};
    color: white;
    font-weight: 900;
    font-size: 16px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
`
const DeleteIcon = styled(HighlightOffIcon)`
    position: absolute;
    top: 0;
    right: 0;
    color: red;
    font-size: 25px !important;
`
const Card = ({movie}) => {
    const dispatch = useDispatch()
    const [rating, setRating] = useState()
    const [ratingColor, setRatingColor] = useState()

    const handleLikeClick = (str) => { 
        if(str === "like") {
            dispatch(updateLike(movie.id))
        } else {
            dispatch(updateDislike(movie.id))
        }      
    }

    useEffect(() => { // Calcule movies rating
        let rate = ((movie.likes - movie.dislikes)/(movie.likes + movie.dislikes) * 10) * 10
        rate = Math.round(rate)
        rate = rate /10
        setRating(rate)
    }, [movie.likes, movie.dislikes])

    useEffect(() => {   //Setting the rate color
        if(rating <= 3) {
            setRatingColor("red")
        } else if (rating >= 7) {
            setRatingColor("green")
        } else {
            setRatingColor("orange")
        }
        
    }, [rating])

  return (
    <Container>
        <RatingContainer color= {ratingColor}> {rating} </RatingContainer>
        <DeleteIcon onClick={() => dispatch(deleteMovie(movie.id))}/>
        <Title>{movie.title}</Title>
        <Category>categorie: {movie.category}</Category>
        <Image  src= {movie.src} alt= {`image du film ${movie.title}`}/>
        <LikeContainer>
            <ThumbContainer 
                onClick={() => handleLikeClick("like")}
                color= "green"
            >
                <ThumbUpIcon/> {movie.likes}
            </ThumbContainer>
            <ThumbContainer 
                onClick={() => handleLikeClick("dislike")}
                color= "red"
            >
                {movie.dislikes} <ThumbDownIcon/>
            </ThumbContainer>
        </LikeContainer>
        {/* <DeleteButton>Supprimer</DeleteButton> */}
    </Container>
  )
}

export default Card