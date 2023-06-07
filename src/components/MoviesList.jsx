import { useEffect, useState } from "react";
import styles from "./MoviesList.module.css";
import Movie from "./Movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function MoviesList() {
  const [movie, setMovie] = useState([]);
  /*const [movieDate, setMovieDate] = useState([])*/

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data.results));
  }, []);
  {
    /*
    const handleMoviesByDate =()=>{
      useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=primary_release_date.asc`)
          .then((res) => res.json())
          .then((data) => setMovieDate(data.results));
      }, []); 
    */
  }

  return (
    <>
      <div>
        <h1>Movielist</h1>
        {movie.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
        {/*<button type="submit" onClick={handleClick}> CLik</button>*/}{" "}
      </div>
    </>
  );
}
