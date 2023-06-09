import styles from "./MovieReference.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "./Movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function MovieReference() {
  const { id } = useParams();
  const [movieReference, setMovieReference] = useState([]);
  const url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovieReference(data.results));
  }, []);

  return (
    <div className={styles.referenceContainer}>
      {movieReference.map((movie) => (
        <div key={movie.id}>
          <div className={styles.referencePoster}>
            {movie.poster_path ? (
              <img
                src={`${url}${movie.poster_path}`}
                alt={movie.orginal_title}
              />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
