import style from "styled-components"
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

const Title = style.h1`
  color: darkblue; 
  text-align: center;
`

function App() {
  
  return (
    <>
      <Title>Movies</Title>
      <Filter/>
      <Pagination/>
    </>
  );
}

export default App;
