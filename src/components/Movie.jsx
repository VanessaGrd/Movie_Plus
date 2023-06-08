import styles from "./Movie.module.css";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  const url = "https://image.tmdb.org/t/p/original";

  if (movie)
    return (
      <div>
        <h2>{movie.original_title}</h2>
        {movie.poster_path ? (
        
          <img className={styles.picturePoster} src={`${url}${movie.poster_path}`} alt={movie.orginal_title} />
        ) : null}
        <h3>{movie.release_date}</h3>
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <button className={styles.buttonMovieCard} type="button">
            Détails
          </button>
        </Link>
      </div>
    );
  return null;
}
