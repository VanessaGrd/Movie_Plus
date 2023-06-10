import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import Navbar from "../components/Navbar";
import MovieReference from "../components/MovieReference";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function Details() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  const url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));
  }, []);
  if (!movieDetails) return null;

  return (
    <>
      <Navbar />
   
      <div className={styles.movieContainer}>
        <h1>{movieDetails.original_title}</h1>
        <div className={styles.movieDetailsContainer}>
        <div className={styles.poster}>
          {movieDetails.poster_path ? (
            <img
              className={styles.picturePoster}
              src={`${url}${movieDetails.poster_path}`}
              alt={movieDetails.orginal_title}
            />
          ) : null}
        </div>
        <p>{movieDetails.overview}</p>
        </div>
      </div>
      <MovieReference/>


    </>
  
  );
}
