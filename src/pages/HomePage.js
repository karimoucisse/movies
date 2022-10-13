import styled from "styled-components"
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

const Title = styled.h1`
  margin-top: 20px;
  color: darkblue; 
  text-align: center;
`

function App() {
  
  return (
    <>
      <Title>Film à voir</Title>
      <Filter/>
      <Pagination/>
    </>
  );
}

export default App;
