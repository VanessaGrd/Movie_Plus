import { useEffect, useState } from "react";
import Movie from "../components/Movie";

export default function MoviesList(){
    const [movies, setMovies] = useState([]);

    const getMovies = () =>{
        fetch("https://api.themoviedb.org/3/discover/movie")
    .then((res) => res.json())
.then((response) => setMovies(response));
  } ;
  useEffect(getMovies, []);
return(
    <>
    <h1>Movielist</h1>
   
<ul>
        <li> {movies.map((movie) =>(
            <Movie movie={movie} key={movie.id}/>))}
           </li>
    </ul>
    </>
)
}