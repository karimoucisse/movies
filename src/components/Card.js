import styled from "styled-components"

const Container = styled.div`
    display: flex;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    height: 200px;
    border: 1px solid darkblue;
    margin: 40px 0;
    padding: 10px;
    border-radius: 10px;
`
const Title = styled.h3`
    font-weight: 700;
    text-align: center;
    margin-bottom: 5px;
`
const Category = styled.p`
    /* color: grey; */
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
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    color: green;
`
const Right = styled.div`
    color: red;
`
const Card = ({movie}) => {
  return (
    <Container>
        <Title>{movie.title}</Title>
        <Category>categorie: {movie.category}</Category>
        <LikeContainer>
            <Left>J'aime {movie.likes}</Left>
            <Right>{movie.dislikes} Je n'aime pas</Right>
        </LikeContainer>
        <DeleteButton>Supprimer</DeleteButton>
    </Container>
  )
}

export default Card