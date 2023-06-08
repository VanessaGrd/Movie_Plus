import styles from "./Movie.module.css";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  const url = "https://image.tmdb.org/t/p/original";

  if (movie)
    return (
      <div>
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          {movie.poster_path ? (
            <img
              className={styles.picturePoster}
              src={`${url}${movie.poster_path}`}
              alt={movie.orginal_title}
            />
          ) : null}
        </Link>{" "}
      </div>
    );
  return null;
}
