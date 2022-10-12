import style from "styled-components"
import Pagination from "../components/Pagination";

const Title = style.h1`
  color: darkblue; 
  text-align: center;
`

function App() {
  
  return (
    <div>
      <Title>Movies</Title>
      <Pagination/>
    </div>
  );
}

export default App;
