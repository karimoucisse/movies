import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { updateLike, updateDislike, deleteMovie } from "../redux/movieSlice"

const Container = styled.div`
    position: relative;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 220px;
    height: 300px;
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
const DeleteButton = styled.button`
    width: 100px;
    cursor: pointer;
    margin: 0 auto;
    padding: 5px 20px;
    background-color: red;
    color: white;
    border: none;
    text-align: center;
`
const LikeContainer = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    color: green;
    cursor: pointer;
`
const Right = styled.div`
    color: red;
    cursor: pointer;
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
        console.log(rating);
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
    <Container onClick={() => dispatch(deleteMovie(movie.id))}>
        <RatingContainer color= {ratingColor}> {rating} </RatingContainer>
        <Title>{movie.title}</Title>
        <Category>categorie: {movie.category}</Category>
        <Image  src= {movie.src} alt= {`image du film ${movie.title}`}/>
        <LikeContainer>
            <Left onClick={() => handleLikeClick("like")}>J'aime {movie.likes}</Left>
            <Right onClick={() => handleLikeClick("dislike")}>{movie.dislikes} Je n'aime pas</Right>
        </LikeContainer>
        {/* <DeleteButton>Supprimer</DeleteButton> */}
    </Container>
  )
}

export default Card