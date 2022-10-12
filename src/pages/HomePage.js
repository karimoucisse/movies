import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../redux/apiCalls";

function App() {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies.movies)
  
  useEffect(() => {
    getMovies(dispatch)
  }, [])

  // console.log("movies" + movies[0].title);
  return (
    <div>
      {movies?.map(movie => {
        return  <h1 key= {movie.id}>{movie.title}</h1>
      })}
      
    </div>
  );
}

export default App;
